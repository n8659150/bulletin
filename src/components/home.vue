<template>
  <div class="hello">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <header class="text-center tm-site-header">
                    <div class="tm-site-logo"></div>
                    <h1 class="pl-4 tm-site-title">校长碎碎念</h1>
                </header>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="tm-video-container" style="overflow:hidden;">
                <video id="tm-welcome-video" class="tm-welcome-video" autoplay loop muted>
                    <source :src="videoSrc" type="video/mp4"> Your browser does not support the video tag.
                </video>
                <div id="tm-video-loader" v-if="!videoSrc"></div>
                <div id="tm-video-text-overlay" class="tm-video-text-overlay d-none">
                    <h1>
                        <div id="rotate" class="tm-video-text">
                            <div>This is timeless</div>
                            <div>We are invincible</div>
                            <div>Quite unbeatable</div>
                            <div>and indestructible</div>
                        </div>
                    </h1>
                </div>
                <!-- <img src="https://picsum.photos/g/1920/1080/?random" alt="" > -->
                </div>
            </div>
        </div>
    </div>
    <div class="container tm-container-2">
        <div class="row">
            <div class="col-lg-12">
                <h2 class="tm-welcome-text">记录我项目和生活的近况</h2>
            </div>
        </div>
        <div class="row tm-section-mb">
            <div class="col-lg-12">
                <div class=" tm-timeline-item"  v-for="(microblog,key) in microblogs" :key="key">
                    <div class="tm-timeline-item-inner">
                        <img :src="profileSrc(key)" alt="Image" class="rounded-circle tm-img-timeline">
                        <div class="tm-timeline-connector">
                            <p class="mb-0">&nbsp;</p>
                        </div>
                        <div class="tm-timeline-description-wrap">
                            <div class="tm-bg-dark tm-timeline-description">
                                <div class="title-group">
                                    <span class="tm-title tm-font-400">{{microblog.attributes.title}}</span><span class="tm-category">{{microblog.attributes.category}}</span>
                                </div>
                                <p>{{microblog.attributes.comment}}</p>
                                <p class="float-right mb-0 date-created">{{microblog.createdAt.getFullYear()}}-{{microblog.createdAt.getMonth() + 1}}-{{microblog.createdAt.getUTCDate()}}</p>
                            </div>
                        </div>
                    </div>
                    <!-- 最后一条碎碎念不显示下方连接条 -->
                    <div class="tm-timeline-connector-vertical" v-if="key!==(microblogs.length - 1)"></div>
                </div>

            </div>
        </div>
        <!--  row -->
        <hr>
        <div class="col-lg-12 mb-5" v-if="currentUser">
        <h3 class="mb-4 tm-text-gray">{{userInfo.username}},发表近况 <a href="" @click="logout()">[注 销]</a></h3>
        
            <div class="row">
                <div class="form-group col-xl-6">
                    <input v-model="title" type="text" id="comment_title" name="comment_title" class="form-control" placeholder="标题" required/>
                </div>
                <div class="form-group col-xl-6">
                    <input v-model="category" type="text" id="comment_category" name="comment_category" class="form-control" placeholder="分类" required/>
                </div>
            </div>
            <div class="form-group">
                <textarea v-model="comment" id="comment_message" name="comment_message" class="form-control" rows="6" placeholder="近况..." required></textarea>
            </div>
            <button class="btn tm-btn-send" @click="postComments()">发 表</button>
        </div>
    </div>
    <hr v-if="currentUser">
    <!-- Footer -->
    <footer class="row mt-5 mb-5">
        <div class="col-lg-12">
            <p class="text-center tm-text-gray tm-copyright-text mb-0">Copyright &copy;
                <span class="tm-current-year">2018</span> jackyangli.com 
                
                | Design: Timeless
            </p>
        </div>
    </footer>
  </div>
</template>
<script>
import videoSource from "@/assets/video.mp4";
export default {
  name: "Home",
  data() {
    return {
      videoSrc: videoSource,
      title: "",
      category: "",
      comment: null,
      microblogs: null
    };
  },
  computed: {
    profileSrc() {
      return function(index) {
        return "https://picsum.photos/160/160/?random=v" + index;
      };
    }
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
  },
  created() {
    // 获取当前登录用户状态
    this.currentUser = AV.User.current();
    // 如果已经登录则获取用户信息
    if (this.currentUser) {
      this.userInfo = {
        username: this.currentUser.get("username")
      };
    } else {
      console.log("当前为游客界面");
      //   this.$router.push('/login')
    }
  },
  mounted() {
    let _this = this;
    let query = new AV.Query("MicroBlog");
    query.descending("createdAt");
    query.find().then(function(microblogs) {
      _this.microblogs = microblogs;
    });
    // query.find().then(function (lists) {
    //                 // 遍历查找结果
    //                 lists.forEach(function(comment) {
    //                     console.log(comment);
    //                 })
    //             })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tm-category {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  background: #ededed;
  color: #b3b1b1;
  font-size: 0.75rem;
  border-radius: 0.2rem;
  margin: 0 0.4rem 0 0.7rem;
  vertical-align: text-bottom;
}
.title-group {
  margin-bottom: 0.75rem;
}
.date-created {
  color: #9b9b9b;
}
</style>
