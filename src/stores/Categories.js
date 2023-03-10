import { defineStore } from 'pinia'
import CategoriesService from '../services/CategoriesService';

export const categoriesStore = defineStore("categoriesStore", {
    state: () => ({
        categories: [],
        category: {}
    }),
    getters: {
        getCategories(state) {
            return state.categories;
        },
        getCategory(state) {
            return state.category;
        }
    },
    actions: {
        async fetchCategories() {
            await CategoriesService.get()
                .then(({ data }) => (this.categories = data))
                .catch((e) =>{
                    console.log(e);
                });
        },
        async find(id) {
            await CategoriesService.find(id)
                .then(response => {
                    console.log(response)
                    this.category = response.data
                })
                .catch((e) =>{
                    console.log(e);
                });
        },
        async create(data) {
            await CategoriesService.create(data)
                .then(response => {
                    console.log('Salvo com sucesso!')
                })
                .catch((e) =>{
                    console.log(e);
                });
        },
        async update(data, id) {
            await CategoriesService.update(data, id)
                .then(response => {
                    console.log('Atualizado com sucesso!')
                })
                .catch((e) =>{
                    console.log(e);
                });
        },
        async delete(id) {
            await CategoriesService.delete(id).then(response => {
                console.log(response)
            }).catch((e) => {
                console.log(e);
            });
        }
    },
})
