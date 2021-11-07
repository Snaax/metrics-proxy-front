<template>
  <Card>
      <template #title>
          {{ item.instance }}
      </template>
      <template #content>
        <p>job : {{ item.job }}</p>
        <p>status : <i :class="'pi pi-thumbs-' + getStatus(item.metricValue)"></i></p>
      </template>
      <template #footer>
          <Button class="p-button-rounded p-button-secondary" @click="openLink(item.gitUrl)">
              <i class="pi pi-gitlab" title="Voir le projet sur Gitlab"/>
          </Button>
          <Button class="p-button-rounded p-button-secondary" @click="openLink(item.jenkinsUrl)" style="margin-left: .5em">
              <i class="pi pi-jenkins" title="Voir le projet sur Jenkins"/>
          </Button>
          <Button class="p-button-rounded p-button-secondary" @click="openLink(item.sonarUrl)" style="margin-left: .5em">
              <i class="pi pi-sonar" title="Voir le projet sur Sonar"/>
          </Button>
          <Button class="p-button-rounded p-button-secondary" @click="openLink(item.grafanaUrl)" style="margin-left: .5em">
              <i class="pi pi-grafana" title="Voir le projet sur Grafana"/>
          </Button>
      </template>
  </Card>
</template>

<script>
export default {
  name: "CommonServerComponent",
  props: {
      server: Object
  },
  data() {
    // TODO : Replace with k8s labels
    var modifiedItem = this.server
    modifiedItem.gitUrl = "https://about.gitlab.com/"
    modifiedItem.jenkinsUrl = "https://www.jenkins.io/"
    modifiedItem.sonarUrl = "https://www.sonarqube.org/"
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
