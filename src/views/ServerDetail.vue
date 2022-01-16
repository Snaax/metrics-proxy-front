<template>
  <div v-if="!loading && data">
    <h1>{{ data.instance }}</h1>
  </div>
  <div class="serverDetail p-grid" v-if="!loading && data">
    <div class="p-col-6">
      <ServerDetailComponent :server="data"/>
    </div>
    <div class="p-col-6">
      <ServerStatusComponent :server="data"/>
    </div>
    <div class="p-col-4">
      <ServerSupervisionComponent :server="data"/>
    </div>
    <div class="p-col-4">
      <ServerCodeComponent :server="data"/>
    </div>
    <div class="p-col-4">
      <ServerSocialComponent :server="data"/>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router';
import MetricsService from '../services/MetricsService';
import ServerCodeComponent from '@/components/ServerCodeComponent.vue';
import ServerDetailComponent from '@/components/ServerDetailComponent.vue';
import ServerSocialComponent from '@/components/ServerSocialComponent.vue';
import ServerStatusComponent from '@/components/ServerStatusComponent.vue';
import ServerSupervisionComponent from '@/components/ServerSupervisionComponent.vue';

export default {
  name: 'ServerDetail',
  components: {
    ServerCodeComponent,
    ServerDetailComponent,
    ServerSocialComponent,
    ServerStatusComponent,
    ServerSupervisionComponent
  },
  setup() {
    const route = useRoute()
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    async function fetchData() {
      loading.value = true;

      MetricsService.getUpById(route.params.serverId)
        .then(response => {
          console.log(response.data.hosts[0]);
          data.value = response.data.hosts[0];
        })
        .catch(e => {
          console.error(e);
        })
        .finally(() => {
          loading.value = false;
        });
    }

    onMounted(() => {
      fetchData();
    });

    return {
      data,
      loading,
      error,
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.serverDetail {
  margin-top: 1rem;
  padding: 2rem;
  background-color: #1e1e1e;
  border: 1px solid #383838;
  text-align: left;
}
</style>
