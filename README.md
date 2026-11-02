# lp-mari-barrozo

Landing page de vendas do programa **Meu Primeiro Cachorro Sem Erros**, da Mari Barrozo
(cliente da galaxIA, WORK #588). React + Vite + Tailwind 4, pronta para importar no Lovable.

Copy: Google Doc "[Copy LP <> Mari Barrozo]" v1.0, texto exato, 8 dobras.

## Rodar

```bash
bun install
bun run dev      # http://localhost:8080
bun run build
```

## Pendências (buracos amarelos "PENDENTE" na página)

Quase tudo se resolve em `src/config.ts`: preencheu o valor, o buraco some.

| Buraco | Onde preencher |
|---|---|
| VSL | `config.vslEmbedUrl` |
| Foto da Mari com um dos primeiros cachorros (dobra 2) | trocar o `<Pendente>` da dobra 2 em `src/App.tsx` |
| Mockup do pacote (dobra 6) | trocar o `<Pendente>` da dobra 6 em `src/App.tsx` |
| Preço de hoje e parcelas (dobra 7) | `config.precoHoje`, `config.parcelas` |
| Valores das aulas, dos 5 bônus e do total (dobra 6) | `config.valores` |
| Tempo de acesso (dúvidas) | `config.tempoDeAcesso` |
| Link do checkout (3 botões) | `config.checkoutUrl` |
| GTM e pixel Meta | comentários `PENDENTE` no `index.html` |

Atenção na copy: o "Valor oficial" riscado está como R$ 497 (sem colchete, então foi mantido),
mas a soma sugerida dos itens dá R$ 492. Confirmar com a Mari.

Logo: não existe ainda ("no aguardo da logo", doc Infos no Drive). O topo usa o nome em texto.

## Fotos

Originais em `../00-fontes/fotos/`. Versões otimizadas (webp) em `src/assets/fotos/`.

- **Topo: IMG_2601 (golden)**: filhote olhando para a câmera, sorriso dos dois, luz quente de casa; é o "primeiro cachorro" da promessa e deu a paleta caramelo da página.
- Grade 1, IMG_2600 (pastor australiano): abraço mais carinhoso de todas, ambiente de casa, abre a grade em destaque.
- Grade 2, IMG_8083 (bernese): a alegria mais aberta, filhote de língua de fora; o céu azul dá contraste no meio da grade.
- Grade 3, IMG_2598 (lulu): tons creme e foco nítido, mostra raça pequena e variedade.
- Grade 4, IMG_2602 (Tom, cocker): beijo no cachorro, prova de vínculo e cuidado; a bandana com nome reforça o lado profissional.
- Grade 5, IMG_2596 (shih tzu): boa foto, mas o fundo de festa colorido é o mais carregado, por isso fecha a grade.
