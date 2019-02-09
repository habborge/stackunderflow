<template>
  <div id="userslist">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h1>User Info:</h1>
          <div v-if="loading">
            <p>Loading</p>
          </div>
          <div v-else>
            <post
              v-for="item in items"
              :key="item._id"
              :id="item._id"
              :firstname="item.firstname"
              :lastname="item.lastname"
              :email="item.email"
              :createdAt="item.createdAt"
            ></post>
          </div>
        </div>
        <div class="col-sm">
          <h1>Update User</h1>
          <post-form
            v-for="item in items"
            :key="item._id"
            :id="item._id"
            :firstname="item.firstname"
            :lastname="item.lastname"
            :email="item.email"
            :createdAt="item.createdAt"
            @save="update"
          ></post-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Post from "./Postinfouser";
import PostForm from "./PostForminfouser";
export default {
  name: "updateUser",
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
      const urlvar = "http://localhost:3000/api/users/" + this.$route.params.id;
      // console.log(urlvar);
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
      fetch("http://localhost:3000/api/users/" + this.$route.params.id, {
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
