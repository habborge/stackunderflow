<template>
  <div class="post__container">
    <div class="card">
      <div class="card-body">
        <div class="col-sm-8">
          <h5 class="card-title">Task</h5>
          <h6 class="card-subtitle mb-2">
            <b>Created at:</b>
            {{createdAt}}
          </h6>
          <p class="card-text">
            <b>Author Name:</b>
            {{firstname}} {{lastname}}
            <br>
            <b>e-mail:</b>
            {{email}}
          </p>
        </div>
        <div class="col-sm-4"></div>
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
    },
    createdAt: {
      type: String,
      required: true
    }
  }
};
</script>
