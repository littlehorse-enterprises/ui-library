import { create } from 'storybook/theming'

const branding = {
  brandTitle: 'LittleHorse UI Library',
  brandImage: '/logo.svg',
}

export const lightTheme = create({
  base: 'light',
  ...branding,
})

export const darkTheme = create({
  base: 'dark',
  appBg: 'oklch(0.15 0 49.31)',
  appContentBg: 'oklch(0.15 0 49.31)',
  barBg: 'oklch(0.15 0 49.31)',
  ...branding,
})
