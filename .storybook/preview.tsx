import type { Preview } from '@storybook/react-vite'
import { withThemeByClassName } from '@storybook/addon-themes'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        light: { name: 'Light', value: 'oklch(1 0 0)' },
        dark: { name: 'Dark', value: 'oklch(0.15 0 49.31)' },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    Story => (
      <div
        style={{
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
          padding: '1rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export default preview
