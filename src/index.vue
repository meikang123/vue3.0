<template>
  <section class="section">
    <h2>不会刷新页面</h2>
    <button @click="change">点击增加状态值</button>
    <p>改变这个元素值保存---状态不会丢失：4571</p>
    <p>状态值：{{ count }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',

  setup() {
    const count = ref(0);

    const change = () => {
      count.value += 1;
    };

    return {
      count,
      change
    };
  }
});
</script>
