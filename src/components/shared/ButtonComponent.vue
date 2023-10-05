<script setup>
import { defineProps } from 'vue'

defineProps(['onClick'])
</script>

<template>
  <button @click="onClick" class="load-more-btn" tabindex="0">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
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
