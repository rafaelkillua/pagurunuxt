<template>
    <div>
        <h3>{{lista.id + ". " + lista.nome}}</h3>
        <ul>
            <li v-for="item in lista.itens" :key="item.id">
                {{item.id + ". " + item.descricao}}
                <input type="checkbox" v-model="item.status">
                <button @click="removerItem(item.id)">X</button>
            </li>
        </ul>
        <input placeholder="Descrição" v-model="novoItem">
        <button @click="adicionarItem">Adicionar</button>
    </div>
</template>

<script>
export default {
    props: ["lista"],

    data: () => ({
        novoItem: ""
    }),

    methods: {
        adicionarItem() {
            this.$store.commit("adicionarItem", this.novoItem);
            this.novoItem = "";
        },

        removerItem(itemId) {
            this.$store.commit("removerItem", itemId);
        }
    }
};
</script>
