<template>
  <div class="modal" @click.self="$emit('close')">
    <BaseCard class="modal-card">
      <span class="modal-close-label" @click="$emit('close')">Close</span>
      <slot />
    </BaseCard>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: block;
  backdrop-filter: blur(9px);
  background-color: var(--shadow-color);

  &-card {
    position: relative;
    max-width: 490px;
    margin: 80px auto;
  }

  &-close-label {
    position: absolute;
    cursor: pointer;
    color: #b2b6ba;
    top: 32px;
    right: 32px;
  }
}
</style>
