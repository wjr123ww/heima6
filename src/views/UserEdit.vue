<template>
  <div class="user-edit">
    <hm-header>用户编辑</hm-header>
    <div class="avatar">
      <img :src="$axios.defaults.baseURL+info.head_img" />
      <van-uploader :after-read="afterRead" />
    </div>
    <div class="nav">
      <hm-navbar @click="showNickname">
        <template>昵称</template>
        <template #content>{{info.nickname}}</template>
      </hm-navbar>
      <hm-navbar @click="showPassword">
        <template>密码</template>
        <template #content>*****</template>
      </hm-navbar>
      <hm-navbar @click="showGender">
        <template>性别</template>
        <template #content>{{info.gender===1?'男':'女'}}</template>
      </hm-navbar>
    </div>
    <van-dialog v-model="show" title="修改昵称" show-cancel-button @confirm="editNickname">
      <van-field v-model="nickname" placeholder="请输入用户名" />
    </van-dialog>
    <van-dialog v-model="showPsw" title="修改密码" show-cancel-button @confirm="editPsw">
      <van-field v-model="password" placeholder="请输入新密码" />
    </van-dialog>
    <van-dialog v-model="showSax" title="修改密码" show-cancel-button @confirm="editGender">
      <van-radio-group v-model="gender" direction="horizontal">
        <van-radio :name="1">男</van-radio>
        <van-radio :name="0">女</van-radio>
      </van-radio-group>
    </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {},
      show: false,
      nickname: '',
      password: '',
      showPsw: false,
      showSax: false,
      gender: 1
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    async getInfo() {
      const userId = localStorage.getItem('userId')
      const res = await this.$axios.get(`/user/${userId}`)
      const { statusCode, data } = res.data
      if (statusCode === 200) {
        this.info = data
      }
    },
    showNickname() {
      this.show = true
      this.nickname = this.info.nickname
    },
    async editNickname() {
      const userId = localStorage.getItem('userId')
      const res = await this.$axios.post(`/user_update/${userId}`, {
        nickname: this.nickname
      })
      console.log(res)
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        this.getInfo()
      } else {
        this.$toast.fail(message)
      }
    },
    showPassword() {
      this.showPsw = true
      this.password = this.info.password
    },
    async editPsw() {
      const userId = localStorage.getItem('userId')
      const res = await this.$axios.post(`/user_update/${userId}`, {
        password: this.password
      })
      console.log(res)
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        this.getInfo()
      } else {
        this.$toast.fail(message)
      }
    },
    showGender() {
      this.showSax = true
      this.gender = this.info.gender
    },
    async editGender() {
      const userId = localStorage.getItem('userId')
      const res = await this.$axios.post(`/user_update/${userId}`, {
        gender: this.gender
      })
      console.log(res)
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        this.getInfo()
      } else {
        this.$toast.fail(message)
      }
    },
    async afterRead(file) {
      console.log(file)
      const fd = new FormData()
      fd.append('file', file.file)
      const res = await this.$axios.post('/upload', fd)
      console.log(res)
      const { statusCode, data } = res.data
      if (statusCode === 200) {
        console.log(data.url)
        const userId = localStorage.getItem('userId')
        const res = await this.$axios.post(`/user_update/${userId}`, {
          head_img: data.url
        })
        console.log(res)
        const { statusCode, message } = res.data
        if (statusCode === 200) {
          this.$toast.success(message)
          this.getInfo()
        } else {
          this.$toast.fail(message)
        }
      }
    }
  }
}
</script>

<style lang='less' scoped>
.avatar {
  text-align: center;
  padding: 30px 0;
  position: relative;
}
img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.van-uploader {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  opacity: 0;
}
.nav {
  padding-left: 20px;
}
.van-radio-group {
  padding-left: 110px;
}
</style>
