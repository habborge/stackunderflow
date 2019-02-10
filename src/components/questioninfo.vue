<template>
  <div class="post__container">
    <div class="row">
      <div class="col-sm">
        <div class="card-body" v-for="item in items" :key="item._id">
          <div class="line-bottom">
            <span>
              <h6 class="card-subtitle mb-2">
                <b>QUESTION</b>
                <br>
                <span class="color-date">
                  <b>Asked:</b>
                  {{item.createdAt}}
                  <br>
                  <b>Author:</b>
                  {{item.author}}
                </span>
              </h6>
              <h1 class="card-title">{{item.question}}</h1>
            </span>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="container">
          <div class="row">
            <div class="login-width">
              <div class>
                <h1>Update your Question</h1>
              </div>
              <form>
                <div class="form-group">
                  <input type="text" class="form-control" v-model="MyQuestion">
                </div>
                <button type="button" class="btn btn-primary" @click="validate">Update Question</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "answer",
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
      loading: true,
      items: []
    };
  },
  created() {
    this.read();
  },
  methods: {
    validate() {
      if (this.MyQuestion) {
        this.update();
        console.log(MyId);
      } else {
        alert("Please all fields are required!!");
      }
    },
    read() {
      fetch("http://localhost:3000/api/questions/" + this.$route.params.id)
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
          console.log(questions);
          this.loading = false;
        });
    },
    update() {
      fetch("http://localhost:3000/api/questions/" + this.$route.params.id, {
        method: "PUT",
        body: JSON.stringify({
          text: this.MyQuestion
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
          this.read();
          this.MyQuestion = "";
        });
    }
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
  color: #42b983;
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
.line-bottom {
  border-bottom: 1px solid rgb(70, 69, 69);
  margin-bottom: 10px;
}
.space-bottom {
  padding-bottom: 0px;
}
.line-bottom2 {
  border: 1px solid rgb(70, 69, 69);
  margin-bottom: 10px;
  padding: 10px;
}
.color-date {
  color: rgb(109, 109, 109);
}
.postion-text {
  text-align: right;
}
</style>
