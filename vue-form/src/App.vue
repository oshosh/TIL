<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">ID: </label>
        <input
          id="username"
          type="text"
          v-model="username"
          class="username-input"
          v-bind:class="{ error: isError }"
        />
      </div>
      <div>
        <label for="password">PW: </label>
        <input id="password" type="password" v-model="password" />
      </div>
      <button v-bind:disabled="isDisabled" type="submit">로그인</button>
    </form>
    <p v-if="isError">올바르지 않은 ID 입니다.</p>
    <p v-if="isUsernameValidate">아이디가 이메일 형식이 아닙니다.</p>
  </div>
</template>

<script>
// 이메일 형식 체크 함수
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !re.test(String(email).toLowerCase());
}

export default {
  data() {
    return {
      username: "",
      password: "",
      isError: false,
    };
  },
  computed: {
    isUsernameValidate() {
      return this.username.length >= 1 ? validateEmail(this.username) : false;
    },
    isDisabled() {
      return this.username.length >= 1 && !validateEmail(this.username)
        ? false
        : true;
    },
  },
  methods: {
    submitForm() {
      console.log("로그인");
      this.isError = true;
      this.initForm();
    },
    initForm() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
.username-input {
  outline: none;
}
.username-input.error {
  border: 1px solid red;
}
</style>
