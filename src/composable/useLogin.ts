import { ref } from "vue";

export function useLogin() {
  const username = ref("");
  const password = ref("");
  const loading = ref(false);
  const message = ref("");

  function login() {
    loading.value = true;
    message.value = "";

    if (!username.value || !password.value) {
      message.value = "請輸入帳號密碼";
      loading.value = false;
      return false;
    }

    if (username.value === "admin" && password.value === "123456") {
      message.value = "登入成功";
      loading.value = false;
      return true;
    }

    message.value = "帳號或密碼錯誤";
    loading.value = false;
    return false;
  }

  return {
    username,
    password,
    loading,
    message,
    login,
  };
}
