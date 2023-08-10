<template>
  <el-button @click="toLogin">登录</el-button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
function toLogin() {
  router.push({
    name: "index",
  });
}
</script>
