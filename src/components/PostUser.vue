<template>
  <div class="post__container">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-8">
            <h5 class="card-title">User</h5>
            <h6 class="card-subtitle mb-2">
              <b>Created at:</b>
              {{createdAt}}
            </h6>
            <p class="card-text">
              <b>Author Name:</b>
              {{name}}
              <br>
              <b>email:</b>
              {{email}}
            </p>
          </div>
          <div class="col-sm-4">
            <div class="row">
              <div class="col-sm-6">
                <router-link v-bind:to="'/updateuser/'+id" class="btn btn-success">Update</router-link>
              </div>
              <div class="col-sm-6">
                <router-link v-bind:to="'/deleteuser/'+id" class="btn btn-danger">Delete</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    }
  }
};
</script>
