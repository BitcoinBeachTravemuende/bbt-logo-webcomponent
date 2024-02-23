# `<bbt-logo />`

Animated logo of Bitcoin Beach Travemünde provided as a web component. 

![Alt text](./bbt-logo-webcomponent.png?raw=true "Preview")



https://github.com/BitcoinBeachTravemuende/bbt-logo-webcomponent/assets/47693/0e14e78b-0cd2-4d10-bea5-7ce62b67356b



## Features

- Customize size and colors as you like
- SVG based
- Plain Web Component without any library
- Small bundle size: `9.94 kB │ gzip: 3.17 kB`
- Supported by modern browsers
- Use it with your favourite web framework

## Usage

### Installation 

Use your favourite Node package manager to install `bbt-logo` web component.

`npm`

```bash
npm install @bitcoinbeachtravemuende/bbt-logo
```

`bun`

```bash
bun add @bitcoinbeachtravemuende/bbt-logo
```

`pnpm`

```bash
pnpm add @bitcoinbeachtravemuende/bbt-logo
```

`yarn`

```bash
yarn add @bitcoinbeachtravemuende/bbt-logo
```

### Use bundle via `jsdelivr`

TBD

### Properties

- `size: string`: `px` or `em`, eg. `size="300px"` or `size="8em"`
- `fill: string`: Color `name` or `hex` values, eg. `fill="white"` or `fill="#FFF"`
- `stroke: string`: color `name` or `hex` values, eg. `fill="black"` or `fill="#000"`

### Examples

**_Default_**

```html
<bbt-logo />
```

**_Custom colors_**

```html
<bbt-logo stroke="white" fill="black"></bbt-logo>
```

**_Custom size_**

```html
<bbt-logo size="300px"></bbt-logo>
```

**_All custom values_**

```html
<bbt-logo size="300px" stroke="black" fill="white"></bbt-logo>
```

## Build

### Requirements

#### Nix (recommended)

Install [Nix](https://zero-to-flakes.com/install)

#### Other

Install [`pnpm`](https://pnpm.io/) or any other Node package manager ([`bun`](https://bun.sh/), [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [`yarn`](https://yarnpkg.com/) or whatever)

### Local build

- Install dependencies (command might be different for other package manager)

```bash
pnpm install
```

- Local build

```bash
pnpm dev
```
Open http://localhost:5173

- Release build

```bash
pnpm build
```
Build sources land into `dist` folder.


## Storybook

```bash
pnpm storybook
```

Open http://localhost:6006

## License

[MIT](./LICENSE)
