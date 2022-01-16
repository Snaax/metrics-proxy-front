<template>
  <div class="server-list-component">
    <div class="p-grid p-ai-stretch vertical-container">
      <div class="p-col-3" v-for="target in serverList" :key="target">
        <router-link class="instance-text" :to="{ name: 'ServerDetail', params: { serverId: target.id }}">
          <div class="instance-box">
            {{ target.instance }}
            <div v-if="target.partOf">
              <Tag severity="info">{{ target.partOf }}</Tag>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServerListComponent',
  props: {
    serverList: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.instance-box {
  background-color: rgb(29, 29, 31);
  border-radius: 0.3rem;
  border-width: 0.3rem;
  border-color: rgb(153, 149, 149);
  margin: 0 0.5rem 0 0.5rem;
  padding: 1rem;
}

.instance-box:hover {
  background-color: rgb(153, 149, 149);
  border-color: rgb(29, 29, 31);
  cursor: pointer;
}

.instance-text {
  font-size: 28px;
  text-decoration: none;
  color: white;
}
</style>