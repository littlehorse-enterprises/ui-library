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

# Start development server
npm run dev

# Build library
npm run build
```
