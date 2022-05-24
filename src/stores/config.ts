import { defineStore, type StoreDefinition } from "pinia";
import defaultBg from "@/assets/img/default.png";
import { useStorage} from '@vueuse/core'

export const useConfigStore:StoreDefinition = defineStore({
  id: "config",
  state: () => useStorage('config', {
      background: defaultBg,
  }),
});
