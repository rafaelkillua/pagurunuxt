<template>
    <form @submit.prevent="cadastrar">
        <input v-model="nome" placeholder="Nome">
        <input type="email" v-model="email" placeholder="E-mail">
        <input type="password" v-model="password" placeholder="Senha">
        <button type="submit">Cadastrar</button>
    </form>
</template>

<script>
export default {
    data: () => ({
        nome: "",
        email: "",
        password: ""
    }),

    methods: {
        cadastrar() {
            this.$store.dispatch("cadastrar", {
                nome: this.nome,
                email: this.email,
                password: this.password
            });
        }
    }
};
</script>
