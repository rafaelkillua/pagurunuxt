<template>
    <form @submit.prevent="logar">
        <input type="email" v-model="email" placeholder="E-mail">
        <input type="password" v-model="password" placeholder="Senha">
        <button type="submit">Logar</button>
    </form>
</template>

<script>
export default {
    data: () => ({
        email: "",
        password: ""
    }),

    methods: {
        logar() {
            this.$store.dispatch("logar", {
                email: this.email,
                password: this.password
            });
        }
    }
};
</script>
