# LittleHorse UI Component Library

LittleHorse's UI component library built with shadcn/ui.

## Installation

```bash
npm install @littlehorse-enterprises/ui-library
```

## Usage

Make sure to import the CSS file in your main entry point as this has the required styles for the components to work.

```tsx
import '@littlehorse-enterprises/ui-library/index.css'
```

```tsx
import { Button } from '@littlehorse-enterprises/ui-library/button'

export default function App() {
  return (
    <Button variant="default">
      Click me
    </Button>
  )
}
```

## Development

```bash
# Install dependencies
npm install

# Set up Git hooks with Husky
npx husky install
# It is going to say the command is deprecated, but husky says we can ignore that because we are a library with consumers not an app. So we don't want to do postinstall script that would effect consumers of the library.

# Start development server
npm run dev

# Build library
npm run build
```
