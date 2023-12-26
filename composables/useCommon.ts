import { ref } from 'vue';
import { useApp } from '~/store/useApp';
import { useLoader } from '~/store/useLoader';
import { useSounds } from '~/store/useSounds';
import { useSwiper } from '~/store/useSwiper';

export function useCommon() {
  const app = useApp();
  const loader = useLoader();
  const sounds = useSounds();
  const swiper = useSwiper();
  const router = useRouter();

  const { setShouldScrollToProjects, setProject } = app;
  const { setShouldProjectLoaderBeActive } = loader;
  const { isSupposedActive, setIsActive } = sounds;
  const { resetVideoSlideIndices } = swiper;

  const isSoundSupposedActive = ref(isSupposedActive); // Initialize with appropriate value

  const scrollToHome = () => {
    const container = document.querySelector<HTMLElement>('.layout-container');
    container?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const container = document.querySelector<HTMLElement>('.layout-container');
    container?.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  };

  const closeProject = (scrollToProjects = true) => {
    setShouldProjectLoaderBeActive(true);

    if (scrollToProjects) {
      setShouldScrollToProjects(true);
    }

    setTimeout(() => {
      router.push('/');

      setProject({});

      if (isSoundSupposedActive.value) {
        setTimeout(() => setIsActive(true), 500);
        isSoundSupposedActive.value = false;
      }

      resetVideoSlideIndices();
    }, 300);
  };

  const getRandomInt = (max: number, min: number = 0): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getDocumentWidth = (): number => {
    return document.documentElement.clientWidth;
  }

  const getBreakpoint = (size: string): number | null => {
    const Breakpoints: Record<string, number> = {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      // Add more breakpoints as needed
    };
    
    return Breakpoints[size] || null;
  }

  return {
    isSoundSupposedActive,
    scrollToHome,
    scrollToProjects,
    closeProject,
    getRandomInt,
    getDocumentWidth,
    getBreakpoint,
  };
}
