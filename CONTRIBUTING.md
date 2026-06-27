# Contributing

## Setup

```bash
git clone https://github.com/nadimtuhin/memory-booster.git
cd memory-booster
yarn install
yarn start   # dev server at localhost:3000
yarn test    # run jest tests
```

## Project structure

```
src/
  Components/
    Board/
      Memorize/   — flash phase (show blocks)
      Play/       — recall phase (click blocks)
      Start/      — start screen
    App.js        — root component, MobX inject
  Models/
    Blocks.js     — observable game state
  index.js        — entry point
```

## Making changes

- Game logic lives in `src/Models/Blocks.js`
- Each board phase is a self-contained component with its own spec file
- Run `yarn test` before opening a PR — snapshots update with `yarn test -- -u`

## Pull request checklist

- [ ] Tests pass (`yarn test`)
- [ ] New behaviour has a test or snapshot
- [ ] No private URLs or analytics scripts added
