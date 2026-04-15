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
    text: 'Apresentação estratégica da Empresa PARA. Um documento essencial que sintetiza a visão transformadora, o modelo de negócio, impacto corporativo e as oportunidades de parceria que definem a atuação estratégica da organização.',
    highlights: [
      'Visão e missão estratégica da Empresa PARA',
      'Modelo de impacto social e corporativo',
      'Oportunidades de parcerias e engajamento'
    ]
  },
  'mentor-empresa': {
    title: 'Mentor Líder – Roberto Cysne',
    text: 'CEO do CEDEPPE, Roberto Cysne é Químico Industrial com Doutorado em Química Orgânica (UFRJ) e Pós-Doutorado pela Universidade de Manchester. Especialista em gestão organizacional, sistemas de qualidade e inovação, com trajetória consolidada em geração de negócios, planejamento estratégico e mentoria de empreendedores de alto impacto.',
    highlights: [
      'Doutorado em Química Orgânica - UFRJ',
      'Pós-Doutorado em Gestão de Processos Industriais - Manchester',
      'Expertise em sistemas de gestão, qualidade e responsabilidade social corporativa',
      'Mentor de empreendedores ambiciosos e líderes estratégicos',
      'Excelente orador e instrutor de renome corporativo e acadêmico'
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
    title: 'Projeto Passarelas – Aceleração de Talentos Femininos',
    text: 'Trilha estruturada em 7 passos para acelerar o desenvolvimento de talentos femininos, promovendo transição de carreira, liderança e protagonismo no mercado corporativo. Um programa transformador com mentorias especializadas e networking de impacto.',
    highlights: [
      'Passo 1: Diagnóstico e mapeamento de competências',
      'Passo 2: Construção de plano de desenvolvimento personalizado',
      'Passo 3: Mentoria especializada em liderança feminina',
      'Passo 4: Desenvolvimento de marca pessoal e comunicação',
      'Passo 5: Networking com líderes e oportunidades corporativas',
      'Passo 6: Preparação para transição e posicionamento',
      'Passo 7: Acompanhamento contínuo e suporte em carreira'
    ]
  },
  gerencia: {
    title: 'Gerência 360º – Múltiplas Áreas',
    text: 'Programa abrangente para gestores de diferentes áreas que buscam ampliar sua visão estratégica e habilidade de conduzir equipes de alta performance. Cada área possui mentorias customizadas e abordagens integradas.',
    highlights: [
      'Área de Operações: Gestão de processos e eficiência',
      'Área de Recursos Humanos: Desenvolvimento de pessoas e cultura',
      'Área Comercial: Estratégia de vendas e expansão',
      'Área Financeira: Governança e resultados sustentáveis',
      'Área de Inovação: Transformação digital e modernização',
      'Gestão integrada entre áreas e funcionalidades',
      'Ferramentas de liderança, metas e performance'
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
  const phone = leadForm.elements.phone.value.trim();
  const email = leadForm.elements.email.value.trim();

  if (!name || !email || !phone) {
    alert('Por favor, preencha todos os campos para participar.');
    return;
  }

  // Monta a mensagem para WhatsApp
  const message = `Olá! Gostaria de participar do CEDEPPE Mentorias.\n\nDados:\nNome: ${name}\nTelefone: ${phone}\nE-mail: ${email}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappPhone = '5541997642212'; // Número sem caracteres especiais
  const whatsappLink = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;

  // Abre o WhatsApp em nova aba
  window.open(whatsappLink, '_blank');

  alert(`Obrigado, ${name}! Abrindo WhatsApp para confirmar sua inscrição no CEDEPPE Mentorias.`);
  leadForm.reset();
});
