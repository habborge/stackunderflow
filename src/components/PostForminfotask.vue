<template>
  <form>
    <div class="form-group">
      <label>
        <b>Description:</b>
      </label>
      <textarea class="form-control" rows="3" v-model="description">{{description}}</textarea>
    </div>
    <div class="form-group">
      <label>
        <b>Author:</b>
      </label>
      <select class="form-control" v-model="userId">
        <option
          v-for="user in users"
          :selected="authorId == user._id"
          :key="user._id"
          :value="user._id"
        >{{user.fullname}}</option>
      </select>
    </div>
    <div class="form-group">
      <input type="checkbox" id="checkbox" v-model="status" true-value="1" false-value="0"> Close Task
      <br>State:
      <strong>{{status}}</strong>
    </div>
    <button type="button" class="btn btn-primary" @click="save">Update Task</button>
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
    description: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    authorId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      description: "",
      authorId: "",
      status: "",
      users: []
    };
  },
  created() {
    fetch("http://localhost:3000/api/users")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const { items = [] } = data;
        const users = items.map(item => {
          const { _id, firstname = "", lastname = "" } = item;
          return {
            _id,
            fullname: `${firstname} ${lastname}`
          };
        });
        this.users = users;
      });
  },
  methods: {
    save() {
      this.stateTask = "0";
      //console.log(this.status);
      if (this.status == true) {
        this.stateTask = "1";
        //console.log(this.stateTask);
      }

      this.$emit("save", {
        _id: this.id,
        description: this.description,
        authorId: this.userId,
        status: this.stateTask
      });
    }
  },
  computed: {
    userId: {
      //get
      get: function() {
        return this.authorId;
      },
      // setter
      set: function(newValue) {
        this.authorId = newValue;
      }
    }
  }
};
</script>
