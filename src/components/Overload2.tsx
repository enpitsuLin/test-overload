import { defineComponent, ref } from "vue";

const HelloWorld = defineComponent({
  props: { msg: { type: String } },
  setup({ msg }) {
    const count = ref(0);
    return () => (
      <div>
        <h1>{msg || "msg is missing"}</h1>
        <button type="button" onClick={() => count.value++}>
          count is: {count.value}
        </button>
      </div>
    );
  }
});

export default HelloWorld;
