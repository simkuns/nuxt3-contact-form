<script lang="ts" setup>
import { useFormStore, ESteps, membershipOptions } from "@/store/form";

const formStore = useFormStore();

const router = useRouter();

onMounted(() => {
  formStore.currentStepIndex = ESteps.MEMBERSHIP;
});
</script>

<template>
  <form @submit.prevent>
    <BaseFieldset legend="Membership">
      <BaseRadioGroup
        :options="membershipOptions"
        v-model="formStore.form.membership"
        name="membership"
        vertical
      />
    </BaseFieldset>

    <BaseFieldset>
      <p v-if="formStore.form.membership === 'regular'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        urna, ligula eget maecenas. At pharetra fermentum augue egestas. Sed
        morbi sed est, ultrices in vel maecenas.
      </p>
      <p v-else>
        Amplify your experience with a Premium membership today! By choosing
        this option you shall be entitled to receive benefits associated with
        the Premium membership.
      </p>
    </BaseFieldset>

    <BaseFormGroup class="mt-4">
      <BaseButton
        variant="primary"
        large
        full-width
        @click="router.push('/form/overview')"
        >Continue</BaseButton
      >
    </BaseFormGroup>
    <BaseFormGroup>
      <BaseButton
        variant="secondary"
        large
        full-width
        @click="router.push('/form/contact-info')"
        >Back</BaseButton
      >
    </BaseFormGroup>
  </form>
</template>
