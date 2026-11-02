import { CircleDashed } from "lucide-react";

type Props = {
  /** O que falta, em poucas palavras. */
  titulo: string;
  /** Detalhe opcional: formato, proporção, de onde vem. */
  detalhe?: string;
  /** "bloco" ocupa uma área (vídeo, foto, mockup); "inline" cabe numa linha (preço, prazo). */
  variante?: "bloco" | "inline";
  className?: string;
};

/**
 * Buraco visível para o que ainda não existe.
 * Para achar todos no código: procurar por <Pendente ou por "PENDENTE".
 */
export function Pendente({ titulo, detalhe, variante = "bloco", className = "" }: Props) {
  if (variante === "inline") {
    return (
      <span
        data-pendente={titulo}
        className={`inline-flex items-center gap-1.5 rounded-md border-2 border-dashed border-pendente bg-amber-50 px-2 py-0.5 align-middle font-sans text-sm font-semibold text-pendente ${className}`}
      >
        <span className="rounded bg-pendente px-1.5 py-px text-[10px] font-bold tracking-wider text-white">
          PENDENTE
        </span>
        {titulo}
      </span>
    );
  }

  return (
    <div
      data-pendente={titulo}
      role="img"
      aria-label={`Pendente: ${titulo}`}
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-pendente bg-amber-50/90 p-6 text-center ${className}`}
    >
      <CircleDashed className="size-8 text-pendente" aria-hidden />
      <span className="rounded-md bg-pendente px-2.5 py-1 text-xs font-bold tracking-widest text-white">
        PENDENTE
      </span>
      <p className="max-w-xs font-sans text-base font-semibold text-cacau">{titulo}</p>
      {detalhe && <p className="max-w-xs font-sans text-sm text-cacau-suave">{detalhe}</p>}
    </div>
  );
}
