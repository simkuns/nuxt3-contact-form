<script lang="ts" setup>
import {
  useFormStore,
  ESteps,
  phoneTypeOptions,
  membershipOptions,
} from "@/store/form";

const formStore = useFormStore();
const router = useRouter();
const isModalOpen = ref<boolean>();

onMounted(() => {
  formStore.currentStepIndex = ESteps.OVERVIEW;
});

// sample failing request
let errors = ref(null);
let isLoading = ref(false);
async function onSubmit() {
  errors.value = null;
  isLoading.value = true;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  await $fetch("https://httpreq.com/", {
    method: "POST",
    body: formStore.serialize(),
  })
    .catch((error) => {
      if (error) errors.value = error
    })
    .finally(() => {
      isLoading.value = false;
    });
}
</script>

<template>
  <div>
    <form @submit.prevent>
      <BaseFieldset legend="Overview">
        <BaseFormGroup label="First name:" inline>
          {{ formStore.form.firstName }}
        </BaseFormGroup>

        <BaseFormGroup label="Last name:" inline>
          {{ formStore.form.lastName }}
        </BaseFormGroup>

        <BaseFormGroup label="E-mail:" inline>
          {{ formStore.form.email }}
        </BaseFormGroup>

        <template v-for="phone in formStore.form.phone">
          <BaseFormGroup label="Phone:" inline>
            {{ phone.value }}
          </BaseFormGroup>
        </template>

        <BaseFormGroup label="Membership:" inline>
          {{ formStore.form.membership }}
        </BaseFormGroup>
      </BaseFieldset>

      <BaseFormGroup>
        <BaseButton variant="text" @click="isModalOpen = true"
          >Edit information</BaseButton
        >
      </BaseFormGroup>

      <span v-if="errors" class="error-text"> Error: {{ errors }} </span>

      <BaseFormGroup class="mt-4">
        <BaseButton variant="primary" large full-width @click="onSubmit">
          <img v-if="isLoading" src="/loader.svg" class="loader" />
          <span v-else>Submit</span>
        </BaseButton>
      </BaseFormGroup>
      <BaseFormGroup>
        <BaseButton
          variant="secondary"
          large
          full-width
          @click="router.push('/form/membership')"
          >Back</BaseButton
        >
      </BaseFormGroup>
    </form>

    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <BaseFieldset legend="Edit information">
        <BaseFormGroup label="First name">
          <BaseInput v-model="formStore.form.firstName" />
        </BaseFormGroup>

        <BaseFormGroup label="Last name">
          <BaseInput v-model="formStore.form.lastName" />
        </BaseFormGroup>

        <BaseFormGroup label="E-mail">
          <BaseInput v-model="formStore.form.email" />
        </BaseFormGroup>

        <template v-for="phone in formStore.form.phone">
          <PhoneInputGroup
            label="Phone"
            :options="phoneTypeOptions"
            :modelValue="phone"
            @update-type="formStore.updatePhoneType(phone, $event)"
            @update-value="phone.value = $event"
          />
        </template>

        <BaseFormGroup label="Membership">
          <BaseRadioGroup
            :options="membershipOptions"
            v-model="formStore.form.membership"
            name="membership"
          />
        </BaseFormGroup>

        <BaseFormGroup class="mt-4">
          <BaseButton
            variant="primary"
            large
            full-width
            @click="isModalOpen = false"
            >Save</BaseButton
          >
        </BaseFormGroup>
      </BaseFieldset>
    </Modal>
  </div>
</template>

<style lang="scss" scoped>
.error-text {
  color: #ff6969;
  font-size: 14px;
  line-height: 18px;
}

.loader {
  margin: -10px 0;
}
</style>
