<template>
    <div>
      <h1>Code</h1>
    </div>
    <hr />
    <div>
      <h3>Project</h3>
      <Button class="p-button-rounded p-button-secondary" @click="openLink(item.gitProjectUrl)">
        <i class="pi pi-gitlab" title="See project on Gitlab"/>
      </Button>
      <Button class="p-button-rounded p-button-secondary" @click="openLink(item.jenkinsProjectUrl)" style="margin-left: .5em">
        <i class="pi pi-jenkins" title="See project on Jenkins"/>
      </Button>
      <Button class="p-button-rounded p-button-secondary" @click="openLink(item.sonarProjectUrl)" style="margin-left: .5em">
        <i class="pi pi-sonar" title="See project on Sonar"/>
      </Button>
      
      <h3>Ansible</h3>
      <Button class="p-button-rounded p-button-secondary" @click="openLink(item.gitAnsibleUrl)">
        <i class="pi pi-gitlab" title="See project on Gitlab"/>
      </Button>
      <Button class="p-button-rounded p-button-secondary" @click="openLink(item.jenkinsAnsibleUrl)" style="margin-left: .5em">
        <i class="pi pi-jenkins" title="See project on Jenkins"/>
      </Button>
    </div>
</template>

<script>
export default {
  name: "ServerCodeComponent",
  props: {
      server: Object
  },
  data() {
    // TODO : Replace with k8s labels
    var modifiedItem = this.server
    modifiedItem.gitProjectUrl = "https://about.gitlab.com/"
    modifiedItem.jenkinsProjectUrl = "https://www.jenkins.io/"
    modifiedItem.sonarProjectUrl = "https://www.sonarqube.org/"
    modifiedItem.gitAnsibleUrl = "https://about.gitlab.com/"
    modifiedItem.jenkinsAnsibleUrl = "https://about.gitlab.com/"

    return {
      item: modifiedItem
    }
  },
  methods: {
    openLink: function (url) {
        window.open(url, '_blank');
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
