# screenshots

<div align="center">
  <div style="display: flex;">
    <img src="screenshots/chat.png" width="30%">
    <img src="screenshots/home.gif" width="30%">
  </div>
</div>

# start

```shell
## Clone
git clone https://github.com/idjanbo/tailwind-chat.git

## Install dependencies.
pnpm i

## Dev run
pnpm dev

```

# Demo route

## home view

```
http://localhost:9089/validate/foo
```

## chat view

```
http://localhost:9089/anyType/foo
```

# components

some components did by myself is at `src/components` path, Like `TailWind Toast`

# config

1. `.env` file is for host

2. `src/net.config.ts` file is for server config

> below is already use into this project,do not use again

# create vite project

`yarn create vite`

choose vue、ts

`cd my-project`

# init tailwind

`yarn add -D tailwindcss postcss autoprefixer`

`npx tailwindcss init -p`

# replace code in tailwind.config

rename js to ts if possible

```ts
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

# add css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# eslint

`yarn add -D eslint`

`npx eslint --init`

for more:https://segmentfault.com/a/1190000041954694

# Thx 4

[demon-bixia/Avian-Template](https://github.com/demon-bixia/Avian-Template)
