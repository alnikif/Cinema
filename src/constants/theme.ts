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
    '--header-background': '#EBECF0',
    '--dropdown-background': '#EBECF0',
    '--header-color': '#000',

    // checkbox & slider
    '--checkbox-background': '#6370f0',
    '--checkbox-color': '#000',

    //table
    '--table-row-background': '#EBECF0',
    '--table-row-color': '#000',
    '--table-row-border': '1px solid #000',

    //card
    '--card-background': '#6370f0'
  },
  [Themes.dark]: {
    // header
    '--header-background': '#808080',
    '--dropdown-background': '#808080',
    '--header-color': '#fff',

    // checkbox & slider
    '--checkbox-background': '#000000',
    '--checkbox-color': '#000000',

    //table
    '--table-row-background': '#BEBEBE',
    '--table-row-color': '#fff',
    '--table-row-border': '1px solid #000',

    //card
    '--card-background': '#710C04'
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
