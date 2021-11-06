<template>
    <div class="p-grid" v-if="!loading && data && data.length">
        <div class="p-col-4" v-for="target in data" :key="target">
            <KubernetesServerComponent :server="target" v-if="target.job == 'k8s'"/>
            <CommonServerComponent :server="target" v-if="target.job != 'k8s'"/>
        </div>
    </div>

    <p v-if="loading">Still loading..</p>

    <p v-if="error">{{ error }}</p>
</template>

<script>
import { ref, onMounted } from "vue";
import KubernetesServerComponent from "./KubernetesServerComponent.vue";
import CommonServerComponent from "./CommonServerComponent.vue";

export default {
  name: 'ServerListComponent',
  components: {
    KubernetesServerComponent,
    CommonServerComponent
  },
  setup() {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    async function fetchData() {
      loading.value = true;

      try {
        const res = await fetch(process.env.VUE_APP_BACKEND_URL + "metrics/up", {
          method: "get",
          headers: {
            "content-type": "application/json",
          },
        });

        if (!res.ok) {
          const error = new Error(res.statusText);
          error.json = res.json();
          throw error;
        }

        const json = await res.json();
        data.value = json.hosts;
      } catch (err) {
        error.value = err;
        if (err.json) {
          return err.json.then((json_1) => {
            error.value.message = json_1.message;
          });
        }
      }

      loading.value = false;
    }

    onMounted(() => {
      fetchData();
    });

    return {
      data,
      loading,
      error,
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>