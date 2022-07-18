import { atom, defineStore, mota } from "sodayo";

export const useAppStore = defineStore(() => {
  const count = atom(1);
  const doubled = mota(() => count.value * 2);
  function increase (n = 1) {
    count.value += n;
  }
  return {
    count,
    doubled,
    increase,
  };
});
