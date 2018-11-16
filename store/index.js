import Vuex from "vuex";

export default () =>
    new Vuex.Store({
        state: () => ({
            listas: []
        }),

        mutations: {
            adicionarItem: (state, { novoItem, listaId }) => {
                const lista = state.listas.find(lista => lista.id === listaId);
                lista.itens.push({
                    id: lista.itens.length + 1,
                    descricao: novoItem,
                    status: false
                });
            },

            removerItem: (state, { listaId, itemId }) => {
                const lista = state.listas.find(lista => lista.id === listaId);
                const pos = lista.itens.findIndex(item => item.id === itemId);
                lista.itens.splice(pos, 1);
            },

            adicionarLista: (state, nomeLista) => {
                state.listas.push({
                    id: state.listas.length + 1,
                    nome: nomeLista,
                    itens: []
                });
            },

            removerLista: (state, listaId) => {
                const pos = state.listas.findIndex(
                    lista => lista.id === listaId
                );
                state.listas.splice(pos, 1);
            }
        },

        getters: {
            getListas: state => state.listas
        }
    });
