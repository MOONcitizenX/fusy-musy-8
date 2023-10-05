<script setup>
import { defineProps } from 'vue'
import getFormattedDate from '@/utils/getFormattedDate'
import TypographyComponent from '@/components/shared/TypographyComponent.vue'

defineProps(['joke', 'index'])
</script>

<template>
  <a class="joke-card" :href="joke.url" target="_blank" tabindex="0">
    <TypographyComponent :size="index > 1 ? 'md' : 'lg'" color="dark" weight="normal" family="fira">
      {{ joke.value }}
    </TypographyComponent>
    <div class="card-info">
      <TypographyComponent size="sm" color="gray" weight="normal" family="mont">
        {{ joke.id }}
      </TypographyComponent>
      <TypographyComponent size="sm" color="gray" weight="normal" family="mont">
        {{ getFormattedDate(joke.created_at) }}
      </TypographyComponent>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.joke-card {
  flex: 1;
  flex-basis: 27%;
  min-height: 150px;

  padding: 12px 12px 8px;

  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: $shadow;

  transition: box-shadow $trans;

  @include sm {
    padding: 16px 16px 12px;
  }
  @include md {
    padding: 20px 20px 16px;
  }
  @include lg {
    padding: 40px 40px 25px;
  }

  &:nth-of-type(-n + 2) {
    flex-basis: 47%;
    @include md {
      min-height: 262px;
    }
  }

  &:hover,
  :active:not(:focus) {
    box-shadow: $shadow-hover;
  }

  &:focus {
    outline: 1px solid $gray;
  }
}

.card-info {
  display: flex;
  justify-content: space-between;
}
</style>
