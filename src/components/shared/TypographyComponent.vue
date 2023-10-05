<script setup lang="ts">
import { defineProps } from 'vue'

defineProps(['size', 'weight', 'color', 'family'])
</script>

<template>
  <p :class="[size, weight, color, family]">
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
/* size */

.sm {
  font-size: 10px;

  @include sm {
    font-size: 12px;
  }
  @include lg {
    font-size: 14px;
  }
}

.md {
  font-size: 12px;

  @include sm {
    font-size: 14px;
  }
  @include lg {
    font-size: 16px;
  }
}

.lg {
  font-size: 16px;

  @include sm {
    font-size: 18px;
  }
  @include lg {
    font-size: 20px;
  }
}

/* weight */

.normal {
  font-weight: 400;
}

.bold {
  font-weight: 700;
}

/* color */

.dark {
  color: $dark;
}

.gray {
  color: $gray;
}

.error {
  color: $error;
}

/* family */

.fira {
  font-family: 'Fira Sans';
}

.mont {
  font-family: 'Montserrat Variable';
}
</style>
