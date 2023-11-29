export enum Themes {
  light = 'light',
  dark = 'dark'
}

export type Theme = {
  key: Themes;
  title: string;
  constants: Record<string, string>;
};

export const DEFAULT_THEME = Themes.light;

export const themesTokensConstants = {
  [Themes.light]: {
    // header
    '--header-background': '#6370f0',
    '--dropdown-background': '#6370f0',
    '--header-color': '#ffe4c4',

    // checkbox & slider
    '--checkbox-background': '#6370f0',
    '--checkbox-color': '#6370f0'
  },
  [Themes.dark]: {
    // header
    '--header-background': '#004c00',
    '--dropdown-background': '#004c00',
    '--header-color': '#fff',

    // checkbox & slider
    '--checkbox-background': '#000000',
    '--checkbox-color': '#000000'
  }
};

export const themes: Theme[] = [
  { key: Themes.light, title: 'Light', constants: themesTokensConstants[Themes.light] },
  { key: Themes.dark, title: 'Dark', constants: themesTokensConstants[Themes.dark] }
];

export const themesMap = themes.reduce(
  (acc, theme: Theme) => ({
    ...acc,
    [theme.key]: theme
  }),
  {} as Record<Themes, Theme>
);
