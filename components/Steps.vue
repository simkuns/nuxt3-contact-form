<script lang="ts" setup>
defineProps<{
  currentStep: number,
  steps: string[]
}>()
</script>

<template>
  <div class="steps">
    <div 
      v-for="(step, step_index) in steps"
      :class="['step', step_index <= currentStep && 'active']"
    >
      <div class="step-label">{{ step }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.steps {
  display: flex;
  margin-top: 100px;
  counter-reset: step;
}

.step {
  --step-color: var(--border-color);
  position: relative;
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  counter-increment: step;

  &.active {
    --step-color: var(--primary-color);
  }

  &::before {
    content: counter(step);;
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;
    color: var(--step-color);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 2px solid var(--step-color);
    border-radius: 50%;
    text-align: center;
    position: absolute;

    @media (min-width: 640px) {
      font-size: 48px;
      line-height: 65px;
      width: 80px;
      height: 80px;
    }
  }

  &-label {
    padding-top: 48px;
    font-size: 18px;
    line-height: 24px;
    white-space: nowrap;
    color: var(--step-color);
    @media (min-width: 640px) {
      font-size: 24px;
      line-height: 32px;
      padding-top: 96px;
    }
  }
  &.active &-label {
    color: unset;
  }

  & + &::after {
    content: "";
    width: calc(100% - 40px);
    position: absolute;
    height: 2px;
    background-color: var(--step-color);
    top: 20px;
    left: calc(-50% + 20px);
    @media (min-width: 640px) {
      width: calc(100% - 80px);
      top: 40px;
      left: calc(-50% + 40px);
    }
  }
}
</style>
