<template>
    <div>
      <h1>Social</h1>
    </div>
    <hr />
    <div class="p-grid">
      <div class="p-col-6">Support team</div>
      <div class="p-col-6">Team factory</div>
      <div class="p-col-6">Slack</div>
      <Button class="p-button-rounded p-button-secondary" @click="openLink(item.slackUrl)" style="margin-left: .5em">
        <i class="pi pi-slack-color" title="Contact team on Slack"/>
      </Button>
    </div>
</template>

<script>
export default {
  name: "ServerSocialComponent",
  props: {
      server: Object
  },
  data() {
    // TODO : Replace with k8s labels
    var modifiedItem = this.server
    modifiedItem.slackUrl = "https://slack.com/"

    return {
      item: modifiedItem
    }
  },
  methods: {
    openLink: function (url) {
        window.open(url, '_blank');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
