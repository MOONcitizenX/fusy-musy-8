<script setup>
import { defineProps } from 'vue'
import { useJokeStore } from '@/stores/jokeStore'
import JokeCard from '@/components/JokeCard.vue'
import ButtonComponent from '@/components/shared/ButtonComponent.vue'

const jokeStore = useJokeStore()

defineProps(['jokes'])
</script>

<template>
  <div class="jokes-wrapper">
    <JokeCard v-for="(joke, index) in jokes" :key="joke?.id" :joke="joke" :index="index" />
  </div>
  <ButtonComponent v-if="jokeStore.canLoadMore" :onClick="jokeStore.loadMore">
    Load More
  </ButtonComponent>
</template>

<style lang="scss" scoped>
.jokes-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;

  @include sm {
    gap: 12px;
  }
  @include md {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
  @include lg {
    gap: 20px;
  }
}
</style>
