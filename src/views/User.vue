<template>
  <div class="user">
    <div class="header">
      <div class="avatar"><img src="../images/fei.jpg" alt="" /></div>
      <div class="info">
        <p class="name"><span class="iconfont iconxingbienv">美女网友</span></p>
        <p class="time">2020-20-10</p>
      </div>
      <div class="arrow">
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
    <div class="nav">
      <hm-navbar>
        <template>我的关注</template>
        <template #content>关注的用户</template>
      </hm-navbar>
      <hm-navbar>
        <template>我的跟帖</template>
        <template #content>跟帖/回复</template>
      </hm-navbar>
      <hm-navbar>
        <template>我的收藏</template>
        <template #content>文章/视频</template>
      </hm-navbar>
      <hm-navbar>设置</hm-navbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    }
  },
  async created() {
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')
    // 发送ajax请求，获取个人信息
    const res = await this.$axios.get(`/user/${userId}`, {
      // 配置请求头
      headers: {
        Authorization: token
      }
    })
    // console.log(res)
    const { statusCode, data } = res.data
    if (statusCode === 200) {
      this.info = data
    }
  }
}
</script>
<style lang="less" scoped>
.user {
  .header {
    display: flex;
    height: 120px;
    border-bottom: 5px solid #ccc;
    align-items: center;
    padding: 0 20px;
    .avatar {
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
    }
    .info {
      flex: 1;
      padding-left: 20px;
      font-size: 14px;
      color: #333;
      .name {
        margin-bottom: 10px;
      }
      .time {
        color: #999;
      }
    }
  }
  .nav {
    padding-left: 20px;
  }
}
</style>
