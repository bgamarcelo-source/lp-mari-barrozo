import { Hourglass, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { config, marca } from "./config";
import { Pendente } from "./components/Pendente";

import fotoTopo from "./assets/fotos/mari-golden.webp";
import fotoAussie from "./assets/fotos/mari-aussie.webp";
import fotoBernese from "./assets/fotos/mari-bernese.webp";
import fotoLulu from "./assets/fotos/mari-lulu.webp";
import fotoTom from "./assets/fotos/mari-tom.webp";
import fotoShihTzu from "./assets/fotos/mari-shihtzu.webp";

/* Ordem da grade da dobra 3 (o porquê de cada uma está no README). */
const grade = [
  { src: fotoAussie, alt: "Mari abraçando um filhote de pastor australiano em casa" },
  { src: fotoLulu, alt: "Mari com um lulu da pomerânia no colo" },
  { src: fotoTom, alt: "Mari dando um beijo no Tom, um cocker preto e branco" },
  { src: fotoShihTzu, alt: "Mari com um shih tzu enfeitado para festa" },
];

const erros = [
  {
    t: "Escolhe pela foto.",
    d: "Achou lindo, viu no Instagram, alguém indicou. Ninguém perguntou se ele combina com a sua rotina.",
  },
  {
    t: "Traz para uma casa despreparada.",
    d: "Sem espaço definido, sem lugar para o xixi, sem saber o que comprar. E espera que ele “se adapte”.",
  },
  {
    t: "Deixa tudo “por dó” nos primeiros dias.",
    d: "Sobe no sofá, dorme onde quer, faz o que quer. “Depois eu resolvo.” Para ele, já virou regra.",
  },
];

const passos = [
  {
    n: "01",
    t: "ESCOLHA",
    d: "Antes de se apaixonar por uma foto, você cruza sua rotina, seu tempo fora de casa e seu espaço.",
  },
  {
    n: "02",
    t: "PREPARAÇÃO",
    d: "A casa fica pronta antes de ele chegar: o canto dele, o lugar do xixi, só as compras que fazem diferença.",
  },
  {
    n: "03",
    t: "PRIMEIROS DIAS",
    d: "Regras e rotina desde o primeiro minuto. O que não vai poder depois, não pode agora.",
  },
];

const bonus = [
  { nome: "Lista de compras com links", valor: config.valores.listaDeCompras },
  { nome: "Guia de brinquedos por fase", valor: config.valores.guiaDeBrinquedos },
  { nome: "Aula extra: distrações caseiras", valor: config.valores.aulaExtra },
  { nome: "Planner dos primeiros 30 dias", valor: config.valores.planner },
  { nome: "Calendário de vacinas", valor: config.valores.calendarioVacinas },
];

const duvidas: { p: string; r: ReactNode; abertaComPendencia?: boolean }[] = [
  {
    p: "Ainda não tenho o cachorro. Não é cedo?",
    r: "É o melhor momento. Quem se prepara antes evita a maioria dos problemas.",
  },
  {
    p: "Já estou com ele em casa. Serve?",
    r: "Serve. As aulas são por assunto, e você vai direto ao que precisa agora.",
  },
  {
    p: "A Mari é veterinária?",
    r: "Não. Ela é especialista em cuidado animal. Nas aulas de saúde, ensina o básico e quando procurar o veterinário.",
  },
  {
    p: "Como recebo o acesso?",
    r: (
      <>
        Por e-mail, logo após a compra.{" "}
        {config.tempoDeAcesso ?? <Pendente variante="inline" titulo="Tempo de acesso" />}
      </>
    ),
    /* Fica aberta enquanto o tempo de acesso estiver pendente, para o buraco ser visto. */
    abertaComPendencia: !config.tempoDeAcesso,
  },
];

const LINK_DOURADO = "font-semibold text-dourado-claro underline decoration-dourado/40 hover:decoration-dourado";

function Titulo({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-[2.1rem] leading-[1.1] font-semibold text-balance sm:text-5xl ${className}`}>
      {children}
    </h2>
  );
}

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

/** CTA principal. "dourado" para fundo verde, "verde" para fundo claro. */
function Botao({ children, tom = "verde" }: { children: ReactNode; tom?: "verde" | "dourado" }) {
  const cores =
    tom === "dourado"
      ? "bg-dourado text-verde-fundo hover:bg-dourado-claro"
      : "bg-verde text-creme hover:bg-verde-claro";
  return (
    <div className="flex flex-col items-start gap-2">
      <a
        href={config.checkoutUrl ?? "#checkout-pendente"}
        className={`inline-flex min-h-14 w-full items-center justify-center rounded-full px-8 py-4 text-center text-base font-bold tracking-wide transition-[transform,background-color] duration-150 ease-out active:scale-[0.97] sm:w-auto sm:text-[1.05rem] ${cores}`}
      >
        {children}
      </a>
      {!config.checkoutUrl && <Pendente variante="inline" titulo="Link do checkout" />}
    </div>
  );
}

const reais = (valor: number) => `R$ ${valor.toLocaleString("pt-BR")}`;

/** Soma dos itens da dobra 6: o total nunca é digitado à mão. */
const valorTotal = Object.values(config.valores).reduce((soma, v) => soma + v, 0);

if (valorTotal !== config.valorOficial) {
  console.warn(`Soma dos itens (${reais(valorTotal)}) diferente do valor oficial (${reais(config.valorOficial)}).`);
}

function Valor({ valor }: { valor: number }) {
  return <span className="font-semibold whitespace-nowrap text-tinta tabular-nums">{reais(valor)}</span>;
}

function Assinatura({ tamanho = "base" }: { tamanho?: "base" | "grande" }) {
  return (
    <span className="flex flex-col leading-none">
      <span
        className={`font-display font-semibold tracking-[0.08em] whitespace-nowrap text-creme uppercase ${
          tamanho === "grande" ? "text-3xl" : "text-xl"
        }`}
      >
        {marca.nome}
      </span>
      <span className="mt-1.5 text-[0.7rem] font-semibold tracking-[0.32em] text-dourado uppercase">
        {marca.assinatura}
      </span>
    </span>
  );
}

export default function App() {
  return (
    <div className="overflow-x-clip">
      <header className="sobre-verde bg-verde-fundo">
        <Container className="flex min-h-18 flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
          <Assinatura />
          <a href={marca.whatsapp.url} className={`text-sm ${LINK_DOURADO}`}>
            WhatsApp {marca.whatsapp.texto}
          </a>
        </Container>
      </header>

      <main>
        {/* DOBRA 1 · Gancho */}
        <section className="sobre-verde bg-verde pt-8 pb-16 text-creme sm:pt-14 lg:pb-24">
          <Container className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div className="order-2 lg:order-1">
              <p className="text-base font-bold tracking-[0.06em] text-dourado sm:text-lg">
                TÁ ESCOLHENDO SEU PRIMEIRO CACHORRO?
              </p>
              <h1 className="mt-3 font-display text-[2.4rem] leading-[1.08] font-semibold text-balance sm:text-6xl lg:text-[4.1rem]">
                Você vai amar ele como um filho. Então prepare a chegada do jeito certo.
              </h1>
              <p className="mt-5 text-lg text-creme/80 sm:text-xl">Já está com ele em casa? Ainda dá tempo.</p>

              <div className="mt-9">
                {config.vslEmbedUrl ? (
                  <div className="aspect-video overflow-hidden rounded-2xl bg-verde-fundo">
                    <iframe
                      src={config.vslEmbedUrl}
                      title="Vídeo de apresentação"
                      className="size-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <Pendente
                    titulo="VSL"
                    detalhe="Vídeo de vendas da Mari, 16:9. Colar a URL de embed em src/config.ts."
                    className="aspect-video"
                  />
                )}
              </div>

              <div className="mt-7">
                <Botao tom="dourado">QUERO COMEÇAR DO JEITO CERTO</Botao>
              </div>
            </div>

            <figure className="order-1 lg:order-2 lg:mt-2">
              <img
                src={fotoTopo}
                alt="Mari Barrozo abraçando um filhote de golden retriever"
                className="aspect-[4/3] w-full rounded-[1.75rem] object-cover object-[50%_30%] sm:aspect-[16/11] lg:aspect-[4/5]"
                width={1086}
                height={1448}
                fetchPriority="high"
              />
              <figcaption className="mt-3 text-sm leading-snug">
                <span className="block text-creme/75">
                  {marca.nome} · {marca.assinatura}
                </span>
                <span className="block text-dourado-claro">{marca.credencial}</span>
              </figcaption>
            </figure>
          </Container>
        </section>

        {/* DOBRA 2 · O muro */}
        <section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
          <Container className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
            <img
              src={fotoBernese}
              alt="Mari sorrindo com um dos seus primeiros cachorros, um filhote de bernese"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[50%_35%] md:col-span-5"
              width={900}
              height={1350}
            />
            <div className="md:col-span-7 md:pl-6">
              <Titulo className="text-verde">Eu sei como é. Eu já estive no seu lugar</Titulo>
              <div className="mt-7 max-w-[60ch] space-y-5 text-lg leading-relaxed text-tinta-suave">
                <p>
                  Meu primeiro cachorro chegou quando eu ainda era criança. Ele fazia xixi pela casa inteira, não se
                  adaptava, e acabou indo morar com a minha avó.
                </p>
                <p>
                  Anos depois, comprei uma labradora de um criador que hoje sei que não era confiável. Ela era ansiosa,
                  latia muito, e eu passei quase 30 noites acordando de duas em duas horas, sem saber se o problema era a
                  ração, a casa ou eu.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* DOBRA 3 · A epifania */}
        <section className="bg-papel pt-16 pb-20 sm:pt-20 sm:pb-28">
          <Container>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
              {grade.map((foto, i) => (
                <img
                  key={foto.alt}
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                  width={900}
                  height={1200}
                  className={`aspect-[4/5] w-full rounded-2xl object-cover object-[50%_30%] ${
                    i % 2 === 1 ? "translate-y-6 md:translate-y-10" : ""
                  }`}
                />
              ))}
            </div>

            <div className="mt-20 grid gap-8 md:mt-28 md:grid-cols-12 md:gap-12">
              <Titulo className="text-verde md:col-span-5">Depois de mais de 500 cachorros e tutores, eu entendi:</Titulo>
              <div className="max-w-[58ch] space-y-4 text-lg leading-relaxed text-tinta-suave md:col-span-7 md:pt-2 sm:text-xl">
                <p>
                  Os problemas quase nunca começam com 6 meses ou 1 ano.{" "}
                  <strong className="font-bold text-tinta">Começam nos primeiros dias.</strong>
                </p>
                <p>O cachorro aprende desde o primeiro minuto em casa, mesmo quando ninguém está ensinando nada.</p>
              </div>
            </div>

            <p className="mt-16 border-t border-dourado-texto/40 pt-8 font-display text-[2rem] leading-tight font-semibold text-balance text-verde italic sm:mt-20 sm:text-5xl">
              Não era falta de amor. Era falta de orientação.
            </p>
          </Container>
        </section>

        {/* DOBRA 4 · O problema */}
        <section className="pt-24 pb-20 sm:pt-32 sm:pb-24">
          <Container>
            <Titulo className="max-w-3xl text-verde">
              3 erros que quase todo tutor de primeira viagem comete, sem perceber
            </Titulo>
            <ol className="mt-12 border-b border-linha">
              {erros.map((erro) => (
                <li key={erro.t} className="grid gap-2 border-t border-linha py-7 md:grid-cols-12 md:gap-10 md:py-9">
                  <h3 className="font-display text-[1.75rem] leading-tight font-semibold text-tinta md:col-span-5 sm:text-3xl">
                    {erro.t}
                  </h3>
                  <p className="max-w-[55ch] text-lg leading-relaxed text-tinta-suave md:col-span-7 md:pt-1">{erro.d}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-right font-display text-2xl text-tinta-suave italic sm:text-3xl">
              Parecem detalhes no dia. Viram hábito no mês seguinte.
            </p>
          </Container>
        </section>

        {/* DOBRA 5 · A solução */}
        <section className="sobre-verde bg-verde pt-20 pb-24 text-creme sm:pt-28 sm:pb-32">
          <Container>
            <Titulo className="max-w-2xl">Então eu organizei o começo em 3 passos:</Titulo>
            <ol className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
              {passos.map((passo) => (
                <li key={passo.n} className="border-t border-dourado/50 pt-6">
                  <p className="text-sm font-bold tracking-[0.2em] text-dourado tabular-nums">
                    {passo.n} · {passo.t}
                  </p>
                  <p className="mt-4 max-w-[34ch] text-lg leading-relaxed text-creme/85">{passo.d}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* DOBRA 6 · O que você recebe */}
        <section className="pt-24 pb-20 sm:pt-32 sm:pb-28">
          <Container className="grid items-start gap-12 md:grid-cols-12 md:gap-14">
            <Pendente
              titulo="Mockup do pacote completo"
              detalhe="Aulas, lista de compras, guia, aula extra, planner e calendário juntos numa imagem."
              className="aspect-square w-full md:sticky md:top-8 md:col-span-5"
            />
            <div className="md:col-span-7">
              <Titulo className="text-verde">Programa Meu Primeiro Cachorro Sem Erros</Titulo>

              <table className="mt-10 w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-verde text-xs font-bold tracking-[0.18em] text-tinta-suave uppercase">
                    <th scope="col" className="pb-3 font-bold">
                      Item
                    </th>
                    <th scope="col" className="pb-3 text-right font-bold">
                      Valor
                    </th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr className="border-b border-linha">
                    <td className="py-6 pr-4">
                      <p className="text-lg font-bold text-tinta">Aulas do programa</p>
                      <p className="mt-1.5 max-w-[52ch] leading-relaxed text-tinta-suave">
                        Antes da chegada: escolha, adotar ou comprar, casa, compras, ração. Depois da chegada: primeira
                        noite, xixi, mordidas, saúde e vacinas, socialização, rotina.
                      </p>
                    </td>
                    <td className="py-6 text-right">
                      <Valor valor={config.valores.aulas} />
                    </td>
                  </tr>
                  {bonus.map((item) => (
                    <tr key={item.nome} className="border-b border-linha">
                      <td className="py-4 pr-4">
                        <span className="mr-2 text-[0.7rem] font-bold tracking-[0.18em] text-dourado-texto uppercase">
                          Bônus
                        </span>
                        <span className="text-tinta">{item.nome}</span>
                      </td>
                      <td className="py-4 text-right">
                        <Valor valor={item.valor} />
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-verde">
                    <th scope="row" className="pt-5 text-lg font-bold text-tinta">
                      Valor total
                    </th>
                    <td className="pt-5 text-right">
                      <Valor valor={valorTotal} />
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Container>
        </section>

        {/* DOBRA 7 · Preço + garantia */}
        <section id="preco" className="bg-papel py-20 sm:py-28">
          <Container className="max-w-4xl">
            <div className="rounded-[2rem] border border-linha bg-creme px-5 py-10 sm:px-12 sm:py-14">
              <p className="text-lg text-tinta-suave">
                Valor oficial: <s className="decoration-2">{reais(config.valorOficial)}</s>
              </p>
              <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-4xl font-semibold text-verde sm:text-5xl">
                <span>Hoje:</span>
                {config.precoHoje ? <span>{config.precoHoje}</span> : <Pendente variante="inline" titulo="Preço de hoje" />}
                <span className="font-sans text-lg font-medium text-tinta-suave">ou</span>
                {config.parcelas ? <span>{config.parcelas}</span> : <Pendente variante="inline" titulo="Parcelas" />}
              </p>

              <div className="mt-9">
                <Botao>QUERO ENTRAR NO PROGRAMA</Botao>
              </div>

              <div className="mt-12 grid items-center gap-6 border-t border-linha pt-10 sm:grid-cols-[auto_1fr] sm:gap-8">
                <div
                  className="flex size-28 flex-col items-center justify-center rounded-full border border-dourado-texto text-dourado-texto ring-4 ring-papel ring-offset-2 ring-offset-dourado-texto/60"
                  aria-hidden
                >
                  <span className="font-display text-5xl leading-none font-semibold">7</span>
                  <span className="mt-1 text-[0.65rem] font-bold tracking-[0.28em]">DIAS</span>
                </div>
                <div>
                  <p className="font-display text-3xl leading-tight font-semibold text-verde">
                    7 dias de garantia. O risco é todo meu.
                  </p>
                  <p className="mt-2 text-lg text-tinta-suave">
                    Não gostou? Me manda uma mensagem e eu devolvo 100%, sem burocracia.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* DOBRA 8 · Urgência + dúvidas + fechamento */}
        <section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
          <Container className="max-w-3xl">
            <div className="sobre-verde rounded-[1.5rem] bg-verde px-6 py-8 text-creme sm:px-10 sm:py-10">
              <p className="flex items-start gap-3 font-display text-[1.9rem] leading-tight font-semibold text-dourado-claro sm:text-4xl">
                <Hourglass className="mt-1.5 size-6 shrink-0 text-dourado sm:mt-2 sm:size-7" strokeWidth={1.75} aria-hidden />
                Turma fundadora: vagas com valor de entrada
              </p>
              <p className="mt-4 text-lg leading-relaxed text-creme/85">
                Quem entra agora paga menos e tem <strong className="font-bold text-creme">contato direto comigo</strong>{" "}
                para tirar as dúvidas do seu caso. Esse valor não volta.
              </p>
            </div>

            <div className="mt-16 border-b border-linha">
              {duvidas.map((faq) => (
                <details key={faq.p} className="group border-t border-linha" open={faq.abertaComPendencia}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-bold text-tinta [&::-webkit-details-marker]:hidden">
                    {faq.p}
                    <Plus
                      className="size-5 shrink-0 text-verde transition-transform duration-200 ease-out group-open:rotate-45"
                      aria-hidden
                    />
                  </summary>
                  <p className="pb-6 leading-relaxed text-tinta-suave">{faq.r}</p>
                </details>
              ))}
            </div>

            <div className="mt-20">
              <Titulo className="text-verde">Seguir na tentativa e erro, ou começar preparado?</Titulo>
              <div className="mt-8">
                <Botao>QUERO COMEÇAR DO JEITO CERTO</Botao>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="sobre-verde bg-verde-fundo pt-14 pb-10 text-creme">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <Assinatura tamanho="grande" />
              <p className="mt-5 text-creme/80">{marca.credencial}</p>
            </div>
            <ul className="space-y-2 text-creme/85 md:col-span-4">
              {marca.servicos.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="space-y-2 md:col-span-3">
              <a href={marca.whatsapp.url} className={`block ${LINK_DOURADO}`}>
                WhatsApp {marca.whatsapp.texto}
              </a>
              <a href={marca.instagram.url} className={`block ${LINK_DOURADO}`}>
                Instagram {marca.instagram.texto}
              </a>
            </div>
          </div>
          <p className="mt-12 border-t border-creme/15 pt-6 text-sm text-creme/60">
            © 2026 {marca.nome}. Todos os direitos reservados.
          </p>
        </Container>
      </footer>
    </div>
  );
}
