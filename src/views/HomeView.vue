<script setup>
import SearchField from '@/components/SearchField.vue'
import JokesList from '@/components/JokesList.vue'

import { useJokeStore } from '@/stores/jokeStore'

const jokeStore = useJokeStore()

console.log(jokeStore.loadedJokes)
</script>

<template>
  <SearchField />
  <JokesList v-if="jokeStore.loadedJokes.length > 0" :jokes="jokeStore.loadedJokes" />
</template>
