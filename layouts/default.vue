<template>
    <div>
        <nav class="nav">
            <nuxt-link to="/">Início</nuxt-link>|
            <nuxt-link to="/todolist">TODO List</nuxt-link>|
            <nuxt-link to="/cadastro">Cadastro</nuxt-link>|
            <nuxt-link to="/sobre">Sobre</nuxt-link>
        </nav>
        <div class="container">
            <nuxt/>
        </div>
    </div>
</template>

<style>
html {
    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.nav {
    text-align: center;
    margin: 30px;
}

a {
    text-decoration: none;
}

.lista {
    border: 1px solid;
    padding: 20px;
}
</style>
