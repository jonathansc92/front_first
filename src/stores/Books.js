import { defineStore } from 'pinia'
import BooksService from '../services/BooksService';

export const booksStore = defineStore("booksStore", {
    state: () => ({
        books: [],
        book: {}
    }),
    getters: {
        getBooks(state) {
            return state.books;
        },
        getBook(state) {
            return state.book;
        }
    },
    actions: {
        async fetchBooks() {
            await BooksService.get()
                .then(({ data }) => (this.books = data))
                .catch((e) =>{
                    console.log(e);
                });
        },
        async find(id) {
            await BooksService.find(id)
                .then(response => {
                    this.book = response.data
                })
                .catch((e) =>{
                    console.log(e);
                });
        },
        async create(data) {
            await BooksService.create(data)
                .then(response => {
                    console.log('Salvo com sucesso!')
                })
                .catch((e) =>{
                    console.log(e);
                });
        },
        async update(data, id) {
            console.log(data);
            await BooksService.update(data, id)
                .then(response => {
                    console.log('Atualizado com sucesso!')
                })
                .catch((e) =>{
                    console.log(e);
                });
        },
        async delete(id) {
            await BooksService.delete(id);
        }
    },
})
