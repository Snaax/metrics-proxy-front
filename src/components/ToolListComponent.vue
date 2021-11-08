<template>
    <div class="p-grid">
        <div class="p-col-4" v-for="tool in tools" :key="tool.name">
            <Card>
                <template #title>
                    {{ tool.name }}
                </template>
                <template #content>
                    {{ tool.content }}
                </template>
                <template #footer>
                    <Button class="p-button-rounded p-button-secondary" @click="openLink(tool.url)">
                        <i class="pi pi-external-link-custom" :title="tool.externalLinkTitle"/>
                    </Button>
                    <Button class="p-button-rounded p-button-secondary" style="margin-left: .5em" @click="openLink(buildConfluenceUrl(tool.name))">
                        <i class="pi pi-confluence" :title="tool.confluenceTitle"/>
                    </Button>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
import tools from "../assets/data/tools.json";

export default {
  name: 'ToolListComponent',
  data() {
    tools.forEach(element => {
        element.externalLinkTitle = "Se rendre sur " + element.name
        element.confluenceTitle = "Chercher " + element.name + " sur confluence"
    });

    return {
        tools: tools
    }
  },
  methods: {
    openLink: function (url) {
        window.open(url, '_blank');
    },
    buildConfluenceUrl: function (name) {
        return process.env.VUE_APP_CONFLUENCE_SEARCH_URL.replaceAll("{0}", name);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>