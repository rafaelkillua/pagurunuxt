<template>
    <section>
        <div>
            <h1>Paguru Nuxt</h1>
            <h2>I Paguru Summit Workshop: Apps with Nuxt.js</h2>
            <h3>{{mensagem}}</h3>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        mensagem: "";
    },

    asyncData() {
        if (process.server)
            return {
                mensagem: "Olá server!"
            };
        else
            return {
                mensagem: "Olá cliente!"
            };
    }
};
</script>