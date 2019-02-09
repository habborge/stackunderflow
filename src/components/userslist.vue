<template>
  <div id="taskslist">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h1>Users Lists</h1>
          <div v-if="loading">
            <p>Loading</p>
          </div>
          <div v-else>
            <post
              v-for="item in items"
              :key="item._id"
              :id="item._id"
              :name="item.name"
              :email="item.email"
              :createdAt="item.createdAt"
            ></post>
          </div>
        </div>
        <div class="col-sm">
          <h1>Create an User</h1>
          <post-form @save="create"></post-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostUser from "./PostUser";
import PostFormUser from "./PostFormUser";
export default {
  name: "userslist",
  components: {
    post: PostUser,
    "post-form": PostFormUser
  },
  data() {
    return {
      loading: true,
      items: []
    };
  },
  created() {
    fetch("http://localhost:3000/api/users")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const { items = [] } = data;
        const users = items.map(item => {
          return {
            _id: item._id,
            name: item.firstname + " " + item.lastname,
            email: item.email,
            createdAt: item.createdAt
          };
        });
        this.items = users;
        this.loading = false;
      });
  },
  methods: {
    create(post) {
      fetch("http://localhost:3000/api/users", {
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
          this.items.unshift(data);
        });
    }
  }
};
</script>

    <style>
</style>
