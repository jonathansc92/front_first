<template>
    {{ categories.data }}
        <DataTable :value="categories" responsiveLayout="scroll">
            <Column field="id" header="ID"></Column>
            <Column field="description" header="Descrição"></Column>
        </DataTable>
</template>

<script>
  import { ref } from 'vue';
  import { categoriesStore } from "../../stores/Categories";
  import DataTable from 'primevue/datatable'
  
    export default {
        components:{ DataTable },

        data() {
            return {
                categories: ref([]),
                categoriesStore: categoriesStore(),
            }
        },
        mounted() {
            this.getCategories();
        },
        methods: {
            getCategories() {
                this.categoriesStore.fetchCategories().then(response => 
                    {
                        this.categories = this.categoriesStore.getCategories;
                    }).catch((e) =>{
                        console.log(e);
                    });
                }
        }
    }
</script>
