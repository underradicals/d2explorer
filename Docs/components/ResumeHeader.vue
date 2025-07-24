<script setup>
import { ref, defineProps } from 'vue';

defineProps(["email", "phone"]);

// const phone = ref("(903)-519-9940")
</script>

<template>
  <div class="person-name-wrapper">
    <h1 class="person-name">
      <slot name="person_name"></slot>
    </h1>
    <h5 class="subtitle">
      <slot name="subtitle"></slot>
    </h5>
    <p>
      <a href="mailto:{{ email }}">{{ email }}</a>
    </p>
    <p>
      Hubbard, TX <a href="tel:+{{ phone }}">{{ phone }}</a>
    </p>
  </div>
</template>


<style lang="css">
.person-name-wrapper {
  text-align: center;

  & .person-name {
    color: var(--vp-home-hero-name-color);
    background: var(--vp-home-hero-name-background);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: var(--vp-home-hero-name-color);
  }

  & p {
    font-size: 12px;
    padding: 0;
    margin: 0;
  }

  & .subtitle {
    color: var(--vp-c-text-2);
  }
}
</style>