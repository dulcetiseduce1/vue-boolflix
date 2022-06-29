<template>
    <div>
        <div class="card">
        <img class="card-img-top"  :alt="`film immagine ${card.title}`" :src="`https://image.tmdb.org/t/p/original/${card.poster_path}`">
        
            <div class="card-body">

                <h3 class="card-title">{{card.title}}</h3>

                <h6 class="card-title">{{card.original_title}}</h6>

                <h6 class="card-title">Lingua : {{card.original_language}}</h6>

                <p class="card-text">Descrizione</p>

                <p>Voto {{card.vote_average}}</p>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "VCard",
        props: {
            card : Object,
        }
    }
</script>

<style lang="scss" scoped>
.card {
height: 100%;
        img {
        width: 50px;
    }
}
</style>