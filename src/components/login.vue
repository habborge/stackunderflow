<template>
  <div class="container">
    <div class="row">
      <div class="ancho" v-if="items">
        <div class="alert alert-success" role="alert">{{items}}</div>
        <router-link to="/" class="btn btn-primary">Go to Log in</router-link>
        <router-link to="/" class="btn btn-success">Back to Questions</router-link>
      </div>
      <div class="login-width">
        <div class>
          <h1>Log in User</h1>
        </div>
        <form>
          <div class="form-group">
            <label>e-mail:</label>
            <input type="text" class="form-control" v-model="email">
          </div>

          <div class="form-group">
            <label>Password:</label>
            <input type="password" class="form-control" v-model="password">
          </div>
          <button type="button" class="btn btn-primary" @click="validate">SIGN IN</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "post-form",
  data() {
    return {
      items: "",
      email: "",
      password: ""
    };
  },
  methods: {
    validate() {
      if (this.email && this.password) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(this.email)) {
          this.login();
        } else {
          alert("Please email is no valid!!");
        }
      } else {
        alert("Please all fields are required!!");
      }
    },
    login() {
      fetch("http://localhost:3000/api/users/signin", {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.items = data;
          localStorage.setItem("token", data.meta.token);
          localStorage.setItem("myUser", data.item._id);
          this.$emit("eventtriggered", {
            status: 0
          });
          this.$router.push({ path: "/" });
        });
    }
  }
};
</script>
