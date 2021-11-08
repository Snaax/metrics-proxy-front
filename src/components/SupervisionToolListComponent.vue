<template>
    <div class="p-grid">
        <div class="p-col-4" v-for="tool in tools" :key="tool.title">
            <Card>
                <template #title>
                    {{ tool.title }}
                </template>
                <template #content>
                    {{ tool.content }}
                </template>
                <template #footer>
                    <Button class="p-button-rounded p-button-secondary" @click="openLink(buildSupervisionToolUrl(tool.url))">
                        <i class="pi pi-grafana" :title="tool.externalLinkTitle"></i>
                    </Button>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
import tools from "../assets/data/supervision-tools.json";

export default {
  name: 'SupervisionToolListComponent',
  data() {
    tools.forEach(element => {
        element.externalLinkTitle = "Se rendre sur " + element.title
    });

    return {
        tools: tools
    }
  },
  methods: {
    openLink: function (url) {
        window.open(url, '_blank');
    },
    buildSupervisionToolUrl: function (url) {
        return process.env.VUE_APP_GRAFANA_BASE_URL + url
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>