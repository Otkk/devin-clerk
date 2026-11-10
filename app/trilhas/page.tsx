import Link from "next/link";
import {
  countries,
  difficulties,
  filterTrails,
  trails,
  type Difficulty,
  type TrailFilters,
} from "@/data/trails";

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function parseFilters(
  params: Record<string, string | string[] | undefined>,
): TrailFilters {
  const country = first(params.pais);
  const difficulty = first(params.dificuldade);
  const max = Number(first(params.max));

  return {
    country: country && countries.includes(country) ? country : undefined,
    difficulty: difficulties.includes(difficulty as Difficulty)
      ? (difficulty as Difficulty)
      : undefined,
    maxDistanceKm: Number.isFinite(max) && max > 0 ? max : undefined,
  };
}

const fieldClass =
  "rounded-lg border border-black/15 bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none";

export default async function TrailsPage({ searchParams }: PageProps<"/trilhas">) {
  const filters = parseFilters(await searchParams);
  const results = filterTrails(trails, filters);

  return (
    <section lang="pt-BR" className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Busca de trilhas</h1>
        <p className="text-lg text-black/70">
          Encontre sua próxima trilha filtrando por país, dificuldade e distância.
        </p>
      </div>

      <form
        action="/trilhas"
        className="grid gap-4 rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:grid-cols-4 sm:items-end"
      >
        <label className="flex flex-col gap-1 text-sm font-medium">
          País
          <select name="pais" defaultValue={filters.country ?? ""} className={fieldClass}>
            <option value="">Todos</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Dificuldade
          <select
            name="dificuldade"
            defaultValue={filters.difficulty ?? ""}
            className={fieldClass}
          >
            <option value="">Todas</option>
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Distância máxima (km)
          <input
            type="number"
            name="max"
            min={1}
            placeholder="Qualquer"
            defaultValue={filters.maxDistanceKm ?? ""}
            className={fieldClass}
          />
        </label>
        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Filtrar
          </button>
          <Link
            href="/trilhas"
            className="rounded-full border border-black/15 px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent"
          >
            Limpar
          </Link>
        </div>
      </form>

      <p className="text-sm text-black/60">
        {results.length === 1
          ? "1 trilha encontrada"
          : `${results.length} trilhas encontradas`}
      </p>

      {results.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-black/20 px-5 py-10 text-center text-black/60">
          Nenhuma trilha corresponde a esses filtros. Tente ampliar a busca.
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((trail) => (
            <li
              key={trail.id}
              className="flex flex-col gap-3 rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-accent">
                  {trail.difficulty}
                </span>
                <span className="rounded-full bg-black/5 px-2.5 py-0.5 text-black/70">
                  {trail.distanceKm} km · {trail.duration}
                </span>
              </div>
              <h2 className="text-lg font-semibold">{trail.name}</h2>
              <p className="text-sm text-black/50">
                {trail.region} · {trail.country}
              </p>
              <p className="text-sm text-black/70">{trail.description}</p>
            </li>
          ))}
        </ul>
      )}

      <p className="text-xs text-black/40">
        Distâncias e durações aproximadas. Confira as condições locais antes de sair.
      </p>
    </section>
  );
}
