import type { SiteContent } from "@/types/content";

// Destino único de todos os botões "Falar sobre meu projeto". Substitua pelo seu contato real.
const CONTACT_URL = "https://wa.me/5500000000000";

export const site = {
  brand: "DEVJ Batista",
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#processo" },
    { label: "Projetos", href: "#projetos" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Falar sobre meu projeto", href: CONTACT_URL },

  hero: {
    eyebrow: "Presença digital. Impacto real.",
    title: "Seu negócio merece um site profissional.",
    description:
      "Sites claros, bonitos e fáceis de usar para pequenos negócios. Uma presença online à altura do que você faz todos os dias.",
    secondaryCta: { label: "Ver como funciona", href: "#processo" },
    tagline: "Feito para quem faz o próprio negócio acontecer.",
    highlights: ["Design cuidadoso", "Tecnologia simples", "Contato direto"],
  },

  value: {
    eyebrow: "Menos complicação",
    title: "Você cuida do seu negócio. Eu cuido da sua presença na internet.",
    context:
      "Seu cliente procura informações antes de entrar em contato. Um site reúne o que ele precisa saber: o que você oferece, onde encontrar e como falar com você.",
    segmentsLabel: "Para negócios locais e profissionais independentes",
    segments: ["Restaurantes", "Salões", "Profissionais autônomos", "Clínicas", "Lojas", "Prestadores de serviços"],
  },

  services: {
    eyebrow: "Serviços",
    title: "O essencial. Bem feito.",
    description:
      "Tudo o que seu cliente precisa para conhecer seu negócio e dar o próximo passo. Sem excesso, sem complicação.",
    primary: [
      {
        icon: "monitor-smartphone",
        title: "Site responsivo",
        description:
          "Uma experiência cuidadosa no celular, no tablet e no computador. Seu negócio bem apresentado em qualquer tela.",
        preview: "responsive",
      },
      { icon: "layout-grid", title: "Serviços/produtos", description: "O que você oferece, organizado com clareza." },
      { icon: "images", title: "Galeria", description: "Fotos que mostram seu trabalho e seu espaço." },
    ],
    reach: [
      { icon: "message-circle", title: "WhatsApp", description: "Um caminho direto para iniciar uma conversa." },
      { icon: "share-2", title: "Redes sociais", description: "Seus canais conectados em um só lugar." },
      { icon: "map-pin", title: "Google Maps", description: "Sua localização fácil de encontrar." },
      { icon: "search", title: "SEO básico", description: "Estrutura e informações pensadas para as buscas." },
    ],
  },

  process: {
    eyebrow: "Processo",
    title: "Da conversa ao site no ar.",
    description: "Você participa das decisões. Eu cuido da parte técnica.",
    steps: [
      { title: "Conversamos", description: "Entendo seu negócio, seu público e o que você espera do site." },
      { title: "Definimos", description: "Organizamos o conteúdo, a estrutura e os detalhes do projeto." },
      { title: "Desenvolvo", description: "Transformo as ideias em um site e compartilho com você para revisão." },
      { title: "Publicamos", description: "Com tudo alinhado, colocamos o site no ar e conferimos os detalhes." },
    ],
  },

  projects: {
    eyebrow: "Projetos",
    title: "Um olhar para o que vem.",
    description:
      "O portfólio virá em breve. Por enquanto, estes conceitos ilustrativos mostram possibilidades de design — não são projetos de clientes.",
    status: "Portfólio em breve",
    mockup: { label: "Prévia de conceito", menu: ["Sobre", "Serviços", "Contato"], cta: "Saiba mais" },
    concepts: [
      {
        caption: "Conceito ilustrativo",
        title: "Uma vitrine para negócios locais.",
        category: "Negócio local",
        headline: "Seu espaço. Sua essência.",
        description: "Um lugar para conhecer, se inspirar e sentir-se bem.",
        theme: {
          stage: "#252629",
          window: "#eae5db",
          chrome: "#dad4ca",
          panel: "#dacdbb",
          accent: "#aa7956",
          shape: { colors: ["#ecdcc6", "#c9a888", "#8a6748"], width: "61%", height: "85%" },
        },
      },
      {
        caption: "Conceito ilustrativo",
        title: "Uma presença para quem cuida.",
        category: "Serviços",
        headline: "Cuidado em cada detalhe.",
        description: "Conheça um jeito mais simples de encontrar o que você precisa.",
        theme: {
          stage: "#1c2434",
          window: "#e8edf4",
          chrome: "#d6dde8",
          panel: "#d5dbea",
          accent: "#777bc9",
          shape: { colors: ["#c9ccf0", "#9a9de0", "#6468b4"], width: "75%", height: "84%" },
        },
      },
    ],
  },

  differentials: {
    eyebrow: "Diferenciais",
    title: "Bom design. Sem complicar.",
    description: "A tecnologia fica nos bastidores. Seu negócio e seus clientes ficam no centro.",
    items: [
      { icon: "messages-square", title: "Comunicação direta", description: "Você fala com quem desenvolve o seu site." },
      { icon: "sliders-horizontal", title: "Projeto personalizado", description: "Sua identidade e suas necessidades guiam o design." },
      { icon: "smartphone", title: "Responsividade", description: "Uma navegação pensada para diferentes telas." },
      { icon: "zap", title: "Velocidade", description: "Estrutura leve e atenção ao carregamento." },
      { icon: "sparkles", title: "Simplicidade", description: "Informações claras. Caminhos fáceis. Sem excessos." },
    ],
  },

  investment: {
    eyebrow: "Seu próximo passo",
    title: "Sites a partir de R$ 597",
    description: "Vamos entender o que seu negócio precisa e definir o escopo do seu projeto.",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Dúvidas? Vamos simplificar.",
    description: "Respostas claras para começar com tranquilidade.",
    items: [
      {
        question: "O que está incluído no valor inicial?",
        answer:
          "O escopo é definido na conversa sobre o projeto. As páginas, os recursos e o conteúdo necessários ajudam a determinar a proposta.",
      },
      {
        question: "Preciso ter domínio e hospedagem?",
        answer:
          "Para publicar um site, é necessário um domínio e uma hospedagem. Podemos avaliar o que você já tem e conversar sobre o que será necessário.",
      },
      {
        question: "Quanto tempo leva para ficar pronto?",
        answer: "O prazo depende do escopo, dos materiais disponíveis e das revisões. Ele é alinhado antes do desenvolvimento.",
      },
      {
        question: "Preciso enviar textos e fotos?",
        answer:
          "Informações sobre seu negócio e imagens ajudam a construir um site com a sua identidade. Na conversa inicial, organizamos os materiais necessários.",
      },
      {
        question: "O site funciona no celular?",
        answer: "Sim. O desenvolvimento é responsivo, com layout adaptado para celulares, tablets e computadores.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Seu negócio, mais presente",
    title: "Vamos colocar seu negócio na internet?",
    description: "Conte um pouco sobre o que você faz. O próximo passo começa com uma boa conversa.",
  },

  footer: {
    copyright: "© 2026 DEVJ Batista. Todos os direitos reservados.",
    signature: "Desenvolvimento web para pequenos negócios.",
  },
} satisfies SiteContent;
