<script lang="ts" setup>
import { useUUID } from "@/composables/useUUID";

const uuid = useUUID();

withDefaults(
  defineProps<{
    modelValue: string | number;
  }>(),
  {
    modelValue: "",
  }
);

const emit = defineEmits(["update:modelValue"]);

function onInput(event: Event & { target: HTMLInputElement }) {
  emit('update:modelValue', event.target.value);
}
</script>

<template>
  <input
    class="form-control"
    :value="modelValue"
    @input="onInput"
  />
</template>

<style lang="scss" scoped>
@use 'sass:map';

$color: (
  "border": var(--border-color),
  "border:active": var(--primary-color),
  "text": var(--text-color),
);

.form-control {
  width: 100%;
  height: 48px;
  border-radius: 8px;
  box-shadow: none;
  border: 2px solid map.get($color, "border");
  transition: all 0.3s ease-in-out;
  font-size: 18px;
  line-height: 24px;
  padding: 12px 16px;
  background: none;
  color: map.get($color, "text");

  &:hover,
  &:focus {
    border-color: map.get($color, "border:active");
  }

  &:focus {
    outline: none;
  }
}
</style>
