<script lang="ts" setup>
import { useUUID } from "@/composables/useUUID";

const uuid = useUUID();

withDefaults(
  defineProps<{
    label?: string;
    modelValue: string | number;
    value: string | number;
  }>(),
  {
    label: "",
    modelValue: "",
  }
);

const emit = defineEmits(["update:modelValue"]);

function onChange(event: Event & { target: HTMLInputElement }) {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <div class="form-radio">
    <input
      v-bind="$attrs"
      type="radio"
      class="form-radio-input"
      :checked="modelValue === value"
      :value="value"
      :id="uuid"
      @change="onChange"
    />
    <label v-if="label" :for="uuid" class="form-radio-label">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';

$color: (
  "border": var(--primary-color),
  "background": none,
  "background:active": var(--primary-color),
  "text": var(--text-color),
);

.form-radio {
  display: inline-block;

  &-label {
    font-size: 18px;
    line-height: 24px;
    vertical-align: middle;
    cursor: pointer;
  }

  &-input {
    appearance: none;
    width: 32px;
    height: 32px;
    border: 2px solid map.get($color, "border");
    border-radius: 8px;
    margin: 0;
    margin-right: 16px;
    flex: 1 0 auto;
    background: map.get($color, "background");
    vertical-align: middle;
    cursor: pointer;

    &:checked {
      border: none;
      background: map.get($color, "background:active");
    }
  }
}
</style>
