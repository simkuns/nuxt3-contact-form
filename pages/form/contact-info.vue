<script lang="ts" setup>
import { useFormStore, phoneTypeOptions, ESteps } from '@/store/form';

const formStore = useFormStore()
const router = useRouter()

onMounted(() => {
  formStore.currentStepIndex = ESteps.PERSONAL_INFO
})
</script>

<template>
  <form @submit.prevent>
    <BaseFieldset legend="Personal info">
      <BaseFormGroup label="First name">
        <BaseInput v-model="formStore.form.firstName" />
      </BaseFormGroup>
      <BaseFormGroup label="Last name">
        <BaseInput v-model="formStore.form.lastName" />
      </BaseFormGroup>
      <BaseFormGroup label="E-mail">
        <BaseInput v-model="formStore.form.email" type="email" />
      </BaseFormGroup>
      <template v-for="phone in formStore.form.phone">
        <PhoneInputGroup
          label="Phone"
          :options="phoneTypeOptions"
          :modelValue="phone"
          @update-type="formStore.updatePhoneType(phone, $event)"
          @update-value="phone.value = $event"
        >
          <BaseButton @click="formStore.removePhone(phone)" class="delete-button-text">Delete</BaseButton>
        </PhoneInputGroup>
      </template>

      <BaseFormGroup>
        <BaseButton variant="text" @click="formStore.addNewPhone" :disabled="!formStore.remainingPhoneType">Add phone</BaseButton>
      </BaseFormGroup>
    </BaseFieldset>

    <BaseFormGroup class="mt-4">
      <BaseButton variant="primary" large full-width @click="router.push('/form/membership')">Continue</BaseButton>
    </BaseFormGroup>
  </form>
</template>

<style lang="scss">
.delete-button-text {
  span {
    display: none;
  }

  &::before {
    content: "‒";
    font-size: 18px;
  }

  @media (min-width: 640px) {
    span {
      display: inline;
    }
    &::before {
      content: none;
    }
  }
}
</style>