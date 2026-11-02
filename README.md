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
| Mockup do pacote (dobra 6) | trocar o `<Pendente>` da dobra 6 em `src/App.tsx` |
| Preço de hoje e parcelas (dobra 7) | `config.precoHoje`, `config.parcelas` |
| Tempo de acesso (dúvidas) | `config.tempoDeAcesso` |
| Link do checkout (3 botões) | `config.checkoutUrl` |
| GTM e pixel Meta | comentários `PENDENTE` no `index.html` |

Valores da dobra 6: os da copy, em `config.valores`. O calendário de vacinas foi de R$ 27 para R$ 32
para a soma bater com o valor oficial de R$ 497 (`config.valorOficial`). O total é a soma dos itens,
calculada no código, e a página avisa no console se ele divergir do valor oficial.

## Marca

Dados do flyer oficial da Mari (aprovados pelo Marcelo em 02/11/2026) ficam em `marca`, no `src/config.ts`:
nome "Mari Barrozo · Pet Concierge", WhatsApp, Instagram, "Mais de 25 anos de dedicação em Londrina"
e os 3 serviços. O número do WhatsApp e o usuário do Instagram são escritos uma vez só; texto e link saem deles.

Cores do flyer: verde `#203923` (fundo escuro `#182f1b`) e o dourado do logo MB (`#e3c07f`) como acento.
Tokens em `src/index.css`. Classe `sobre-verde` marca as áreas de fundo verde (anel de foco dourado).

Logo: a Mari não tem e não vai ter logo. A marca é só o nome em texto. O selo de 7 dias é tipográfico.

## Fotos

Originais em `../00-fontes/fotos/`. Versões otimizadas (webp) em `src/assets/fotos/`.

- **Topo: IMG_2601 (golden)**: filhote olhando para a câmera, sorriso dos dois, luz quente de casa; é o "primeiro cachorro" da promessa e abre a página.
- **Dobra 2: IMG_8083 (bernese)**: é o primeiro cachorro da Mari (informado pelo Marcelo em 02/11/2026); ilustra a história do "muro".
- Grade 1, IMG_2600 (pastor australiano): abraço mais carinhoso de todas, ambiente de casa, abre a grade.
- Grade 2, IMG_2598 (lulu): tons creme e foco nítido, mostra raça pequena e variedade.
- Grade 3, IMG_2602 (Tom, cocker): beijo no cachorro, prova de vínculo e cuidado; a bandana com nome reforça o lado profissional.
- Grade 4, IMG_2596 (shih tzu): boa foto, mas o fundo de festa colorido é o mais carregado, por isso fecha a grade.
