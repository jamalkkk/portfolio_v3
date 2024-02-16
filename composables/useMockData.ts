import type { ProjectType } from "~/types/types";

export function useMockData() {
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
      id: "1",
      title: "Project 1",
      description: "Description Description  Description 1",
      image: "https://picsum.photos/400/400",
      tags: ["animation", "illustration", "web", "design"],
      slides: [
        {
          type: "image",
          columns: [
            {
              items: [
                {
                  type: "image",
                  imageSize: 0,
                  image: {
                    url: "",
                    alt: "",
                  },
                  text: "Lorem ipsum dolor sit amet, coneos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                  link: "",
                  img: "https://picsum.photos/400/400",
                },

                {
                  type: "text",
                  imageSize: 0,
                  image: {
                    url: "",
                    alt: "",
                  },
                  text: " eirmod tempest Lorem ipsum dolor sit amet.",
                  link: "",
                  img: "",
                },
              ],
            },
          ],
          image: {
            url: "",
            alt: "",
          },
          video: "",
          description: "",
          img: "https://picsum.photos/1200/800",
        },
        {
          type: "columns",
          columns: [
            {
              items: [
                {
                  type: "text",
                  imageSize: 0,
                  image: {
                    url: "",
                    alt: "",
                  },
                  text: " eirmod tempest Lorem ipsum dolor sit amet.",
                  link: "",
                  img: "",
                },
              ],
            },
            {
              items: [
                {
                  type: "image",
                  imageSize: 0,
                  image: {
                    url: "",
                    alt: "",
                  },
                  text: "Lorem ipsum dolor sit amet, coneos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                  link: "",
                  img: "https://picsum.photos/400/400",
                },
              ],
            },
          ],
          image: {
            url: "",
            alt: "",
          },
          video: "",
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "2",
      title: "Project 2",
      description: "Description Description  Description 2",
      image: "https://picsum.photos/400/400",
      tags: ["development", "motion", "ux"],
      slides: [
        {
          type: "video",
          content: [
            {
              type: "text",
              imageSize: 0,
              image: {
                url: "",
                alt: "",
              },
              text: "",
              link: "",
              img: "",
            },
          ],
          image: {
            url: "",
            alt: "",
          },
          video: "",
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "3",
      title: "Project 3",
      description: "Description Description  Description 3",
      image: "https://picsum.photos/400/400",
      tags: ["web", "design", "development"],
      slides: [
        {
          type: "video",
          content: [
            {
              type: "text",
              imageSize: 0,
              image: {
                url: "",
                alt: "",
              },
              text: "",
              link: "",
              img: "",
            },
          ],
          image: {
            url: "",
            alt: "",
          },
          video: "",
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "4",
      title: "Project 4",
      description: "Description Description  Description 4",
      image: "https://picsum.photos/400/400",
      tags: ["animation", "illustration", "web", "design"],
      slides: [
        {
          type: "video",
          content: [
            {
              type: "text",
              imageSize: 0,
              image: {
                url: "",
                alt: "",
              },
              text: "",
              link: "",
              img: "",
            },
          ],
          image: {
            url: "",
            alt: "",
          },
          video: "",
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "5",
      title: "Project 5",
      description: "Description Description  Description 5",
      image: "https://picsum.photos/400/400",
      tags: ["development", "motion", "ux"],
      slides: [
        {
          type: "video",
          content: [
            {
              type: "text",
              imageSize: 0,
              image: {
                url: "",
                alt: "",
              },
              text: "",
              link: "",
              img: "",
            },
          ],
          image: {
            url: "",
            alt: "",
          },
          video: "",
          description: "",
          img: "",
        },
      ],
    },
  ];

  // const MDProjects: ProjectType[] = [
  //   {
  //     id: "1",
  //     title: "Project 1",
  //     description: "Description Description  Description 1",
  //     image: "https://picsum.photos/400/400",
  //     tags: ["animation", "illustration", "web", "design"],
  //   },
  //   {
  //     id: "2",
  //     title: "Project 2",
  //     description: "Description Description  Description 2",
  //     image: "https://picsum.photos/400/400",
  //     tags: ["development", "motion", "ux"],
  //   },
  //   {
  //     id: 3,
  //     title: "Project 3",
  //     description: "Description Description  Description 3",
  //     image: "https://picsum.photos/400/400",
  //     tags: ["web", "design", "development"],
  //   },
  //   {
  //     id: 4,
  //     title: "Project 4",
  //     description: "Description Description  Description 4",
  //     image: "https://picsum.photos/400/400",
  //     tags: ["animation", "illustration", "web", "design"],
  //   },
  //   {
  //     id: 5,
  //     title: "Project 5",
  //     description: "Description Description  Description 5",
  //     image: "https://picsum.photos/400/400",
  //     tags: ["development", "motion", "ux"],
  //   },
  //   {
  //     id: 6,
  //     title: "Project 6",
  //     description: "Description Description  Description 6",
  //     image: "https://picsum.photos/400/400",
  //     tags: ["web", "design", "development"],
  //   },
  // ];

  return {
    MDTags,
    MDProjects,
  };
}
