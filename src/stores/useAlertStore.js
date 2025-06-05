import { create } from "zustand";

const useAlertStore = create((set) => ({
  triggered: false,
  type: "",
  message: "",
  triggerAlert: (alert) => set({ ...alert }),
  resetAlert: () => set({ triggered: false, type: "", message: "" }),
}));

export default useAlertStore;
