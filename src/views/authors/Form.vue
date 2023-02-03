<template>
    <form @submit.prevent="submitForm">
        <div class="m-6">
            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nome
            </label>
            <input 
                type="text" 
                v-model="form.name" 
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
  import { authorsStore } from "../../stores/Authors";

    export default {
        props: {
            name: String
        },
        data() {
            return {
                authors: ref([]),
                authorsStore: authorsStore(),
                form: {
                    name: null
                }
            }
        },
        mounted() {
            if (this.name) {
                this.form.name = this.name;
            }
        },
        methods: {
            submitForm(e) {
                e.preventDefault();
                if (this.name) {
                    this.authorsStore.update(this.form, this.$route.params.id).then(response => {
                        this.$toast.success(`Autor atualizado com sucesso!`)
                        this.$router.push('/autores');
                    }).catch((e) => {
                        this.$toast.error(`Falha ao criar autor, contate o administrador!`)
                    });
                } else {
                    this.authorsStore.create(this.form).then(response => {
                        this.$toast.success(`Autor criado com sucesso!`)
                        this.$router.push('/autores');
                    }).catch((e) => {
                        this.$toast.error(`Falha ao criar autor, contate o administrador!`)
                    });
                }
            }
        }
    }
</script>
