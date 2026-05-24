/**
 * Mapa interativo da Rota Transcapixaba — Leaflet + OpenStreetMap.
 * Gratuito, sem chave de API, sem billing.
 *
 * Preencha lat/lng de cada ponto em ROUTE_POINTS abaixo.
 * Pontos com lat/lng nulos são ignorados na renderização.
 */

const ROUTE_POINTS = [
  { id: 'LARGADA', label: 'LARGADA', title: 'Vila Pereira, Nanuque, MG',      description: 'Ponto de partida da travessia.',        lat: -17.98139, lng: -40.76023, type: 'start' },
  { id: 'TP1',     label: 'TP1',     title: 'Adilson da Pedra',               description: 'Validação por placa.',                   lat: -18.04621, lng: -40.82151, type: 'placa' },
  { id: 'TP2',     label: 'TP2',     title: 'Pedra da Viúva',                 description: 'Cilindro de validação · raio 1.500 m.',  lat: -18.17632, lng: -40.71922, type: 'cylinder', radius: 1500 },
  { id: 'TP3',     label: 'TP3',     title: 'Cachoeira do Denzol',            description: 'Cilindro de validação · raio 3.500 m.',  lat: -18.50679, lng: -40.79628, type: 'cylinder', radius: 3500 },
  { id: 'TP4',     label: 'TP4',     title: 'Três Pontões de Águia Branca',   description: 'Cilindro de validação · raio 7.000 m.',  lat: -18.96308, lng: -40.65023, type: 'cylinder', radius: 7000 },
  { id: 'TP5',     label: 'TP5',     title: 'Pouso Oficial de Pancas',        description: 'Validação por placa.',                   lat: -19.22525, lng: -40.84313, type: 'placa' },
  { id: 'TP6',     label: 'TP6',     title: 'Rampa Pedra da Colina',          description: 'Validação por placa.',                   lat: -19.22906, lng: -40.86611, type: 'placa' },
  { id: 'TP7',     label: 'TP7',     title: 'Rampa do Monjolo',               description: 'Validação por placa.',                   lat: -19.63126, lng: -40.96824, type: 'placa' },
  { id: 'TP8',     label: 'TP8',     title: 'Cinco Pontões',                  description: 'Validação por placa / self.',            lat: -19.80430, lng: -40.99173, type: 'placa' },
  { id: 'TP9',     label: 'TP9',     title: 'Três Pontões de Afonso Cláudio', description: 'Cilindro de validação · raio 3.000 m.',  lat: -20.07567, lng: -41.04475, type: 'cylinder', radius: 3000 },
  { id: 'TP10',    label: 'TP10',    title: 'Forno Grande',                   description: 'Validação por placa.',                   lat: -20.50167, lng: -41.11778, type: 'placa' },
  { id: 'TP11',    label: 'TP11',    title: 'Fazenda da Mata',                description: 'Validação por placa.',                   lat: -20.63583, lng: -41.38444, type: 'placa' },
  { id: 'TP12',    label: 'TP12',    title: 'Pontões de Mimoso do Sul',       description: 'Cilindro de validação · raio 3.500 m.',  lat: -20.94000, lng: -41.55528, type: 'cylinder', radius: 3500 },
  { id: 'CHEGADA', label: 'CHEGADA', title: 'Bom Jesus do Itabapoana',        description: 'Pouso final da travessia.',              lat: -21.13734, lng: -41.66123, type: 'finish' },
];

(function initRouteMap() {
  const container = document.getElementById('route-map');
  if (!container || typeof L === 'undefined') return;

  const map = L.map(container, { zoomControl: true }).setView([-20.0, -40.7], 7);

  // Tile dark (CartoDB Dark Matter — gratuito, sem chave)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  const validPoints = ROUTE_POINTS.filter(p => p.lat != null && p.lng != null);

  // Linha conectando os pontos em ordem
  if (validPoints.length >= 2) {
    const latlngs = validPoints.map(p => [p.lat, p.lng]);
    L.polyline(latlngs, {
      color: '#ffd400',
      weight: 3,
      opacity: 0.85,
      dashArray: '6 8',
      lineCap: 'round',
    }).addTo(map);
  }

  // Cilindros (desenhados antes dos markers para ficarem abaixo)
  validPoints.forEach(point => {
    if (point.type === 'cylinder' && point.radius) {
      L.circle([point.lat, point.lng], {
        radius: point.radius,
        color: '#ffd400',
        weight: 1.5,
        opacity: 0.9,
        fillColor: '#ff8a3c',
        fillOpacity: 0.14,
      }).addTo(map).bindPopup(popupHtml(point));
    }
  });

  // Marcadores
  validPoints.forEach(point => {
    L.marker([point.lat, point.lng], { icon: makeIcon(point) })
      .addTo(map)
      .bindPopup(popupHtml(point));
  });

  // Auto-zoom para enquadrar tudo
  if (validPoints.length >= 1) {
    const bounds = L.latLngBounds(validPoints.map(p => [p.lat, p.lng]));
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
  }

  function makeIcon(point) {
    const palette = {
      start:    { bg: '#ff5a1f', size: 36, text: 'S' },
      finish:   { bg: '#2bb673', size: 36, text: 'F' },
      cylinder: { bg: '#ffd400', size: 30, text: point.label.replace('TP', '') },
      placa:    { bg: '#ffd400', size: 28, text: point.label.replace('TP', '') },
    };
    const c = palette[point.type] || palette.placa;
    const fontSize = c.size <= 28 ? 11 : c.size <= 30 ? 12 : 13;
    return L.divIcon({
      className: 'route-pin',
      html: `<div style="
        width:${c.size}px;height:${c.size}px;
        background:${c.bg};
        border:2px solid #fff;
        border-radius:50%;
        box-shadow:0 2px 8px rgba(0,0,0,.6);
        display:flex;align-items:center;justify-content:center;
        color:#0a1f3d;font-family:Anton,sans-serif;
        font-size:${fontSize}px;font-weight:700;letter-spacing:.5px;
        ">${c.text}</div>`,
      iconSize: [c.size, c.size],
      iconAnchor: [c.size / 2, c.size / 2],
      popupAnchor: [0, -c.size / 2],
    });
  }

  function popupHtml(point) {
    const radiusText = point.radius ? ` &ndash; Raio ${point.radius / 1000} km` : '';
    return `
      <div style="font-family: Inter, system-ui, sans-serif; color: #0a1f3d; max-width: 260px; padding: 2px">
        <div style="font-size: 10px; letter-spacing: 1.5px; color: #ff5a1f; font-weight: 700; text-transform: uppercase">${point.label}</div>
        <div style="font-size: 15px; font-weight: 700; margin: 2px 0 4px">${point.title}${radiusText}</div>
        <div style="font-size: 13px; color: #555; line-height: 1.4">${point.description || ''}</div>
      </div>
    `;
  }
})();
