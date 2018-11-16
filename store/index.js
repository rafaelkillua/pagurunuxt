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
                }),

            removerItem: (state, itemId) => {
                const pos = state.lista.itens.findIndex(
                    item => item.id === itemId
                );
                state.lista.itens.splice(pos, 1);
            }
        },

        getters: {
            getLista: state => state.lista
        }
    });
