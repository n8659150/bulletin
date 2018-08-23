<template>
    <div>
        <div class="col-lg-12 mb-5">
        <h3 class="mb-4 tm-text-gray">{{userInfo.username}},发表近况 <a href="" @click="logout()">[注 销]</a></h3>
        
            <div class="row">
                <div class="form-group col-xl-4">
                    <input v-model="title" type="text" id="comment_title" name="comment_title" class="form-control" placeholder="标题" required />
                </div>
                <div class="form-group col-xl-4">
                    <input v-model="category" type="text" id="comment_category" name="comment_category" class="form-control" placeholder="分类" required />
                </div>
                <div class="form-group col-xl-4">
                    <input v-model="github" type="text" id="comment_github" name="comment_github" class="form-control" placeholder="github" required />
                </div>
            </div>
            <div class="form-group">
                <textarea v-model="comment" id="comment_message" name="comment_message" class="form-control" rows="6" placeholder="近况..." required></textarea>
            </div>
            <button class="btn tm-btn-send" @click="postComments()">发 表</button>
        </div>
    </div>
</template>
<script>
export default {
  name: "MicroBlog",
  props: ["userInfo"],
  data() {
    return {
      title: "",
      category: "",
      github: "",
      comment: null,
      microblogs: null
    };
  },
  methods: {
    logout() {
      AV.User.logOut();
      let currentUser = AV.User.current();
      currentUser === null ? alert("注销成功") : alert("注销失败，请检查网络");
      this.$router.push({ path: "/" });
    },
    postComments() {
      let MicroBlog = AV.Object.extend("MicroBlog");
      let microBlog = new MicroBlog();
      microBlog.set("title", this.title);
      microBlog.set("category", this.category);
      microBlog.set("github", this.github);
      microBlog.set("comment", this.comment);
      microBlog.save().then(
        function(comment) {
          alert("发布成功!id是 " + comment.id);
        },
        function(error) {
          console.error(error);
        }
      );
    }
  }
};
</script>