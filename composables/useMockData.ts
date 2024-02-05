export function useMockData() {
  type ProjectType = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
  };

  const MDTags = [
    "animation",
    "illustration",
    "web",
    "design",
    "development",
    "motion",
    "ux",
  ];

  const MDProjects: ProjectType[] = [
    {
      id: 1,
      title: "Project 1",
      description: "Description Description  Description 1",
      image: "https://picsum.photos/400/400",
      tags: ["animation", "illustration", "web", "design"],
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description Description  Description 2",
      image: "https://picsum.photos/400/400",
      tags: ["development", "motion", "ux"],
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description Description  Description 3",
      image: "https://picsum.photos/400/400",
      tags: ["web", "design", "development"],
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description Description  Description 4",
      image: "https://picsum.photos/400/400",
      tags: ["animation", "illustration", "web", "design"],
    },
    {
      id: 5,
      title: "Project 5",
      description: "Description Description  Description 5",
      image: "https://picsum.photos/400/400",
      tags: ["development", "motion", "ux"],
    },
    {
      id: 6,
      title: "Project 6",
      description: "Description Description  Description 6",
      image: "https://picsum.photos/400/400",
      tags: ["web", "design", "development"],
    },
  ];

  return {
    MDTags,
    MDProjects,
  };
}
