# screenshots

![chat.png](screenshots/chat.png)
![home.gif](screenshots/home.gif)

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
