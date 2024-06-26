import { useApp } from "~/store/useApp";
import { useLoader } from "~/store/useLoader";
import { useSounds } from "~/store/useSounds";
import { useTheme } from "~/store/useTheme";
import { useSwiperStore } from "~/store/useSwiperStore";

export function useCommon() {
  const app = useApp();
  const loader = useLoader();
  const sounds = useSounds();
  const router = useRouter();
  const theme = useTheme();
  const swiper = useSwiperStore();

  const {
    setShouldScrollToProjects,
    setDocumentBreakpoint,
    setIsMainHomeActive,
  } = app;
  const { setIsLoaderTransitioning } = loader;
  const { isSoundSupposedActive, setIsSoundActive } = sounds;
  const { originalPrimary, originalNegative, setThemeColors } = theme;
  const { resetVideoSlideIndices } = swiper;

  const isMySoundSupposedActive = ref(isSoundSupposedActive); // Initialize with appropriate value

  // Home page
  const scrollToHome = () => {
    const container = document.querySelector<HTMLElement>(".layout-container");
    container?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToProjects = (isSmooth = true) => {
    const container = document.querySelector<HTMLElement>(".layout-container");
    container?.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: isSmooth ? "smooth" : "instant",
    });
  };

  // Project page
  const closeProject = (scrollToProjects = true) => {
    setIsLoaderTransitioning(true);

    if (scrollToProjects) {
      setShouldScrollToProjects(true);
    } else {
      setIsMainHomeActive(true);
    }

    setTimeout(() => {
      router.push("/");

      if (isMySoundSupposedActive.value) {
        setTimeout(() => setIsSoundActive(true), 500);
        isMySoundSupposedActive.value = false;
      }

      resetVideoSlideIndices();
    }, 300);
  };

  const getRandomInt = (max: number, min: number = 0): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getDocumentWidth = (): number => {
    return document.documentElement.clientWidth;
  };

  const getBreakpoint = (size: string): number => {
    const Breakpoints: Record<string, number> = {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    };

    return Breakpoints[size] || 1200;
  };

  const setStoreDocumentBreakpoint = () => {
    const documentWidth = getDocumentWidth();
    let breakpoint = "sm";

    if (documentWidth > getBreakpoint("xl")) {
      breakpoint = "xl";
    } else if (documentWidth > getBreakpoint("lg")) {
      breakpoint = "lg";
    } else if (documentWidth > getBreakpoint("md")) {
      breakpoint = "md";
    }

    setDocumentBreakpoint(breakpoint);
  };

  // Theme
  const getRandomColor = (): string => {
    let color = Math.floor(Math.random() * 16777215).toString(16);

    while (color.length < 6) {
      color += "9"; // in case it is shorter than 6 hex digits
    }

    return `#${color}`;
  };

  const getContrastColor = (hexColor: string): string => {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? originalPrimary : originalNegative;
  };

  const getRandomColorTheme = () => {
    const randomColor = getRandomColor();

    return { primary: randomColor, negative: getContrastColor(randomColor) };
  };

  // Load theme colors from local storage if available
  const loadThemeColorsFromStorage = () => {
    const storedTheme = localStorage.getItem("theme");

    return storedTheme ? JSON.parse(storedTheme) : null; // No colors stored
  };

  // Save theme to local storage
  const saveThemeColorsInStorage = (theme: object) => {
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  const setProperty = (key: string, value: string) => {
    document.documentElement.style.setProperty(key, value);
  };

  const setTheme = (isDark: boolean = false) => {
    const primary = isDark ? "negative" : "primary";
    const negative = !isDark ? "negative" : "primary";

    setProperty("--primary", theme[primary]);
    setProperty("--negative", theme[negative]);
    setProperty("--primary-transparent", `${theme[primary]}a`);
    setProperty("--negative-transparent", `${theme[negative]}a`);

    document.body.classList.add(`is-${isDark ? "dark" : "light"}-theme`);
    document.body.classList.remove(`is-${isDark ? "light" : "dark"}-theme`);
  };

  const init = () => {
    setStoreDocumentBreakpoint();
    setThemeColors(loadThemeColorsFromStorage());

    window.addEventListener("resize", setStoreDocumentBreakpoint);

    console.log(
      `%cHey hey, curious explorer! 🕵️‍♂️\n\nI see you're inspecting my website. If you have any questions or need assistance, feel free to reach out directly ;)\n\nHappy coding!`,
      `color: #aaa; font-size: 12px; font-weight: bold;`
    );
  };

  return {
    init,
    scrollToHome,
    scrollToProjects,
    saveThemeColorsInStorage,
    setTheme,
    closeProject,
    getRandomInt,
    getDocumentWidth,
    getBreakpoint,
    getRandomColorTheme,
    isSoundSupposedActive,
  };
}
