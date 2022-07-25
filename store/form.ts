import { defineStore } from "pinia";

export enum ESteps {
  "PERSONAL_INFO",
  "MEMBERSHIP",
  "OVERVIEW",
}
export const steps = [
  "Personal info",
  "Membership",
  "Overview"
]

enum EPhoneType {
  "home" = "Home",
  "work" = "Work",
  "mobile" = "Mobile",
  "main" = "Main",
  "other" = "Other",
}
type TPhoneType = keyof typeof EPhoneType;
interface TPhone {
  type: TPhoneType;
  value: string;
}

export const phoneTypeOptions = Object.keys(EPhoneType).map(
  (value: TPhoneType) => ({
    value,
    label: EPhoneType[value as TPhoneType],
  })
);
const _allowedPhoneTypes = Object.keys(EPhoneType)

enum EMembership {
  "regular" = "Regular",
  "premium" = "Premium",
}
type TMembership = keyof typeof EMembership;

export const membershipOptions = Object.keys(EMembership).map(
  (value: TMembership) => ({
    value,
    label: EMembership[value as TMembership],
  })
);

export interface FormDataPersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: TPhone[];
}

export interface FormDataMembership {
  membership: TMembership;
}

export interface FormData extends FormDataPersonalInfo, FormDataMembership {}

export const useFormStore = defineStore({
  id: "form-store",
  state: () => ({
    currentStepIndex: 0,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      phone: [],
      membership: "regular",
    } as FormData,
  }),
  actions: {
    // update(data: Partial<FormData>) {
    //   this.form = {
    //     ...this.form,
    //     ...data,
    //   };
    // },
    serialize() {
      const { phone, ...data } = this.form
      return {
        ...data,
        ...Object.fromEntries(this.form.phone.filter(p => p.value.length).map((p) => [`${p.type}Phone`, p.value]))
      } 
    },
    addNewPhone() {
      const remainingPhoneType = this.remainingPhoneType
      if (remainingPhoneType) {
        this.form.phone.push({ type: remainingPhoneType, value: "" } as TPhone);
      }
    },
    removePhone(phone) {
      const index = this.form.phone.indexOf(phone);
      this.form.phone.splice(index, 1)
    },
    updatePhoneType(phone, type) {
      const oldType = phone.type
      const index = this.form.phone.findIndex(p => p.type === type)

      this.form.phone[this.form.phone.indexOf(phone)].type = type // phone.type = type

      if (index < 0) return

      this.form.phone[index].type = oldType
    }
  },
  getters: {
    remainingPhoneType() {
      const takenPhoneTypes = this.form.phone.map((p) => p.type);
      const [remainingPhoneType] = _allowedPhoneTypes.filter(x => !takenPhoneTypes.includes(x));
      return remainingPhoneType
    }
  },
  persist: true,
});
