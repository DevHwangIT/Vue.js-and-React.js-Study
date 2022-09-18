<style scoped>
body {
    text-align: center;
    background-color: #f6f6f8;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
    <div id="app">
        <!-- TodoHeader -->

        <!-- TodoInput -->
        <TodoFooter v-on:addTodo="addTodo"></TodoFooter>>

        <!-- TodoList -->

        <!-- TodoFooter -->
        <TodoFooter v-on:clearAll="clearAll"></TodoFooter>>
    </div>
</template>

<script>
import TodoFooter from '../TodoFooter.vue';
import TodoHeader from '../TodoHeader.vue';
import TodoInput from '../TodoInput.vue';
import TodoList from '../TodoList.vue';
</script>