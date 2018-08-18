<template>
  <div class="hello">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <header class="text-center tm-site-header">
                    <div class="tm-site-logo"></div>
                    <h1 class="pl-4 tm-site-title">Timeless</h1>
                </header>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="tm-video-container">
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

                    </div>
                </div>
            </div>
        </div>
        <div class="container tm-container-2">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="tm-welcome-text">Welcome to Timeless</h2>
                </div>
            </div>
            <div class="row tm-section-mb">
                <div class="col-lg-12">
                    <div class=" tm-timeline-item">
                        <div class="tm-timeline-item-inner">
                            <img src="https://picsum.photos/160/160/?gravity=north" alt="Image" class="rounded-circle tm-img-timeline">
                            <div class="tm-timeline-connector">
                                <p class="mb-0">&nbsp;</p>
                            </div>
                            <div class="tm-timeline-description-wrap">
                                <div class="tm-bg-dark tm-timeline-description">
                                    <h3 class="tm-text-green tm-font-400">Nulla venenatis purus nec quam</h3>
                                    <p>You may tell your co-workers about TemplateMo free stuffs to download and use for any website project. Thank you for supporting us.</p>
                                    <p class="tm-text-green float-right mb-0">New Event . 12 July 2018</p>
                                </div>
                            </div>
                        </div>

                        <div class="tm-timeline-connector-vertical"></div>
                    </div>

                    <div class="tm-timeline-item">
                        <div class="tm-timeline-item-inner">
                            <img src="https://picsum.photos/160/160/?gravity=east" alt="Image" class="rounded-circle tm-img-timeline">
                            <div class="tm-timeline-connector">
                                <p class="mb-0">&nbsp;</p>
                            </div>
                            <div class="tm-timeline-description-wrap">
                                <div class="tm-bg-dark-light tm-timeline-description">
                                    <h3 class="tm-text-cyan tm-font-400">Vestibulum ante ipsum primis</h3>
                                    <p>In imperdiet nisl quis sapien pellentesque, non rhoncus elit sollicitudin. Donec pharetra egestas magna at eleifend. Sed non magna vitae enim tempus faucibus.</p>
                                    <p class="tm-text-cyan float-right mb-0">Another Story . 9 July 2018</p>
                                </div>
                            </div>
                        </div>
                        <div class="tm-timeline-connector-vertical"></div>
                    </div>

                    <div class="tm-timeline-item">
                        <div class="tm-timeline-item-inner">
                            <img src="https://picsum.photos/160/160/?gravity=south" alt="Image" class="rounded-circle tm-img-timeline">
                            <div class="tm-timeline-connector">
                                <p class="mb-0">&nbsp;</p>
                            </div>
                            <div class="tm-timeline-description-wrap">
                                <div class="tm-bg-dark tm-timeline-description">
                                    <h3 class="tm-text-yellow tm-font-400">Pellentesque accumsan convallis</h3>
                                    <p>Suspendisse felis massa, maximus sed mauris at, elementum fermentum nisl. Aliquam quis elit vel ipsum ornare sollicitudin. Nulla et dolor eget nisi varius convallis.</p>
                                    <p class="tm-text-yellow float-right mb-0">Latest News . 30 June 2018</p>
                                </div>
                            </div>
                        </div>
                        <div class="tm-timeline-connector-vertical"></div>
                    </div>

                    <div class="tm-timeline-item">
                        <div class="tm-timeline-item-inner">
                            <img src="https://picsum.photos/160/160/?gravity=west" alt="Image" class="rounded-circle tm-img-timeline">
                            <div class="tm-timeline-connector">
                                <p class="mb-0">&nbsp;</p>
                            </div>
                            <div class="tm-timeline-description-wrap">
                                <div class="tm-bg-dark-light tm-timeline-description">
                                    <h3 class="tm-text-orange tm-font-400">Lorem ipsum dolor sit amet</h3>
                                    <p>Phasellus at quam facilisis sem congue lacinia. Fusce risus velit, bibendum in magna eu, sollicitudin pellentesque dolor. Nulla facilisi. Fusce libero mauris, maximus et liqula at.</p>
                                    <p class="tm-text-orange float-right mb-0">New Project . 22 June 2018</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <!--  row -->
            <hr>
            <!-- <div class="row tm-section-mb tm-section-mt">
                <div class="col-lg-4 col-md-4 col-sm-12 pr-lg-5 mb-md-0 mb-4">
                    <h3 class="mt-2 mb-3 tm-text-gray">Nunc dictum consequat</h3>
                    <p>Integer imperdiet aliquet lobortis. In in metus risus. Pellentesque pulvinar venenatis dui id rutrum. In
                    pharetra neque et eleifend venenatis.</p>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 pr-lg-5 mb-md-0 mb-4">
                    <h3 class="mt-2 mb-3 tm-text-gray">Morbi ultrices tellus</h3>
                    <p>Integer imperdiet aliquet lobortis. In in metus risus. Pellentesque pulvinar venenatis dui id rutrum. In
                    pharetra neque et eleifend venenatis.</p>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <h3 class="mt-2 mb-3 tm-text-gray">Suspendisse dolor tortor</h3>
                    <p>Integer imperdiet aliquet lobortis. In in metus risus. Pellentesque pulvinar venenatis dui id rutrum. In
                    pharetra neque et eleifend venenatis.</p>
                </div>
            </div> -->
               <div class="col-lg-12 mb-5">
                <h3 class="mb-4 tm-text-gray">发表近况</h3>
               
                    <div class="row">
                        <div class="form-group col-xl-6">
                            <input v-model="category" type="text" id="contact_name" name="contact_name" class="form-control" placeholder="分类" required/>
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea v-model="comment" id="contact_message" name="contact_message" class="form-control" rows="6" placeholder="近况..." required></textarea>
                    </div>
                    <button class="btn tm-btn-send" @click="postComments()">发 表</button>
                    <button class="btn tm-btn-send" @click="signupOnce()">注册管理员</button>
                
            </div>
        </div>
        <hr>
        <!-- Footer -->
        <footer class="row mt-5 mb-5">
            <div class="col-lg-12">
                <p class="text-center tm-text-gray tm-copyright-text mb-0">Copyright &copy;
                    <span class="tm-current-year">2018</span> jackyangli.com 
                    
                    | Design: <a href="" class="tm-text-white">Timeless</a>
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
      category: "",
      comment: null
    };
  },
  methods: {
    postComments() {
      let MicroBlog = AV.Object.extend("MicroBlog");
      let microBlog = new MicroBlog();
      microBlog.set("category", this.category);
      microBlog.set("comment", this.comment);
      microBlog.save().then(
        function(comment) {
          console.log("objectId is " + comment.id);
        },
        function(error) {
          console.error(error);
        }
      );
    },
    signupOnce() {
      // 新建 AVUser 对象实例
      let user = new AV.User();
      // 设置用户名
      user.setUsername("xxxxxx");
      // 设置密码
      user.setPassword("xxxxxx");
      // 设置邮箱
      user.setEmail("xxx@xxx.com");
      user.signUp().then(
        function(loggedInUser) {
          console.log(loggedInUser);
        },
        function(error) {}
      );
    }
  },
  mounted() {
    AV.init({
      appId: "",
      appKey: ""
    });
    var query = new AV.Query("MicroBlog");
    query.descending("createdAt");
    query.find().then(function(comment) {
      console.log(comment);
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
</style>
