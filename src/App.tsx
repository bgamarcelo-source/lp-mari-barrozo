import {
  ArrowRight,
  Check,
  CircleCheck,
  Gift,
  Hourglass,
  Plus,
  ShieldCheck,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import { config } from "./config";
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
  { src: fotoBernese, alt: "Mari sorrindo com um filhote de bernese ao ar livre" },
  { src: fotoLulu, alt: "Mari com um lulu da pomerânia no colo" },
  { src: fotoTom, alt: "Mari dando um beijo no Tom, um cocker preto e branco" },
  { src: fotoShihTzu, alt: "Mari com um shih tzu enfeitado para festa" },
];

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Botao({ children }: { children: ReactNode }) {
  const href = config.checkoutUrl ?? "#checkout-pendente";
  return (
    <div className="flex flex-col items-center gap-2">
      <a
        href={href}
        className="group inline-flex min-h-14 w-full max-w-md items-center justify-center gap-2 rounded-full bg-caramelo-escuro px-7 py-4 text-center text-base font-bold tracking-wide text-creme shadow-[0_10px_30px_-12px_rgba(154,90,36,0.7)] transition-[transform,background-color] duration-150 ease-out hover:bg-cacau active:scale-[0.97] sm:w-auto sm:text-lg"
      >
        {children}
        <ArrowRight className="size-5 shrink-0 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden />
      </a>
      {!config.checkoutUrl && <Pendente variante="inline" titulo="Link do checkout" />}
    </div>
  );
}

function Rotulo({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold tracking-[0.18em] text-caramelo-escuro uppercase sm:text-sm">{children}</p>
  );
}

function Valor({ valor, nome }: { valor: string | null; nome: string }) {
  if (valor) return <span className="font-semibold whitespace-nowrap">{valor}</span>;
  return <Pendente variante="inline" titulo={nome} />;
}

export default function App() {
  return (
    <div className="overflow-x-clip">
      {/* Topo: sem logo da Mari ainda, só o nome em texto */}
      <header className="border-b border-areia-escura/60 bg-creme/90">
        <Container className="flex h-14 items-center justify-center sm:justify-start">
          <span className="font-display text-lg font-semibold tracking-tight text-cacau">Mari Barrozo</span>
        </Container>
      </header>

      <main>
        {/* DOBRA 1 · Gancho */}
        <section className="bg-gradient-to-b from-creme to-areia pt-6 pb-14 sm:pt-12 lg:pb-20">
          <Container className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="order-2 lg:order-1">
              <Rotulo>TÁ ESCOLHENDO SEU PRIMEIRO CACHORRO?</Rotulo>
              <h1 className="font-display text-[2rem] leading-[1.1] font-semibold text-balance text-cacau sm:text-5xl lg:text-[3.4rem]">
                Você vai amar ele como um filho. Então prepare a chegada do jeito certo.
              </h1>
              <p className="mt-4 text-lg text-cacau-suave sm:text-xl">Já está com ele em casa? Ainda dá tempo.</p>

              <div className="mt-8">
                {config.vslEmbedUrl ? (
                  <div className="aspect-video overflow-hidden rounded-2xl bg-cacau shadow-xl">
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

              <div className="mt-8 lg:flex lg:justify-start">
                <Botao>QUERO COMEÇAR DO JEITO CERTO</Botao>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:sticky lg:top-8">
              <img
                src={fotoTopo}
                alt="Mari Barrozo abraçando um filhote de golden retriever"
                className="aspect-[4/3] w-full rounded-3xl object-cover object-[50%_30%] shadow-[0_24px_60px_-30px_rgba(59,42,32,0.55)] sm:aspect-[16/11] lg:aspect-[3/4]"
                width={1086}
                height={1448}
                fetchPriority="high"
              />
            </div>
          </Container>
        </section>

        {/* DOBRA 2 · O muro */}
        <section className="py-16 sm:py-24">
          <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Pendente
              titulo="Foto da Mari com um dos primeiros cachorros"
              detalhe="Foto antiga, de preferência da infância ou da labradora. Vertical 4:5."
              className="aspect-[4/5] w-full"
            />
            <div>
              <h2 className="font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl">
                Eu sei como é. Eu já estive no seu lugar
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-cacau-suave">
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
        <section className="bg-areia py-16 sm:py-24">
          <Container>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
              {grade.map((foto, i) => (
                <img
                  key={foto.alt}
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                  className={`w-full rounded-2xl object-cover object-[50%_30%] ${
                    i === 0 ? "col-span-2 aspect-[4/3] md:col-span-1 md:aspect-[3/4]" : "aspect-[4/5] md:aspect-[3/4]"
                  }`}
                />
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-2xl text-center">
              <h2 className="font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl">
                Depois de mais de 500 cachorros e tutores, eu entendi:
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-cacau-suave sm:text-xl">
                Os problemas quase nunca começam com 6 meses ou 1 ano.{" "}
                <strong className="font-bold text-cacau">Começam nos primeiros dias.</strong>
              </p>
              <p className="mt-4 text-lg leading-relaxed text-cacau-suave sm:text-xl">
                O cachorro aprende desde o primeiro minuto em casa, mesmo quando ninguém está ensinando nada.
              </p>
              <p className="mt-10 rounded-2xl bg-cacau px-6 py-5 font-display text-xl font-semibold text-balance text-creme sm:text-2xl">
                Não era falta de amor. Era falta de orientação.
              </p>
            </div>
          </Container>
        </section>

        {/* DOBRA 4 · O problema */}
        <section className="py-16 sm:py-24">
          <Container>
            <h2 className="mx-auto max-w-3xl text-center font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              3 erros que quase todo tutor de primeira viagem comete, sem perceber
            </h2>
            <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
              {[
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
              ].map((erro) => (
                <li key={erro.t} className="rounded-2xl border border-areia-escura bg-white/70 p-6">
                  <span className="flex size-10 items-center justify-center rounded-full bg-red-100 text-red-700">
                    <X className="size-5" strokeWidth={2.5} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-cacau">{erro.t}</h3>
                  <p className="mt-2 leading-relaxed text-cacau-suave">{erro.d}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-center font-display text-xl text-cacau-suave italic sm:text-2xl">
              Parecem detalhes no dia. Viram hábito no mês seguinte.
            </p>
          </Container>
        </section>

        {/* DOBRA 5 · A solução */}
        <section className="bg-cacau py-16 text-creme sm:py-24">
          <Container>
            <h2 className="text-center font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              Então eu organizei o começo em 3 passos:
            </h2>
            <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
              {[
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
              ].map((passo) => (
                <li key={passo.n} className="rounded-2xl bg-white/[0.07] p-6 ring-1 ring-white/10">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-caramelo text-cacau">
                      <Check className="size-5" strokeWidth={3} aria-hidden />
                    </span>
                    <span className="text-sm font-bold tracking-[0.16em] text-caramelo">
                      {passo.n} · {passo.t}
                    </span>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-creme/85">{passo.d}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* DOBRA 6 · O que você recebe */}
        <section className="py-16 sm:py-24">
          <Container className="grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
            <Pendente
              titulo="Mockup do pacote completo"
              detalhe="Aulas, lista de compras, guia, aula extra, planner e calendário juntos numa imagem."
              className="aspect-square w-full md:sticky md:top-8"
            />
            <div>
              <h2 className="font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl">
                Programa Meu Primeiro Cachorro Sem Erros
              </h2>

              <div className="mt-8 overflow-hidden rounded-2xl border border-areia-escura bg-white/80">
                <div className="flex items-center justify-between bg-areia px-5 py-3 text-xs font-bold tracking-[0.16em] text-cacau-suave uppercase">
                  <span>Item</span>
                  <span>Valor</span>
                </div>
                <ul className="divide-y divide-areia-escura">
                  <li className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-3">
                      <CircleCheck className="mt-0.5 size-5 shrink-0 text-folha" aria-hidden />
                      <div>
                        <p className="font-bold text-cacau">Aulas do programa</p>
                        <p className="mt-1 text-sm leading-relaxed text-cacau-suave">
                          Antes da chegada: escolha, adotar ou comprar, casa, compras, ração. Depois da chegada: primeira
                          noite, xixi, mordidas, saúde e vacinas, socialização, rotina.
                        </p>
                      </div>
                    </div>
                    <div className="pl-8 sm:pl-0">
                      <Valor valor={config.valores.aulas} nome="Valor das aulas" />
                    </div>
                  </li>
                  {[
                    { nome: "Lista de compras com links", valor: config.valores.listaDeCompras },
                    { nome: "Guia de brinquedos por fase", valor: config.valores.guiaDeBrinquedos },
                    { nome: "Aula extra: distrações caseiras", valor: config.valores.aulaExtra },
                    { nome: "Planner dos primeiros 30 dias", valor: config.valores.planner },
                    { nome: "Calendário de vacinas", valor: config.valores.calendarioVacinas },
                  ].map((bonus) => (
                    <li
                      key={bonus.nome}
                      className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Gift className="size-5 shrink-0 text-caramelo-escuro" aria-hidden />
                        <p className="text-cacau">{bonus.nome}</p>
                      </div>
                      <div className="pl-8 sm:pl-0">
                        <Valor valor={bonus.valor} nome="Valor do bônus" />
                      </div>
                    </li>
                  ))}
                  <li className="flex flex-col gap-2 bg-areia/60 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-bold text-cacau">Valor total</p>
                    <Valor valor={config.valores.total} nome="Valor total" />
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* DOBRA 7 · Preço + garantia */}
        <section id="preco" className="bg-areia py-16 sm:py-24">
          <Container className="max-w-3xl">
            <div className="rounded-3xl bg-creme p-6 text-center shadow-[0_24px_60px_-34px_rgba(59,42,32,0.5)] ring-1 ring-areia-escura sm:p-10">
              <p className="text-lg text-cacau-suave">
                Valor oficial: <s className="decoration-2">R$ 497</s>
              </p>
              <p className="mt-3 flex flex-wrap items-center justify-center gap-2 font-display text-3xl font-semibold text-cacau sm:text-4xl">
                <span>Hoje:</span>
                {config.precoHoje ? <span>{config.precoHoje}</span> : <Pendente variante="inline" titulo="Preço de hoje" />}
                <span className="font-sans text-lg font-medium text-cacau-suave">ou</span>
                {config.parcelas ? (
                  <span>{config.parcelas}</span>
                ) : (
                  <Pendente variante="inline" titulo="Parcelas" />
                )}
              </p>

              <div className="mt-8">
                <Botao>QUERO ENTRAR NO PROGRAMA</Botao>
              </div>

              <div className="mt-10 flex flex-col items-center gap-5 border-t border-areia-escura pt-10 sm:flex-row sm:text-left">
                <div
                  className="flex size-24 shrink-0 flex-col items-center justify-center rounded-full border-4 border-double border-caramelo-escuro bg-areia text-caramelo-escuro"
                  aria-hidden
                >
                  <ShieldCheck className="size-7" />
                  <span className="mt-0.5 text-sm leading-none font-bold">7 DIAS</span>
                </div>
                <div>
                  <p className="text-xl font-bold text-cacau">7 dias de garantia. O risco é todo meu.</p>
                  <p className="mt-1 text-cacau-suave">
                    Não gostou? Me manda uma mensagem e eu devolvo 100%, sem burocracia.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* DOBRA 8 · Urgência + dúvidas + fechamento */}
        <section className="py-16 sm:py-24">
          <Container className="max-w-3xl">
            <div className="rounded-2xl border-l-4 border-caramelo-escuro bg-white/70 p-6 sm:p-8">
              <p className="flex items-center gap-2 text-xl font-bold text-cacau">
                <Hourglass className="size-5 shrink-0 text-caramelo-escuro" aria-hidden />
                Turma fundadora: vagas com valor de entrada
              </p>
              <p className="mt-3 text-lg leading-relaxed text-cacau-suave">
                Quem entra agora paga menos e tem <strong className="font-bold text-cacau">contato direto comigo</strong>{" "}
                para tirar as dúvidas do seu caso. Esse valor não volta.
              </p>
            </div>

            <div className="mt-12 divide-y divide-areia-escura border-y border-areia-escura">
              {[
                {
                  p: "Ainda não tenho o cachorro. Não é cedo?",
                  r: <>É o melhor momento. Quem se prepara antes evita a maioria dos problemas.</>,
                },
                {
                  p: "Já estou com ele em casa. Serve?",
                  r: <>Serve. As aulas são por assunto, e você vai direto ao que precisa agora.</>,
                },
                {
                  p: "A Mari é veterinária?",
                  r: (
                    <>
                      Não. Ela é especialista em cuidado animal. Nas aulas de saúde, ensina o básico e quando procurar o
                      veterinário.
                    </>
                  ),
                },
                {
                  p: "Como recebo o acesso?",
                  r: (
                    <>
                      Por e-mail, logo após a compra.{" "}
                      {config.tempoDeAcesso ?? <Pendente variante="inline" titulo="Tempo de acesso" />}
                    </>
                  ),
                },
              ].map((faq, i) => (
                <details key={faq.p} className="group py-5" open={i === 3}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-cacau [&::-webkit-details-marker]:hidden">
                    {faq.p}
                    <Plus
                      className="size-5 shrink-0 text-caramelo-escuro transition-transform duration-200 ease-out group-open:rotate-45"
                      aria-hidden
                    />
                  </summary>
                  <p className="mt-3 leading-relaxed text-cacau-suave">{faq.r}</p>
                </details>
              ))}
            </div>

            <div className="mt-14 text-center">
              <h2 className="font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl">
                Seguir na tentativa e erro, ou começar preparado?
              </h2>
              <div className="mt-8">
                <Botao>QUERO COMEÇAR DO JEITO CERTO</Botao>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-areia-escura bg-areia py-8">
        <Container className="text-center text-sm text-cacau-suave">
          <p className="font-display text-base font-semibold text-cacau">Mari Barrozo</p>
          <p className="mt-1">© 2026 Mari Barrozo. Todos os direitos reservados.</p>
        </Container>
      </footer>
    </div>
  );
}
