<template>
  <div id="taskslist">
    <div class="container">
      <div class="row">
        <div class="ancho" v-if="items">
          <div class="alert alert-success" role="alert">{{items}}</div>
          <router-link to="/taskslist" class="btn btn-primary">Back to Tasks</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "deleteTask",

  data() {
    return {
      loading: true,
      items: "",
      id: this.$route.params.id
    };
  },

  created() {
    const urlvar = this.$route.params.id;
    // console.log(urlvar);
    fetch("http://localhost:3000/api/tasks/" + this.$route.params.id, {
      method: "DELETE",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.items = "Task was deleted succesfully";
      });
  }
};
</script>

<style>
.ancho {
  width: 100%;
  text-align: center;
}
</style>
