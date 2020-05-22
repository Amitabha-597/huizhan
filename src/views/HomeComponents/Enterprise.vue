<template>
  <div class="model">
    <div class="hot_model">
      <div class="title">
        <div class="title_left">最新入驻企业</div>
        <div class="title_right">
          <span>更多企业>>></span>
        </div>
      </div>
      <div class="hot_model_content">
        <el-carousel :autoplay="false" type="card" height="93%" indicator-position="none">
          <el-carousel-item v-for="item in 10" :key="item">
            <div class="swiper_item">
              <div class="swiper_item_img"></div>
              <div class="swiper_item_name">北京兴业德诚展览展示有限公司</div>
              <div class="swiper_item_xaizai flex_vcLbetween">
                <span>1小时前</span>
                <span class="flex_center">
                  <img
                    style="width: 16px;height: 16px; margin-top: 3px;  padding-right: 5px;"
                    src="../../assets/img/home/see.png"
                    alt
                  />: 342
                </span>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="enterprise">
      <div class="title">
        <div class="title_left">入驻企业展示</div>
        <div class="title_right">
          <span>更多企业 >>></span>
        </div>
      </div>
      <div class="enterprise_content flex_between_Wrapbetween">
        <div class="enterprise_item" v-for="item in 24" :key="item">
          <div class="enterprise_item_img"></div>
          <div class="enterprise_item_text flex_vcenter">
            <div class="enterprise_item_name flex_vcLbetween">
              <span style=" color: #333333;">北京兴业德诚展览展示有限公司</span>
              <span>
                <i class="iconfont icon-dizhi" style="margin-right: 5px;"></i>北京
              </span>
            </div>
            <div class="enterprise_item_xaiz flex_vcLbetween">
              <span>类别：展览公司</span>
              <span class="flex_center">会员</span>
            </div>
            <div class="enterprise_item_xaiz flex_vcLbetween">
              <span>发布时间：2020年5月03日</span>
              <span class="flex_center">
                <img
                  style="width: 16px;height: 16px; margin-top: 3px;  padding-right: 5px;"
                  src="../../assets/img/home/see.png"
                  alt
                />: 342
              </span>
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
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}
};
</script>
<style lang='less' scoped>
.model {
  .hot_model {
    .hot_model_content {
      margin: 40px 0 70px 0;
      width: 100%;
      height: 468px;
      .swiper_item {
        box-sizing: border-box;
        padding: 24px;
        width: 468px;
        height: 390px;

        background: #fff;
        box-shadow: 0px 2px 8px 1px rgba(156, 156, 156, 0.3);
        .swiper_item_img {
          width: 420px;
          height: 236px;
          background: burlywood;
        }
        .swiper_item_name {
          font-size: 21px;
          color: #343434;
          margin-top: 24px;
        }
        .swiper_item_xaizai {
          margin-top: 40px;
        }
      }
    }
  }

  .enterprise {
    .enterprise_content {
      margin: 40px 0 70px 0;
      .enterprise_item {
        margin-bottom: 20px;
        width: 280px;
        height: 308px;
        background-color: #ffffff;
        box-shadow: 0px 2px 6px 0px rgba(156, 156, 156, 0.3);
        .enterprise_item_img {
          width: 280px;
          height: 180px;
          background: tomato;
        }
        .enterprise_item_text {
          font-size: 14px;
          color: #909090;

          .enterprise_item_name {
            line-height: 38px;
            width: 256px;
            height: 38px;
            border-bottom: 1px dashed #e5e5e5;
          }
          .enterprise_item_xaiz {
            width: 256px;
            height: 30px;
          }
        }
      }
    }
  }
}
</style>