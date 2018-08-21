<template>
  <div class="container">
    <div class="row row-centered">
      <h3 class="mb-4 tm-text-gray">管理员登录</h3>
        <div class="col-md-6 col-centered">
            <div class="form-group col-xl-12">
                <input v-model="username" type="text" name="login_username" class="form-control" placeholder="用户名" required/>
            </div>
            <div class="form-group col-xl-12">
                <input v-model="password" type="password" name="login_password" class="form-control" placeholder="密码" required/>
            </div>
            <div class="form-group col-xl-12">
                  <button class="btn tm-btn-send" @click="login()">登 录</button>
            </div>
        </div>           
    </div>
</div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      username:'',
      password:''
    };
  },
  methods:{
    login(){
      let _this = this;
      AV.User.logIn(_this.username, _this.password).then(function(loggedInUser) {
        console.log(loggedInUser);
        (loggedInUser._sessionToken !== null)?(_this.$router.push({path:'/dashboard'})):(_this.$router.push({path:'/admin'}))
      }, function (error) {
        alert('用户名密码错误');
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*web background*/
.container {
  display: table;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
}

.row {
  display: table-cell;
  vertical-align: middle;
}
/* centered columns styles */
.row-centered {
  text-align: center;
}
.col-centered {
  display: inline-block;
}
.tm-btn-send {
  background-color:#404040;
  color:#fff;
  width:100%;
}
</style>
