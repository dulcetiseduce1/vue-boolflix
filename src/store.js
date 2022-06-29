import Vue from "vue";
export const state = Vue.observable({
  movies: [],
  series: [],
  searched: "",
  errore: false,
});