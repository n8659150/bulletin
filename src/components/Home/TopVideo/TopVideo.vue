<template>
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
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "TopVideo",
  props:['videoSrc']
};
</script>