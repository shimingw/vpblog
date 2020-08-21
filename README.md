---
home: true
comment: false
single: true
footer: MIT Licensed | Copyright © 2020 嘻哈工程师
---
<!-- TODO: 做一个可视化的分类展示 -->
  <div class="home">
    <img src="./.vuepress/img/wx.png" />
    <ul v-for="post in posts">
      <h2>{{ post.title }}</h2>
      <li v-for="postChild in post.child">
        <a v-if="postChild.href" :href="postChild.href">{{
          postChild.title
        }}</a>
        <div v-else>
          <h4>{{ postChild.title }}</h4>
          <ul>
            <li v-for="postDeepChild in postChild.child">
              <a :href="postDeepChild.href">{{ postDeepChild.title }}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  
<script>
import categoryList from './.vuepress/config/category-auto.js'

export default {
  data() {
    return {
      posts: undefined //所有文章
    }
  },
  mounted() {
    this.posts = categoryList
    console.log(this.posts)
  },

  methods: {}
}
</script>

<style>
.home a:hover{
  text-decoration: underline;
}
</style>