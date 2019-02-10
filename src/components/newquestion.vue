<template>
  <div class="container">
    <div class="row">
      <div class="ancho" v-if="items">
        <div class="alert alert-success" role="alert">{{items}}</div>

        <router-link to="/" class="btn btn-success">Back to Questions</router-link>
      </div>
      <div class="login-width">
        <div class>
          <h1>Create a Question</h1>
        </div>
        <form>
          <div class="form-group">
            <label>Question:</label>
            <input type="text" class="form-control" v-model="question">
          </div>
          <button type="button" class="btn btn-primary" @click="validate">Create question</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "newquestion",
  props: {
    email: String,
    id: String,
    tokem_key: String
  },
  data() {
    return {
      items: "",
      email: ""
    };
  },
  methods: {
    validate() {
      if (this.question) {
        this.create();
      } else {
        alert("Please all fields are required!!");
      }
    },
    create() {
      fetch("http://localhost:3000/api/questions", {
        method: "POST",
        body: JSON.stringify({
          text: this.question
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: window.localStorage.getItem("token")
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.items = "Question was created succesfully";
          this.question = "";
        });
    }
  }
};
</script>
