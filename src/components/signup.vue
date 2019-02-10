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
          <h1>Register New User</h1>
        </div>
        <form>
          <div class="form-group">
            <label>First Name:</label>
            <input type="text" class="form-control" v-model="firstname">
          </div>
          <div class="form-group">
            <label>Last Name:</label>
            <input type="text" class="form-control" v-model="lastname">
          </div>
          <div class="form-group">
            <label>e-mail:</label>
            <input type="text" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input type="password" class="form-control" v-model="password">
          </div>
          <button type="button" class="btn btn-primary" @click="validate">Add User</button>
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
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  },
  methods: {
    validate() {
      if (this.firstname && this.lastname && this.email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(this.email)) {
          this.create();
        } else {
          alert("Please email is no valid!!");
        }
      } else {
        alert("Please all fields are required!!");
      }
    },
    create() {
      fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        body: JSON.stringify({
          firstname: this.firstname,
          lastname: this.lastname,
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
          this.items = "User was created succesfully";
        });
    }
  }
};
</script>

<style>
.login-width {
  width: 400px;
}
</style>
