export type ThemeColors = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
};

export type Theme = {
  name: string;
  colors: ThemeColors;
};

export const themes: Theme[] = [
  {
    name: "Default",
    colors: {
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 84% 4.9%",
      primary: "22 95% 59%",
      primaryForeground: "60 9.1% 97.8%",
      secondary: "60 4.8% 95.9%",
      secondaryForeground: "24 9.8% 10%",
      muted: "60 4.8% 95.9%",
      mutedForeground: "25 5.3% 44.7%",
      accent: "60 4.8% 95.9%",
      accentForeground: "24 9.8% 10%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "60 9.1% 97.8%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "22 95% 59%",
      chart1: "22 95% 59%",
      chart2: "16 93% 63%",
      chart3: "34 94% 78%",
      chart4: "222.2 84% 4.9%",
      chart5: "60 4.8% 95.9%",
    },
  },
  {
    name: "Dark",
    colors: {
      background: "222 47% 11%",
      foreground: "220 13% 96%",
      card: "222 47% 11%",
      cardForeground: "220 13% 96%",
      popover: "222 47% 11%",
      popoverForeground: "220 13% 96%",
      primary: "217 91% 60%",
      primaryForeground: "210 40% 98%",
      secondary: "222 37% 16%",
      secondaryForeground: "210 40% 98%",
      muted: "222 30% 21%",
      mutedForeground: "220 13% 80%",
      accent: "217 94% 68%",
      accentForeground: "210 40% 98%",
      destructive: "0 62.8% 30.6%",
      destructiveForeground: "0 0% 98%",
      border: "222 37% 16%",
      input: "222 37% 16%",
      ring: "217 91% 60%",
      chart1: "217 91% 60%",
      chart2: "217 94% 68%",
      chart3: "222 37% 16%",
      chart4: "220 13% 96%",
      chart5: "222 30% 21%",
    },
  },
  {
    name: 'Stone',
    colors: {
      background: '240 10% 3.9%',
      foreground: '240 5.9% 90%',
      card: '240 10% 3.9%',
      cardForeground: '240 5.9% 90%',
      popover: '240 10% 3.9%',
      popoverForeground: '240 5.9% 90%',
      primary: '240 5.9% 90%',
      primaryForeground: '240 5.9% 10%',
      secondary: '240 3.7% 15.9%',
      secondaryForeground: '240 5.9% 90%',
      muted: '240 3.7% 15.9%',
      mutedForeground: '240 5% 64.9%',
      accent: '240 3.7% 15.9%',
      accentForeground: '240 5.9% 90%',
      destructive: '0 62.8% 30.6%',
      destructiveForeground: '240 5.9% 90%',
      border: '240 3.7% 15.9%',
      input: '240 3.7% 15.9%',
      ring: '240 5.9% 90%',
      chart1: '240 5.9% 90%',
      chart2: '240 4.9% 83.9%',
      chart3: '240 4.9% 73.9%',
      chart4: '240 4.9% 63.9%',
      chart5: '240 4.9% 53.9%',
    },
  },
  {
    name: 'Rose',
    colors: {
      background: '355 75% 97%',
      foreground: '347 89% 18%',
      card: '355 86% 95%',
      cardForeground: '347 89% 18%',
      popover: '355 86% 95%',
      popoverForeground: '347 89% 18%',
      primary: '343 96% 62%',
      primaryForeground: '355 100% 98%',
      secondary: '349 71% 83%',
      secondaryForeground: '347 89% 18%',
      muted: '349 71% 91%',
      mutedForeground: '347 38% 40%',
      accent: '349 71% 83%',
      accentForeground: '347 89% 18%',
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '0 0% 98%',
      border: '355 70% 91%',
      input: '355 70% 91%',
      ring: '343 96% 62%',
      chart1: '343 96% 62%',
      chart2: '349 71% 83%',
      chart3: '349 71% 91%',
      chart4: '347 89% 18%',
      chart5: '347 38% 40%',
    },
  },
  {
    name: 'Green',
    colors: {
      background: '140 75% 97%',
      foreground: '145 55% 15%',
      card: '140 86% 95%',
      cardForeground: '145 55% 15%',
      popover: '140 86% 95%',
      popoverForeground: '145 55% 15%',
      primary: '142 76% 36%',
      primaryForeground: '142 100% 98%',
      secondary: '145 61% 83%',
      secondaryForeground: '145 55% 15%',
      muted: '145 61% 91%',
      mutedForeground: '145 38% 40%',
      accent: '145 61% 83%',
      accentForeground: '145 55% 15%',
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '0 0% 98%',
      border: '140 70% 91%',
      input: '140 70% 91%',
      ring: '142 76% 36%',
      chart1: '142 76% 36%',
      chart2: '145 61% 83%',
      chart3: '145 61% 91%',
      chart4: '145 55% 15%',
      chart5: '145 38% 40%',
    },
  },
  {
    name: 'Orange',
    colors: {
      background: '24 80% 97%',
      foreground: '24 70% 20%',
      card: '24 86% 95%',
      cardForeground: '24 70% 20%',
      popover: '24 86% 95%',
      popoverForeground: '24 70% 20%',
      primary: '25 95% 53%',
      primaryForeground: '25 100% 98%',
      secondary: '25 71% 83%',
      secondaryForeground: '24 70% 20%',
      muted: '25 71% 91%',
      mutedForeground: '24 38% 40%',
      accent: '25 71% 83%',
      accentForeground: '24 70% 20%',
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '0 0% 98%',
      border: '24 70% 91%',
      input: '24 70% 91%',
      ring: '25 95% 53%',
      chart1: '25 95% 53%',
      chart2: '25 71% 83%',
      chart3: '25 71% 91%',
      chart4: '24 70% 20%',
      chart5: '24 38% 40%',
    },
  },
  {
    name: 'Blue',
    colors: {
      background: "220 13% 96%",
      foreground: "222 47% 11%",
      card: "0 0% 100%",
      cardForeground: "222 47% 11%",
      popover: "0 0% 100%",
      popoverForeground: "222 47% 11%",
      primary: "217 91% 60%",
      primaryForeground: "210 40% 98%",
      secondary: "220 14% 91%",
      secondaryForeground: "222 47% 11%",
      muted: "220 9% 84%",
      mutedForeground: "222 47% 25%",
      accent: "217 94% 68%",
      accentForeground: "222 47% 11%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "0 0% 98%",
      border: "220 13% 91%",
      input: "220 13% 91%",
      ring: "217 91% 60%",
      chart1: "217 91% 60%",
      chart2: "217 94% 68%",
      chart3: "220 14% 91%",
      chart4: "222 47% 11%",
      chart5: "220 9% 84%",
    }
  }
];
