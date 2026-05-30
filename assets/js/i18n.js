// i18n — PT/EN toggle persistido em localStorage
// Uso: <span data-i18n="key">Texto PT padrão</span>
// Para atributos: <input data-i18n-attr="placeholder:key.placeholder">

const TRANSLATIONS = {
  pt: {
    // ===== NAV =====
    "nav.competicao": "A Competição",
    "nav.faq": "Perguntas Frequentes",
    "nav.rota": "Rota 2026",
    "nav.regulamento": "Regulamento",
    "nav.galeria": "Galeria",
    "nav.fotos2023": "Fotos 2023",
    "nav.fotos2024": "Fotos 2024",
    "nav.fotos2025": "Fotos 2025",
    "nav.aplicacoes": "Aplicações",
    "nav.resultados": "Resultados",
    "nav.resultados2023": "Resultados 2023",
    "nav.resultados2024": "Resultados 2024",
    "nav.resultados2025": "Resultados 2025",
    "nav.inscricoes": "Inscrições",
    "nav.openMenu": "Abrir menu",

    // ===== FOOTER =====
    "footer.desc": "A maior competição de Hike and Fly do Brasil. Inspirada no Red&nbsp;Bull X‑Alps e adaptada às montanhas do Espírito Santo.",
    "footer.evento": "EVENTO",
    "footer.competidor": "COMPETIDOR",
    "footer.contato": "CONTATO",
    "footer.regulamento": "Regulamento",
    "footer.faq": "FAQ",
    "footer.copyright": "© 2026 Transcapixaba Hike and Fly. Todos os direitos reservados.",
    "footer.dev": "Desenvolvido por Guilherme Borborema",

    // ===== HOME =====
    "home.title": "Transcapixaba — Hike and Fly | Maior travessia de parapente e caminhada do Brasil",
    "home.hero.date": "EDIÇÃO 2026 · 13 — 25 JULHO",
    "home.hero.sub": "A maior competição de Hike and Fly das Américas. Inspirada no Red&nbsp;Bull X‑Alps, cruzando as montanhas do Espírito Santo do interior ao litoral.",
    "home.hero.cta": "Rota 2026 →",
    "home.hero.stat1": "km de travessia",
    "home.hero.stat2": "atletas",
    "home.hero.stat3": "dias de prova",
    "home.hero.stat4": "países representados",
    "home.countdown.eyebrow": "Próxima edição",
    "home.countdown.title": "Largada em…",
    "home.countdown.days": "Dias",
    "home.countdown.hours": "Horas",
    "home.countdown.min": "Min",
    "home.countdown.sec": "Seg",
    "home.countdown.cta": "Inscreva-se",
    "home.about.eyebrow": "A TRANSCAPIXABA H&F",
    "home.about.title": "Caminhar. Voar. Repetir.",
    "home.about.desc": "A Transcapixaba H&amp;F é a travessia do estado do Espírito Santo caminhando e voando. Os atletas devem percorrer uma rota pré-definida, com Turnpoints que podem ser no formato de raio ou placa. É uma corrida por terra e ar e ganha o atleta que cruzar a linha de chegada primeiro, tendo passado por todos os Turnpoints.",
    "home.f1.title": "Travessia épica",
    "home.f1.desc": "Aproximadamente 600 km cruzando montanhas, vales e passando por 16 cidades do Espírito Santo.",
    "home.f2.title": "Cada atleta possui uma equipe",
    "home.f2.desc": "Cada atleta deve estar acompanhado por uma equipe de suporte com no mínimo uma pessoa em um carro.",
    "home.f3.title": "Pilotos do mundo",
    "home.f3.desc": "Desde a primeira edição, a Transcapixaba se tornou internacional e recebe atletas de todo o mundo.",
    "home.f4.title": "Inspiração no Red Bull X-Alps",
    "home.f4.desc": "Foi a primeira competição de travessia realizada no Brasil, inspirada na maior competição do mundo.",
    "home.jornada.eyebrow": "A JORNADA 2025",
    "home.carousel.viewGallery": "Ver galeria completa →",
    "home.podio.eyebrow": "PÓDIO 2025",
    "home.podio.title": "Os cinco que voaram mais rápido",
    "home.podio.desc": "Em 16 a 20 de julho de 2025, 22 atletas cruzaram 125,8 km de Venda Nova do Imigrante até a Ponte de Itapaboana.",
    "home.podio.time": "Tempo",
    "home.podio.dist": "Distância",
    "home.podio.full": "Ver classificação completa →",
    "home.rota.eyebrow": "ROTA 2026",
    "home.rota.title": "Travessia do norte ao sul",
    "home.rota.desc": "De Vila Pereira (Nanuque/MG) a Bom Jesus do Itabapoana (RJ), cruzando o Espírito Santo. Doze turnpoints. Doze dias de janela.",
    "home.map.hint": "Mapa interativo · Clique em um marcador ou cilindro para detalhes.",
    "home.map.full": "Ver página completa da rota →",
    "home.galeria.eyebrow": "GALERIA",
    "home.galeria.title": "Imagens da prova",
    "home.galeria.desc": "Decolagens, térmicas, pouso na grama, equipes em ação. Um pedaço da Transcapixaba em cada quadro.",
    "home.sponsors.eyebrow": "QUEM APOIA",
    "home.sponsors.title": "Patrocinadores",
    "home.prefeituras.eyebrow": "PREFEITURAS PARCEIRAS",
    "home.prefeituras.title": "Apoio municipal",

    // ===== COMPETIÇÃO =====
    "comp.head.eyebrow": "A COMPETIÇÃO",
    "comp.head.title": "A Transcapixaba",
    "comp.head.sub": "A primeira travessia de Hike and Fly do estado do Espírito Santo. Inspirada no Red Bull X-Alps, adaptada às montanhas capixabas — e aberta ao mundo.",
    "comp.story.title": "De uma rota de Lucas Porto à maior competição de travessia das Américas",
    "comp.story.p1": "A Transcapixaba H&amp;F é a travessia do estado do Espírito Santo caminhando e voando. Em 2022, uma rota foi aberta pelo atleta capixaba <strong>Lucas Porto</strong>, que cruzou o estado, de norte a sul, caminhando e voando, por 665 km. Ao seu lado estavam <strong>John e Chris Boettcher</strong> e, no suporte da equipe, <strong>Micheli Sossai</strong>.",
    "comp.story.p2": "Percebendo o potencial da rota, Lucas e Micheli resolveram transformá-la em uma competição — e assim nasceu a <strong>Transcapixaba H&amp;F</strong>. Diante da complexidade do evento, eles dividiram o projeto em três partes iniciais. Em 2023 aconteceu a primeira edição, com largada em Ecoporanga e chegada em Pancas. A segunda edição aconteceu em 2024, com largada em Pancas e chegada em Venda Nova do Imigrante. A terceira edição contemplou a parte final do projeto, com largada em Venda Nova do Imigrante e chegada em Mimoso do Sul, às margens do Rio Itabapoana.",
    "comp.story.p3": "Agora, em 2026, o projeto se concretiza com a realização da <strong>Full Edition</strong>, que terá a rota completa desde a divisa norte até a divisa sul do Espírito Santo.",
    "comp.story.p4": "A Transcapixaba H&amp;F surgiu de um sonho de Lucas, que ganhou força com a dedicação de Micheli e que hoje é realidade graças à participação dos atletas que amam o Hike and Fly e aceitaram o desafio desde a primeira edição. Hoje é a <strong>maior competição de travessia de H&amp;F das Américas</strong>, recebe atletas de todo o mundo, tem a chancela de evento <strong>FAI2</strong> e <strong>CBVL</strong>, pontuando nos rankings FAI e CBVL.",
    "comp.story.p5": "A travessia vai muito além da competição: é um desafio pessoal que leva os atletas a evoluírem em um terreno técnico e cheio de surpresas pelo caminho. Em cada cidade, cada comunidade e cada vilarejo, as equipes encontram a receptividade e o calor do povo capixaba, que os acolhe e torce para que o desafio seja concluído.",
    "comp.editions": "EDIÇÕES",
    "comp.ed2023.date": "2023 · 1ª EDIÇÃO",
    "comp.ed2023.title": "Ecoporanga → Pancas",
    "comp.ed2023.desc": "Primeira parte do projeto. Largada em Ecoporanga, no noroeste capixaba, e chegada em Pancas — rota inaugural da competição.",
    "comp.ed2024.date": "2024 · 2ª EDIÇÃO",
    "comp.ed2024.title": "Pancas → Venda Nova do Imigrante",
    "comp.ed2024.desc": "Segunda parte do projeto, cruzando o centro do estado até Venda Nova do Imigrante.",
    "comp.ed2025.date": "2025 · 3ª EDIÇÃO",
    "comp.ed2025.title": "Venda Nova do Imigrante → Mimoso do Sul",
    "comp.ed2025.desc": "Parte final do projeto inicial, com chegada às margens do Rio Itabapoana. 22 atletas e 4 países representados.",
    "comp.ed2026.date": "2026 · FULL EDITION",
    "comp.ed2026.title": "Divisa norte → divisa sul · ~600 km",
    "comp.ed2026.desc": "A rota completa pela primeira vez. 13 a 25 de julho, 12 dias de janela, atletas de 7 países. Evento com chancela FAI2 e CBVL.",

    // ===== INSCRIÇÕES =====
    "insc.head.eyebrow": "EDIÇÃO 2026 · INSCRIÇÕES ABERTAS",
    "insc.head.title": "Inscreva-se",
    "insc.head.sub": "30 vagas. Cinco dias. Uma travessia. Preencha o formulário oficial no Google Forms e nossa equipe entra em contato em até 48 horas com os próximos passos.",
    "insc.form.eyebrow": "FORMULÁRIO OFICIAL",
    "insc.form.title": "Faça sua inscrição",
    "insc.form.desc": "O formulário é hospedado no Google Forms. Tenha em mãos seus dados de piloto (CIVL ID, modelo e categoria da vela, horas de voo em montanha) e uma breve descrição da sua experiência.",
    "insc.form.cta": "Abrir formulário no Google Forms →",
    "insc.form.note": "Após análise do currículo, a organização confirma a vaga e envia instruções de pagamento.",
    "insc.incluso.eyebrow": "O QUE ESTÁ INCLUSO",
    "insc.incluso.1": "Rastreador GPS oficial",
    "insc.incluso.2": "Kit do atleta (camisa, mochila)",
    "insc.incluso.3": "Hospedagem pré e pós-prova",
    "insc.incluso.4": "Seguro durante a competição",
    "insc.incluso.5": "Briefing técnico e meteo",
    "insc.incluso.6": "Cobertura ao vivo e fotos",
    "insc.prazo.title": "PRAZO",
    "insc.prazo.desc": "Inscrições abertas até <strong>15 de fevereiro de 2026</strong> ou enquanto houver vagas.",
    "insc.duvidas.eyebrow": "DÚVIDAS?",
    "insc.duvidas.title": "Fale direto com a organização",
    "insc.duvidas.wpp": "WhatsApp +55 28 99991-0919",
    "insc.duvidas.insta": "Direct no Instagram",

    // ===== ROTA =====
    "rota.head.eyebrow": "EDIÇÃO 2026",
    "rota.head.title": "Rota 2026",
    "rota.head.sub": "De Vila Pereira (Nanuque/MG) a Bom Jesus do Itabapoana (RJ), cruzando o Espírito Santo de norte a sul. Doze turnpoints. Cinco dias de janela.",
    "rota.map.hint": "Mapa interativo · Linha da rota carregada do KML oficial. Clique em um marcador ou cilindro para detalhes.",
    "rota.tps.eyebrow": "TURNPOINTS",
    "rota.tps.title": "Largada, doze turnpoints e chegada",
    "rota.tps.desc": "Cada turnpoint precisa ser tocado em ordem. Entre eles, o piloto decide o melhor caminho — pé no chão ou pano no ar. Cilindros de validação têm o raio indicado.",
    "rota.cp1.meta": "Largada · Nanuque/MG",
    "rota.cp2.meta": "TP1 · Placa",
    "rota.cp3.meta": "TP2 · Cilindro 1,5 km",
    "rota.cp4.meta": "TP3 · Cilindro 3,5 km",
    "rota.cp5.meta": "TP4 · Cilindro 7 km",
    "rota.cp6.meta": "TP5 · Placa",
    "rota.cp7.meta": "TP6 · Placa",
    "rota.cp8.meta": "TP7 · Placa",
    "rota.cp9.meta": "TP8 · Placa / Self",
    "rota.cp10.meta": "TP9 · Cilindro 3 km",
    "rota.cp11.meta": "TP10 · Placa",
    "rota.cp12.meta": "TP11 · Placa",
    "rota.cp13.meta": "TP12 · Cilindro 3,5 km",
    "rota.cp14.meta": "Chegada · RJ",

    // ===== REGULAMENTO =====
    "reg.head.eyebrow": "REGRAS",
    "reg.head.title": "Regulamento",
    "reg.head.sub": "As seis regras-mãe e o documento completo da edição 2026.",
    "reg.rules.eyebrow": "REGULAMENTO EM 6 PONTOS",
    "reg.rules.title": "As regras-mãe",
    "reg.r1.title": "1. Turnpoints em ordem",
    "reg.r1.desc": "Cada turnpoint deve ser alcançado a pé (exceto os aéreos), com assinatura na placa ou validação por rastreador.",
    "reg.r2.title": "2. Janela de 13 dias",
    "reg.r2.desc": "Da largada (14/07/2026) à chegada (25/07/2026). Vence quem cruzar o pórtico primeiro; se ninguém terminar, vence quem percorrer mais distância.",
    "reg.r3.title": "3. Assistente obrigatório",
    "reg.r3.desc": "Cada piloto precisa de pelo menos um assistente com carro de apoio, contactável 24h. Um assistente apoia apenas um piloto.",
    "reg.r4.title": "4. A pé ou voando",
    "reg.r4.desc": "Qualquer outra forma de locomoção é proibida: nada de natação, escalada, bicicleta ou carro. Só caminhos autorizados a pedestres.",
    "reg.r5.title": "5. Janela de voo",
    "reg.r5.desc": "Operação entre 6h e o pôr do sol. Parada obrigatória das 19h às 6h, com pilotos imóveis num raio de 200 m do último ponto.",
    "reg.r6.title": "6. Equipamento certificado",
    "reg.r6.desc": "Parapente homologado, selete com protetor, reserva, capacete, rádio, GPS, rastreador e kit de primeiros socorros — sempre em posse do piloto.",
    "reg.doc.eyebrow": "DOCUMENTO OFICIAL",
    "reg.doc.title": "Regulamento completo",

    // Generic
    "common.langPT": "PT",
    "common.langEN": "EN",
  },

  en: {
    // ===== NAV =====
    "nav.competicao": "The Race",
    "nav.faq": "FAQ",
    "nav.rota": "2026 Route",
    "nav.regulamento": "Rules",
    "nav.galeria": "Gallery",
    "nav.fotos2023": "Photos 2023",
    "nav.fotos2024": "Photos 2024",
    "nav.fotos2025": "Photos 2025",
    "nav.aplicacoes": "Applications",
    "nav.resultados": "Results",
    "nav.resultados2023": "Results 2023",
    "nav.resultados2024": "Results 2024",
    "nav.resultados2025": "Results 2025",
    "nav.inscricoes": "Register",
    "nav.openMenu": "Open menu",

    // ===== FOOTER =====
    "footer.desc": "Brazil's largest Hike and Fly competition. Inspired by Red&nbsp;Bull X‑Alps, adapted to the mountains of Espírito Santo.",
    "footer.evento": "EVENT",
    "footer.competidor": "COMPETITOR",
    "footer.contato": "CONTACT",
    "footer.regulamento": "Rules",
    "footer.faq": "FAQ",
    "footer.copyright": "© 2026 Transcapixaba Hike and Fly. All rights reserved.",
    "footer.dev": "Developed by Guilherme Borborema",

    // ===== HOME =====
    "home.title": "Transcapixaba — Hike and Fly | Largest paragliding and trekking traverse in Brazil",
    "home.hero.date": "2026 EDITION · JULY 13 — 25",
    "home.hero.sub": "The largest Hike and Fly competition in the Americas. Inspired by Red&nbsp;Bull X‑Alps, crossing the mountains of Espírito Santo from inland to the coast.",
    "home.hero.cta": "2026 Route →",
    "home.hero.stat1": "km traverse",
    "home.hero.stat2": "athletes",
    "home.hero.stat3": "race days",
    "home.hero.stat4": "countries represented",
    "home.countdown.eyebrow": "Next edition",
    "home.countdown.title": "Race starts in…",
    "home.countdown.days": "Days",
    "home.countdown.hours": "Hours",
    "home.countdown.min": "Min",
    "home.countdown.sec": "Sec",
    "home.countdown.cta": "Register",
    "home.about.eyebrow": "ABOUT TRANSCAPIXABA H&F",
    "home.about.title": "Hike. Fly. Repeat.",
    "home.about.desc": "Transcapixaba H&amp;F is a hike-and-fly traverse across the state of Espírito Santo. Athletes follow a predefined route with turnpoints that may be a radius or a sign. It's a race by land and air — the athlete who crosses the finish line first, having passed every turnpoint, wins.",
    "home.f1.title": "Epic traverse",
    "home.f1.desc": "Roughly 600 km across mountains, valleys and 16 cities in Espírito Santo.",
    "home.f2.title": "Every athlete has a team",
    "home.f2.desc": "Every athlete must be accompanied by a support team of at least one person in a vehicle.",
    "home.f3.title": "Pilots from around the world",
    "home.f3.desc": "Since its first edition, Transcapixaba has become international, welcoming athletes from all over the world.",
    "home.f4.title": "Inspired by Red Bull X-Alps",
    "home.f4.desc": "The first traverse competition held in Brazil, inspired by the biggest race of its kind in the world.",
    "home.jornada.eyebrow": "THE 2025 JOURNEY",
    "home.carousel.viewGallery": "View full gallery →",
    "home.podio.eyebrow": "2025 PODIUM",
    "home.podio.title": "The five who flew fastest",
    "home.podio.desc": "From July 16 to 20, 2025, 22 athletes covered 125.8 km from Venda Nova do Imigrante to the Itapaboana Bridge.",
    "home.podio.time": "Time",
    "home.podio.dist": "Distance",
    "home.podio.full": "View full standings →",
    "home.rota.eyebrow": "2026 ROUTE",
    "home.rota.title": "Traverse from north to south",
    "home.rota.desc": "From Vila Pereira (Nanuque/MG) to Bom Jesus do Itabapoana (RJ), crossing Espírito Santo. Twelve turnpoints. Twelve-day window.",
    "home.map.hint": "Interactive map · Click on a marker or cylinder for details.",
    "home.map.full": "View the full route page →",
    "home.galeria.eyebrow": "GALLERY",
    "home.galeria.title": "Race images",
    "home.galeria.desc": "Take-offs, thermals, grass landings, teams in action. A slice of Transcapixaba in every frame.",
    "home.sponsors.eyebrow": "OUR SUPPORTERS",
    "home.sponsors.title": "Sponsors",
    "home.prefeituras.eyebrow": "CITY HALL PARTNERS",
    "home.prefeituras.title": "Municipal support",

    // ===== COMPETIÇÃO =====
    "comp.head.eyebrow": "THE RACE",
    "comp.head.title": "Transcapixaba",
    "comp.head.sub": "The first Hike and Fly traverse of Espírito Santo. Inspired by Red Bull X-Alps, adapted to the capixaba mountains — and open to the world.",
    "comp.story.title": "From a Lucas Porto route to the largest traverse competition in the Americas",
    "comp.story.p1": "Transcapixaba H&amp;F is the traverse of Espírito Santo on foot and by paraglider. In 2022, a route was opened by capixaba athlete <strong>Lucas Porto</strong>, who crossed the state from north to south on foot and flying, covering 665 km. Alongside him were <strong>John and Chris Boettcher</strong>, with <strong>Micheli Sossai</strong> supporting the team.",
    "comp.story.p2": "Seeing the potential of the route, Lucas and Micheli decided to turn it into a competition — and that's how <strong>Transcapixaba H&amp;F</strong> was born. Given the complexity, they split the project into three initial stages. The first edition took place in 2023, with the start in Ecoporanga and finish in Pancas. The second edition happened in 2024, starting in Pancas and finishing in Venda Nova do Imigrante. The third edition covered the final segment, starting in Venda Nova do Imigrante and finishing in Mimoso do Sul, on the banks of the Itabapoana River.",
    "comp.story.p3": "Now, in 2026, the project comes to fruition with the <strong>Full Edition</strong>, featuring the complete route from the northern to the southern border of Espírito Santo.",
    "comp.story.p4": "Transcapixaba H&amp;F was born from Lucas's dream, gained strength through Micheli's dedication, and today is a reality thanks to the athletes who love Hike and Fly and have embraced the challenge since the very first edition. It is now the <strong>largest H&amp;F traverse competition in the Americas</strong>, hosting athletes from around the world, with <strong>FAI2</strong> and <strong>CBVL</strong> sanctioning, scoring on both the FAI and CBVL rankings.",
    "comp.story.p5": "The traverse is much more than a race: it's a personal challenge that pushes athletes to evolve over technical terrain full of surprises. In every city, community and village, teams meet the warmth and welcome of the capixaba people, who cheer them on to the finish.",
    "comp.editions": "EDITIONS",
    "comp.ed2023.date": "2023 · 1ST EDITION",
    "comp.ed2023.title": "Ecoporanga → Pancas",
    "comp.ed2023.desc": "First stage of the project. Start in Ecoporanga, in northwest Espírito Santo, and finish in Pancas — the competition's inaugural route.",
    "comp.ed2024.date": "2024 · 2ND EDITION",
    "comp.ed2024.title": "Pancas → Venda Nova do Imigrante",
    "comp.ed2024.desc": "Second stage of the project, crossing the center of the state to Venda Nova do Imigrante.",
    "comp.ed2025.date": "2025 · 3RD EDITION",
    "comp.ed2025.title": "Venda Nova do Imigrante → Mimoso do Sul",
    "comp.ed2025.desc": "Final stage of the original project, finishing on the banks of the Itabapoana River. 22 athletes and 4 countries represented.",
    "comp.ed2026.date": "2026 · FULL EDITION",
    "comp.ed2026.title": "North border → south border · ~600 km",
    "comp.ed2026.desc": "The full route for the first time. July 13–25, 12-day window, athletes from 7 countries. FAI2 and CBVL sanctioned event.",

    // ===== INSCRIÇÕES =====
    "insc.head.eyebrow": "2026 EDITION · APPLICATIONS OPEN",
    "insc.head.title": "Apply now",
    "insc.head.sub": "30 spots. Five days. One traverse. Fill out the official Google Forms application and our team will contact you within 48 hours with the next steps.",
    "insc.form.eyebrow": "OFFICIAL FORM",
    "insc.form.title": "Submit your application",
    "insc.form.desc": "The form is hosted on Google Forms. Have your pilot data on hand (CIVL ID, glider model and category, mountain flying hours) and a short description of your experience.",
    "insc.form.cta": "Open the Google Form →",
    "insc.form.note": "Once your résumé is reviewed, the organization confirms your spot and sends payment instructions.",
    "insc.incluso.eyebrow": "WHAT'S INCLUDED",
    "insc.incluso.1": "Official GPS tracker",
    "insc.incluso.2": "Athlete kit (shirt, backpack)",
    "insc.incluso.3": "Pre- and post-race lodging",
    "insc.incluso.4": "Insurance during the race",
    "insc.incluso.5": "Technical and weather briefing",
    "insc.incluso.6": "Live coverage and photos",
    "insc.prazo.title": "DEADLINE",
    "insc.prazo.desc": "Applications open until <strong>February 15, 2026</strong> or while spots last.",
    "insc.duvidas.eyebrow": "QUESTIONS?",
    "insc.duvidas.title": "Talk directly to the organization",
    "insc.duvidas.wpp": "WhatsApp +55 28 99991-0919",
    "insc.duvidas.insta": "Instagram DM",

    // ===== ROTA =====
    "rota.head.eyebrow": "2026 EDITION",
    "rota.head.title": "2026 Route",
    "rota.head.sub": "From Vila Pereira (Nanuque/MG) to Bom Jesus do Itabapoana (RJ), crossing Espírito Santo from north to south. Twelve turnpoints. Five-day window.",
    "rota.map.hint": "Interactive map · Route line loaded from the official KML. Click on a marker or cylinder for details.",
    "rota.tps.eyebrow": "TURNPOINTS",
    "rota.tps.title": "Start, twelve turnpoints and finish",
    "rota.tps.desc": "Each turnpoint must be tagged in order. Between them, the pilot picks the best path — feet on the ground or wing in the air. Validation cylinders show their radius.",
    "rota.cp1.meta": "Start · Nanuque/MG",
    "rota.cp2.meta": "TP1 · Sign",
    "rota.cp3.meta": "TP2 · 1.5 km cylinder",
    "rota.cp4.meta": "TP3 · 3.5 km cylinder",
    "rota.cp5.meta": "TP4 · 7 km cylinder",
    "rota.cp6.meta": "TP5 · Sign",
    "rota.cp7.meta": "TP6 · Sign",
    "rota.cp8.meta": "TP7 · Sign",
    "rota.cp9.meta": "TP8 · Sign / Self",
    "rota.cp10.meta": "TP9 · 3 km cylinder",
    "rota.cp11.meta": "TP10 · Sign",
    "rota.cp12.meta": "TP11 · Sign",
    "rota.cp13.meta": "TP12 · 3.5 km cylinder",
    "rota.cp14.meta": "Finish · RJ",

    // ===== REGULAMENTO =====
    "reg.head.eyebrow": "RULES",
    "reg.head.title": "Rules",
    "reg.head.sub": "The six core rules and the full document for the 2026 edition.",
    "reg.rules.eyebrow": "RULES IN 6 POINTS",
    "reg.rules.title": "The core rules",
    "reg.r1.title": "1. Turnpoints in order",
    "reg.r1.desc": "Each turnpoint must be reached on foot (except aerial ones), with a signature on the sign or validation via tracker.",
    "reg.r2.title": "2. 13-day window",
    "reg.r2.desc": "From the start (07/14/2026) to the finish (07/25/2026). Whoever crosses the gate first wins; if no one finishes, the longest distance wins.",
    "reg.r3.title": "3. Mandatory assistant",
    "reg.r3.desc": "Every pilot must have at least one assistant with a support vehicle, reachable 24/7. One assistant supports only one pilot.",
    "reg.r4.title": "4. On foot or flying",
    "reg.r4.desc": "Any other means of travel is forbidden: no swimming, climbing, bicycle or car. Only pedestrian-authorized paths.",
    "reg.r5.title": "5. Flying window",
    "reg.r5.desc": "Operation from 6 am to sunset. Mandatory stop from 7 pm to 6 am, with pilots stationary within 200 m of the last waypoint.",
    "reg.r6.title": "6. Certified equipment",
    "reg.r6.desc": "Homologated glider, harness with protector, reserve, helmet, radio, GPS, tracker and first-aid kit — always carried by the pilot.",
    "reg.doc.eyebrow": "OFFICIAL DOCUMENT",
    "reg.doc.title": "Full rules document",

    // Generic
    "common.langPT": "PT",
    "common.langEN": "EN",
  }
};

function getLang() {
  return localStorage.getItem('tch_lang') || 'pt';
}

function setLang(lang) {
  if (lang !== 'pt' && lang !== 'en') lang = 'pt';
  localStorage.setItem('tch_lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  applyTranslations();
  updateToggle();
  if (TRANSLATIONS[lang]['home.title'] && document.title.includes('Transcapixaba')) {
    // page-specific title only updated if the page has a `data-i18n-title`
    const t = document.querySelector('[data-i18n-title]');
    if (t) {
      const key = t.getAttribute('data-i18n-title');
      const text = TRANSLATIONS[lang][key];
      if (text) document.title = text;
    }
  }
}

function applyTranslations() {
  const lang = getLang();
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.pt;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = dict[key];
    if (text !== undefined) el.innerHTML = text;
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const spec = el.getAttribute('data-i18n-attr');
    spec.split(',').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (!attr || !key) return;
      const text = dict[key];
      if (text !== undefined) el.setAttribute(attr, text);
    });
  });
}

function updateToggle() {
  const lang = getLang();
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

// init early — set lang attribute before DOM ready to avoid flicker
document.documentElement.lang = getLang() === 'pt' ? 'pt-BR' : 'en';

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateToggle();
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-switch button');
    if (btn) setLang(btn.dataset.lang);
  });
});
