<template>
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
    <button type="button" class="btn btn-primary" @click="validate">Add User</button>
  </form>
</template>

<script>
export default {
  name: "post-form",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: ""
    };
  },
  methods: {
    validate() {
      if (this.firstname && this.lastname && this.email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(this.email)) {
          this.save();
        } else {
          alert("Please email is no valid!!");
        }
      } else {
        alert("Please all fields are required!!");
      }
    },
    save() {
      this.$emit("save", {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email
      });
    }
  }
};
</script>
