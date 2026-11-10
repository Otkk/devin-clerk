export const difficulties = ["fácil", "moderada", "difícil"] as const;

export type Difficulty = (typeof difficulties)[number];

export type Trail = {
  id: string;
  name: string;
  country: string;
  region: string;
  difficulty: Difficulty;
  distanceKm: number;
  duration: string;
  description: string;
};

export type TrailFilters = {
  country?: string;
  difficulty?: Difficulty;
  maxDistanceKm?: number;
};

export const trails: Trail[] = [
  {
    id: "w-trek",
    name: "W Trek",
    country: "Chile",
    region: "Torres del Paine, Patagônia",
    difficulty: "moderada",
    distanceKm: 80,
    duration: "4–5 dias",
    description: "Clássico da Patagônia passando pelas Torres, Vale do Francés e Glaciar Grey.",
  },
  {
    id: "laguna-de-los-tres",
    name: "Laguna de los Tres",
    country: "Argentina",
    region: "El Chaltén, Patagônia",
    difficulty: "difícil",
    distanceKm: 22,
    duration: "1 dia",
    description: "Subida íngreme até a lagoa glacial aos pés do Monte Fitz Roy.",
  },
  {
    id: "trilha-inca",
    name: "Trilha Inca",
    country: "Peru",
    region: "Cusco",
    difficulty: "difícil",
    distanceKm: 42,
    duration: "4 dias",
    description: "Caminho histórico entre ruínas incas até chegar a Machu Picchu.",
  },
  {
    id: "petropolis-teresopolis",
    name: "Travessia Petrópolis–Teresópolis",
    country: "Brasil",
    region: "Serra dos Órgãos, RJ",
    difficulty: "difícil",
    distanceKm: 30,
    duration: "3 dias",
    description: "Travessia de montanha com vista para o Dedo de Deus e campos de altitude.",
  },
  {
    id: "pico-da-bandeira",
    name: "Pico da Bandeira",
    country: "Brasil",
    region: "Caparaó, MG/ES",
    difficulty: "moderada",
    distanceKm: 18,
    duration: "1 dia",
    description: "Subida ao terceiro ponto mais alto do Brasil, famosa pelo nascer do sol.",
  },
  {
    id: "lagoinha-do-leste",
    name: "Lagoinha do Leste",
    country: "Brasil",
    region: "Florianópolis, SC",
    difficulty: "fácil",
    distanceKm: 8,
    duration: "Meio dia",
    description: "Trilha pela Mata Atlântica até uma praia isolada com lagoa.",
  },
  {
    id: "tour-du-mont-blanc",
    name: "Tour du Mont Blanc",
    country: "França",
    region: "Alpes (França, Itália e Suíça)",
    difficulty: "difícil",
    distanceKm: 170,
    duration: "10–11 dias",
    description: "Volta completa ao maciço do Mont Blanc passando por três países.",
  },
  {
    id: "sentiero-azzurro",
    name: "Sentiero Azzurro",
    country: "Itália",
    region: "Cinque Terre",
    difficulty: "fácil",
    distanceKm: 12,
    duration: "1 dia",
    description: "Caminho costeiro ligando as vilas coloridas de Cinque Terre.",
  },
  {
    id: "west-highland-way",
    name: "West Highland Way",
    country: "Reino Unido",
    region: "Escócia",
    difficulty: "moderada",
    distanceKm: 154,
    duration: "7 dias",
    description: "Travessia das Terras Altas escocesas, de Milngavie a Fort William.",
  },
  {
    id: "laugavegur",
    name: "Laugavegur",
    country: "Islândia",
    region: "Landmannalaugar a Þórsmörk",
    difficulty: "moderada",
    distanceKm: 55,
    duration: "4 dias",
    description: "Montanhas coloridas, campos de lava e fontes termais no interior da Islândia.",
  },
  {
    id: "annapurna-circuit",
    name: "Circuito do Annapurna",
    country: "Nepal",
    region: "Himalaia",
    difficulty: "difícil",
    distanceKm: 160,
    duration: "12–14 dias",
    description: "Volta ao maciço do Annapurna cruzando o passo Thorong La a 5.416 m.",
  },
  {
    id: "tongariro-crossing",
    name: "Tongariro Alpine Crossing",
    country: "Nova Zelândia",
    region: "Ilha Norte",
    difficulty: "moderada",
    distanceKm: 19,
    duration: "1 dia",
    description: "Travessia vulcânica com crateras e lagos esmeralda.",
  },
  {
    id: "kalalau",
    name: "Kalalau Trail",
    country: "Estados Unidos",
    region: "Kauai, Havaí",
    difficulty: "difícil",
    distanceKm: 35,
    duration: "2 dias",
    description: "Trilha à beira de penhascos pela costa de Nā Pali.",
  },
  {
    id: "angels-landing",
    name: "Angels Landing",
    country: "Estados Unidos",
    region: "Zion, Utah",
    difficulty: "difícil",
    distanceKm: 9,
    duration: "Meio dia",
    description: "Subida exposta com correntes até um mirante sobre o cânion de Zion.",
  },
];

export const countries = [...new Set(trails.map((trail) => trail.country))].sort(
  (a, b) => a.localeCompare(b, "pt-BR"),
);

export function filterTrails(list: Trail[], filters: TrailFilters): Trail[] {
  return list.filter(
    (trail) =>
      (!filters.country || trail.country === filters.country) &&
      (!filters.difficulty || trail.difficulty === filters.difficulty) &&
      (filters.maxDistanceKm === undefined ||
        trail.distanceKm <= filters.maxDistanceKm),
  );
}
