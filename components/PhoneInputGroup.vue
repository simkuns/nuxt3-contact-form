<script lang="ts" setup>
defineProps<{
  label?: string
  options: Array<any>,
  modelValue: { type: string, value: string }
}>()
</script>

<template>
  <BaseFormGroup :label="label">
    <div class="input-group">
      <div class="input-group-control">
        <BaseSelect
          class="input-group-select"
          :options="options"
          :modelValue="modelValue.type"
          @update:model-value="$emit('update-type', $event)"
          tabindex="-1"
        />
        <BaseInput
          :modelValue="modelValue.value"
          class="input-group-input"
          @update:model-value="$emit('update-value', $event)"
          type="tel"
          :autocomplete="`tel ${modelValue.type}`"
        />
      </div>
      <slot />
    </div>
  </BaseFormGroup>
</template>

<style lang="scss" scoped>
.input-group {
  display: flex;
  gap: 24px;

  &-control {
    display: flex;
    flex: 1;
  }

  &-select {
    flex: 0 0 120px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background-color: var(--prepend-color);
    font-weight: 700;

    &:hover, &:focus {
      z-index: 1;
    }
  }

  &-input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: -2px;
  }
}
</style>