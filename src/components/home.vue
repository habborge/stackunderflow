<template>
  <div>
    <div class="container">
      <div class="row">
        <div>
          <div class="text-title">
            <h1>STACKUNDERFLOW</h1>
          </div>
          <div class="text-title">
            <h3>QUESTION</h3>
          </div>
          <div class="post__container">
            <div class="card line-bottom" v-for="item in items" :key="item._id">
              <div class="card-body">
                <div>
                  <div class="row">
                    <div class="col-sm-8">
                      <h5 class="card-title">Question</h5>
                      <h6 class="card-subtitle mb-2">
                        <b>Created at:</b>
                        {{item.createdAt}}
                      </h6>
                      <p class="card-text">
                        <b>Description:</b>
                        {{item.question}}
                        <br>
                        <b>Author:</b>
                        {{item.author}}
                      </p>
                    </div>

                    <div class="col-sm-4">
                      <div v-if="myId == item.authorId">
                        <div class="row">
                          <div class="col-sm-6">
                            <router-link
                              v-bind:to="'/questioninfo/'+item._id"
                              class="btn btn-success"
                            >Update</router-link>
                          </div>
                          <div class="col-sm-6">
                            <router-link
                              v-bind:to="'/deletequestion/'+item._id"
                              class="btn btn-danger"
                            >Delete</router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="boton-line">
                      <div v-if="token_key">
                        <router-link v-bind:to="'/answers/'+item._id" class="btn btn-primary">Answer</router-link>
                      </div>
                      <div v-else>
                        <router-link to="/login" class="btn btn-primary">Answer</router-link>
                      </div>
                    </div>
                  </div>
                </div>
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
  name: "Home",
  props: {
    _id: {
      type: String,
      required: true
    },
    question: {
      type: String,
      default: ""
    },
    author: {
      type: String,
      required: true
    },

    createdAt: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      token_key: localStorage.getItem("token"),
      loading: true,
      items: []
    };
  },
  created() {
    fetch("http://localhost:3000/api/questions")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const { items = [] } = data;
        const questions = items.map(item => {
          const { userId = {} } = item;
          const { firstname = "Anonimo", lastname = "" } = userId;
          return {
            _id: item._id,
            question: item.text,
            authorId: item.userId._id,
            author: `${item.userId.firstname} ${item.userId.lastname}`,
            createdAt: item.createdAt
          };
        });
        this.items = questions;
        console.log(this.items);
        this.loading = false;
      });
  },
  computed: {
    myId: function() {
      return window.localStorage.getItem("myUser");
    }
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
  color: #ffffff;
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
.boton-line {
  padding-top: 10px;
  padding-left: 10px;
}
.line-bottom {
  margin-bottom: 5px;
}
</style>
