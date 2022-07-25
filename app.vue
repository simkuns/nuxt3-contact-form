<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

:root {
  --color-alpha-black: #00000029;
  --color-gray: #eee;
  --color-gray-1: #ebebeb;
  --color-gray-2: #c8d3dB;
  --color-gray-3: #394556;
  --color-blue: #15b0fc;
  --color-white: #fff;
}

:root {
  --fill-bg-color: var(--color-gray-1);
  --fill-color: var(--color-white);
  --text-color: var(--color-gray-3);
  --primary-color: var(--color-blue);
  --shadow-color: var(--color-alpha-black);
  --border-color: var(--color-gray-2);
  --prepend-color: var(--color-gray);
}

body {
  font-family: 'Open Sans', sans-serif;
  background-color: var(--fill-bg-color);
  color: var(--text-color);
  font-size: 18px;
  line-height: 24px;
  margin: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}

.mt-4 {
  margin-top: 32px;
}
</style>
