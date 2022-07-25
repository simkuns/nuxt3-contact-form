<script lang="ts" setup>
import { useFormStore, steps } from "@/store/form";

const formStore = useFormStore();
</script>

<template>
  <div>
    <Steps
      :current-step="formStore.currentStepIndex"
      :steps="steps"
    />
    <div class="card-wrapper">
      <BaseCard>
        <NuxtPage />
      </BaseCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  margin: 40px auto;
  max-width: 490px;
  @media (min-width: 640px) {
    margin: 80px auto;
  }
}
</style>
