<template>
  <h1 class="separator p-shadow-11">Servers</h1>

  <div class="p-fluid search-box">
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText type="text" v-model="searchedText" placeholder="Search" />
    </span>
  </div>
  
  <ServerListComponent :serverList="filterServersByName"/>
</template>

<script>
import { ref, onMounted } from "vue";
import ServerListComponent from "../components/ServerListComponent.vue"

export default {
  name: 'Servers',
  components: {
    ServerListComponent
  },
  data() {
    return {
			searchedText: null
    }
  },
  setup() {
    const data = ref(null);
    const servers = ref(null);
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
        servers.value = json.hosts;
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
      servers,
      loading,
      error,
    };
  },
  computed: {
    filterServersByName: function() {
      let filteredItems = [];

      console.log(this.servers);

      if (this.searchedText != null) {
        this.servers.forEach(element => {
          if(element.job == 'k8s' && element.k8sInstance.includes(this.searchedText.toLowerCase())) {
            filteredItems.push(element)
          } else if(element.instance.includes(this.searchedText.toLowerCase())) {
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
  margin-top: 1rem;
  margin-left: 15rem;
  margin-right: 15rem;
  margin-bottom: 1rem;
}
</style>
