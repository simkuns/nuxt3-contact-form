<script lang="ts" setup>
import { useFormStore, ESteps } from "@/store/form";

const formStore = useFormStore();

function getStepPath(step) {
  switch (step) {
    case ESteps.PERSONAL_INFO:
      return "/form/contact-info";
    case ESteps.MEMBERSHIP:
      return "/form/membership";
    case ESteps.OVERVIEW:
      return "/form/overview";
    default:
      return "/form/contact-info";
  }
}

// todo: cannot use await keyword here unline official documantation 
navigateTo(getStepPath(formStore.currentStepIndex), { replace: true })
</script>

<template><div></div></template>