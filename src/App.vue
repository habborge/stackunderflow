<template>
  <div id="app">
    <div id="image_logo">
      <img src="http://globalex.dot5hosting.com/designware/taskware.png" class="card-img-top">
    </div>
    <div id="app-text">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">TW</a>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <router-link to="/taskslist" class="nav-item nav-link">Tasks</router-link>
            <router-link to="/userslist" class="nav-item nav-link">Users</router-link>
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
  name: "app"
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
}
</style>
