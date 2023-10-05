<script setup>
import { defineProps } from 'vue'
import { useJokeStore } from '@/stores/jokeStore'
import JokeCard from '@/components/JokeCard.vue'

const jokeStore = useJokeStore()

defineProps(['jokes'])
</script>

<template>
  <div class="jokes-wrapper">
    <JokeCard v-for="(joke, index) in jokes" :key="joke.id" :joke="joke" :index="index" />
  </div>
  <button
    v-if="jokeStore.canLoadMore"
    @click="jokeStore.loadMore"
    class="load-more-btn"
    tabindex="0"
  >
    Load more
  </button>
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

.load-more-btn {
  max-width: fit-content;
  margin: 0 auto;
  margin-top: 12px;
  display: block;
  padding: 10px;
  font-size: 16px;

  @include sm {
    margin-top: 18px;
    padding: 12px 20px;
    font-size: 18px;
  }
  @include md {
    margin-top: 24px;
    padding: 16px 24px;
  }
  @include lg {
    margin-top: 36px;
    padding: 19px 36px;
    font-size: 20px;
  }

  font-weight: 700;
  line-height: 120%;
  color: $blue;

  box-shadow: $shadow;

  transition: box-shadow $trans;

  &:hover,
  :active:not(:focus) {
    box-shadow: $shadow-hover;
  }

  &:focus {
    outline: 1px solid $gray;
  }
}
</style>
