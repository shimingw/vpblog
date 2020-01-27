<template>
  <div>
    <ul>
      <h2>JavaScript</h2>
      <li>
        ES6
        <ul>
          <li>0qweES6</li>
        </ul>
      </li>
      <li>222222</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: undefined //所有文章
    }
  },
  computed: {
    // 格式化后的文章
    homePosts() {
      return this.formatPosts(this.posts)
    }
  },

  mounted() {
    this.posts = this.$site.pages
    console.log(this.homePosts)
  },

  methods: {
    formatPosts(posts) {
      posts.filter(post => !post.frontmatter.single)
    }
  }
}
</script>

<style scoped></style>
