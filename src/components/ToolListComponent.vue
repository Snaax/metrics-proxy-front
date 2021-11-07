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
                    <Button class="p-button-rounded p-button-secondary" @click="openLink(tool.url)">
                        <i class="pi pi-external-link-custom" :title="tool.externalLinkTitle"/>
                    </Button>
                    <Button class="p-button-rounded p-button-secondary" style="margin-left: .5em">
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
        element.externalLinkTitle = "Se rendre sur " + element.title
        element.confluenceTitle = "Chercher " + element.title + " sur confluence"
    });

    return {
        tools: tools
    }
  },
  methods: {
    openLink: function (url) {
        window.open(url, '_blank');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>