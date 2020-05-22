<template>
  <div class="model">
    <div class="hot_model">
      <div class="title">
        <div class="title_left">最热展览模型</div>
        <div class="title_right">
          <span>更多模型>>></span>
        </div>
      </div>
      <div class="hot_model_content">
        <el-carousel :autoplay="false" type="card" height="93%" indicator-position="none">
          <el-carousel-item v-for="item in 10" :key="item">
            <div class="swiper_item">
              <div class="swiper_item_img"></div>
              <div class="swiper_item_name">北京兴业德诚展览展示有限公司</div>
              <div class="swiper_item_xaizai flex_vcLbetween">
                <span>
                  <i class="el-icon-download"></i>: 268
                </span>
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
    <div class="hotmoney">
      <div class="title">
        <div class="title_left">爆款展台模型</div>
        <div class="title_right">
          <span>更多模型>>></span>
        </div>
      </div>
      <div class="hotmoney_content flex_between_Wrapbetween">
        <div class="hotmoney_item" v-for="item in 20" :key="item">
          <div class="hotmoney_item_img"></div>
          <div class="hotmoney_item_text flex_vcenter">
            <div class="hotmoney_item_name">会展王 (3DMAX2020)</div>
            <div class="hotmoney_item_xaiz flex_vcLbetween">
              <span>
                <i class="el-icon-download"></i>: 268
              </span>
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
    <div class="other">
      <div class="title">
        <div class="title_left">其他3D模型</div>
        <div class="title_right">
          <span>更多模型>>></span>
        </div>
      </div>
      <div class="other_content flex_between_Wrapbetween">
        <div class="other_item" v-for="item in 20" :key="item">
          <div class="other_item_img"></div>
          <div class="other_item_text flex_vcenter">
            <div class="other_item_name">北京兴业德诚展览展示有限公司</div>
            <div class="other_item_xaiz flex_vcLbetween">
              <span>
                <i class="el-icon-download"></i>: 268
              </span>
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
  .hotmoney {
    .hotmoney_content {
      margin: 40px 0 70px 0;
      .hotmoney_item {
        margin-bottom: 20px;
        width: 220px;
        height: 230px;
        background-color: #ffffff;
        box-shadow: 0px 2px 6px 0px rgba(156, 156, 156, 0.3);
        .hotmoney_item_img {
          width: 220px;
          height: 164px;
          background: turquoise;
        }
        .hotmoney_item_text {
          font-size: 14px;
          color: #333333;
          .hotmoney_item_name {
            line-height: 32px;
            width: 200px;
            height: 32px;
            border-bottom: 1px solid #e5e5e5;
          }
          .hotmoney_item_xaiz {
            width: 200px;
            height: 33px;
          }
        }
      }
    }
  }
  .other {
    .other_content {
      margin: 40px 0 70px 0;
      .other_item {
        margin-bottom: 20px;
        width: 280px;
        height: 290px;
        background-color: #ffffff;
        box-shadow: 0px 2px 6px 0px rgba(156, 156, 156, 0.3);
        .other_item_img {
          width: 280px;
          height: 208px;
          background: tomato;
        }
        .other_item_text {
          font-size: 14px;
          color: #333333;
          .other_item_name {
            line-height: 38px;
            width: 256px;
            height: 38px;
            border-bottom: 1px solid #e5e5e5;
          }
          .other_item_xaiz {
            width: 256px;
            height: 43px;
          }
        }
      }
    }
  }
}
</style>