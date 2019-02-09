<template>
  <div id="taskslist">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h1>Task Info:</h1>
          <div v-if="loading">
            <p>Loading</p>
          </div>
          <div v-else>
            <post
              v-for="item in items"
              :key="item._id"
              :id="item._id"
              :description="item.description"
              :authorId="item.authorId"
              :status="item.status"
              :createdAt="item.createdAt"
            ></post>
          </div>
        </div>
        <div class="col-sm">
          <h1>Update Task</h1>
          <post-form
            v-for="item in items"
            :key="item._id"
            :id="item._id"
            :description="item.description"
            :authorId="item.authorId"
            :createdAt="item.createdAt"
            :status="item.status"
            @save="update"
          ></post-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Post from "./Postinfotask";
import PostForm from "./PostForminfotask";
export default {
  name: "updateTask",
  components: {
    post: Post,
    "post-form": PostForm
  },
  data() {
    return {
      loading: true,
      items: " "
    };
  },
  created() {
    this.read();
  },
  methods: {
    read() {
      const urlvar = "http://localhost:3000/api/tasks/" + this.$route.params.id;
      fetch(urlvar)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.items = data;
          this.loading = false;
        });
    },
    update(post) {
      fetch("http://localhost:3000/api/tasks/" + this.$route.params.id, {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.read();
        });
    }
  }
};
</script>

    <style>
</style>
