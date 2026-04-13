const detailPanel = document.getElementById('detail-panel');
const cards = document.querySelectorAll('.card');
const homeScreen = document.getElementById('home-screen');

const sectionData = {
  portfolio: {
    title: 'Portfólio CEDEPPE',
    text: 'Conheça o núcleo de soluções do CEDEPPE para formação de líderes, desenvolvimento profissional e capacitação corporativa. O portfólio reúne programas customizados para grandes empresas, líderes e jovens talentos.',
    highlights: [
      'Metodologias exclusivas de mentoria e coaching',
      'Integração entre inteligência de negócios e desenvolvimento humano',
      'Conexões entre mentores, associados e redes corporativas'
    ]
  },
  executivo: {
    title: 'Sumário Executivo',
    text: 'Documento estratégico para apresentação de resultados, objetivos e oportunidades de parcerias. Ideal para potenciais associados, patrocinadores e empresas em processo de expansão.',
    highlights: [
      'Visão corporativa de alto padrão',
      'Prioridades de impacto e crescimento sustentável',
      'Modelo de engajamento para mentores e rede de apoio'
    ]
  },
  'mentor-empresa': {
    title: 'Mentor Líder – Modo Empresarial',
    text: 'Programa dedicado a mentores com experiência em gestão empresarial, inovação e governança. O foco é apoiar líderes em decisões estratégicas e na consolidação de resultados.',
    highlights: [
      'Mentoria voltada para decisões de alto impacto',
      'Apoio em planejamento estratégico e gestão de crise',
      'Troca de experiências entre executivos e consultores'
    ]
  },
  'mentora-comunicacao': {
    title: 'Mentora Líder – Modo Comunicação',
    text: 'Programa criado para mentoras que atuam em comunicação corporativa, imagem e relações públicas. Oferece suporte para desenvolvimento de narrativas, apresentações e posicionamento público.',
    highlights: [
      'Coaching de comunicação executiva',
      'Desenvolvimento de marca pessoal e institucional',
      'Aprimoramento de presença digital e media training'
    ]
  },
  mentoring: {
    title: 'Mentoring no CEDEPPE',
    text: 'Modelo contínuo de mentoria com foco em resultados reais. O CEDEPPE conecta líderes e mentores para orientar trajetórias profissionais, projetos estratégicos e mudanças de carreira.',
    highlights: [
      'Sessões individuais e em grupo',
      'Acompanhamento estruturado de metas',
      'Rede de apoio com foco em excelência profissional'
    ]
  },
  passarelas: {
    title: 'Projeto Passarelas',
    text: 'Iniciativa que apoia a transição de carreiras, promovendo a entrada de novos talentos em ambientes corporativos e de liderança, com mentorias guiadas e atividades práticas.',
    highlights: [
      'Conexão entre profissionais e empresas',
      'Desenvolvimento de competências profissionais',
      'Preparação para programas de liderança'
    ]
  },
  gerencia: {
    title: 'Gerência 360º',
    text: 'Programa para gestores e coordenadores que desejam ampliar sua visão estratégica e habilidade de conduzir equipes de alta performance em ambientes complexos.',
    highlights: [
      'Gestão integrada de pessoas e processos',
      'Fortalecimento de liderança de médio escalão',
      'Ferramentas para governança, metas e resultados'
    ]
  },
  universitarios: {
    title: 'Universitários Ambiciosos',
    text: 'Trilha de desenvolvimento para universitários com alto potencial. O programa oferece mentoria, orientação de carreira e networking com líderes de mercado.',
    highlights: [
      'Programa de orientação para entrada no mercado',
      'Mentoria de carreira para talentos emergentes',
      'Acesso a eventos e conexões institucionais'
    ]
  },
  'idade-plena': {
    title: 'Idade Plena',
    text: 'Programa pensado para profissionais em fase madura de carreira, que desejam consolidar legado, ampliar impacto e apoiar novas gerações por meio de mentoria qualificada.',
    highlights: [
      'Mentoria de legado e transição',
      'Consultoria para desenvolvimento de projetos sociais',
      'Apoio a lideranças intergeracionais'
    ]
  },
  globall: {
    title: 'Go Glob@l',
    text: 'Portal de mentoria global voltado a conexões internacionais e apoio a empresas e mentores que atuam em mercados estrangeiros. Uma ponte para experiências, intercâmbios e parcerias.',
    highlights: [
      'Conexões com redes internacionais',
      'Apoio em projetos transfronteiriços',
      'Visão global de liderança e inovação'
    ]
  }
};

function createDetailSection(section) {
  const card = document.createElement('article');
  card.className = 'detail-card';

  const title = document.createElement('h2');
  title.textContent = section.title;
  card.appendChild(title);

  const paragraph = document.createElement('p');
  paragraph.textContent = section.text;
  card.appendChild(paragraph);

  if (section.highlights && section.highlights.length > 0) {
    const list = document.createElement('ul');
    section.highlights.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    card.appendChild(list);
  }

  const button = document.createElement('button');
  button.className = 'back-button';
  button.textContent = 'Voltar';
  button.addEventListener('click', showHome);
  card.appendChild(button);

  return card;
}

function showSection(id) {
  const section = sectionData[id];
  if (!section) return;

  detailPanel.innerHTML = '';
  detailPanel.classList.remove('hidden');
  detailPanel.appendChild(createDetailSection(section));
  detailPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showHome() {
  detailPanel.innerHTML = '';
  detailPanel.classList.add('hidden');
  homeScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

cards.forEach(card => {
  card.addEventListener('click', () => {
    const target = card.dataset.target;
    showSection(target);
  });
});

const leadForm = document.getElementById('lead-form');
leadForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = leadForm.elements.name.value.trim();
  const email = leadForm.elements.email.value.trim();

  if (!name || !email) {
    alert('Por favor, preencha nome e e-mail para participar.');
    return;
  }

  alert(`Obrigado, ${name}! Sua inscrição para o CEDEPPE Mentorias foi registrada localmente como demonstração.`);
  leadForm.reset();
});
