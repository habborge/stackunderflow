<template>
  <div>
    <div class="container">
      <div class="row">
        <div>
          <div class="text-title">
            <h1>Project Special Topics I</h1>
          </div>
          <div class="texto">
            <p>This front-end project is done with VueJs that connects to a back-end RESP-API developed in nodeJS
              <br>GIT repository:
            </p>
            <div class="alert alert-success" role="alert">
              <h4 class="alert-heading">OBS:</h4>
              <p>Do not forget that nodeJS API there is not in this project. You must clone the other repository.</p>
              <hr>
              <p class="mb-0">
                <b>NodeJS GIT repository:</b> https://github.com/habborge/taller01.git
              </p>
            </div>
            <div>
              <p>Also, this project use Vue Router module as dependence. this routes are available on menu bar.
                <br>you could use this project to manage tasks and users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.info_text {
  text-align: left;
}
.text-title {
  text-align: center;
}
.texto {
  font-size: 14px;
}
</style>
