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
              <i class="pi pi-gitlab" title="See project on Gitlab"/>
          </Button>
          <Button class="p-button-rounded p-button-secondary" @click="openLink(item.jenkinsUrl)" style="margin-left: .5em">
              <i class="pi pi-jenkins" title="See project on Jenkins"/>
          </Button>
          <Button class="p-button-rounded p-button-secondary" @click="openLink(item.sonarUrl)" style="margin-left: .5em">
              <i class="pi pi-sonar" title="See project on Sonar"/>
          </Button>
          <Button class="p-button-rounded p-button-secondary" @click="openLink(buildGrafanaUrl(item.job))" style="margin-left: .5em">
              <i class="pi pi-grafana" title="See project on Grafana"/>
          </Button>
          <Button class="p-button-rounded p-button-secondary" @click="openLink(buildLogsUrl(item.job))" style="margin-left: .5em">
              <i class="pi pi-logs" title="See logs on OpenSearch"/>
          </Button>
          <Button class="p-button-rounded p-button-secondary" @click="openLink(buildEventsUrl(item.job))" style="margin-left: .5em">
              <i class="pi pi-events" title="See events on OpenSearch"/>
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
    buildGrafanaUrl: function (name) {
      // TODO : Change to real url
      return process.env.VUE_APP_GRAFANA_BASE_URL + "" + name;
    },
    buildLogsUrl: function (name) {
      return process.env.VUE_APP_LOGS_URL.replaceAll("{0}", name);
    },
    buildEventsUrl: function (name) {
      return process.env.VUE_APP_EVENTS_URL.replaceAll("{0}", name);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
