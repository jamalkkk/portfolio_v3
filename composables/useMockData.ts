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
        {
          type: "content",
          content: [
            {
              type: "text",
              imageSize: 0,
              image: {
                url: "",
                alt: "",
              },
              text: "blaah blah lah",
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
