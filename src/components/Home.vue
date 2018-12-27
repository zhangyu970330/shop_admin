<template>
  <div class="home">这是home1组件</div>
</template>

<script>
export default {

}
</script>

<style>
</style>
<template>
  <el-container class="home">
    <el-header>
      <div class="logo"></div>
      <div class="title">
        <h1>电商管理系统</h1>
      </div>
      <div class="logout">
        <span>欢迎光临</span>
        <a href="javascript:;" @click="logout">退出</a>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!--
          el-menu:整个导航菜单组件
          dafault - active : 默认激活的菜单
          background-color：导航菜单的颜色
          text-color： 文字的颜色
          active-text-color： 激活菜单的文字颜色
          unique-opened：保证只有一个自惨淡能够显示
          routerL开启导航功能，点击链接会跳转

          el-submenu：子菜单
            template： 显示子菜单的内容

            el-menu-itmegroup ： 菜单项的分组
        -->
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-menu"></i>
              <span slot="title">角色列表</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-menu"></i>
              <span slot="title">权限列表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout() {
      // 弹出一个确认框
      this.$confirm('您确定要退出本系统吗？', '温馨提示', {
        type: 'warning'
      }).then(() => {
        // 表示点了确定
        // 移除token
        localStorage.removeItem('token')
        this.$router.push('/login')
        this.$message.success('退出系统成功')
      }).catch(() => {
        // 表示点了取消
        this.$message.info('取消退出')
      })

    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .el-header {
    background-color: #b3c1cd;
    display: flex;

    .logo {
      width: 180px;
      background-image: url('~@/assets/logo.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .logout {
      width: 180px;
      font-weight: 700;
      text-align: right;
      line-height: 60px;
      a {
        color: orange;
      }
    }

    .title {
      flex: 1;
      h1 {
        text-align: center;
        line-height: 60px;
        color: #fff;
        font-size: 30px;
      }
    }
  }

  .el-aside {
    background-color: #545c64;
    .el-submenu {
      width: 200px;
    }
  }

  .el-main {
    background-color: #d4dfe4;
  }
}
</style>
