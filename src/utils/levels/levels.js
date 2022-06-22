import { themes } from "../themes/themes";

export const Levels = Object.keys(themes)?.map((themeKey) => {
  const themeLength = themes[themeKey]?.length;
  const name = `${themeKey} (${themeLength})`;
  const img = themes[themeKey][0]?.img;
  return {
    name,
    img,
    link: themeKey,
  };
});

