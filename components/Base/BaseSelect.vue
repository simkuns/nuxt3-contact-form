<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    options: Array<{ label: string; value: string | number }>;
    modelValue: string | number;
  }>(),
  { modelValue: "" }
);

const emit = defineEmits(["update:modelValue"]);

function onChange(event: Event & { target: HTMLInputElement }) {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <select
    class="form-select"
    :value="modelValue"
    @change="onChange"
  >
    <option
      v-for="option in options"
      :value="option.value"
      :selected="option.value === modelValue"
    >{{ option.label }}</option>
  </select>
</template>

<style lang="scss" scoped>
@use 'sass:map';

$color: (
  'border': var(--border-color),
  'border:active': var(--primary-color),
  'text': var(--text-color),
);
.form-select {
  width: 100%;
  height: 48px;
  border-radius: 8px;
  box-shadow: none;
  border: 2px solid map.get($color, 'border');
  transition: all 0.3s ease-in-out;
  font-size: 18px;
  line-height: 24px;
  padding: 10px 16px;
  appearance: none;
  background: none;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAYAAAB4MH11AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACOSURBVDhPY7R0DetnYGAoAGJagELmJ/eu7pRV1hYAciwgYlQDhcd3r5rADGLRwBKw4SAG2AIQoKIlcMNBAG4BCFDBEhTDQQDFAhCgwBIMw0EAwwIQIMMSrIaDAFYLQIAES3AaDgI4LQABIizBazgI4LUABPBYQtBwECBoAQhgsYQow0kGoGIFiEkoVhgYADO8TOuPi38mAAAAAElFTkSuQmCC");
  background-size: 12px;
  background-position: calc(100% - 16px) center;
  background-repeat: no-repeat;
  color: map.get($color, 'text');

  &:hover,
  &:focus {
    border-color: map.get($color, "border:active");
  }

  &:focus {
    outline: none;
  }

  option {
    font-weight: 400;
  }
}
</style>
