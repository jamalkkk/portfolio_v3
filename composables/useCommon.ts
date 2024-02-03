import { ref } from 'vue';
import { useApp } from '~/store/useApp';
import { useLoader } from '~/store/useLoader';
import { useSounds } from '~/store/useSounds';
import { useSwiperStore } from '~/store/useSwiperStore';

export function useCommon() {
  const app = useApp();
  const loader = useLoader();
  const sounds = useSounds();
  const swiper = useSwiperStore();
  const router = useRouter();

  const { setShouldScrollToProjects, setProject, setDocumentBreakpoint } = app;
  const { setShouldProjectLoaderBeActive } = loader;
  const { isSoundSupposedActive, setIsSoundActive } = sounds;
  const { resetVideoSlideIndices } = swiper;

  const isMySoundSupposedActive = ref(isSoundSupposedActive); // Initialize with appropriate value

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

      if (isMySoundSupposedActive.value) {
        setTimeout(() => setIsSoundActive(true), 500);
        isMySoundSupposedActive.value = false;
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

  const getBreakpoint = (size: string): number => {
    const Breakpoints: Record<string, number> = {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    };
    
    return Breakpoints[size] || 1200;
  }

  const setStoreDocumentBreakpoint = () => {
    const documentWidth = getDocumentWidth();
      let breakpoint = 'sm';

      if (documentWidth > getBreakpoint('xl')) {
        breakpoint = 'xl';
      } else if (documentWidth > getBreakpoint('lg')) {
        breakpoint = 'lg';
      } else if (documentWidth > getBreakpoint('md')) {
        breakpoint = 'md';
      }
    
     setDocumentBreakpoint(breakpoint);
  }

  return {
    isSoundSupposedActive,
    scrollToHome,
    scrollToProjects,
    closeProject,
    getRandomInt,
    getDocumentWidth,
    getBreakpoint,
    setStoreDocumentBreakpoint,
  };
}
