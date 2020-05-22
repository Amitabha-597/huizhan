<template>
  <div class="order">
    <div class="title">
      <div class="title_left">我要接单</div>
      <div class="title_right">
        <span>更多信息>>></span>
      </div>
    </div>

    <div class="order_content flex_between_Wrapbetween">
      <div class="order_item" v-for="i in 24" :key="i">
        <div class="order_img"></div>
        <div class="order_text flex_v_around">
          <div class="order_name flex_vcenter">
            <div class="order_namea flex_hcentersstart">模块环保展台 XC-MK-122</div>
            <div class="order_js flex_hcentersstart">玄策-模块环保展台</div>
          </div>
          <div class="order_adress flex_vcLbetween">
            <div class="logo"></div>
            <div class="name">
              <div class="name_na">北京兴业德诚展览展示有限公司</div>
              <div class="name_type flex_vcLbetween">
                <span>类别：展览公司</span>
                <span>会员</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_swiper flex_vcLbetween">
      <div>
        <el-carousel :autoplay="false" height="100%">
          <el-carousel-item v-for="item in 10" :key="item">
            <img src="../../assets/img/home/noname.jpg" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <el-carousel :autoplay="false" height="100%">
          <el-carousel-item v-for="item in 10" :key="item">
            <img src="../../assets/img/home/noname.jpg" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style lang='less' scoped>
.order {
  .order_content {
    padding: 40px 0 70px 0;
    .order_item {
      width: 280px;
      height: 320px;
      background-color: #ffffff;
      border: solid 1px #e5e5e5;
      width: 280px;
      margin-bottom: 20px;
      .order_img {
        height: 180px;
        background: aqua;
      }
      .order_text {
        width: 100%;
        height: 140px;
        .order_name {
          height: 70px;
          width: 256px;
          border-bottom: 1px dotted #e5e5e5;
          .order_namea {
            width: 100%;
            font-size: 14px;
            color: #333333;
          }
          .order_js {
            margin-top: 10px;
            width: 100%;
            font-size: 12px;
            color: #999999;
          }
        }
        .order_adress {
          width: 256px;
          height: 70px;
          .logo {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: saddlebrown;
          }
          .name {
            width: 210px;
            font-size: 12px;
            .name_na {
              color: #666666;
            }
            .name_type {
              margin-top: 10px;
              color: #999;
            }
          }
        }
      }
    }
  }
 
}
</style>