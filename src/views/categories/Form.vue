<template>
    <form @submit.prevent="submitForm">
        <div class="m-6">
            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Descrição
            </label>
            <input 
                type="text"
                v-model="form.description" 
                class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
        </div>
        <div class="m-6 flex justify-end">
            <button type="submit" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Salvar
            </button>
        </div>
    </form>
</template>

<script>
  import { ref } from 'vue';
  import { categoriesStore } from "../../stores/Categories";

    export default {
        props: {
            description: String
        },
        data() {
            return {
                authors: ref([]),
                categoriesStore: categoriesStore(),
                form: {
                    description: null
                }
            }
        },
        mounted() {
            if (this.description) {
                this.form.description = this.description;
            }
        },
        methods: {
            submitForm(e) {
                e.preventDefault();
                if (this.description) {
                    this.categoriesStore.update(this.form, this.$route.params.id).then(response => {
                        this.$toast.success(`Categoria atualizada com sucesso!`)
                        this.$router.push('/categorias');
                    }).catch((e) => {
                        this.$toast.error(`Falha ao criar categoria, contate o administrador!`)
                    });
                } else {
                    this.categoriesStore.create(this.form).then(response => {
                        this.$toast.success(`Categoria criada com sucesso!`)
                        this.$router.push('/categorias');
                    }).catch((e) => {
                        this.$toast.error(`Falha ao criar categoria, contate o administrador!`)
                    });
                }
            }
        }
    }
</script>
