import { defineStore } from 'pinia'
import CategoriesService from '../services/CategoriesService';

export const categoriesStore = defineStore("categoriesStore", {
    state: () => ({
        categories: []
    }),
    getters: {
        getCategories(state) {
            return state.categories;
        }
    },
    actions: {
        async fetchCategories() {
            await CategoriesService.get()
                .then(response => {
                    this.categories = response;
                }).catch((e) =>{
                    console.log(e);
                });
        }
    },
})
