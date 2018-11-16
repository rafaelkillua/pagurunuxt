<template>
    <div>
        <todo-list :lista="lista"/>
    </div>
</template>

<script>
import TodoList from "~/components/todolist";
export default {
    components: {
        TodoList
    },

    computed: {
        lista() {
            return this.$store.getters.getLista;
        }
    }
};
</script>
