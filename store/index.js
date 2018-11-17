import Vuex from "vuex";
import { database, auth } from "~/plugins/firebase";

export default () =>
    new Vuex.Store({
        state: () => ({
            listas: [],
            user: null
        }),

        mutations: {
            setListas: (state, listas) => {
                state.listas = listas;
            },

            setUser: (state, user) => {
                state.user = user;
            }
        },

        getters: {
            getListas: state => state.listas,
            getUser: state => state.user
        },

        actions: {
            iniciarApp: context => {
                database.ref("listas").on("value", snapshot => {
                    const listas = [];
                    for (let id in snapshot.val()) {
                        listas.push({
                            ...snapshot.val()[id],
                            id: id
                        });
                    }
                    context.commit("setListas", listas);
                });
            },

            adicionarLista: (ctx, nomeLista) => {
                const novaLista = {
                    nome: nomeLista,
                    itens: []
                };
                database.ref("listas").push(novaLista);
            },

            removerLista: (ctx, listaId) => {
                database.ref("listas/" + listaId).remove();
            },

            adicionarItem: (context, { novoItem, listaId }) => {
                const lista = context.state.listas.find(
                    lista => lista.id === listaId
                );
                if (!lista.itens) {
                    lista.itens = [];
                }
                lista.itens.push({
                    id: lista.itens.length + 1,
                    descricao: novoItem,
                    status: false
                });
                database.ref("listas/" + listaId).update(lista);
            },

            removerItem: (context, { listaId, itemId }) => {
                const lista = context.state.listas.find(
                    lista => lista.id === listaId
                );
                const pos = lista.itens.findIndex(item => item.id === itemId);
                lista.itens.splice(pos, 1);
                database.ref("listas/" + listaId).update(lista);
            },

            cadastrar: (context, { nome, email, password }) => {
                auth.createUserWithEmailAndPassword(email, password).catch(
                    erro => {
                        console.error(erro);
                    }
                );
            }
        }
    });
