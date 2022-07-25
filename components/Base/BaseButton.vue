<script lang="ts" setup>
defineProps<{
  variant?: "" | "primary" | "secondary" | "text";
  large?: boolean;
  fullWidth?: boolean;
}>();
</script>

<template>
  <button :class="[large && 'large', fullWidth && 'full-width', variant]">
    <span><slot /></span>
  </button>
</template>

<style lang="scss" scoped>
button {
  background-color: var(--prepend-color);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  color: #394556;
  padding: 10px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
  cursor: pointer;
  user-select: none;
  // appearance: none;
  white-space: nowrap;
  // width: 100%;
  // outline: none;

  &[disabled] {
    cursor: default;
  }
}

.full-width {
  width: 100%;
}

.large {
  font-size: 28px;
  line-height: 38px;
  padding: 11px 18px;
}

.text {
  background-color: transparent;
  border-color: transparent;
  color: var(--primary-color);
  padding: 0;

  &[disabled] {
    color: var(--border-color);
  }
}

.primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: #fff;
}

.secondary {
  background-color: #fff;
  border-color: var(--primary-color);
  color: var(--primary-color);
}
</style>
