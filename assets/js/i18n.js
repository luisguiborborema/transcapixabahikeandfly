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
    "footer.desc": "A maior competição de Hike and Fly das Américas!",
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
    "home.hero.sub": "A maior competição de Hike and Fly das Américas!",
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
    "comp.head.sub": "A maior competição de Hike and Fly das Américas!",
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
    "insc.prereq.eyebrow": "PRÉ-REQUISITOS",
    "insc.prereq.desc": "Fique atento aos pré-requisitos do regulamento.",
    "insc.prereq.cta": "Ver regulamento →",
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
    "reg.notice": "Leia o regulamento completo com atenção!",
    "reg.doc.eyebrow": "DOCUMENTO OFICIAL",
    "reg.doc.title": "Regulamento completo",
    "reg.doc.body": `

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">1. Visão geral</h3>
      <p>A <strong>Transcapixaba Hike and Fly</strong> é uma aventura de caminhada e parapente. Em 2022, uma rota foi aberta pelo atleta Lucas Porto — a primeira travessia de Hike and Fly do Espírito Santo, de norte a sul, com 665 km percorridos. Percebendo o potencial da rota, ela foi transformada em competição e chega até você, atleta, que está lendo este regulamento.</p>
      <p>A corrida é inspirada no famoso X-Alps e adaptada ao Espírito Santo, estado conhecido mundialmente no cenário do voo livre. Os pilotos que sonhavam em viver esse tipo de corrida finalmente poderão realizar seu sonho, numa travessia caminhando e voando.</p>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">2. Calendário de corrida</h3>
      <p><strong>13 dias: de 13 a 26 de julho de 2026.</strong></p>
      <ul style="padding-left: 22px">
        <li><strong>13/07/2026, 13h</strong> — Conferência de equipamentos, assinatura dos termos de responsabilidade e retirada dos kits.</li>
        <li><strong>13/07/2026, 15h30</strong> — Abertura da Transcapixaba H&amp;F 2026 com equipes, convidados e autoridades.</li>
        <li><strong>13/07/2026, 16h</strong> — Briefing de segurança (OBRIGATÓRIO para atletas e suas equipes).</li>
        <li><strong>14/07/2026, 7h</strong> — Concentração para a largada; <strong>8h</strong> — largada da Transcapixaba H&amp;F Full Edition 2026; <strong>19h</strong> — parada do dia 1.</li>
        <li><strong>15 a 24/07/2026</strong> — Janela de competição diária das 6h às 19h.</li>
        <li><strong>25/07/2026, das 6h às 15h</strong> — Janela de competição do último dia.</li>
        <li><strong>25/07/2026, 17h</strong> — Cerimônia de premiação.</li>
      </ul>
      <p>Os horários podem ser modificados até a data da largada e serão comunicados previamente. A corrida é interrompida à noite entre as 19h e as 6h. Os pilotos devem ser acompanhados por um assistente/apoiador (OBRIGATÓRIO).</p>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">3. Organização</h3>
      <h4 style="margin-top: 24px">3.1. Organização e direção de prova</h4>
      <ul style="padding-left: 22px">
        <li>Organizador: <strong>Fly Brasil Adventure</strong> — CNPJ 30.050.224/0001-79.</li>
        <li>Diretor de Prova: <strong>Lucas Porto</strong>.</li>
        <li>Diretora Geral: <strong>Micheli Sossai</strong>.</li>
        <li>Juiz de Prova: <strong>Zenilson Rocha</strong>.</li>
      </ul>
      <h4 style="margin-top: 24px">3.2. Comissão de prova</h4>
      <p>O Diretor de Prova, o Juiz de Prova e a Diretora Geral constituem a comissão de prova. Esta comissão decidirá sobre quaisquer disputas entre competidores, poderá sancionar com penalidade e validar os cálculos de distância para estabelecer a classificação. A comissão reserva-se o direito de adaptar as regras se julgar necessário.</p>
      <h4 style="margin-top: 24px">3.3. Condições de caminhada e voo</h4>
      <p>Os pilotos são os únicos responsáveis por tomar as decisões necessárias quanto à escolha das rotas de caminhada e voo; a análise e a antecipação das mudanças de terreno e condições climáticas devem ser uma preocupação constante.</p>
      <h4 style="margin-top: 24px">3.4. Adiamento ou cancelamento</h4>
      <p>Se as condições meteorológicas parecerem particularmente desfavoráveis, a comissão de prova reserva-se o direito de adiar o início da competição ou interromper a corrida a qualquer momento. Nesse caso, os pilotos serão avisados por SMS/WhatsApp ou telefonema.</p>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">4. Piloto</h3>
      <h4 style="margin-top: 24px">4.1. Condições gerais de participação</h4>
      <ul style="padding-left: 22px">
        <li>Ter pelo menos 18 anos.</li>
        <li>Ser membro de uma Confederação Nacional de parapente, comprovando filiação e nível pela carteira.</li>
        <li>Ter no mínimo <strong>Nível 3 (CBVL) / IPPI 4</strong>. Para casos específicos de pilotos com nivelamento inferior, mas que já participaram de uma das três edições anteriores, pode ser entregue carta de solicitação com histórico em Hike and Fly e voo livre, a ser analisada pela comissão organizadora.</li>
        <li>Plano de saúde válido durante todo o período da corrida.</li>
        <li>Atestado médico específico para corrida/trekking e parapente com idade inferior a 12 meses.</li>
        <li>SIV realizado nos últimos 12 meses (com vela de mesma homologação) ou nos últimos 6 meses (com vela de outra homologação).</li>
        <li>Curso de primeiros socorros realizado nos últimos 12 meses.</li>
      </ul>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">5. Registro e confirmação</h3>
      <h4 style="margin-top: 24px">5.1. Cadastro</h4>
      <ul style="padding-left: 22px">
        <li>Inscrições abertas de <strong>05/01/2026 a 15/02/2026</strong>.</li>
        <li>É solicitado o envio de currículo esportivo e foto para divulgação no site e nas redes sociais, caso o piloto seja selecionado.</li>
        <li>A confirmação de participação é enviada em fevereiro por e-mail, com os dados bancários para a transferência da taxa e o pedido de documentos. Após o pagamento, o atleta é confirmado. Vagas remanescentes poderão ser preenchidas posteriormente, conforme necessidade da organização.</li>
        <li>A lista de participantes é divulgada no site e nas redes sociais.</li>
        <li>A organização selecionará no máximo <strong>40 pilotos</strong> — número total a critério do organizador, de acordo com a demanda.</li>
      </ul>
      <h4 style="margin-top: 24px">5.2. Seleção</h4>
      <p>Os pilotos serão selecionados avaliando experiências de Hike and Fly, montanhismo, ultramaratonas, voos homologados, habilidades e treinos habituais. Em caso de empate, prevalece a ordem de inscrição. A seleção é estritamente a critério do organizador, que pode recusar inscrições caso o piloto não cumpra os requisitos de segurança, não apresente algum documento ou tenha comportamento inadequado para este tipo de prova.</p>
      <h4 style="margin-top: 24px">5.3. Taxa de inscrição</h4>
      <ul style="padding-left: 22px">
        <li>Após a confirmação, cada piloto paga a taxa da edição 2026 de <strong>R$ 1.400,00</strong> e fornece todos os documentos necessários.</li>
        <li>Atletas que já participaram de edições anteriores têm <strong>R$ 200,00 de desconto por edição</strong>.</li>
        <li>Pagamento até <strong>15 de março de 2026</strong>. A vaga é confirmada mediante o pagamento.</li>
        <li>Custos de transferência/cartão por conta do piloto.</li>
        <li>Desistências após <strong>30 de abril de 2026</strong> não são reembolsadas.</li>
      </ul>
      <h4 style="margin-top: 24px">5.4. Termo de responsabilidade e cessão de imagem</h4>
      <p>É imprescindível que cada piloto assine o termo de responsabilidade fornecido pela organização. O suportter oficial também assinará um termo firmando seu compromisso com o atleta e a organização. A inscrição autoriza automaticamente o uso pela organização de imagens dos atletas em redes sociais, filmes, reportagens, artigos e fins comerciais.</p>
      <h4 style="margin-top: 24px">5.5. Doping</h4>
      <p>Como todos os outros esportes, estamos sujeitos às leis e regras de combate ao doping: o uso de drogas é estritamente proibido, exceto sob prescrições específicas, comprovadas e justificadas por médico ou instituto médico.</p>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">6. Competição</h3>
      <h4 style="margin-top: 24px">6.1. Regras da corrida</h4>
      <ul style="padding-left: 22px">
        <li>Os pilotos devem levar sempre o equipamento de voo completo descrito no item 7.</li>
        <li>É permitido apenas um conjunto de equipamentos para os 12 dias de prova. Trocas só com autorização do diretor/comissão em caso de dano.</li>
        <li>O piloto deve voar em condições adequadas ao seu nível e experiência. É responsável por suas escolhas e se compromete a não se expor a nenhum perigo.</li>
        <li>Os pilotos só podem se locomover a pé ou de parapente. Qualquer outra forma de movimento é proibida (natação, escalada, bicicleta, carro…).</li>
        <li><strong>Regra de corte:</strong> após a chegada do primeiro colocado, ao final da janela de prova do dia seguinte o atleta em último lugar é cortado da competição, e assim sucessivamente.</li>
        <li>Só podem ser utilizados caminhos autorizados para caminhantes. Cumes íngremes que exijam equipamentos específicos de escalada são proibidos.</li>
        <li>Túneis rodoviários proibidos para pedestres não podem ser usados. Túneis pequenos (viadutos com menos de 200 m) são permitidos, salvo proibição local.</li>
      </ul>
      <h4 style="margin-top: 24px">6.2. Regras de voo</h4>
      <ul style="padding-left: 22px">
        <li>Todos os pilotos devem respeitar as Regras de Espaço Aéreo vigentes no Brasil. A altitude é verificada pelo sistema de rastreamento; violação de espaço aéreo controlado resulta em penalização imediata e perda do dia de prova.</li>
        <li>Qualquer atleta que viole as regras assume total responsabilidade pelas consequências legais.</li>
        <li>Todos devem respeitar também as zonas proibidas definidas pela organização.</li>
        <li><strong>Decolar com parapente molhado ou sob chuva resulta em desclassificação.</strong></li>
        <li>Voar na chuva é proibido. O piloto que se vir na chuva deve fazer todo o esforço para pousar com segurança o mais rápido possível ou sair da zona de chuva, mesmo que isso prejudique o progresso na corrida. A penalidade pode variar até a desclassificação.</li>
        <li>O piloto deve ser capaz de fornecer registro de GPS de todos os seus movimentos, em voo e em solo. A ausência ou falha do registro pode resultar em penalidades até desclassificação.</li>
        <li>O Diretor de Prova e o Juiz de Prova podem proibir voos em todo o percurso por período específico, conforme previsão do tempo, comunicando aos pilotos e assistentes com pelo menos uma hora de antecedência.</li>
      </ul>
      <h4 style="margin-top: 24px">6.3. Aplicação de penalidades</h4>
      <ul style="padding-left: 22px">
        <li>A comissão de prova ajusta as penalidades conforme a gravidade e as intenções subjacentes.</li>
        <li>Penalidades podem ser aplicadas se a conduta do piloto for considerada perigosa (vento forte, trovoadas etc.), durante ou após a corrida.</li>
        <li>Piloto e suportter podem apresentar evidências (fotos, vídeos) que comprovem não ter havido violação.</li>
        <li>As penalidades definem tempo de parada do piloto, aplicado imediatamente ou posteriormente. O não cumprimento resulta em desclassificação.</li>
        <li>Qualquer piloto flagrado ou suspeito de trapaça pode ser penalizado ou desclassificado.</li>
      </ul>
      <h4 style="margin-top: 24px">6.4. Voo em equipe</h4>
      <p>É proibido voar em equipe planejada e organizada por pilotos não participantes do evento, incluindo torcedores. Atletas que violarem podem ser desclassificados.</p>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">7. Equipamento</h3>
      <h4 style="margin-top: 24px">7.1. Equipamento obrigatório para voar</h4>
      <p>Todos os equipamentos serão verificados e pesados antes do briefing. Os controles podem ser feitos na rota com base na verificação inicial. Todo equipamento de voo deve ser certificado e estar em bom estado. O piloto deve sempre portar:</p>
      <ul style="padding-left: 22px">
        <li>Parapente;</li>
        <li>Selete com protetor;</li>
        <li>Pára-quedas de emergência;</li>
        <li>Capacete homologado — obrigatório durante todas as fases do voo (recomendado atender à norma EN966);</li>
        <li>Celular com número oficial de contato, carregado e ligado o tempo todo;</li>
        <li>Rastreador via satélite (Garmin, Spot ou outro) — link compartilhado com a organização. Cada piloto carrega o seu dispositivo e é responsável por mantê-lo carregado e funcionando. Defeitos devem ser reportados imediatamente, com comprovação por tracklog alternativo. A não utilização ou falta de tracklog adequado resulta em desclassificação;</li>
        <li>Dispositivo GPS (próprio piloto, backup para tracklog, especialmente em turnpoints aéreos);</li>
        <li>Rádio de comunicação (principalmente em voo);</li>
        <li>Lanterna;</li>
        <li>Sinalizador noturno (obrigatório nas caminhadas noturnas);</li>
        <li>Kit de primeiros socorros com cobertor de emergência, anti-histamínico, apito e bandagem elástica adesiva.</li>
      </ul>
      <p>Todo este equipamento deve estar em posse do piloto em tempo integral durante a competição. A comissão pode inspecionar a qualquer momento — falta de item resulta em desclassificação.</p>
      <h4 style="margin-top: 24px">7.2. Equipamento recomendado para o hike</h4>
      <p>Capa de chuva, bastões de trekking, roupas adequadas, bússola, faca e protetor solar.</p>
      <h4 style="margin-top: 24px">7.3. Rastreador</h4>
      <ul style="padding-left: 22px">
        <li>O rastreador permite acompanhamento em tempo real, mas não constitui prova do percurso realizado.</li>
        <li><strong>Horário de corrida — 6h às 19h:</strong> manter o rastreador ligado.</li>
        <li><strong>Descanso noturno — 19h às 6h:</strong> parar a corrida e carregar o instrumento. O piloto deve reativar o rastreador dentro de 200 m do último breakpoint do dia anterior.</li>
        <li>Iniciar, parar e recarregar o rastreador é responsabilidade do piloto.</li>
        <li>O uso indevido pode resultar em penalidades.</li>
      </ul>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">8. Segurança</h3>
      <h4 style="margin-top: 24px">8.1. Kit de emergência</h4>
      <p>A equipe do atleta deve sempre ter um kit de emergência composto por cobertor de emergência, anti-histamínico, apito, bandagem elástica adesiva para curativos de emergência e demais itens de primeiros socorros.</p>
      <h4 style="margin-top: 24px">8.2. Relatório de localização e de segurança</h4>
      <ul style="padding-left: 22px">
        <li>Todos os pilotos devem comunicar sua localização — diretamente ou pelo assistente — via SMS/WhatsApp em até 30 minutos após o final do dia de competição. A ausência do relatório é infração grave e resulta em desqualificação.</li>
        <li>Ao final do dia, a equipe deve reportar por escrito (WhatsApp) ao Diretor ou ao Juiz de Prova qualquer incidente/acidente com o piloto ou sua equipe, para que medidas de controle sejam aplicadas.</li>
      </ul>
      <h4 style="margin-top: 24px">8.3. Retirada do piloto</h4>
      <p>Caso pretenda desistir, o piloto deve informar imediatamente a organização, que o retirará da lista e interromperá sua prova no ponto da notificação.</p>
      <h4 style="margin-top: 24px">8.4. Tempo de corrida e descanso noturno</h4>
      <p>Os pilotos podem voar entre as 6h e o horário do pôr do sol (definido e comunicado no briefing). Devem parar a prova entre 19h e 6h. O rastreador permite acompanhamento em tempo real.</p>
      <h4 style="margin-top: 24px">8.5. Emergência</h4>
      <p>Ao chegar ao solo, o piloto deve recolher <strong>imediatamente</strong> seu parapente. Parapente não recolhido significa: <em>«preciso de socorro»</em>. Pilotos voando próximos devem prestar socorro — a comissão concede pontos bônus para quem o fizer.</p>
      <p>Em caso de acidente:</p>
      <ul style="padding-left: 22px">
        <li><strong>Passo 1:</strong> chamar diretamente o SAMU pelo telefone <strong>192</strong>.</li>
        <li><strong>Passo 2:</strong> piloto ou assistente informa a organização o quanto antes. O médico pode decidir parar um piloto sem capacidade física para continuar.</li>
      </ul>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">9. Assistentes/apoios</h3>
      <h4 style="margin-top: 24px">9.1. Assistente</h4>
      <p>Cada piloto deve ter pelo menos um assistente com carro de apoio. O piloto não pode trocar de assistente durante a prova, exceto com aprovação do diretor/comissão. Cada assistente apoia apenas um piloto durante a corrida.</p>
      <h4 style="margin-top: 24px">9.2. Funções e tarefas</h4>
      <p>O assistente dá suporte à logística e estratégia da corrida — <strong>não pode transportar o equipamento do piloto</strong>. É o elo entre a comissão e o piloto, informando regularmente sua posição e condição e fornecendo imagens/informações para o site e as mídias sociais. Aciona o resgate em caso de dificuldade. Além do suporte durante a corrida, é responsável por dar assistência ao atleta em caso de incidentes que o afastem da prova e em caso de hospitalização.</p>
      <h4 style="margin-top: 24px">9.3. Disponibilidade</h4>
      <p>O assistente deve ser contactável 24 horas por celular.</p>
      <h4 style="margin-top: 24px">9.4. Mídias, vídeos e fotos</h4>
      <p>Assistente e/ou piloto devem enviar diariamente à organização uma notícia em forma de vídeo relatando os bastidores da equipe, mais ao menos <strong>2 fotos</strong>. Pode ser enviada via WhatsApp ou e-mail. O não envio de pelo menos uma imagem diária acarreta penalização da equipe.</p>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">10. A competição</h3>
      <h4 style="margin-top: 24px">10.1. A corrida</h4>
      <p>A corrida é feita andando ou voando, passando pelos turnpoints na ordem definida.</p>
      <h4 style="margin-top: 24px">10.2. Os turnpoints</h4>
      <ul style="padding-left: 22px">
        <li>Devem ser alcançados a pé, exceto os pontos que permitam passagem aérea.</li>
        <li>No turnpoint, os pilotos precisam assinar uma placa dedicada para "TURNPOINT VÁLIDO", exceto turnpoints aéreos, verificados por rastreador ou GPS do piloto.</li>
        <li>Para validar o final da corrida, o piloto deve passar pelo pórtico de chegada. Vence quem passar pelo pórtico primeiro.</li>
        <li>A rota oficial será publicada no site e nas mídias sociais até <strong>10 de maio de 2026</strong>; as cidades por onde passa já estão disponíveis.</li>
      </ul>
      <h4 style="margin-top: 24px">10.3. Classificação e premiação</h4>
      <ul style="padding-left: 22px">
        <li>Em caso de turnpoint não validado, o percurso é considerado até o último turnpoint validado.</li>
        <li>A classificação é por ordem de chegada — vence o atleta que completar o percurso mais rápido.</li>
        <li>Se ninguém terminar todo o percurso, a classificação é baseada na distância restante até a meta (medida no ponto onde o piloto se encontra no prazo, em terra ou no ar).</li>
        <li>Se todos os atletas terminarem antes do prazo final (25/07/2026), a cerimônia de premiação e encerramento poderá ser adiantada, com comunicação prévia.</li>
        <li>Pódio geral com os <strong>cinco primeiros atletas</strong>.</li>
        <li>A premiação inclui medalhas de participação para todos os atletas, troféu e brindes para os cinco primeiros e valores em dinheiro para os <strong>três primeiros colocados</strong>.</li>
        <li>Só receberá a premiação em dinheiro o atleta presente na cerimônia de premiação.</li>
      </ul>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">11. Protesto</h3>
      <p>No ato da inscrição, os pilotos conhecerão os membros da comissão de protesto — três pilotos escolhidos pela organização. Esta comissão é soberana e decide pela execução ou não do objeto protestado. Pilotos que se julguem prejudicados por outros pilotos, ou pelo regulamento vigente, podem apresentar protesto no prazo máximo de <strong>30 minutos</strong> após a divulgação oficial do resultado provisório.</p>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">12. Disposições gerais</h3>
      <ul style="padding-left: 22px">
        <li><strong>12.1</strong> — No ato da inscrição, os pilotos devem ter verificado e solicitado informações referentes à classificação EN/DHV do equipamento.</li>
        <li><strong>12.2</strong> — A organização reserva-se o direito de excluir qualquer participante que interfira no bom andamento da competição.</li>
        <li><strong>12.3</strong> — Os participantes devem respeitar os horários estabelecidos.</li>
        <li><strong>12.4</strong> — O adiamento do evento por condição climática pode ocorrer até 3 dias antes do credenciamento, na semana que antecede o evento, ficando remarcado para nova data informada pela organização.</li>
        <li><strong>12.5</strong> — Em caso de adiamento da etapa, a organização escolherá nova data, cabendo aos inscritos manter ou desistir da participação, tendo a vaga mantida ou repassada.</li>
        <li><strong>12.6</strong> — Em caso de desistência e não participação no evento, o piloto deve comunicar a organização por mensagem de texto ou e-mail.</li>
        <li><strong>12.7</strong> — Todos os pilotos devem entregar à organização, ao final da competição, <strong>2 min de imagens em vídeo</strong>.</li>
        <li><strong>12.8</strong> — Respeito ao meio ambiente: cada piloto e assistente comprometem-se a não deixar rastros de sua passagem e a respeitar o meio ambiente.</li>
      </ul>

    `,

    // ===== FAQ =====
    "faq.head.eyebrow": "FAQ",
    "faq.head.title": "Perguntas Frequentes",
    "faq.head.sub": "As dúvidas mais comuns sobre inscrição, equipamento, equipe de apoio e segurança.",
    "faq.q1.title": "Quem pode se inscrever?",
    "faq.q1.body": "Pilotos com licença CBVL/FAI ativa, EN-D ou inferior, e comprovação de pelo menos 100 horas de voo livre em montanha.",
    "faq.q2.title": "Quanto custa participar?",
    "faq.q2.body": "A taxa inclui rastreador GPS, kit de competição, hospedagem dos pontos oficiais e seguro. Confira o valor atual na página de inscrições.",
    "faq.q3.title": "Posso participar sem equipe de apoio?",
    "faq.q3.body": "É possível, mas a organização recomenda fortemente ter ao menos uma pessoa de apoio. A equipe ajuda em segurança, logística de água/comida e resgate.",
    "faq.q4.title": "Como funciona o resgate?",
    "faq.q4.body": "O piloto aciona via rádio ou SOS no rastreador. A organização aciona o sistema de SAR mais próximo e a equipe médica de plantão. Todo piloto faz briefing de segurança obrigatório.",

    // ===== GALERIA / FOTOS =====
    "gal.head.eyebrow": "GALERIA",
    "gal.head.title": "Fotos das edições",
    "gal.head.sub": "Decolagens, térmicas, pouso na grama, equipes em ação. Cada edição em um álbum.",
    "gal.2023.tag": "1ª Edição",
    "gal.2023.date": "2023 · NOROESTE CAPIXABA",
    "gal.2023.title": "Fotos 2023",
    "gal.2023.desc": "18 atletas. Largada em Ecoporanga, chegada em Pancas. A edição inaugural.",
    "gal.2024.tag": "2ª Edição",
    "gal.2024.date": "2024 · CENTRO-SUL",
    "gal.2024.title": "Fotos 2024",
    "gal.2024.desc": "Pancas a Venda Nova do Imigrante. Turnpoints em Baixo Guandú, Itaguaçu e Afonso Cláudio.",
    "gal.2025.tag": "3ª Edição",
    "gal.2025.date": "2025 · SUL CAPIXABA",
    "gal.2025.title": "Fotos 2025",
    "gal.2025.desc": "Venda Nova do Imigrante a Ponte de Itapaboana. 22 atletas, 4 países, 125,8 km.",
    "fotos.viewAll": "Voltar para galeria →",
    "fotos.2023.eyebrow": "GALERIA · 1ª EDIÇÃO",
    "fotos.2023.title": "Fotos 2023",
    "fotos.2023.sub": "18 atletas. Largada em Ecoporanga, passando por Vila Pavão e Águia Branca. Chegada em Pancas.",
    "fotos.2024.eyebrow": "GALERIA · 2ª EDIÇÃO",
    "fotos.2024.title": "Fotos 2024",
    "fotos.2024.sub": "Largada em Pancas, turnpoints em Baixo Guandú, Itaguaçu e Afonso Cláudio. Chegada em Venda Nova do Imigrante.",
    "fotos.2025.eyebrow": "GALERIA · 3ª EDIÇÃO",
    "fotos.2025.title": "Fotos 2025",
    "fotos.2025.sub": "22 atletas, 4 países, 125,8 km. Do briefing à premiação — os momentos que marcaram a 3ª edição.",
    "fotos.2025.s1.eyebrow": "BRIEFING",
    "fotos.2025.s1.title": "Reunião técnica e largada técnica",
    "fotos.2025.s2.eyebrow": "LARGADA",
    "fotos.2025.s2.title": "Venda Nova do Imigrante",
    "fotos.2025.s3.eyebrow": "RAMPA",
    "fotos.2025.s3.title": "Rampa de Alegre",
    "fotos.2025.s4.eyebrow": "VOOS",
    "fotos.2025.s4.title": "Pela rota: Alegre, Filetti, Forno Grande, Fazenda",
    "fotos.2025.s5.eyebrow": "CHEGADA",
    "fotos.2025.s5.title": "Ponte de Itapaboana",
    "fotos.2025.s6.eyebrow": "PREMIAÇÃO",
    "fotos.2025.s6.title": "Cerimônia de encerramento",

    // ===== RESULTADOS =====
    "res.2023.eyebrow": "EDIÇÃO 2023 · 1ª EDIÇÃO",
    "res.2023.title": "Resultados 2023",
    "res.2023.sub": "18 atletas. Largada em Ecoporanga, passando por Vila Pavão, Águia Branca e chegada em Pancas. A rota inaugural da competição.",
    "res.2023.overall.eyebrow": "CLASSIFICAÇÃO GERAL",
    "res.2023.overall.title": "Overall 2023",
    "res.2024.eyebrow": "EDIÇÃO 2024 · 2ª EDIÇÃO",
    "res.2024.title": "Resultados 2024",
    "res.2024.sub": "Largada em Pancas, turnpoints em Baixo Guandú, Itaguaçu e Afonso Cláudio. Chegada em Venda Nova do Imigrante.",
    "res.2024.overall.eyebrow": "CLASSIFICAÇÃO GERAL",
    "res.2024.overall.title": "Overall 2024",
    "res.2025.eyebrow": "EDIÇÃO 2025 · OVERALL",
    "res.2025.title": "Resultados 2025",
    "res.2025.sub": "23 pilotos largaram em Venda Nova do Imigrante. 19 cruzaram a linha de chegada na Ponte de Itapaboana, depois de 125,8 km a pé e voando.",
    "res.2025.podio.eyebrow": "PÓDIO",
    "res.2025.podio.title": "Top 3 overall",
    "res.2025.overall.eyebrow": "CLASSIFICAÇÃO GERAL",
    "res.2025.overall.title": "Overall 2025",
    "res.tbl.rank": "Classificação",
    "res.tbl.competitor": "Competidor",
    "res.tbl.num": "Nº",
    "res.tbl.athlete": "Atleta",
    "res.tbl.country": "País",
    "res.tbl.gender": "Gên.",
    "res.tbl.glider": "Vela",
    "res.tbl.sponsor": "Patrocinador",
    "res.tbl.civl": "CIVL",
    "res.tbl.time": "Tempo",
    "res.tbl.dist": "Distância",
    "res.tbl.arrival": "Chegada",
    "res.tbl.bonus": "Bônus Sebrae",

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
    "footer.desc": "The largest Hike and Fly competition in the Americas!",
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
    "home.hero.sub": "The largest Hike and Fly competition in the Americas!",
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
    "comp.head.sub": "The largest Hike and Fly competition in the Americas!",
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
    "insc.prereq.eyebrow": "PREREQUISITES",
    "insc.prereq.desc": "Please review the prerequisites in the rules document.",
    "insc.prereq.cta": "View the rules →",
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
    "reg.notice": "Please read the full rules carefully!",
    "reg.doc.eyebrow": "OFFICIAL DOCUMENT",
    "reg.doc.title": "Full rules document",
    "reg.doc.body": `
      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">1. Overview</h3>
      <p>The <strong>Transcapixaba Hike and Fly</strong> is a hiking and paragliding adventure. In 2022, a route was opened by athlete Lucas Porto — the first Hike and Fly traverse of Espírito Santo, north to south, covering 665 km. Seeing the potential of that route, it was turned into a competition — and now reaches you, the athlete reading this rule book.</p>
      <p>The race is inspired by the famous X-Alps and adapted to Espírito Santo, a state known worldwide in the free-flight scene. Pilots who dreamed of living this type of race can finally make their dream come true, in a traverse on foot and by wing.</p>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">2. Race calendar</h3>
      <p><strong>13 days: from July 13 to 26, 2026.</strong></p>
      <ul style="padding-left: 22px">
        <li><strong>07/13/2026, 1 pm</strong> — Equipment check, signing of liability releases and kit pickup.</li>
        <li><strong>07/13/2026, 3:30 pm</strong> — Opening of Transcapixaba H&amp;F 2026 with teams, guests and authorities.</li>
        <li><strong>07/13/2026, 4 pm</strong> — Safety briefing (MANDATORY for athletes and their teams).</li>
        <li><strong>07/14/2026, 7 am</strong> — Pre-start gathering; <strong>8 am</strong> — start of Transcapixaba H&amp;F Full Edition 2026; <strong>7 pm</strong> — end of day 1.</li>
        <li><strong>07/15 to 07/24/2026</strong> — Daily race window from 6 am to 7 pm.</li>
        <li><strong>07/25/2026, 6 am to 3 pm</strong> — Final day race window.</li>
        <li><strong>07/25/2026, 5 pm</strong> — Awards ceremony.</li>
      </ul>
      <p>Times may be modified until the day of the start and will be communicated in advance. The race is suspended overnight between 7 pm and 6 am. Pilots must be accompanied by an assistant/supporter (MANDATORY).</p>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">3. Organization</h3>
      <h4 style="margin-top: 24px">3.1. Organization and race direction</h4>
      <ul style="padding-left: 22px">
        <li>Organizer: <strong>Fly Brasil Adventure</strong> — CNPJ 30.050.224/0001-79.</li>
        <li>Race Director: <strong>Lucas Porto</strong>.</li>
        <li>General Director: <strong>Micheli Sossai</strong>.</li>
        <li>Race Judge: <strong>Zenilson Rocha</strong>.</li>
      </ul>
      <h4 style="margin-top: 24px">3.2. Race committee</h4>
      <p>The Race Director, the Race Judge and the General Director constitute the race committee. This committee will rule on any disputes between competitors, may impose penalties and validate distance calculations to establish the ranking. The committee reserves the right to adapt the rules if it deems it necessary.</p>
      <h4 style="margin-top: 24px">3.3. Hiking and flying conditions</h4>
      <p>Pilots are solely responsible for making the decisions required when choosing hiking and flying routes; analyzing and anticipating terrain changes and weather conditions must be an ongoing concern.</p>
      <h4 style="margin-top: 24px">3.4. Postponement or cancellation</h4>
      <p>If weather conditions appear particularly unfavorable, the race committee reserves the right to postpone the start of the competition or stop the race at any time. In that case, pilots will be notified by SMS/WhatsApp or phone call.</p>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">4. Pilot</h3>
      <h4 style="margin-top: 24px">4.1. General conditions for participation</h4>
      <ul style="padding-left: 22px">
        <li>Be at least 18 years old.</li>
        <li>Be a member of a national paragliding federation, with membership and skill level proven by their card.</li>
        <li>Hold at least <strong>Level 3 (CBVL) / IPPI 4</strong>. For specific cases of pilots with a lower rating who have already taken part in one of the three previous editions, a request letter with their Hike and Fly and free-flight history may be submitted, to be reviewed by the organizing committee.</li>
        <li>Have valid health insurance covering the entire race period.</li>
        <li>Carry a specific medical clearance for running/trekking and paragliding, issued within the last 12 months.</li>
        <li>SIV completed within the last 12 months (with the same glider certification) or within the last 6 months (with a different certification).</li>
        <li>First-aid course completed within the last 12 months.</li>
      </ul>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">5. Registration and confirmation</h3>
      <h4 style="margin-top: 24px">5.1. Application</h4>
      <ul style="padding-left: 22px">
        <li>Applications open from <strong>01/05/2026 to 02/15/2026</strong>.</li>
        <li>You will be asked to send a sports CV and a photo for publishing on the site and social media, if selected.</li>
        <li>The participation confirmation is sent in February by email, including bank data for the fee transfer and the request for required documents. Once paid, the athlete is confirmed. Remaining spots may be filled later, as needed by the organization.</li>
        <li>The list of participants is published on the website and social media.</li>
        <li>The organization will select a maximum of <strong>40 pilots</strong> — the total number is strictly at the organizer's discretion, subject to demand.</li>
      </ul>
      <h4 style="margin-top: 24px">5.2. Selection</h4>
      <p>Pilots will be selected based on Hike and Fly experience, mountaineering, ultramarathons, registered flights, skills and regular training. In case of a tie, application order prevails. Selection is strictly at the organizer's discretion, who may reject applications if the pilot does not meet safety requirements, fails to present any document or behaves inappropriately for this type of event.</p>
      <h4 style="margin-top: 24px">5.3. Entry fee</h4>
      <ul style="padding-left: 22px">
        <li>Upon confirmation, each pilot pays the 2026 edition fee of <strong>R$ 1,400.00</strong> and provides all required documents.</li>
        <li>Athletes who have already taken part in previous editions receive a <strong>R$ 200.00 discount per edition</strong>.</li>
        <li>Payment due by <strong>March 15, 2026</strong>. The spot is confirmed upon payment.</li>
        <li>Transfer/card fees are at the pilot's expense.</li>
        <li>Withdrawals after <strong>April 30, 2026</strong> are non-refundable.</li>
      </ul>
      <h4 style="margin-top: 24px">5.4. Liability release and image rights</h4>
      <p>Each pilot must sign the liability release provided by the organization. The official supporter must also sign a release committing to the athlete and the organization. Registration automatically authorizes the organization's use of athletes' images on social media, films, articles, news reports and commercial purposes.</p>
      <h4 style="margin-top: 24px">5.5. Doping</h4>
      <p>Like every other sport, we are subject to anti-doping laws and rules: drug use is strictly prohibited, except under specific prescriptions verified and justified by a physician or medical institute.</p>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">6. Competition</h3>
      <h4 style="margin-top: 24px">6.1. Race rules</h4>
      <ul style="padding-left: 22px">
        <li>Pilots must always carry the full flight equipment described in section 7.</li>
        <li>Only one equipment set is allowed for the 12 days of the race. Swaps only with director/committee approval in case of damage.</li>
        <li>The pilot must fly in conditions appropriate to their level and experience. They are responsible for their choices and commit not to expose themselves to any danger.</li>
        <li>Pilots can only move on foot or by paraglider. Any other means of travel is forbidden (swimming, climbing, bicycle, car…).</li>
        <li><strong>Cut rule:</strong> after the first finisher crosses the line, at the end of the next day's race window the last-place athlete is cut from the race, and so on.</li>
        <li>Only hiker-authorized paths may be used. Steep ridgelines requiring specific climbing equipment are forbidden.</li>
        <li>Road tunnels closed to pedestrians may not be used. Small tunnels (viaducts shorter than 200 m) are allowed, unless local laws prohibit them.</li>
      </ul>
      <h4 style="margin-top: 24px">6.2. Flight rules</h4>
      <ul style="padding-left: 22px">
        <li>All pilots must respect Brazilian airspace rules. Altitude is verified by the tracking system; controlled airspace violation results in immediate penalty and loss of the race day.</li>
        <li>Any athlete who violates the rules assumes full responsibility for the legal consequences.</li>
        <li>Everyone must also respect the no-fly zones defined by the organization.</li>
        <li><strong>Taking off with a wet glider or in the rain results in disqualification.</strong></li>
        <li>Flying in the rain is forbidden. A pilot who finds themselves in the rain must make every effort to land safely as fast as possible or exit the rain area, even if this hurts their race progress. Penalties can range up to disqualification.</li>
        <li>The pilot must be able to provide a GPS record of all their movements, in the air and on the ground. Missing or failed records may result in penalties up to disqualification.</li>
        <li>The Race Director and Race Judge may ban flying along the entire course for a specific period, based on weather forecasts, notifying pilots and assistants at least one hour in advance.</li>
      </ul>
      <h4 style="margin-top: 24px">6.3. Applying penalties</h4>
      <ul style="padding-left: 22px">
        <li>The race committee adjusts penalties according to severity and underlying intent.</li>
        <li>Penalties may be applied if the pilot's conduct is deemed dangerous (strong winds, thunderstorms, etc.), during or after the race.</li>
        <li>The pilot and supporter may present evidence (photos, videos) showing that no violation occurred.</li>
        <li>Penalties impose a stop time for the pilot, applied immediately or later. Failure to comply results in disqualification.</li>
        <li>Any pilot caught or suspected of cheating may be penalized or disqualified.</li>
      </ul>
      <h4 style="margin-top: 24px">6.4. Team flying</h4>
      <p>Team flying planned and organized by pilots not taking part in the event, including supporters, is forbidden. Athletes who break this rule may be disqualified.</p>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">7. Equipment</h3>
      <h4 style="margin-top: 24px">7.1. Required flight equipment</h4>
      <p>All equipment will be checked and weighed before the briefing. Checks may be carried out on the course based on the initial verification. All flight equipment must be certified and in good condition. The pilot must always carry:</p>
      <ul style="padding-left: 22px">
        <li>Paraglider;</li>
        <li>Harness with protector;</li>
        <li>Reserve parachute;</li>
        <li>Certified helmet — mandatory during all phases of the flight (EN966 standard recommended);</li>
        <li>Cell phone with the official contact number, charged and on at all times;</li>
        <li>Satellite tracker (Garmin, Spot or other) — link shared with the organization. Each pilot carries their own device and is responsible for keeping it charged and working. Faults must be reported immediately, with proof of movement via an alternative tracklog. Failure to use the device or lack of an adequate tracklog results in disqualification;</li>
        <li>GPS device (the pilot's own, used as a tracklog backup, especially at aerial turnpoints);</li>
        <li>Two-way radio (primarily while flying);</li>
        <li>Flashlight;</li>
        <li>Night signaling device (mandatory during night hikes);</li>
        <li>First-aid kit with emergency blanket, antihistamine, whistle and elastic adhesive bandage.</li>
      </ul>
      <p>All this equipment must remain with the pilot at all times during the race. The committee may inspect at any time — missing items result in disqualification.</p>
      <h4 style="margin-top: 24px">7.2. Recommended hiking equipment</h4>
      <p>Rain jacket, trekking poles, proper clothing, compass, knife and sunscreen.</p>
      <h4 style="margin-top: 24px">7.3. Tracker</h4>
      <ul style="padding-left: 22px">
        <li>The tracker enables real-time monitoring, but does not constitute proof of the actual course taken.</li>
        <li><strong>Race window — 6 am to 7 pm:</strong> keep the tracker on.</li>
        <li><strong>Night rest — 7 pm to 6 am:</strong> stop the race and charge the device. The pilot must reactivate the tracker within 200 m of the previous day's last breakpoint.</li>
        <li>Starting, stopping and charging the tracker is the pilot's responsibility.</li>
        <li>Misuse may result in penalties.</li>
      </ul>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">8. Safety</h3>
      <h4 style="margin-top: 24px">8.1. Emergency kit</h4>
      <p>The athlete's team must always carry an emergency kit including emergency blanket, antihistamine, whistle, elastic adhesive bandage for emergency dressings and other first-aid items.</p>
      <h4 style="margin-top: 24px">8.2. Location and safety report</h4>
      <ul style="padding-left: 22px">
        <li>All pilots must report their location — directly or through the assistant — via SMS/WhatsApp within 30 minutes of the end of the race day. Missing the report is a serious breach and results in disqualification.</li>
        <li>At the end of the day, the team must report in writing (via WhatsApp) to the Director or Race Judge any incident/accident involving the pilot or their team, so that control measures may be applied.</li>
      </ul>
      <h4 style="margin-top: 24px">8.3. Pilot withdrawal</h4>
      <p>If a pilot intends to withdraw, they must immediately notify the organization, which will remove them from the list and stop their race at the notified point.</p>
      <h4 style="margin-top: 24px">8.4. Race time and night rest</h4>
      <p>Pilots may fly between 6 am and sunset (defined and announced at the briefing). They must stop the race between 7 pm and 6 am. The tracker provides real-time monitoring.</p>
      <h4 style="margin-top: 24px">8.5. Emergency</h4>
      <p>Upon landing, the pilot must <strong>immediately</strong> gather their paraglider. A glider left unfolded means: <em>«I need help»</em>. Pilots flying nearby must provide assistance — the committee grants bonus points to whoever does.</p>
      <p>In case of an accident:</p>
      <ul style="padding-left: 22px">
        <li><strong>Step 1:</strong> call SAMU emergency services directly on <strong>192</strong>.</li>
        <li><strong>Step 2:</strong> the pilot or assistant informs the organization as soon as possible. The doctor may decide to stop a pilot unable to physically continue.</li>
      </ul>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">9. Assistants/support</h3>
      <h4 style="margin-top: 24px">9.1. Assistant</h4>
      <p>Each pilot must have at least one assistant with a support vehicle. Pilots may not change assistants during the race except with approval from the director/committee. Each assistant supports only one pilot during the race.</p>
      <h4 style="margin-top: 24px">9.2. Roles and tasks</h4>
      <p>The assistant supports the race logistics and strategy — <strong>they may not carry the pilot's equipment</strong>. They are the link between the committee and the pilot, regularly reporting position and status and providing images/information for the website and social media. They call for rescue in case of difficulty. Beyond on-course support, the assistant is responsible for assisting the athlete in any incident that removes them from the race and in case of hospitalization.</p>
      <h4 style="margin-top: 24px">9.3. Availability</h4>
      <p>The assistant must be reachable 24/7 by mobile phone.</p>
      <h4 style="margin-top: 24px">9.4. Media, video and photos</h4>
      <p>Assistant and/or pilot must send the organization a daily news item in the form of a behind-the-scenes video plus at least <strong>2 photos</strong>. May be delivered via WhatsApp or email. Failure to send at least one image per day results in a team penalty.</p>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">10. The competition</h3>
      <h4 style="margin-top: 24px">10.1. The race</h4>
      <p>The race is run on foot or by paraglider, passing through the turnpoints in the defined order.</p>
      <h4 style="margin-top: 24px">10.2. The turnpoints</h4>
      <ul style="padding-left: 22px">
        <li>Must be reached on foot, except points that allow aerial passage.</li>
        <li>At the turnpoint, pilots must sign a dedicated "VALID TURNPOINT" sign, except for aerial turnpoints, validated via tracker or the pilot's GPS.</li>
        <li>To validate the end of the race, the pilot must cross the finish gate. The first to cross the gate wins.</li>
        <li>The official route will be published on the site and social media by <strong>May 10, 2026</strong>; the cities the route passes through are already available.</li>
      </ul>
      <h4 style="margin-top: 24px">10.3. Ranking and awards</h4>
      <ul style="padding-left: 22px">
        <li>If a turnpoint is not validated, the route is considered up to the last validated turnpoint.</li>
        <li>The ranking is by order of arrival — the athlete who completes the course fastest wins.</li>
        <li>If no one finishes the entire course, the ranking is based on the remaining distance to the goal (measured at the pilot's position at the cutoff, whether on the ground or in the air).</li>
        <li>If all athletes finish before the final deadline (07/25/2026), the awards and closing ceremony may be moved up, with advance notice.</li>
        <li>Overall podium with the <strong>top five athletes</strong>.</li>
        <li>Awards include participation medals for all athletes, trophy and gifts for the top five and cash prizes for the <strong>top three</strong>.</li>
        <li>Only athletes present at the ceremony will receive their cash prize.</li>
      </ul>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">11. Protest</h3>
      <p>At registration, pilots will be informed of the members of the protest committee — three pilots chosen by the organization. This committee is sovereign and decides whether to act on the protest. Pilots who believe they have been harmed by other pilots, or by the current rules, may file a protest no later than <strong>30 minutes</strong> after the official publication of the provisional result.</p>

      <h3 style="font-family: var(--f-display); font-size: 1.6rem; margin-top: 40px">12. General provisions</h3>
      <ul style="padding-left: 22px">
        <li><strong>12.1</strong> — Upon registration, pilots must have checked and requested information regarding the equipment's EN/DHV rating.</li>
        <li><strong>12.2</strong> — The organization reserves the right to exclude any participant interfering with the smooth running of the competition.</li>
        <li><strong>12.3</strong> — Participants must respect the schedule set out in this document.</li>
        <li><strong>12.4</strong> — The event may be postponed due to weather conditions up to 3 days before check-in, in the week preceding the event, and rescheduled to a new date announced by the organization.</li>
        <li><strong>12.5</strong> — In case of stage postponement, the organization will set a new date; registrants may keep or withdraw their participation, with the spot kept or reassigned.</li>
        <li><strong>12.6</strong> — In case of withdrawal and non-participation, the pilot must notify the organization by text message or email.</li>
        <li><strong>12.7</strong> — All pilots must deliver <strong>2 minutes of video footage</strong> to the organization at the end of the competition.</li>
        <li><strong>12.8</strong> — Respect for the environment: every pilot and assistant commits to leaving no trace of their passage and to respecting the environment.</li>
      </ul>
`,

    // ===== FAQ =====
    "faq.head.eyebrow": "FAQ",
    "faq.head.title": "Frequently Asked Questions",
    "faq.head.sub": "Most common questions about registration, equipment, support team and safety.",
    "faq.q1.title": "Who can apply?",
    "faq.q1.body": "Pilots with an active CBVL/FAI license, EN-D or lower, and proof of at least 100 hours of mountain free flight.",
    "faq.q2.title": "How much does it cost?",
    "faq.q2.body": "The fee includes the GPS tracker, race kit, accommodation at official points and insurance. Check the current fee on the registration page.",
    "faq.q3.title": "Can I take part without a support team?",
    "faq.q3.body": "It's possible, but the organization strongly recommends having at least one support person. The team helps with safety, food/water logistics and rescue.",
    "faq.q4.title": "How does rescue work?",
    "faq.q4.body": "The pilot triggers via radio or the tracker's SOS. The organization activates the nearest SAR system and the on-duty medical team. Every pilot must attend the mandatory safety briefing.",

    // ===== GALERIA / FOTOS =====
    "gal.head.eyebrow": "GALLERY",
    "gal.head.title": "Photos from past editions",
    "gal.head.sub": "Take-offs, thermals, grass landings, teams in action. Each edition in its own album.",
    "gal.2023.tag": "1st Edition",
    "gal.2023.date": "2023 · NORTHWEST CAPIXABA",
    "gal.2023.title": "Photos 2023",
    "gal.2023.desc": "18 athletes. Start in Ecoporanga, finish in Pancas. The inaugural edition.",
    "gal.2024.tag": "2nd Edition",
    "gal.2024.date": "2024 · CENTRAL-SOUTH",
    "gal.2024.title": "Photos 2024",
    "gal.2024.desc": "Pancas to Venda Nova do Imigrante. Turnpoints in Baixo Guandú, Itaguaçu and Afonso Cláudio.",
    "gal.2025.tag": "3rd Edition",
    "gal.2025.date": "2025 · SOUTHERN CAPIXABA",
    "gal.2025.title": "Photos 2025",
    "gal.2025.desc": "Venda Nova do Imigrante to Itapaboana Bridge. 22 athletes, 4 countries, 125.8 km.",
    "fotos.viewAll": "Back to gallery →",
    "fotos.2023.eyebrow": "GALLERY · 1ST EDITION",
    "fotos.2023.title": "Photos 2023",
    "fotos.2023.sub": "18 athletes. Start in Ecoporanga, passing through Vila Pavão and Águia Branca. Finish in Pancas.",
    "fotos.2024.eyebrow": "GALLERY · 2ND EDITION",
    "fotos.2024.title": "Photos 2024",
    "fotos.2024.sub": "Start in Pancas, turnpoints in Baixo Guandú, Itaguaçu and Afonso Cláudio. Finish in Venda Nova do Imigrante.",
    "fotos.2025.eyebrow": "GALLERY · 3RD EDITION",
    "fotos.2025.title": "Photos 2025",
    "fotos.2025.sub": "22 athletes, 4 countries, 125.8 km. From the briefing to the awards — the moments that defined the 3rd edition.",
    "fotos.2025.s1.eyebrow": "BRIEFING",
    "fotos.2025.s1.title": "Technical meeting and dry-run start",
    "fotos.2025.s2.eyebrow": "START",
    "fotos.2025.s2.title": "Venda Nova do Imigrante",
    "fotos.2025.s3.eyebrow": "LAUNCH",
    "fotos.2025.s3.title": "Alegre launch site",
    "fotos.2025.s4.eyebrow": "FLIGHTS",
    "fotos.2025.s4.title": "Along the route: Alegre, Filetti, Forno Grande, Fazenda",
    "fotos.2025.s5.eyebrow": "FINISH",
    "fotos.2025.s5.title": "Itapaboana Bridge",
    "fotos.2025.s6.eyebrow": "AWARDS",
    "fotos.2025.s6.title": "Closing ceremony",

    // ===== RESULTADOS =====
    "res.2023.eyebrow": "2023 EDITION · 1ST EDITION",
    "res.2023.title": "Results 2023",
    "res.2023.sub": "18 athletes. Start in Ecoporanga, passing through Vila Pavão, Águia Branca and finishing in Pancas. The inaugural route of the competition.",
    "res.2023.overall.eyebrow": "OVERALL STANDINGS",
    "res.2023.overall.title": "Overall 2023",
    "res.2024.eyebrow": "2024 EDITION · 2ND EDITION",
    "res.2024.title": "Results 2024",
    "res.2024.sub": "Start in Pancas, turnpoints in Baixo Guandú, Itaguaçu and Afonso Cláudio. Finish in Venda Nova do Imigrante.",
    "res.2024.overall.eyebrow": "OVERALL STANDINGS",
    "res.2024.overall.title": "Overall 2024",
    "res.2025.eyebrow": "2025 EDITION · OVERALL",
    "res.2025.title": "Results 2025",
    "res.2025.sub": "23 pilots started in Venda Nova do Imigrante. 19 crossed the finish line at Itapaboana Bridge after 125.8 km on foot and in the air.",
    "res.2025.podio.eyebrow": "PODIUM",
    "res.2025.podio.title": "Top 3 overall",
    "res.2025.overall.eyebrow": "OVERALL STANDINGS",
    "res.2025.overall.title": "Overall 2025",
    "res.tbl.rank": "Rank",
    "res.tbl.competitor": "Competitor",
    "res.tbl.num": "No.",
    "res.tbl.athlete": "Athlete",
    "res.tbl.country": "Country",
    "res.tbl.gender": "Gen.",
    "res.tbl.glider": "Glider",
    "res.tbl.sponsor": "Sponsor",
    "res.tbl.civl": "CIVL",
    "res.tbl.time": "Time",
    "res.tbl.dist": "Distance",
    "res.tbl.arrival": "Arrival",
    "res.tbl.bonus": "Sebrae bonus",

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
