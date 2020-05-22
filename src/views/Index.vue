<!--  -->
<template>
  <div id="home">
    <div class="avd">
      <img src="../assets/img/home/avd.jpg" alt />
    </div>
    <div class="top_nav flex_center">
      <div class="nav_content flex_vcLbetween">
        <div class="nav_content_left flex_vcLbetween">
          <span>嗨！ 会展王欢迎您！</span>
          <span>设为首页</span>
          <span>加入收藏</span>
          <span>手机版</span>
          <span>在线留言</span>
        </div>
        <div class="nav_content_right flex_vclaround">
          <span>消息</span>
          <span>请登录</span>
          <span>免费注册</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header flex_center flex_vcLbetween">
        <img src="../assets/img/home/logo.png" alt />
        <div class="header_adress flex_vcenter">
          <div>北京</div>
          <div>[切换]</div>
        </div>
        <div class="serch flex_center">
          <el-input prefix-icon="el-icon-search" v-model="serch" placeholder="请输入内容"></el-input>
          <button class="serch_btn">搜索</button>
        </div>
        <div class="freeissue flex_center">免费发布信息</div>
      </div>
      <nav class="nav flex_vcLbetween">
        <div
          class="nav_item flex_center"
          v-for="(item,index) in navList"
          :key="index"
          :class="{'navActive': index==selectTab}"
          @click="selectTabhand(index)"
        >
          <router-link
            :to="item.url+'?index='+index"
            class="nav_bar flex_center"
            :class="{'navActive': index==selectTab}"
          >{{item.name}}</router-link>
        </div>
        <div class="extension">
          <img src="../assets/img/home/extension.jpg" alt />
        </div>
      </nav>
      <main>
        <div class="swiper flex_vcLbetween">
          <div class="swiper_left">
            <el-carousel :autoplay="false" height="312px">
              <el-carousel-item v-for="item in 10" :key="item">
                <img src="../assets/img/home/swiper.jpg" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="swiper_middle flex_v_between">
            <div class="swiper_middle_top">
              <el-carousel :autoplay="false" height="100%">
                <el-carousel-item v-for="item in 10" :key="item">
                  <img src="../assets/img/home/banner02.jpg" alt />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="swiper_middle_bottom flex_vcLbetween">
              <div>
                <el-carousel :autoplay="false" height="100%">
                  <el-carousel-item v-for="item in 10" :key="item">
                    <img src="../assets/img/home/swiper.jpg" alt />
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div>
                <el-carousel :autoplay="false" height="100%">
                  <el-carousel-item v-for="item in 10" :key="item">
                    <img src="../assets/img/home/swiper.jpg" alt />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
          <div class="swiper_right">
            <el-carousel :autoplay="false" height="100%">
              <el-carousel-item v-for="item in 10" :key="item">
                <img src="../assets/img/home/banner03.jpg" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <router-view />
      </main>
    </div>
    <footer>
      <div style="font-size:14px;">网站首页 | 关于我们 联系方式 | 使用协议 | 版权隐私 | 网站地图 | 合作加盟 | 广告服务 | 网站留言 | 违规举报</div>
      <div class="footerBox">Copyright 2005-2020 zbj.com 版权所有 渝ICP备10202274-4号 渝B2-20080005</div>
      <div>渝公网安备 50019002500154号 猪八戒股份有限公司</div>
    </footer>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      serch: "",
      selectTab: 0,
      navList: [
        {
          name: "首页",
          url: "/home"


        },
        {
          name: "接单发单",
          url: "/order"
        },
        {
          name: "3D模型库",
          url: "/model"
        },
        {
          name: "入驻企业",
          url: "/enterprise"
        },
        {
          name: "共享工厂",
          url: "/factory"
        },
        {
          name: "会展新闻",
          url: "/news"
        },
        {
          name: "会展网校",
          url: ""
        },
        {
          name: "会展保险",
          url: ""
        },
        {
          name: "爱心公益",
          url: ""
        },
        {
          name: "法律援助",
          url: ""
        }
      ]
    };
  },

  methods: {
    selectTabhand(i) {
      this.selectTab = i;
    }
  },
  created(){
      this.selectTab = this.$route.query.index;
  }

};
</script>
<style lang='less' scoped>
#home {
  width: 100%;
  height: 100%;
  .avd {
    width: 100%;
    height: 94px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .top_nav {
    width: 100%;
    height: 40px;
    background: #e44e2b;

    .nav_content {
      width: 1200px;
      height: 100%;
      font-size: 24px;
      font-family: KaiTi;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      .nav_content_left {
        height: 100%;
        width: 737px;
      }
      .nav_content_right {
        width: 436px;
        height: 100%;
      }
    }
  }

  .header {
    width: 100%;
    height: 160px;
    img {
      width: 249px;
      height: 81px;
    }
    .header_adress {
      width: 158px;
    }
    .serch {
      border: 2px solid rgba(228, 78, 43, 1);
      width: 552px;
      height: 54px;
      margin-right: 62px;
      /deep/.el-input__inner {
        height: 54px;
        border-radius: 0;
        outline: none;
        border: none;
      }
      /deep/.el-icon-search {
        padding-top: 5px;
        box-sizing: border-box;
      }
      .serch_btn {
        width: 126px;
        height: 54px;
        background: rgba(228, 78, 43, 1);
        border: none;
        outline: none;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
    .freeissue {
      width: 158px;
      height: 50px;
      background: #ea4d1f;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
  .nav {
    width: 100%;
    height: 46px;
    border-bottom: 2px solid #e44e2b;
    .nav_bar {
      text-decoration: none;
      color: #333333;
      width: 100%;
      height: 100%;
    }
    .nav_item {
      width: 108px;
      height: 46px;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #333333;
    }

    .navActive {
      color: #fff;
      background: rgba(228, 78, 43, 1);
    }
    .extension {
      margin-left: 17px;
      width: 90px;
      height: 24px;
      background: rgba(236, 202, 167, 1);
      border-radius: 2px;
    }
  }
  main {
    width: 100%;
    height: 100%;
  }
  footer {
    width: 100%;
    height: 280px;
    background: rgba(35, 40, 48, 1);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 10px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(204, 204, 204, 1);
    line-height: 16px;

    .footerBox {
      margin-top: 40px;
    }
  }
}
</style>