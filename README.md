# LittleHorse UI Library

Shared React component library for LittleHorse frontend projects, built on [shadcn/ui](https://ui.shadcn.com) and [Radix UI](https://www.radix-ui.com) primitives.

## Installation

This package is hosted on [GitHub Packages](https://docs.github.com/en/packages), which requires authentication even for public packages.

**1. Configure the scoped registry** by adding an `.npmrc` file to your project root:

```
@littlehorse-enterprises:registry=https://npm.pkg.github.com
```

**2. Authenticate:**

- **Locally** — run `npm login --registry=https://npm.pkg.github.com` using a [personal access token](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token) with `read:packages` scope.
- **GitHub Actions** — set the `NODE_AUTH_TOKEN` environment variable:
  ```yaml
  env:
    NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  ```
  `GITHUB_TOKEN` is provided automatically by GitHub Actions — no manual secret setup required.

**3. Install:**

```bash
npm install @littlehorse-enterprises/ui-library
```

## Usage

Import the stylesheet in your app's entry point — it provides the required CSS variables and base styles:

```tsx
import '@littlehorse-enterprises/ui-library/index.css'
```

Then import components via deep imports:

```tsx
import { Button } from '@littlehorse-enterprises/ui-library/button'

export default function App() {
  return <Button variant="default">Click me</Button>
}
```

Every component is exported as a separate entry point (e.g. `/button`, `/dialog`, `/form`)

## Development

```bash
npm install

# Install pre-commit (if not already installed)
macOS:  brew install pre-commit
Linux:  pip install pre-commit
Windows: pip install pre-commit

# Set up Git hooks
pre-commit install --config .pre-commit-config-front.yaml

# Start Storybook + Vite dev server
npm run dev
```

### Scripts

| Command                 | Description                                       |
| ----------------------- | ------------------------------------------------- |
| `npm run dev`           | Start Storybook and Vite dev server concurrently  |
| `npm run build`         | Build library and regenerate package.json exports |
| `npm run lint`          | Run ESLint and Prettier checks                    |
| `npm run lint:fix`      | Auto-fix lint and formatting issues               |
| `npm run test`          | Run unit tests                                    |
| `npm run test:coverage` | Run tests with coverage report                    |
| `npm run test:ui`       | Run tests with Vitest UI dashboard                |

The pre-commit hook runs lint:fix, test, and build. Commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org) format.

## Project Structure

```
src/
  [component-name]/
    index.tsx           # Component implementation
    index.stories.tsx   # Storybook stories
    index.test.tsx      # Vitest unit tests
  lib/
    utils.ts            # cn() utility (clsx + tailwind-merge)
  index.css             # Theme tokens (OKLch CSS variables, light/dark)
scripts/
  generate-exports.js   # Auto-generates package.json exports after build
```

### Adding a Component

1. Create `src/[component-name]/index.tsx`
2. Add colocated `.stories.tsx` and `.test.tsx` files
3. Run `npm run build` to register the new export in `package.json`
