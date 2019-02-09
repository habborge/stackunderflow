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
    <button type="button" class="btn btn-primary" @click="save">Add User</button>
  </form>
</template>

<script>
export default {
  name: "post-form",
  props: {
    id: {
      type: String,
      required: true
    },
    firstname: {
      type: String,
      default: ""
    },
    lastname: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      _id: "",
      firstname: "",
      lastname: "",
      email: "",
      users: []
    };
  },

  methods: {
    save() {
      this.$emit("save", {
        _id: this.id,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email
      });
    }
  }
};
</script>
