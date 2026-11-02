/**
 * Tudo o que ainda depende da Mari ou da galaxIA mora aqui.
 * Valor null = PENDENTE: a página mostra o buraco amarelo no lugar.
 * Preencheu aqui, o buraco some sozinho. Nada de preço ou prazo inventado.
 */
export const config = {
  /** Link do checkout (Hotmart, Kiwify ou outro). Os 3 botões apontam para ele. */
  checkoutUrl: null as string | null,

  /** URL de embed do VSL (YouTube, Vimeo, Panda). */
  vslEmbedUrl: null as string | null,

  /** Preço de hoje, ex.: "R$ 197". */
  precoHoje: null as string | null,

  /** Parcelamento, ex.: "12x de R$ 19,70". */
  parcelas: null as string | null,

  /** Tempo de acesso, ex.: "Acesso por 1 ano." */
  tempoDeAcesso: null as string | null,

  /**
   * Valor de cada item da dobra 6, em reais (valores da copy). O calendário de vacinas
   * subiu de R$ 27 para R$ 32 para a soma bater com o valor oficial (Marcelo, 02/11/2026).
   * O total não é digitado: é a soma dos itens.
   */
  valores: {
    aulas: 297,
    listaDeCompras: 47,
    guiaDeBrinquedos: 37,
    aulaExtra: 47,
    planner: 37,
    calendarioVacinas: 32,
  },

  /** Valor oficial riscado na dobra 7, em reais. Tem que ser igual à soma dos itens. */
  valorOficial: 497,
};

/** Contato: um texto para exibir e o link de destino. */
export type Contato = { texto: string; url: string };

/** DDD + número, só dígitos. Único lugar onde o WhatsApp é escrito. */
const whatsappDigitos = "43998136388";
/** Usuário do Instagram, sem @. */
const instagramUsuario = "maribarrozo.pet";

/** Dados do flyer oficial da Mari (aprovados pelo Marcelo em 02/11/2026). */
export const marca = {
  nome: "Mari Barrozo",
  assinatura: "Pet Concierge",
  credencial: "Mais de 25 anos de dedicação em Londrina",
  servicos: [
    "Visitas presenciais (pet sitter)",
    "Hospedagem familiar selecionada",
    "Relatórios diários com fotos e vídeos",
  ],
  whatsapp: {
    texto: `(${whatsappDigitos.slice(0, 2)}) ${whatsappDigitos.slice(2, 7)}-${whatsappDigitos.slice(7)}`,
    url: `https://wa.me/55${whatsappDigitos}`,
  } satisfies Contato,
  instagram: {
    texto: `@${instagramUsuario}`,
    url: `https://www.instagram.com/${instagramUsuario}/`,
  } satisfies Contato,
};
