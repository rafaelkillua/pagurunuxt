<template>
    <div class="lista">
        <h3>{{lista.id + ". " + lista.nome}}</h3>
        <button @click="removerLista(lista.id)">X</button>
        <ul>
            <li v-for="item in lista.itens" :key="item.id">
                {{item.id + ". " + item.descricao}}
                <input type="checkbox" v-model="item.status">
                <button @click="removerItem(lista.id, item.id)">X</button>
            </li>
        </ul>
        <input placeholder="Descrição" v-model="novoItem">
        <button @click="adicionarItem(lista.id)">Adicionar</button>
    </div>
</template>

<script>
export default {
    props: ["lista"],

    data: () => ({
        novoItem: ""
    }),

    methods: {
        adicionarItem(listaId) {
            this.$store.dispatch("adicionarItem", {
                novoItem: this.novoItem,
                listaId
            });
            this.novoItem = "";
        },

        removerItem(listaId, itemId) {
            this.$store.dispatch("removerItem", { listaId, itemId });
        },

        removerLista(listaId) {
            this.$emit("removerLista", listaId);
        }
    }
};
</script>