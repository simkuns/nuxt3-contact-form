<script lang="ts" setup>
defineProps<{
  legend?: string;
}>()
</script>

<template>
  <fieldset class="form-fieldset">
    <legend v-if="legend" class="form-legend">{{ legend }}</legend>
    <slot />
  </fieldset>
</template>

<style lang="scss" scoped>
$color-text: var(--primary-color);

.form-fieldset {
  margin: 0;
  padding: 0;
  border: none;
}

.form-legend {
  color: $color-text;
  font-size: 28px;
  line-height: 38px;
  font-weight: bold;
  padding: 0;
  display: inline-block;
  width: 100%;
  margin-bottom: 16px;
}
</style>
