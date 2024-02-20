# `<bbt-logo />`

Animated logo of Bitcoin Beach Travemünde provided as a web component. 

![Alt text](./bbt-logo-webcomponent.png?raw=true "Preview")



https://github.com/BitcoinBeachTravemuende/bbt-logo-webcomponent/assets/47693/0e14e78b-0cd2-4d10-bea5-7ce62b67356b



## Features

- Customize size and colors as you like. 
- No dependencies. 
- Supported by modern browsers.
- Use it with your favourite web framework.

## Properties

- `size: string`: `px` or `em`, eg. `size="300px"` or `size="8em"`
- `fill: string`: Color `name` or `hex` values, eg. `fill="white"` or `fill="#FFF"`
- `stroke: string`: color `name` or `hex` values, eg. `fill="black"` or `fill="#000"`

Examples:

```html
<!-- default -->
<bbt-logo />

<!-- custom colors -->
<bbt-logo stroke="white" fill="black"></bbt-logo>

<!-- custom size -->
<bbt-logo size="300px"></bbt-logo>

<!-- all custom values -->
<bbt-logo size="300px" stroke="black" fill="white"></bbt-logo>

```

## Build

### Requirements

#### Nix (recommended)

Install [Nix](https://zero-to-flakes.com/install)

#### Other

Install [Bun](https://bun.sh/) or any other Node package manager (`pnpm`, `npm`, `yarn` or whatever)

### Local build

- Install dependencies (command might be similar for other package manager)

```bash
bun install
```

- Local build

```bash
bun dev
```
Open http://localhost:5173

- Release build

```bash
bun run build
```
Build sources land into `dist` folder.


## Storybook

```bash
bun storybook
```

Open http://localhost:6006

## License

[MIT](./LICENSE)
