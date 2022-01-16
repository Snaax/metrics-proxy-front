<template>
  <h1 class="separator p-shadow-11">Servers</h1>

  <div class="p-fluid p-d-inline-flex search-box">
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText type="text" v-model="searchedText" placeholder="Search" />
    </span>
  </div>

  <SelectButton class="p-d-inline-flex" v-model="selectedSearchOptions" :options="searchOptions" optionLabel="name" :multiple="true"  @click="updateFilter()">
    <template #option="slotProps">
      <div class="search-option">
        <div :title="slotProps.option.title">{{slotProps.option.name}}</div>
      </div>
    </template>
  </SelectButton>
  
  <ServerListComponent :serverList="filterServersByName"/>
</template>

<script>
import { ref, onMounted } from "vue";
import ServerListComponent from "../components/ServerListComponent.vue"
import MetricsService from "../services/MetricsService";

export default {
  name: 'Servers',
  components: {
    ServerListComponent
  },
  data() {
    return {
			searchedText: null,
      selectedSearchOptions: []
    }
  },
  setup() {
    const data = ref(null);
    const initialServers = ref(null);
    const servers = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const searchOptions = ref([
      {"name": "down", "title": "Filter for down servers only"}
    ]);

    async function fetchData() {
      loading.value = true;

      MetricsService.getUp()
        .then(response => {
          console.log(response.data);
          data.value = response.data.hosts;
          initialServers.value = response.data.hosts;
          servers.value = response.data.hosts;
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
      initialServers,
      servers,
      loading,
      error,
      searchOptions,
    };
  },
  methods: {
    updateFilter: function() {
      this.servers = [];
      
      if(this.selectedSearchOptions.length > 0) {
        this.initialServers.forEach(server => {
          if(this.selectedSearchOptions.map(o => o.name).includes('down')) {
            let addServer = false;
            if(server.type == 'K8S') {
              addServer = server.pods.some((pod) => pod.status == 0);
            } else if(server.type == 'COMMON') {
              addServer = server.status == 0;
            }

            if(addServer) {
              this.servers.push(server);
            }
          }
        });
      } else {
        this.servers = this.initialServers;
      }
    }
  },
  computed: {
    filterServersByName: function() {
      let filteredItems = [];

      if (this.searchedText != null) {
        this.servers.forEach(element => {
          if(element.instance.includes(this.searchedText.toLowerCase())) {
            filteredItems.push(element)
          }
        });
      } else {
        filteredItems = this.servers
      }

      return filteredItems;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-box {
  width: 50rem;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
