import { gamesThemes } from "../themes/themes";

export const Levels = (gameKey) => {
  try {
    const themes = gamesThemes[gameKey];
    delete themes.name;
    delete themes.img;

    return Object.keys(themes)?.map((themeKey) => {
      const themeLength = themes[themeKey].values?.length;
      const name =
        gameKey === "memoria" ? `${themeKey} (${themeLength})` : themeKey;
      const img = themes[themeKey]?.img;
      return {
        name,
        img,
        link: `${gameKey}/${themeKey}`,
      };
    });
  } catch (e) {}
};

export const Games = Object.keys(gamesThemes)?.map((themeKey) => {
  const name = gamesThemes[themeKey]?.name;
  const img = gamesThemes[themeKey]?.img;
  return {
    name,
    img,
    link: themeKey,
  };
});
