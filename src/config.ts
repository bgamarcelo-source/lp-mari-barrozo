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

  /** Logo oficial MB (arquivo da Mari, nunca recriado nem recortado de print). Ex.: "/logo-mb.svg". */
  logoUrl: null as string | null,

  /** Preço de hoje, ex.: "R$ 197". */
  precoHoje: null as string | null,

  /** Parcelamento, ex.: "12x de R$ 19,70". */
  parcelas: null as string | null,

  /** Tempo de acesso, ex.: "Acesso por 1 ano." */
  tempoDeAcesso: null as string | null,

  /**
   * Valor de cada item da dobra 6. A copy traz sugestões entre colchetes
   * (R$ 297, 47, 37, 47, 37, 27, total 492), ainda não aprovadas.
   */
  valores: {
    aulas: null as string | null,
    listaDeCompras: null as string | null,
    guiaDeBrinquedos: null as string | null,
    aulaExtra: null as string | null,
    planner: null as string | null,
    calendarioVacinas: null as string | null,
    total: null as string | null,
  },
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
