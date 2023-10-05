<script setup>
import { ref, onMounted } from 'vue'
import TypographyComponent from '@/components/shared/TypographyComponent.vue'
import useDebounce from '@/utils/useDebounce'
import { useJokeStore } from '@/stores/jokeStore'

const jokeStore = useJokeStore()

const inputRef = ref(null)

const getDebouncedSearch = useDebounce(jokeStore.getJokes, 500)

onMounted(() => inputRef.value.focus())

console.log(jokeStore.noData)
</script>

<template>
  <div class="search-wrapper">
    <label class="main-search-label">
      <input
        ref="inputRef"
        type="text"
        v-model.trim="jokeStore.searchInput"
        @input="getDebouncedSearch"
        class="main-search"
        placeholder="Search jokes..."
        tabindex="0"
        autofocus
      />
    </label>
    <TypographyComponent
      class="search-message"
      v-if="jokeStore.error && jokeStore.searchInput"
      size="md"
      color="error"
      weight="normal"
      family="mont"
    >
      {{ jokeStore.error }}
    </TypographyComponent>
    <TypographyComponent
      class="search-message"
      v-if="jokeStore.totalJokesCount && !jokeStore.error"
      size="md"
      color="dark"
      weight="normal"
      family="mont"
    >
      Found jokes: {{ jokeStore.totalJokesCount }}
    </TypographyComponent>
    <TypographyComponent
      class="search-message"
      v-if="jokeStore.noData && !jokeStore.error && !jokeStore.totalJokesCount"
      size="md"
      color="dark"
      weight="normal"
      family="mont"
    >
      No jokes found
    </TypographyComponent>
    <TypographyComponent
      class="search-message"
      v-if="jokeStore.isLoading"
      size="md"
      color="gray"
      weight="normal"
      family="mont"
    >
      Loading jokes...
    </TypographyComponent>
  </div>
</template>

<style lang="scss" scoped>
.search-wrapper {
  max-width: 626px;
  margin: 20px auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;

  @include sm {
    margin: 40px auto 20px;
    gap: 12px;
  }

  @include md {
    margin: 60px auto 30px;
    gap: 16px;
  }

  @include lg {
    margin: 128px auto 60px;
    gap: 20px;
  }
}

.search-message {
  padding-left: 10px;
  @include sm {
    padding-left: 20px;
  }
  @include md {
    padding-left: 24px;
  }
  @include lg {
    padding-left: 36px;
  }
}
.main-search-label {
  width: 100%;
  box-shadow: $shadow;
}
.main-search {
  width: 100%;

  padding: 10px;
  font-size: 16px;

  @include sm {
    padding: 12px 20px;
    font-size: 18px;
  }
  @include md {
    padding: 16px 24px;
  }
  @include lg {
    padding: 19px 36px;
    font-size: 20px;
  }

  font-weight: 700;
  line-height: 120%;
  color: $blue;

  border: none;
  outline: none;

  background-color: $white;

  &::placeholder {
    color: inherit;
  }
}
</style>
