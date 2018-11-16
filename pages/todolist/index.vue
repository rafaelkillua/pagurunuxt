<template>
    <div>
        <div class="lista">
            <input placeholder="Nome da Lista" v-model="nomeLista">
            <button @click="adicionarLista">Adicionar Lista</button>
        </div>
        <todo-list
            v-for="lista in listas"
            :key="lista.id"
            :lista="lista"
            @removerLista="removerLista"
        />
    </div>
</template>

<script>
import TodoList from "~/components/todolist";
export default {
    components: {
        TodoList
    },

    data: () => ({
        nomeLista: ""
    }),

    mounted() {
        this.$store.dispatch("iniciarApp");
    },

    computed: {
        listas() {
            return this.$store.getters.getListas;
        }
    },

    methods: {
        adicionarLista() {
            this.$store.dispatch("adicionarLista", this.nomeLista);
            this.nomeLista = "";
        },

        removerLista(listaId) {
            this.$store.dispatch("removerLista", listaId);
        }
    }
};
</script>
