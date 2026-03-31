import { addons } from 'storybook/manager-api'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'
import { lightTheme, darkTheme } from './themes'

addons.setConfig({
  theme: lightTheme,
})

addons.register('dark-mode-listener', api => {
  const channel = addons.getChannel()
  channel.on(DARK_MODE_EVENT_NAME, (isDark: boolean) => {
    api.setOptions({ theme: isDark ? darkTheme : lightTheme })
  })
})
