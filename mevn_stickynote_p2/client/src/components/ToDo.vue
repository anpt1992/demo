<template lang="html">
  <div>
    <form v-on:submit='addTodo($event)'>
      <div class="titleForm">
        <input type="text" class="title" placeholder="Write what you need to remember!" v-model='newTodo'>
        <button type="submit" class="Button">
         <font-awesome-icon :icon="['fas', 'edit']" class="icon alt"/>
        </button>
      </div>
    </form>
    <ul>
      <li v-for='todo in todos' :key='todo._id' class = 'kiln'>
        <a href="#" class ='notes' >
          <button v-on:click="deleteTodo(todo._id)"/>
          <h2>{{todo.title}}</h2>         
        </a> 
      </li>
    </ul>
  </div>
</template>
<script>
import ToDoAPI from "@/services/ToDoAPI.js";
export default {
  data() {
    return {
      todos: []
    };
  },
  mounted() {
    this.loadTodos();
  },
  methods: {
    async addTodo(evt) {
      evt.preventDefault(); // prevents the form's default action from redirecting the page
      const response = await ToDoAPI.addTodo(this.newTodo);
      this.todos.push(response.data);
      this.newTodo = ""; // clear the input field
    },
    deleteTodo(todoID) {
      ToDoAPI.deleteTodo(todoID);
      // remove the array element with the matching id
      this.todos = this.todos.filter(function(obj) {
        return obj._id !== todoID;
      });
    },
    async loadTodos() {
      const response = await ToDoAPI.getToDo();
      this.todos = response.data;
    }
  }
};
</script>
<style lang="css">
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: arial, sans-serif;
  font-size: 100%;
  margin: 3em;
  background: #ccf;
  background-image: url("https://wallpaperbro.com/img/311300.jpg"); /*hình nền ở đây nghe ^^!*/
  color: #fff;
}
h2,
p {
  font-size: 100%;
  font-weight: normal;
}
/* css cho từng note */
ul,
li {
  list-style: none;
}
ul {
  overflow: hidden;
  padding: 3em;
}

ul li a {
  text-decoration: none;
  color: #000;

  background: #ffc;
  display: block;
  height: 10em;
  width: 10em;
  padding: 1em;
  background-image: url(https://rob.kilnhg.com/Content/Images/kiln_focus.gif);
  background-repeat: no-repeat;
  -moz-box-shadow: 5px 5px 7px rgba(33, 33, 33, 1);
  -webkit-box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  -moz-transition: -moz-transform 0.15s linear;
  -o-transition: -o-transform 0.15s linear;
  -webkit-transition: -webkit-transform 0.15s linear;
}
ul li {
  margin: 1em;
  float: left;
}
ul li h2 {
  margin-top: 30px;
  font-size: 140%;
  font-weight: bold;
  padding-bottom: 10px;
}
ul li input {
  float: right;
}
ul li a {
  -webkit-transform: rotate(-6deg);
  -o-transform: rotate(-6deg);
  -moz-transform: rotate(-6deg);
}
ul li:nth-child(even) a {
  -o-transform: rotate(4deg);
  -webkit-transform: rotate(4deg);
  -moz-transform: rotate(4deg);
  position: relative;
  top: 5px;
  background: #cfc;
}
ul li:nth-child(3n) a {
  -o-transform: rotate(-3deg);
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  position: relative;
  top: -5px;
  background: #ccf;
}
ul li:nth-child(5n) a {
  -o-transform: rotate(5deg);
  -webkit-transform: rotate(5deg);
  -moz-transform: rotate(5deg);
  position: relative;
  top: -10px;
}
ul li a:hover,
ul li a:focus {
  box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
  -webkit-transform: scale(1.25);
  -moz-transform: scale(1.25);
  -o-transform: scale(1.25);
  position: relative;
  z-index: 5;
}
ol {
  text-align: center;
}
ol li {
  display: inline;
  padding-right: 1em;
}
ol li a {
  color: #fff;
}

.notes button {
  border: none;
  background-color: Transparent;
  background-image: url("https://i.ibb.co/vYJqwVV/x.png");
  padding: 18px;
  float: right;
  cursor: pointer;
}
/* css cho khung nhập nội dung*/
.titleForm {
  width: 50%;
  margin: 0 auto;
  position: relative;
  display: flex;
}

.title {
  width: 100%;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.title:focus {
  color: #00b4cc;
}

.Button {
  width: 40px;
  height: 36px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}
</style>
