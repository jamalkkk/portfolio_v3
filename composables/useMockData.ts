import type { ProjectType } from "~/types/types";

export function useMockData() {
  const MDTags = [
    {
      name: "animation",
      id: 12121,
      value: "animation",
      dimension_value: null,
    },
  ];

  const MDProjects: ProjectType[] = [
    {
      id: "1",
      title: "Project 1",
      description: "Lorem Ipusum blahd kseded 1",
      image: "https://picsum.photos/400/400",
      tags: ["animation", "illustration", "web", "design"],
      slides: [
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
                  text: "Sirmod tempest Lorem Lorem ipsum dolor sit amet, coneos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet ipsum dolor sit amet.",
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
                  img: "https://picsum.photos/1300/1300",
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
                  img: "https://picsum.photos/1400/1400",
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
        {
          type: "video",
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
          video: {
            type: "vimeo",
            videoId: "915249564",
          },
          description: "",
          img: "https://picsum.photos/1200/800",
        },
        {
          type: "video",
          columns: [],
          image: {
            url: "",
            alt: "",
          },
          video: {
            type: "youtube",
            videoId: "hHrbgjVySlc",
          },
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "1",
      title: "Project 1",
      description: "Lorem Ipusum blahd kseded 1",
      image: "https://picsum.photos/400/400",
      tags: ["animation", "illustration", "web", "design"],
      slides: [
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
                  text: "Sirmod tempest Lorem Lorem ipsum dolor sit amet, coneos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet ipsum dolor sit amet.",
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
                  img: "https://picsum.photos/1300/1300",
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
                  img: "https://picsum.photos/1400/1400",
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
        {
          type: "video",
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
          video: {
            type: "vimeo",
            videoId: "915249564",
          },
          description: "",
          img: "https://picsum.photos/1200/800",
        },
        {
          type: "video",
          columns: [],
          image: {
            url: "",
            alt: "",
          },
          video: {
            type: "youtube",
            videoId: "hHrbgjVySlc",
          },
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "1",
      title: "Project 1",
      description: "Lorem Ipusum blahd kseded 1",
      image: "https://picsum.photos/400/400",
      tags: ["animation", "illustration", "web", "design"],
      slides: [
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
                  text: "Sirmod tempest Lorem Lorem ipsum dolor sit amet, coneos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet ipsum dolor sit amet.",
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
                  img: "https://picsum.photos/1300/1300",
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
                  img: "https://picsum.photos/1400/1400",
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
        {
          type: "video",
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
          video: {
            type: "vimeo",
            videoId: "915249564",
          },
          description: "",
          img: "https://picsum.photos/1200/800",
        },
        {
          type: "video",
          columns: [],
          image: {
            url: "",
            alt: "",
          },
          video: {
            type: "youtube",
            videoId: "hHrbgjVySlc",
          },
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "1",
      title: "Project 1",
      description: "Lorem Ipusum blahd kseded 1",
      image: "https://picsum.photos/400/400",
      tags: ["animation", "illustration", "web", "design"],
      slides: [
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
                  text: "Sirmod tempest Lorem Lorem ipsum dolor sit amet, coneos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet ipsum dolor sit amet.",
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
                  img: "https://picsum.photos/1300/1300",
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
                  img: "https://picsum.photos/1400/1400",
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
        {
          type: "video",
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
          video: {
            type: "vimeo",
            videoId: "915249564",
          },
          description: "",
          img: "https://picsum.photos/1200/800",
        },
        {
          type: "video",
          columns: [],
          image: {
            url: "",
            alt: "",
          },
          video: {
            type: "youtube",
            videoId: "hHrbgjVySlc",
          },
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "1",
      title: "Project 1",
      description: "Lorem Ipusum blahd kseded 1",
      image: "https://picsum.photos/400/400",
      tags: ["animation", "illustration", "web", "design"],
      slides: [
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
                  text: "Sirmod tempest Lorem Lorem ipsum dolor sit amet, coneos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet ipsum dolor sit amet.",
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
                  img: "https://picsum.photos/1300/1300",
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
                  img: "https://picsum.photos/1400/1400",
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
        {
          type: "video",
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
          video: {
            type: "vimeo",
            videoId: "915249564",
          },
          description: "",
          img: "https://picsum.photos/1200/800",
        },
        {
          type: "video",
          columns: [],
          image: {
            url: "",
            alt: "",
          },
          video: {
            type: "youtube",
            videoId: "hHrbgjVySlc",
          },
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "1",
      title: "Project 1",
      description: "Lorem Ipusum blahd kseded 1",
      image: "https://picsum.photos/400/400",
      tags: ["animation", "illustration", "web", "design"],
      slides: [
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
                  text: "Sirmod tempest Lorem Lorem ipsum dolor sit amet, coneos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet ipsum dolor sit amet.",
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
                  img: "https://picsum.photos/1300/1300",
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
                  img: "https://picsum.photos/1400/1400",
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
        {
          type: "video",
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
          video: {
            type: "vimeo",
            videoId: "915249564",
          },
          description: "",
          img: "https://picsum.photos/1200/800",
        },
        {
          type: "video",
          columns: [],
          image: {
            url: "",
            alt: "",
          },
          video: {
            type: "youtube",
            videoId: "hHrbgjVySlc",
          },
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "1",
      title: "Project 1",
      description: "Lorem Ipusum blahd kseded 1",
      image: "https://picsum.photos/400/400",
      tags: ["animation", "illustration", "web", "design"],
      slides: [
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
                  text: "Sirmod tempest Lorem Lorem ipsum dolor sit amet, coneos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet ipsum dolor sit amet.",
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
                  img: "https://picsum.photos/1300/1300",
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
                  img: "https://picsum.photos/1400/1400",
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
        {
          type: "video",
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
          video: {
            type: "vimeo",
            videoId: "915249564",
          },
          description: "",
          img: "https://picsum.photos/1200/800",
        },
        {
          type: "video",
          columns: [],
          image: {
            url: "",
            alt: "",
          },
          video: {
            type: "youtube",
            videoId: "hHrbgjVySlc",
          },
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "1",
      title: "Project 1",
      description: "Lorem Ipusum blahd kseded 1",
      image: "https://picsum.photos/400/400",
      tags: ["animation", "illustration", "web", "design"],
      slides: [
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
                  text: "Sirmod tempest Lorem Lorem ipsum dolor sit amet, coneos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet ipsum dolor sit amet.",
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
                  img: "https://picsum.photos/1300/1300",
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
                  img: "https://picsum.photos/1400/1400",
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
        {
          type: "video",
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
          video: {
            type: "vimeo",
            videoId: "915249564",
          },
          description: "",
          img: "https://picsum.photos/1200/800",
        },
        {
          type: "video",
          columns: [],
          image: {
            url: "",
            alt: "",
          },
          video: {
            type: "youtube",
            videoId: "hHrbgjVySlc",
          },
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "1",
      title: "Project 1",
      description: "Lorem Ipusum blahd kseded 1",
      image: "https://picsum.photos/400/400",
      tags: ["animation", "illustration", "web", "design"],
      slides: [
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
                  text: "Sirmod tempest Lorem Lorem ipsum dolor sit amet, coneos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet ipsum dolor sit amet.",
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
                  img: "https://picsum.photos/1300/1300",
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
                  img: "https://picsum.photos/1400/1400",
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
        {
          type: "video",
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
          video: {
            type: "vimeo",
            videoId: "915249564",
          },
          description: "",
          img: "https://picsum.photos/1200/800",
        },
        {
          type: "video",
          columns: [],
          image: {
            url: "",
            alt: "",
          },
          video: {
            type: "youtube",
            videoId: "hHrbgjVySlc",
          },
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "1",
      title: "Project 1",
      description: "Lorem Ipusum blahd kseded 1",
      image: "https://picsum.photos/400/400",
      tags: ["animation", "illustration", "web", "design"],
      slides: [
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
                  text: "Sirmod tempest Lorem Lorem ipsum dolor sit amet, coneos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet ipsum dolor sit amet.",
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
                  img: "https://picsum.photos/1300/1300",
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
                  img: "https://picsum.photos/1400/1400",
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
        {
          type: "video",
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
          video: {
            type: "vimeo",
            videoId: "915249564",
          },
          description: "",
          img: "https://picsum.photos/1200/800",
        },
        {
          type: "video",
          columns: [],
          image: {
            url: "",
            alt: "",
          },
          video: {
            type: "youtube",
            videoId: "hHrbgjVySlc",
          },
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "2",
      title: "Project 2",
      description: "Lorem Ipusum blahd kseded 2",
      image: "https://picsum.photos/400/400",
      tags: ["development", "motion", "ux"],
      slides: [
        {
          type: "video",
          columns: [],
          image: {
            url: "",
            alt: "",
          },
          video: {
            type: "youtube",
            videoId: "hHrbgjVySlc",
          },
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "3",
      title: "Project 3",
      description: "Lorem Ipusum blahd kseded 3",
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
          video: {
            type: "vimeo",
            videoId: "915249564",
          },
          description: "",
          img: "",
        },
      ],
    },
    {
      id: "4",
      title: "Project 4",
      description: "Lorem Ipusum blahd kseded 4",
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
      description: "Lorem Ipusum blahd kseded 5",
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

  const MDMessages = [
    "Cleaning up my flat",
    "Just preparing my coffee",
    "Loading stuff and things",
    "Hang tight, I'm almost there",
    "Count from 1 to infinity",
    "Watering my thirsty plants",
    "Meditate with me, hummm",
  ];

  return {
    MDTags,
    MDProjects,
    MDMessages,
  };
}
