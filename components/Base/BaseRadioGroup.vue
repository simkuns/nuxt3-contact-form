<script lang="ts" setup>
interface RadioOption {
  label: string;
  value: string | number;
}

defineProps<{
  options: RadioOption[];
  modelValue: string | number;
  name: string;
  vertical?: boolean;
}>();
</script>

<template>
  <div :class="['form-radio-group', vertical && 'form-radio-group--vertical']">
    <BaseRadio
      v-for="option in options"
      :key="option.value"
      class="form-radio-group__radio"
      :label="option.label"
      :value="option.value"
      :name="name"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<style lang="scss" scoped>
.form-radio-group {
  &__radio {
    margin-right: 32px;
  }

  &--vertical &__radio {
    width: 100%;
    margin-bottom: 12px;
  }
}
</style>
