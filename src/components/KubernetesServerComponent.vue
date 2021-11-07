<template>
  <Card>
      <template #title>
          {{ item.k8sInstance }}
      </template>
      <template #content>
        <p>job : {{ item.job }}</p>
        <p>version : {{ item.k8sVersion }}</p>
        <p>component : {{ item.k8sComponent }}</p>
        <p>managed by : {{ item.k8sManagedBy }}</p>
        
        <h2>Pods</h2>

        <DataTable :value="item.pods" responsiveLayout="scroll">
            <Column field="name" header="Name"></Column>
            <Column field="status" header="Status">
              <template #body="{data}">
                <i :class="'pi pi-thumbs-' + getStatus(data)"></i>
              </template>
            </Column>
            <Column header="Grafana" headerStyle="width: 4rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
              <template #body>
                  <Button class="p-button-rounded p-button-secondary" @click="openLink(item.grafanaUrl)">
                      <i class="pi pi-grafana" title="Voir le projet sur Grafana"/>
                  </Button>
              </template>
            </Column>
            <Column header="Kubenav" headerStyle="width: 4rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
              <template #body>
                  <Button class="p-button-rounded p-button-secondary" @click="openLink(item.kubenavgrafanaUrl)">
                      <i class="pi pi-kubenav" title="Voir le projet sur Kubenav"/>
                  </Button>
              </template>
            </Column>
        </DataTable>
      </template>
      <template #footer>
        <div class="p-grid">
          <div class="p-col-6">Project</div>
          <div class="p-col-6">Ansible</div>
          <div class="p-col-6">
            <Button class="p-button-rounded p-button-secondary" @click="openLink(item.gitProjectUrl)">
                <i class="pi pi-gitlab" title="Voir le projet sur Gitlab"/>
            </Button>
            <Button class="p-button-rounded p-button-secondary" @click="openLink(item.jenkinsProjectUrl)" style="margin-left: .5em">
                <i class="pi pi-jenkins" title="Voir le projet sur Jenkins"/>
            </Button>
          </div>
          <div class="p-col-6">
            <Button class="p-button-rounded p-button-secondary" @click="openLink(item.gitAnsibleUrl)">
                <i class="pi pi-gitlab" title="Voir le projet sur Gitlab"/>
            </Button>
            <Button class="p-button-rounded p-button-secondary" @click="openLink(item.jenkinsAnsibleUrl)" style="margin-left: .5em">
                <i class="pi pi-jenkins" title="Voir le projet sur Jenkins"/>
            </Button>
          </div>
        </div>
      </template>
  </Card>
</template>

<script>
export default {
  name: "KubernetesServerComponent",
  props: {
      server: Object
  },
  data() {
    // TODO : Replace with k8s labels
    var modifiedItem = this.server
    modifiedItem.gitProjectUrl = "https://about.gitlab.com/"
    modifiedItem.jenkinsProjectUrl = "https://www.jenkins.io/"
    modifiedItem.gitAnsibleUrl = "https://about.gitlab.com/"
    modifiedItem.jenkinsAnsibleUrl = "https://www.jenkins.io/"
    modifiedItem.kubenavUrl = "https://kubenav.io/"
    modifiedItem.grafanaUrl = "https://grafana.com/"

    return {
      item: modifiedItem
    }
  },
  methods: {
    openLink: function (url) {
        window.open(url, '_blank');
    },
    getStatus: function (status) {
      return status == 0 ? "down" : "up";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
