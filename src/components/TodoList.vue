<script setup>
import {ref,onMounted} from "vue";

const newTodo = ref(''); // 新待办事项的输入
const todos = ref([]); // 待办事项列表

const tags = ["工作","个人"];

const priority = ["高","中","低"];

const status = ["完成","未完成","进行中","已取消"];



onMounted(()=>{
  loadTodos();
})

// 添加待办事项
const addTodo = () => {
  if (newTodo?.value?.trim() === ''){
    return;
  }
  todos.value.push({
    text: newTodo.value,
    completed: false
  });
  newTodo.value = ''; // 清空输入框
  saveTodos()
};


const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos.value));
}

const loadTodos = () => {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    try {
      todos.value = JSON.parse(storedTodos);
    } catch (error) {
      console.error('解析错误:', error);
      todos.value = []; // 如果解析失败，初始化为空数组
    }
  }
}

// 删除待办事项
const removeTodo = (index) => {
  todos.value.splice(index, 1);
  saveTodos()
};


</script>

<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Add a new task"
    />
    <ul>
<!--:class="{ completed: todo.completed } 表示todo.completed 为true的时候添加 completed 类-->
      <li v-for="(todo, index) in todos" :key="index" :class="{ completed: todo.completed }">
        <input
            type="checkbox"
            v-model="todo.completed"
        />
        <span>{{ todo.text }}</span>
        <button @click="removeTodo(index)">Delete</button>
      </li>
    </ul>
<!--    <div>
      <div class="todo"></div>
      <div class="finish"></div>
    </div>-->
  </div>
</template>


<style>
.todo-list {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid #ccc;
  margin-bottom: 8px;
}

.completed span {
  text-decoration: line-through;
  color: #888;
}

input[type="checkbox"] {
  margin-right: 10px;
}

button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #ff1a1a;
}
</style>