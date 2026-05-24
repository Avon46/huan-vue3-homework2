
import{ref,computed} from 'vue'

export function useProductSearch() {
  const loading = ref(false);
  const message = ref("");
  const result = ref<{
    policyNo: string;
    id: string;
    insuredPerson: string;
    polictHolder: string;
    phoneNumber: string;
    birth: string;
  } | null>(null);

  const resultProps = computed(() => {
    return {
      loading: loading.value,
      message: message.value,
      result: result.value,
    };
  });

  function searchPolicy(policyNo: string) {
    loading.value = true;
    message.value = "";
    result.value = null;
    const normalPolicy = policyNo.trim().toUpperCase();
    if (!normalPolicy) {
      message.value = "請輸入保單號碼";
      loading.value = false;
      return;
    }
    if (normalPolicy === "A123") {
      result.value = {
        policyNo: "A123",
        id: "A132035958",
        insuredPerson: "王大春",
        polictHolder: "王曉明",
        phoneNumber: "0922588762",
        birth: "890406",
      };
    } else {
      message.value = "查無此保單號碼";
    }
    loading.value = false;
  }
  return {
    loading,
    message,
    result,
    resultProps,
    searchPolicy
  }
}
