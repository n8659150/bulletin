<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <h2 class="tm-welcome-text">{{subTitle}}</h2>
            </div>
        </div>
        <div class="row tm-section-mb">
            <div class="col-lg-12">
                <div class=" tm-timeline-item"  v-for="(microblog,key) in blogData" :key="key">
                    <div class="tm-timeline-item-inner">
                        <img :src="profileSrc(key)" alt="Image" class="rounded-circle tm-img-timeline">
                        <div class="tm-timeline-connector">
                            <p class="mb-0">&nbsp;</p>
                        </div>
                        <div class="tm-timeline-description-wrap">
                            <div class="tm-bg-dark tm-timeline-description">
                                <div class="title-group">
                                    <span class="tm-title tm-font-400">{{microblog.attributes.title}}</span><span class="tm-category">{{microblog.attributes.category}}</span><a class="tm-github" :href="microblog.attributes.github" v-if="microblog.attributes.github.length > 0"><img src="@/assets/github.png" alt="github"></a>
                                </div>
                                <p>{{microblog.attributes.comment}}</p>
                                <p class="float-right mb-0 date-created">{{microblog.createdAt.getFullYear()}}-{{microblog.createdAt.getMonth() + 1}}-{{microblog.createdAt.getUTCDate()}}</p>
                            </div>
                        </div>
                    </div>
                    <!-- 最后一条碎碎念不显示下方连接条 -->
                    <div class="tm-timeline-connector-vertical" v-if="key!==(blogData.length - 1)"></div>
                </div>
            </div>
        </div>
        <!--  row -->
        <hr>
    </div>
</template>
<script>
export default {
  name: "MicroBlog",
  props: ["subTitle", "blogData", "currentUser"],
  computed: {
    profileSrc() {
      return function(index) {
        return "https://picsum.photos/160/160/?random=v" + index;
      };
    }
  }
};
</script>
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
.tm-github {
  vertical-align: super;
  margin-left: 0.25rem;
}
.title-group {
  margin-bottom: 0.75rem;
}
.date-created {
  color: #9b9b9b;
}
</style>