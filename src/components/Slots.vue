<template>
  <div>
    <h1>Slot Data(named scopes)</h1>

    
    <form>
      <div >
        <slot name="header"></slot>
      </div>
      <div >
        <slot name="fields"></slot>
      </div>
      <div >
        <slot name="controls"></slot>
      </div>
      
    </form>
    <h1>Slot Scope</h1>
    <div v-for="(data,id) in dataList" :key="id">
      <slot :data="data"></slot>
    </div>
  </div>
</template>

<script>
// Imports
export default {
  components: {},
  data() {
    return {
      dataList: [
        { id: 1, name: "nidhi", company: "Quinnox" },
        { id: 2, name: "a", company: "QuinnoxUNUM" },
        { id: 3, name: "c", company: "QuinnoxCTC" }
      ]
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
</style>