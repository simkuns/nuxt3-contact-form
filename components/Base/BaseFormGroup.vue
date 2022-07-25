<script lang="ts" setup>
defineProps<{
  label?: string;
  inline?: boolean;
}>()
</script>

<template>
  <div :class="['form-group', inline && 'form-group--inline']">
    <label v-if="label" class="form-group-label">{{ label }}</label>
    <div class="form-group-control">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 16px;

  &-label {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 8px;
    font-weight: 700;
    display: inline-block;
    width: 100%;

    &[for] {
      cursor: pointer;
    }
  }

  &--inline {
    display: flex;
    min-height: 48px;
    align-items: center;
    gap: 16px;
  }
  &--inline &-label {
    flex: 1 1 40%;
    margin: 0;
  }
  &--inline &-control {
    flex: 1 1 60%;
    word-wrap: anywhere;
  }
}
</style>
