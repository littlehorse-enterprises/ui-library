import { useEffect, useState, type ComponentProps, type PropsWithChildren } from 'react'
import type { Preview } from '@storybook/react-vite'
import { addons } from 'storybook/preview-api'
import { DocsContainer } from '@storybook/addon-docs/blocks'
import { DARK_MODE_EVENT_NAME, useDarkMode } from 'storybook-dark-mode'
import { lightTheme, darkTheme } from './themes'
import '../src/index.css'

const channel = addons.getChannel()

function ThemedDocsContainer({ children, ...props }: PropsWithChildren<ComponentProps<typeof DocsContainer>>) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setIsDark)
    return () => {
      channel.off(DARK_MODE_EVENT_NAME, setIsDark)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <DocsContainer {...props} theme={isDark ? darkTheme : lightTheme}>
      {children}
    </DocsContainer>
  )
}

const preview: Preview = {
  parameters: {
    docs: {
      container: ThemedDocsContainer,
    },
    darkMode: {
      current: 'light',
      dark: darkTheme,
      light: lightTheme,
      stylePreview: true,
    },
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => {
      const isDark = useDarkMode()

      useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark)
      }, [isDark])

      return (
        <div
          id="story-wrapper"
          style={{
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)',
            padding: '1rem',
          }}
        >
          <Story />
        </div>
      )
    },
  ],
}

export default preview
