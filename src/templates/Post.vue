<template>
  <Layout>
    <br>
    <g-link to="/" class="link">  &larr; Go Back</g-link>
    <div class="post-title">
      <h1>{{$page.post.title}}</h1>
        <p class="post-date"> {{ $page.post.date}} | {{$page.post.timeToRead}} min read
      </p>
    </div>
    <div class="post-content">
      <p v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<style>
.post-title {
  font-family: 'Work Sans', sans-serif
}
h2 {
  font-family: 'Work Sans', sans-serif;
}
h3 {
  font-family: 'Work Sans', sans-serif;
}
p {
  padding-left: 10px;
}
img {
  max-width: 80%;
  max-height: 756px;
  margin: auto;
  display: block;
}
label {
  display: block;
  text-align: center;
  margin-top: 5px;
  color: grey;
}
</style>
