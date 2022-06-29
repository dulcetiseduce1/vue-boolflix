<template>
    <div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Inserisci titolo da cercare" v-model="searchedTitle">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="getSearchedTitle">Cerca</button>
        </div>

    </div>
</template>

<script>
import { state } from '../store'
import axios from 'axios';
    export default {
        name: "VHeader",
        data(){
            return{
                searchedTitle : "",
            }
        },
        methods : {
            getSearchedTitle(){
                state.searched = this.searchedTitle.trim();
                console.log(state.searched);
                this.fetchSearched();  
            },
            fetchSearched() {
                if(state.searched)
                {
                axios
                .get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key: "229baeded6767253192fcff299adea55",
                    query: state.searched,
                    language: "it-IT",
                },})
                .then((response) => {
                    state.movies = response.data.results;
                });
                }
  }
        },
    }
</script>

<style lang="scss" scoped>
</style> 