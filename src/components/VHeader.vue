<template>
  <div>
    <div class="input-group mb-3">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-danger" href="">BOOLFLIX</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>lingua</span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li v-for="(flag,i) in flags" :key="flag.language + i" class="text-center" @click="getLanguage(i)" :class="{ 'bg-danger': i === languageIndex }">
                    <a class="dropdown-item" href="#"
                      ><img :src="flag.flag" class="flag text-center" alt=""
                    /></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <input
        type="text"
        class="form-control bg-dark text-light"
        placeholder="Inserisci titolo da cercare"
        v-model="searchedTitle"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        @click="getSearchedTitle"
      >
        Cerca!
      </button>
    </div>
  </div>
</template>

<script>
import { state } from "../store";
import axios from "axios";
export default {
  name: "VHeader",
  data() {
    return {
      searchedTitle: "",
    };
  },
  methods: {
    getSearchedTitle() {
      state.searched = this.searchedTitle.trim();
      console.log(state.searched);
      this.fetchSearched();
    },
    
      getLanguage(i){
        console.log(i);
        console.log(this.flags[i].language);
        state.currentLanguage = this.flags[i].language;
        this.languageIndex = i ;
        console.log(this.languageIndex);
    },

    fetchSearched() {
      if (state.searched) {
        axios
          .get("https://api.themoviedb.org/3/search/movie", {
            params: {
              api_key: "229baeded6767253192fcff299adea55",
              query: state.searched,
              language: state.currentLanguage,
            },
          })
          .then((response) => {
            state.movies = response.data.results;
          });

          axios
          .get("https://api.themoviedb.org/3/search/tv", {
            params: {
              api_key: "049efd07b3cd401f7f0d67417708f39c",
              query: state.searched,
              language: state.currentLanguage,
            },
          })
          .then((response) => {
            state.series = response.data.results;
          });

      }
    },
  },
};
</script>


<style lang="scss" scoped>
.flag {
  width: 30px;
}
</style>