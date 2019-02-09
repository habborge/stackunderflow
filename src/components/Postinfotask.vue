<template>
  <div class="post__container">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-8">
            <h5 class="card-title">Task</h5>
            <h6 class="card-subtitle mb-2">
              <b>Created at:</b>
              {{createdAt}}
            </h6>
            <p class="card-text">
              <b>Description:</b>
              {{description}}
              <br>
              <b>AuthorId:</b>
              {{authorId}}
            </p>
          </div>

          <div class="col-sm-4"></div>
        </div>
        <div class="row">
          <div class="col-sm-8">
            <div class="card-text">
              <span v-if="status == '0'" class="badge badge-danger">Task Open</span>
              <span v-else-if="status == '1'" class="badge badge-success">Task Closed</span>
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
    description: {
      type: String,
      default: ""
    },
    authorId: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    status: {
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
