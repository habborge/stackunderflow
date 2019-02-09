<template>
  <div id="taskslist">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h1>Task Lists</h1>
          <div v-if="loading">
            <p>Loading</p>
          </div>
          <div v-else>
            <post
              v-for="item in items"
              :key="item._id"
              :id="item._id"
              :description="item.description"
              :author="item.author"
              :status="item.status"
              :createdAt="item.createdAt"
            ></post>
          </div>
        </div>
        <div class="col-sm">
          <h1>Create a Task</h1>
          <post-form @save="create"></post-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post";
import PostForm from "./PostForm";
export default {
  name: "taskslist",
  components: {
    post: Post,
    "post-form": PostForm
  },
  data() {
    return {
      loading: true,
      items: []
    };
  },
  created() {
    this.read();
  },
  methods: {
    read() {
      fetch("http://localhost:3000/api/tasks/")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const { items = [] } = data;
          const tasks = items.map(item => {
            const { authorId = {} } = item;
            const { firstname = "Anonimo", lastname = "" } = authorId;
            return {
              _id: item._id,
              description: item.description,
              author: `${firstname} ${lastname}`,
              status: item.status,
              createdAt: item.createdAt
            };
          });
          this.items = tasks;
          this.loading = false;
        });
    },
    create(post) {
      fetch("http://localhost:3000/api/tasks", {
        method: "POST",
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
          //this.items.unshift(data);
        });
    }
  }
};
</script>

    <style>
</style>
