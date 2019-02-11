<template>
  <div id="app">
    <div id="image_logo">
      <img src="http://globalex.dot5hosting.com/designware/taskware.png" class="card-img-top">
    </div>
    <div id="app-text">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">TW</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/" class="nav-item nav-link">Home</router-link>

            <div class="alineacion">
              <router-link to="/newquestion" class="nav-item nav-link" v-if="token_key">New Question</router-link>
            </div>
            <div
              class="nav-item nav-link mouse-hand alineacion"
              @click="logout"
              v-if="token_key"
            >Log Out</div>

            <div class="alineacion">
              <router-link to="/login" class="nav-item nav-link" v-if="!token_key">Login</router-link>
            </div>
            <div class="alineacion">
              <router-link to="/signup" class="nav-item nav-link" v-if="!token_key">Sign Up</router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div id="app_second">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  props: {
    msg: String,
    tokem_key: String
  },
  data() {
    return {
      token_key: localStorage.getItem("token")
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("myUser");
      localStorage.removeItem("token");
      this.token_key = "";
      this.$router.push({ path: "/login" });

      //this.router.push("http://localhost:8080/#/");
    }
  },
  computed: {}
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 0px;
}
#image_logo {
  margin-top: 0px;
  width: 300px;
}
#app-text {
  text-align: center;
}
#app_second {
  padding: 25px;
  margin-left: 50px;
  max-width: 900px;
}
.mouse-hand {
  cursor: pointer;
}
.alineacion {
  float: left;
}
</style>
