const base = 4;

export const Spacers = {
  xxl: `${base * 20}px`, // 80px
  xl: `${base * 16}px`, // 64px
  l: `${base * 12}px`, // 48px
  m: `${base * 6}px`, // 24px
  s: `${base * 4}px`, // 16px
  xs: `${base * 2}px`, // 8px
  xxs: `${base}px`, // 4px
};

export type SpacersType = typeof Spacers;
export type SizesType = keyof typeof Spacers;
