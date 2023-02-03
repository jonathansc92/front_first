<template>
    <form @submit.prevent="submitForm">
        <div class="m-6">
            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Título
            </label>
            <input
                type="text"
                v-model="form.title" 
                class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
        <div class="m-6">
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Descrição
            </label>
            <textarea 
                v-model="form.description" 
                rows="4" 
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </textarea>
        </div>
        <div class="m-6">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Selecione um Autor
            </label>
            <select 
                v-model="form.author_id"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option selected>Escolha um Autor</option>
                <option 
                    v-for="author, index in authors.data" 
                    :value="author.id" 
                    :key="index" 
                    :selected="authorId && authorId === author.id"
                >
                    {{ author.name }}
                </option>
            </select>
        </div>
        <div class="m-6">
            <label for="countries_multiple" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Selecione as categorias
            </label>
            <select 
                multiple
                v-model="form.categories"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option selected>Escolha uma categoria</option>
                <option 
                    v-for="category, index in categories.data" 
                    :value="category.id" 
                    :key="index"
                >
                    {{ category.description }}
                </option>
            </select>
        </div>
    </form>
    <div class="m-6 flex justify-end">
            <button @click="submitForm" type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Salvar
            </button>
        </div>
</template>

<script>
  import { ref } from 'vue';
  import { authorsStore } from "../../stores/Authors";
  import { booksStore } from "../../stores/Books";
  import { categoriesStore } from "../../stores/Categories";

    export default {
        props: {
            title: String,
            description: String,
            authorId: Number,
            categoriesLst: Array
        },
        data() {
            return {
                authors: ref([]),
                categories: ref([]),
                authorsStore: authorsStore(),
                booksStore: booksStore(),
                categoriesStore: categoriesStore(),
                form: {
                    title: null,
                    description: null,
                    author_id: null,
                    categories: []
                }
            }
        },
        mounted() {
            this.getAuthors();
            this.getCategories();
            if (this.title) {
                this.form.title = this.title;
                this.form.description = this.description;
                this.form.author_id = this.authorId;
                this.form.categories = this.categoriesLst;
            }
        },
        methods: {
            getAuthors() {
                this.authorsStore.fetchAuthors().then(response => 
                    {
                        this.authors = this.authorsStore.getAuthors;
                    }).catch((e) =>{
                        console.log(e);
                    });
            },
            getCategories() {
                this.categoriesStore.fetchCategories().then(response => 
                    {
                        this.categories = this.categoriesStore.getCategories;
                    }).catch((e) =>{
                        console.log(e);
                    });
            },
            submitForm(e) {
                e.preventDefault();

                if (this.form.title === null || this.form.title === '') {
                    this.$toast.warning(`O campo título é obrigatório`);
                    return;
                }

                if (this.form.description === null || this.form.description === '') {
                    this.$toast.warning(`O campo descrição é obrigatório`);
                    return;
                }
                
                if (this.form.author_id === null || this.form.author_id === '') {
                    this.$toast.warning(`Por favor, selecione um autor!`);
                    return;
                }

                if (this.title) {
                    this.booksStore.update(this.form, this.$route.params.id).then(response => {
                        this.$toast.success(`Livro atualizado com sucesso!`)
                        this.$router.push('/livros');
                    }).catch((e) => {
                        this.$toast.error(`Falha ao criar categoria, contate o administrador!`)
                    });
                } else {
                    this.booksStore.create(this.form).then(response => {
                        this.$toast.success(`Livro criado com sucesso!`)
                        this.$router.push('/livros');
                    }).catch((e) => {
                        this.$toast.error(`Falha ao criar categoria, contate o administrador!`)
                    });
                }
            }
        }
    }
</script>
