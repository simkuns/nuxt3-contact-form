<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';

$color: (
  "background": var(--fill-color),
  "shadow": var(--shadow-color),
);

.card {
  background-color: map.get($color, "background");
  box-shadow: 0px 3px 18px map.get($color, "shadow");
  border-radius: 16px;
  opacity: 1;
  padding: 16px;

  @media (min-width: 640px) {
    padding: 32px;
  }
}
</style>
