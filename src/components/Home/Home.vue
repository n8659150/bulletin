<template>
  <div class="hello">
    <div class="container">
        <top></top>
        <!-- topVideo -->
        <topVideo :videoSrc="videoSrc"></topVideo>
    </div>

    <!-- microBlog -->
    <div class="container tm-container-2">
        <MicroBlog :subTitle="subTitle" :blogData="microblogs" :currentUser="currentUser"></MicroBlog>
        <PostBlog v-if="currentUser" :userInfo="userInfo"></PostBlog>
    </div>
    <hr v-if="currentUser">
    <!-- Footer -->
    <footer class="row mt-5 mb-5">
        <div class="col-lg-12">
            <p class="text-center tm-text-gray tm-copyright-text mb-0">Copyright &copy;
                <span class="tm-current-year">2018</span> jackyangli.com | Design: Timeless
            </p>
        </div>
        <div class="col-lg-12 text-center" style=" margin:10px;font-size:12px;">
          <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
        </div>
    </footer>
  </div>
</template>
<script>
import videoSource from "@/assets/video.mp4";
import Top from "@/components/home/Top/Top";
import TopVideo from "@/components/home/TopVideo/TopVideo";
import MicroBlog from "@/components/home/MicroBlog/MicroBlog"; 
import PostBlog from "@/components/home/PostBlog/PostBlog"; 
export default {
  name: "Home",
  components:{
    Top,
    TopVideo,
    MicroBlog,
    PostBlog
  },
  data() {
    return {
      videoSrc: videoSource,
      subTitle:"记录我项目和生活的近况",
      microblogs:null
    };
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
    }
  },
  mounted() {
    let _this = this;
    let query = new AV.Query("MicroBlog");
    query.descending("createdAt");
    query.find().then(function(microblogs) {
      _this.microblogs = microblogs;
      console.log(microblogs);
    });
  }
};
</script>
