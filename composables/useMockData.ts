export function useMockData() {
  //   type TagType = {
  //     atributes: {
  //       name: string;
  //     };
  //   };

  type ProjectType = {
    id: number;
    title: string;
    description: string;
    image: string;
    size: 1 | 2;
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
      description: "Description 1",
      image: "https://via.placeholder.com/200",
      size: 1,
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description 2",
      image: "https://via.placeholder.com/200",
      size: 1,
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description 3",
      image: "https://via.placeholder.com/200",
      size: 2,
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description 4",
      image: "https://via.placeholder.com/200",
      size: 1,
    },
    {
      id: 5,
      title: "Project 5",
      description: "Description 5",
      image: "https://via.placeholder.com/200",
      size: 1,
    },
    {
      id: 6,
      title: "Project 6",
      description: "Description 6",
      image: "https://via.placeholder.com/200",
      size: 2,
    },
  ];

  return {
    MDTags,
    MDProjects,
  };
}
