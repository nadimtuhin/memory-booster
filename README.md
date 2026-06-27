# Memory Booster

A memory card game built with React and MobX. You get a few seconds to memorize a grid of colored blocks, then reproduce it from memory. Each round gets harder.

![Memory Booster gameplay](https://media.giphy.com/media/l3vReDYWyo0BBiJK8/giphy.gif)

[![CI](https://github.com/nadimtuhin/memory-booster/actions/workflows/ci.yml/badge.svg)](https://github.com/nadimtuhin/memory-booster/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Run it

```bash
git clone https://github.com/nadimtuhin/memory-booster.git
cd memory-booster
yarn install
yarn start
```

Opens at `http://localhost:3000`.

## Run tests

```bash
yarn test
```

## Tech stack

- React 15
- MobX 2 (observable state)
- React Router 3
- Webpack 1 (ejected CRA)
- Jest + snapshot tests

## How it works

1. **Memorize** — colored blocks flash on screen for a few seconds
2. **Play** — reproduce the pattern by clicking blocks in order
3. Level increases on success, resets on failure

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT
