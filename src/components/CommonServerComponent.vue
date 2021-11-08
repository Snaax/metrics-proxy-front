<template>
  <Card>
      <template #title>
          {{ item.instance }}
      </template>
      <template #content>
        <div class="p-grid p-jc-center">
          <div class="p-col-6 p-text-right">job</div>
          <div class="p-col-6 p-text-left">{{ item.job }}</div>
          <div class="p-col-6 p-text-right">status</div>
          <div class="p-col-6 p-text-left"><i :class="'pi pi-thumbs-' + getStatus(item.metricValue)"></i></div>
        </div>
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
          <Button class="p-button-rounded p-button-secondary" @click="openLink(buildGrafanaUrl(item.job))" style="margin-left: .5em">
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
    },
    buildGrafanaUrl: function (job) {
      // TODO : Change to real url
      return process.env.VUE_APP_GRAFANA_BASE_URL + "" + job;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
