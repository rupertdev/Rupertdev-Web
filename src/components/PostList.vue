<template>
  <div class="post-list">
    <hr class="line" />
    <p class="date" v-html="post.date" /><g-link :to="post.path" class="read"><h1 class="title" v-html="post.title" /></g-link>
    <p class="description" v-html="post.description" />

  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
.title {
  font-family: 'Work Sans', sans-serif;
  color: black;
}
</style>
