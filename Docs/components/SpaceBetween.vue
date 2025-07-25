<script setup>
import { defineProps } from 'vue';

defineProps(["left", "right"])
</script>


<template>
  <section class="space-between-wrapper">
    <div class="space-between">
      <p class="no-margin">{{ left }}</p>
      <p class="no-margin">{{ right }}</p>
    </div>
    <p class="no-margin">University of Arkansas Grantham</p>
  </section>
</template>


<style>
.space-between-wrapper:not(:last-child) {
  padding-block-end: 2rem;
}

.space-between {
  display: flex;
  justify-content: space-between;


  & p:first-child {
    font-weight: 500;
    font-style: italic;
    margin: 0;
  }

  & p:last-child {
    color: var(--vp-c-text-2);
    margin: 0;
  }
}

.space-between+p {
  margin: 0;
  padding-left: 1rem;
  border-left: 2px solid #2e2e32;
  color: var(--vp-c-text-2);
}

#experience {
  margin-top: 0;
}
</style>