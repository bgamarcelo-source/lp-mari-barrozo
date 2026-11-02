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
