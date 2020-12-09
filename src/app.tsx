import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',

  setup() {
    const count = ref(0);

    const change = () => {
      count.value += 1;
    };

    return () => (
      <section class="section">
        <button onClick={change}>点击增加状态值</button>
        <p>改变这个元素值保存---状态会丢失：12</p>
        <p>状态值：{ count.value }</p>
      </section>
    );
  }
});
