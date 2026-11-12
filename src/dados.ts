/**
 * Fonte única: textos, contatos, preços, FAQ e SEO do site da Dev Batista.
 * Para mudar preço, WhatsApp ou textos, mexa só aqui.
 */
export const marca = {
  nome: "Dev Batista",
  responsavel: "João Batista",
  url: "https://joaobatistadev.site",
  whatsapp: "5515998394854",
  instagram: "",
  msgPadrao: "Olá, João! Vim pelo site da Dev Batista e quero conversar sobre um site para o meu negócio.",
};

export const seo = {
  titulo: "Dev Batista · Criação de sites para pequenos negócios",
  descricao:
    "Sites rápidos para pequenos negócios: WhatsApp com mensagem pronta, horário atualizado, Google e mapa. Prévia grátis antes de fechar. A partir de R$ 790.",
  imagem: "/og.jpg",
};

export const nav = [
  { label: "O que vem no site", href: "#site" },
  { label: "Como funciona", href: "#processo" },
  { label: "Investimento", href: "#investimento" },
  { label: "Dúvidas", href: "#duvidas" },
];

export const hero = {
  kicker: "Criação de sites para pequenos negócios",
  titulo: ["Sites que fazem o cliente", "chamar no WhatsApp."],
  texto:
    "Uma página rápida, com a cara do seu negócio, que mostra o que você vende, quando está aberto e onde fica. E leva o cliente direto para a sua conversa.",
  provas: ["Prévia grátis antes de fechar", "Pronto em até 5 dias úteis", "Site e domínio no seu nome"],
};

/** Negócio fictício usado na demonstração do celular. */
export const demo = {
  nome: "Café Aurora",
  tipo: "Cafeteria · Centro",
  horarios: { 0: null, 1: [7, 19], 2: [7, 19], 3: [7, 19], 4: [7, 19], 5: [7, 19], 6: [8, 13] } as Record<number, [number, number] | null>,
  itens: [
    { nome: "Pão de queijo", preco: "R$ 6" },
    { nome: "Cappuccino", preco: "R$ 9" },
    { nome: "Bolo do dia", preco: "R$ 8" },
  ],
};

export const dor = {
  kicker: "Por que um site",
  titulo: "O cliente procura no Google antes de chamar. O que ele encontra hoje?",
  itens: [
    { de: "Horário desatualizado no Google", para: "“Aberto agora” sempre certo, calculado sozinho" },
    { de: "Preços e produtos perdidos no feed do Instagram", para: "Catálogo organizado, cada item com botão de pedido" },
    { de: "“Qual o endereço?” toda hora no Direct", para: "Mapa e rota a um toque" },
    { de: "Cliente que desiste antes de perguntar", para: "WhatsApp com a mensagem já escrita" },
  ],
  segmentos: ["Farmácias", "Academias", "Padarias", "Restaurantes", "Salões e barbearias", "Pet shops", "Clínicas", "Lojas", "Oficinas", "Prestadores de serviço"],
};

export const recursos = {
  kicker: "O que vem no site",
  titulo: "Tudo o que faz o cliente decidir. Nada que atrapalhe.",
  itens: [
    { icone: "whats", titulo: "WhatsApp com mensagem pronta", texto: "Cada produto, plano ou serviço tem o seu botão. O cliente toca e a conversa já começa com o que ele quer." },
    { icone: "relogio", titulo: "“Aberto agora” automático", texto: "O site mostra se você está aberto e até que horas, no fuso certo, sem você atualizar nada." },
    { icone: "lista", titulo: "Catálogo por categoria", texto: "Produtos, planos ou serviços organizados, com filtros. Sem PDF, sem foto de cardápio torta." },
    { icone: "google", titulo: "Pronto para o Google", texto: "Dados estruturados, título e descrição certos e informações iguais às do seu Perfil da Empresa." },
    { icone: "mapa", titulo: "Mapa e rota", texto: "Endereço, horários e o botão “Como chegar” que abre o GPS do cliente." },
    { icone: "raio", titulo: "Rápido no celular", texto: "Carrega em segundos no 4G. O visitante não espera, e o Google valoriza isso." },
  ],
};

export const processo = {
  kicker: "Como funciona",
  titulo: "Você vê o seu site antes de decidir.",
  passos: [
    { titulo: "Prévia sem compromisso", texto: "Eu estudo o seu negócio no Google e no Instagram e monto uma prévia do seu site. Você recebe o link no WhatsApp." },
    { titulo: "Ajustamos juntos", texto: "Gostou? Combinamos fotos, produtos e textos. Você aprova cada detalhe antes de publicar." },
    { titulo: "No ar, no seu nome", texto: "Registramos o domínio e a hospedagem no seu nome, e eu publico. O site é seu de verdade." },
    { titulo: "Cliente chegando", texto: "Link no Instagram, no Google e no WhatsApp Business. E você acompanha os cliques no WhatsApp." },
  ],
};

export const conceitos = {
  kicker: "Estilos",
  titulo: "Cada negócio com a sua cara.",
  texto: "Nada de modelo pronto. A identidade vem das suas cores, das suas fotos e do jeito que você atende. Alguns estilos que eu trabalho:",
  itens: [
    { nome: "Tradicional e acolhedor", exemplo: "Farmácia de manipulação, padaria, empório", fundo: "#F4EDE1", tinta: "#2A1A17", destaque: "#7A1E2B", fonte: "serif", titulo: "Tradição que se sente no balcão.", etiqueta: "Feito à mão" },
    { nome: "Energia e contraste", exemplo: "Academia, estúdio, esportes", fundo: "#0B0B0B", tinta: "#F4F2EC", destaque: "#FFD21A", fonte: "display", titulo: "TREINE MAIS FORTE HOJE.", etiqueta: "Aberto agora · 6h–22h" },
    { nome: "Leve e cuidadoso", exemplo: "Clínica, salão, estética", fundo: "#EEF2F0", tinta: "#1E2B27", destaque: "#3C8C76", fonte: "sans", titulo: "Cuidado em cada detalhe.", etiqueta: "Agende pelo WhatsApp" },
  ],
};

export const diferenciais = {
  kicker: "Por que comigo",
  titulo: "Feito por quem atende você do começo ao fim.",
  itens: [
    { titulo: "Você fala direto com quem faz", texto: "Sem atendente, sem agência no meio. Dúvida, ajuste ou ideia: é comigo." },
    { titulo: "Tudo no seu nome", texto: "Domínio, hospedagem e código são seus. Se um dia quiser mudar de profissional, leva tudo." },
    { titulo: "Sem mensalidade obrigatória", texto: "Depois de pronto, o custo é só o domínio: R$ 40 por ano. A hospedagem é gratuita." },
    { titulo: "Prévia antes de pagar", texto: "Você vê o seu site funcionando antes de fechar qualquer coisa." },
  ],
};

export const investimento = {
  kicker: "Investimento",
  titulo: "Preço fechado. Sem surpresa.",
  pacotes: [
    {
      nome: "Essencial",
      preco: "790",
      texto: "Para começar com o pé direito.",
      itens: ["Site de uma página, no celular e no computador", "Até 12 produtos, planos ou serviços", "WhatsApp com mensagem pronta em cada botão", "“Aberto agora”, mapa e rota", "Pronto para o Google (SEO local)", "1 rodada de ajustes"],
    },
    {
      nome: "Completo",
      preco: "1.290",
      destaque: "Recomendado",
      texto: "Para quem quer o site trabalhando de verdade.",
      itens: ["Tudo do Essencial", "Até 40 itens com filtro por categoria", "Seção especial do seu negócio (grade de aulas, cardápio, agenda…)", "Avaliações reais do Google", "Ajuste do seu Perfil da Empresa no Google", "Contagem de cliques no WhatsApp", "2 rodadas de ajustes"],
    },
  ],
  extra: "Manutenção opcional: R$ 89/mês, com até 4 alterações por mês e relatório de cliques.",
  aparte: "À parte, no seu nome: domínio .com.br no Registro.br (R$ 40/ano). Hospedagem gratuita na Cloudflare.",
  pagamento: "50% para começar e 50% na entrega, ou em até 3x no cartão.",
};

export const faq = [
  { p: "Quanto custa um site para pequeno negócio?", r: "Os sites da Dev Batista começam em R$ 790 (Essencial) e R$ 1.290 (Completo), com preço fechado. Depois de pronto, o único custo fixo é o domínio .com.br, R$ 40 por ano, pago direto ao Registro.br." },
  { p: "Preciso pagar mensalidade?", r: "Não. A hospedagem é gratuita na Cloudflare. A manutenção mensal (R$ 89) é opcional, para quem quer que eu atualize produtos, preços e horários." },
  { p: "Em quanto tempo o site fica pronto?", r: "Em até 5 dias úteis depois de receber fotos e informações. Como a prévia já sai antes do fechamento, boa parte do trabalho está adiantada." },
  { p: "O site e o domínio ficam no meu nome?", r: "Sim. O domínio é registrado no seu CPF ou CNPJ, a conta de hospedagem é criada com o seu e-mail e você recebe o código do site no final." },
  { p: "Preciso enviar textos e fotos?", r: "Ajuda, mas não é obrigatório. Eu parto do que já existe no seu Google e Instagram, e combinamos juntos o que melhorar." },
  { p: "Funciona no celular?", r: "Sim. O site é pensado primeiro para o celular, que é de onde vem a maioria dos clientes de negócios locais." },
];

export const ctaFinal = {
  titulo: "Quer ver como ficaria o site do seu negócio?",
  texto: "Me mande o nome ou o Instagram do seu negócio. Eu preparo uma prévia sem compromisso e te envio pelo WhatsApp.",
  botao: "Quero minha prévia grátis",
  msg: "Olá, João! Quero uma prévia grátis do site do meu negócio. O nome/Instagram é: ",
};
