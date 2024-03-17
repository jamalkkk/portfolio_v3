import { type ISbStoryData } from "storyblok-js-client";

type IStoryblokClientParams = {
  resolveRelations?: string[];
};

export function useStoryblokClient() {
  const config = useRuntimeConfig();
  const storyblokApi = useStoryblokApi();

  const getStory = async <T>(
    path: string,
    params?: IStoryblokClientParams
  ): Promise<ISbStoryData<T> | null> => {
    try {
      const { data } = await storyblokApi.get(`cdn/stories${path}`, {
        version: "published",
        resolve_links: "url",
        resolve_relations: params?.resolveRelations,
      });

      return data.story;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getDatasource = async <T>(
    datasource: string
  ): Promise<ISbStoryData<T> | null> => {
    try {
      const { data } = await storyblokApi.get("cdn/datasource_entries", {
        datasource: datasource,
      });

      return data.datasource_entries;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return {
    getStory,
    getDatasource,
  };
}
