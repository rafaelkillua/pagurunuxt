import Vuex from "vuex";

export default () =>
    new Vuex.Store({
        state: () => ({
            lista: {
                id: 1,
                nome: "Lazer",
                itens: []
            }
        }),

        mutations: {
            adicionarItem: (state, item) =>
                state.lista.itens.push({
                    id: state.lista.itens.length + 1,
                    descricao: item,
                    status: false
                })
        },

        getters: {
            getLista: state => state.lista
        }
    });
