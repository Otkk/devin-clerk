export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Mr. Campers",
  description:
    "Um sistema para auxiliar aventureiros a encontrar as melhores trilhas, escaladas e acampamentos ao redor do mundo",
  emoji: "🏕️",
  accent: "#2f7d4f",
  upcomingFeatures: [
    {
      title: "Busca de trilhas",
      description: "Filtrar trilhas por país, dificuldade e distância.",
    },
    {
      title: "Mapa de acampamentos",
      description: "Ver campings num mapa interativo.",
    },
    {
      title: "Guia de escaladas",
      description: "Listar vias com graduação e tipo de rocha.",
    },
    {
      title: "Meus favoritos",
      description: "Salvar trilhas, vias e campings numa lista pessoal.",
    },
    {
      title: "Avaliações da comunidade",
      description: "Dar nota e comentar locais visitados.",
    },
    {
      title: "Checklist de equipamentos",
      description: "Gerar uma lista de equipamento para cada aventura.",
    },
  ] satisfies Feature[],
};
