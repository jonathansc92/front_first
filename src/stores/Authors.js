import { defineStore } from 'pinia'
import AuthorsService from '../services/AuthorsService';

export const authorsStore = defineStore("authorsStore", {
    state: () => ({
        authors: [],
        author: {}
    }),
    getters: {
        getAuthors(state) {
            return state.authors;
        },
        getAuthor(state) {
            return state.author;
        }
    },
    actions: {
        async fetchAuthors() {
            await AuthorsService.get()
                .then(({ data }) => (this.authors = data))
                .catch((e) =>{
                    console.log(e);
                });
        },
        async find(id) {
            await AuthorsService.find(id)
                .then(response => {
                    this.author = response.data
                })
                .catch((e) =>{
                    console.log(e);
                });
        },
        async create(data) {
            await AuthorsService.create(data)
                .then(response => {
                    console.log('Salvo com sucesso!')
                })
                .catch((e) =>{
                    console.log(e);
                });
        },
        async update(data, id) {
            console.log(data);
            await AuthorsService.update(data, id)
                .then(response => {
                    console.log('Atualizado com sucesso!')
                })
                .catch((e) =>{
                    console.log(e);
                });
        },
        async delete(id) {
            await AuthorsService.delete(id).then(response => {
                console.log(response)
            }).catch((e) => {
                console.log(e);
            });
        }
    },
})
