
<template>
  <div id="home">
   
    <!-- 最新信息 -->
    <div class="latestinfo">
      <div class="title">
        <div class="title_left">最新信息 推荐</div>
        <div class="title_right">
          <span>全部</span>
          <span>展览公司</span>
          <span>木制工厂</span>
          <span>桁架工厂</span>
          <span>租赁花草</span>
          <span>租赁大屏</span>
          <span>更多信息>>></span>
        </div>
      </div>
      <div class="latestinf_content flex_center_WrapStar">
        <div class="latestinf_item flex_vcLbetween">
          <div class="latestinf_item_img">
            <img src="../../assets/img/home/latestinfo.jpg" alt />
          </div>
          <div class="latestinf_item_text flex_v_around">
            <div class="latestinf_item_title">需要西安靠谱工厂</div>
            <div class="latestinf_item_content flex_vcLbetween">
              <span>详情</span>
              <div class="contact flex_center">请联系我</div>
            </div>
          </div>
        </div>
        <div class="latestinf_item flex_vcLbetween" v-for="i in 7" :key="i">
          <div class="latestinf_item_img">
            <img src="../../assets/img/home/latestinfo.jpg" alt />
          </div>
          <div class="latestinf_item_text flex_v_around">
            <div class="latestinf_item_title">需要西安靠谱工厂</div>
            <div class="latestinf_item_content flex_vcLbetween">
              <span>详情</span>
              <div class="contact flex_center">请联系我</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 入驻企业 -->
    <div class="enterprise">
      <div class="title">
        <div class="title_left">入驻企业 推荐</div>
        <div class="title_right">
          <span>全部</span>
          <span>展览公司</span>
          <span>木制工厂</span>
          <span>桁架工厂</span>
          <span>租赁花草</span>
          <span>租赁大屏</span>
          <span>更多信息>>></span>
        </div>
      </div>
      <div class="enterprise_content flex_center_WrapStar">
        <div class="enterprise_item flex_v_between" v-for="i in 10" :key="i">
          <div class="enterprise_item_img">
            <img src="../../assets/img//home/enterprise.jpg" alt />
          </div>
          <div class="enterprise_item_text">
            <div class="enterprise_item_name">北京兴业德诚展览展示有限公司</div>
            <div class="enterprise_item_type">
              <span>类别：展览公司</span>
              <span>会员</span>
            </div>
          </div>
        </div>
      </div>
      <div class="enterprise_bottom flex_vcLbetween">
        <div class="enterprise_bottomA">
          <img src="../../assets/img/home/enterprise.jpg" alt />
        </div>
        <div class="enterprise_bottomB">
          <img src="../../assets/img/home/enterprise02.jpg" alt />
        </div>
        <div class="enterprise_bottomB">
          <img src="../../assets/img/home/enterprise02.jpg" alt />
        </div>
      </div>
    </div>-->
    <!-- 3D模型库 推荐 -->
    <div class="modelbase">
      <div class="title">
        <div class="title_left">3D模型库 推荐</div>
        <div class="title_right">
          <span>更多信息>>></span>
        </div>
      </div>
      <div class="modelbase_content flex_center_WrapStar">
        <div class="modelbase_item" v-for="i in 10" :key="i">
          <div class="modelbase_item_img">
            <img src="../../assets/img/home/modelbase.jpg" alt />
          </div>
          <div class="modelbase_item_text flex_vcenter">
            <div class="modelbase_item_name">北京兴业德诚展览展示有限公司</div>
            <div class="modelbase_item_price flex_vcLbetween">
              <div>价格：18.00元</div>
              <div class="flex_vcLbetween see">
                <img
                  style=" width: 16px;height: 16px;  padding-top: 3px;"
                  src="../../assets/img/home/see.png"
                  alt
                />:
                <span>342</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <!-- 明星企业 推荐 -->
    <div class="star">
      <div class="title">
        <div class="title_left">明星企业 推荐</div>
        <div class="title_right">
          <span>更多信息>>></span>
        </div>
      </div>
      <div class="flex_vcLbetween star_content">
        <div class="star_left">
          <img src="../../assets/img/home/star01.jpg" alt />
        </div>
        <div class="star_right flex_v_between">
          <div class="star_righttop">
            <img src="../../assets/img/home/star_02.jpg" alt />
          </div>
          <div class="star_rightbottom flex_vcLbetween">
            <div>
              <img src="../../assets/img/home/star_02.jpg" alt />
            </div>
            <div>
              <img src="../../assets/img/home/star_02.jpg" alt />
            </div>
          </div>
        </div>
        <div class="star_right flex_v_between">
          <div class="star_righttop">
            <img src="../../assets/img/home/star_02.jpg" alt />
          </div>
          <div class="star_rightbottom flex_vcLbetween">
            <div>
              <img src="../../assets/img/home/star_02.jpg" alt />
            </div>
            <div>
              <img src="../../assets/img/home/star_02.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 会展网校 推荐 -->
    <div class="modelbase">
      <div class="title">
        <div class="title_left">会展网校 推荐</div>
        <div class="title_right">
          <span>更多信息>>></span>
        </div>
      </div>
      <div class="modelbase_content flex_center_WrapStar">
        <div class="modelbase_item" v-for="i in 10" :key="i">
          <div class="modelbase_item_img">
            <img src="../../assets/img/home/modelbase.jpg" alt />
          </div>
          <div class="modelbase_item_text flex_vcenter">
            <div class="modelbase_item_name">北京兴业德诚展览展示有限公司</div>
            <div class="modelbase_item_price flex_vcLbetween">
              <div>价格：18.00元</div>
              <div class="flex_vcLbetween see">
                <img
                  style=" width: 16px;height: 16px;  padding-top: 3px;"
                  src="../../assets/img/home/see.png"
                  alt
                />:
                <span>342</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 现场视频区 -->
    <div class="video">
      <div class="title">
        <div class="title_left">现场视频区</div>
        <div class="title_right">
          <span>更多信息>>></span>
        </div>
      </div>
      <div class="video_content flex_vcLbetween">
        <div class="video_left">
          <video style="width:100%;height:100%;object-fit:fill" controls>
            <source
              src="https://vdept.bdstatic.com/32525454387147664d74384d4133324e/64334e4468474848/40a289b9df340c6a49158c159d3e14cce32e9454fd8ae21763cf341b55029e68fe803a8fc175762c2ed206cc4b9b3355.mp4?auth_key=1590053465-0-0-ab1f4cb5b3f07d7f08197511c5889e6b"
              type="video/ogg"
            />您的浏览器不支持 HTML5 video 标签。
          </video>
        </div>
        <div class="video_right flex_between_Wrapbetween">
          <div v-for="i in 6" :key="i">
            <video style="width:100%;height:100%;object-fit:fill" controls>
              <source
                src="https://vdept.bdstatic.com/496439416b744c4158646137556b464a/445053756e763470/3d39b11916462013593d70f23b870d8e0c445fd1bd02db43142af1cceaa5bc4eb3431140aa92b6db3ad9f42054276e40.mp4?auth_key=1590053720-0-0-7de39f44df9a785a90c516ac77204222"
                type="video/ogg"
              />您的浏览器不支持 HTML5 video 标签。
            </video>
          </div>
        </div>
      </div>
    </div>
    <!-- 新闻 -->
    <div class="insureornews flex_vcLbetween">
      <div class="insureor">
        <div class="title">
          <div class="title_left">展会保险 推荐</div>
        </div>
        <div class="insureor_item">
          <img src="../../assets/img/home/insureor.jpg" alt />
        </div>
      </div>
      <div class="news">
        <div class="title">
          <div class="title_left">展会新闻</div>
        </div>
        <div class="news_item">
          <div class="news_item_child flex_center">
            <div class="news_item_img">
              <img src="../../assets/img/home/news.jpg" alt />
            </div>

            <div class="news_item_text flex_vstart_around">
              <div class="news_item_title">大邱才放缓首尔又紧张，韩国疫情距“拐点”有多远？</div>
              <div
                class="news_item_conent"
              >韩国疾病管理本部11日上午发布的最新统计数据韩国疾病管理本部11日上午发布的最新统计 数据韩国疾病管理本部11日上午发布的最新统计数据韩国疾病管理本部11日上午发布的...</div>
              <div class="news_item_date flex_vcLbetween">
                <span>人民日报海外网</span>
                <span>5小时前更新</span>
              </div>
            </div>
          </div>
          <div class="news_item_child flex_center">
            <div class="news_item_img">
              <img src="../../assets/img/home/news.jpg" alt />
            </div>

            <div class="news_item_text flex_vstart_around">
              <div class="news_item_title">大邱才放缓首尔又紧张，韩国疫情距“拐点”有多远？</div>
              <div
                class="news_item_conent"
              >韩国疾病管理本部11日上午发布的最新统计数据韩国疾病管理本部11日上午发布的最新统计 数据韩国疾病管理本部11日上午发布的最新统计数据韩国疾病管理本部11日上午发布的...</div>
              <div class="news_item_date flex_vcLbetween">
                <span>人民日报海外网</span>
                <span>5小时前更新</span>
              </div>
            </div>
          </div>
          <div class="news_item_child flex_center">
            <div class="news_item_img">
              <img src="../../assets/img/home/news.jpg" alt />
            </div>

            <div class="news_item_text flex_vstart_around">
              <div class="news_item_title">大邱才放缓首尔又紧张，韩国疫情距“拐点”有多远？</div>
              <div
                class="news_item_conent"
              >韩国疾病管理本部11日上午发布的最新统计数据韩国疾病管理本部11日上午发布的最新统计 数据韩国疾病管理本部11日上午发布的最新统计数据韩国疾病管理本部11日上午发布的...</div>
              <div class="news_item_date flex_vcLbetween">
                <span>人民日报海外网</span>
                <span>5小时前更新</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <!-- 特战队 推荐 -->
    <div class="modelbase">
      <div class="title">
        <div class="title_left">特战队 推荐</div>
        <div class="title_right">
          <span>更多信息>>></span>
        </div>
      </div>
      <div class="modelbase_content flex_center_WrapStar">
        <div class="modelbase_item" v-for="i in 5" :key="i">
          <div class="modelbase_item_img">
            <img src="../../assets/img/home/modelbase.jpg" alt />
          </div>
          <div class="modelbase_item_text flex_vcenter">
            <div class="modelbase_item_name">北京兴业德诚展览展示有限公司</div>
            <div class="modelbase_item_price flex_vcLbetween">
              <div>价格：18.00元</div>
              <div class="flex_vcLbetween see">
                <img
                  style=" width: 16px;height: 16px;  padding-top: 3px;"
                  src="../../assets/img/home/see.png"
                  alt
                />:
                <span>342</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <!-- 共享工厂 -->
    <div class="factory">
      <div class="title">
        <div class="title_left">共享工厂 推荐</div>
      </div>
      <div class="factory_box">
        <div class="factory_top flex_vcLbetween">
          <div class="factory_item" v-for="i in 5" :key="i">
            <div class="factory_item_img">
              <img src="../../assets/img/home/enterprise.jpg" alt />
            </div>
            <div class="factory_item_text flex_vcenter">
              <div class="factory_item_name">北京兴业德诚展览展示有限公司</div>
              <div class="factory_item_type flex_vcLbetween">
                <div>类别：展览公司</div>
                <div>会员</div>
              </div>
            </div>
          </div>
        </div>
        <div class="factory_swiper flex_vcLbetween">
          <div>
            <el-carousel :autoplay="false" height="230px">
              <el-carousel-item v-for="item in 10" :key="item">
                <img src="../../assets/img/home/swiper.jpg" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div>
            <el-carousel :autoplay="false" height="230px">
              <el-carousel-item v-for="item in 10" :key="item">
                <img src="../../assets/img/home/swiper.jpg" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
    <!-- 耗材企业 -->
    <div class="consumaandpublic flex_vcLbetween">
      <div class="consumab">
        <div class="title">
          <div class="title_left">共享工厂 推荐</div>
        </div>
        <div class="consuma_box flex_between_Wrapbetween">
          <div class="consuma_item flex_vcenter" v-for="i in 6 " :key="i">
            <div class="consuma_img">
              <img src="../../assets/img/home/enterprise.jpg" alt />
            </div>
            <div class="consuma_text">
              <div class="consuma_text_name">北京兴业德诚展览展示有限公司</div>
              <div class="flex_vcLbetween">
                <div>类别：展览公司</div>
                <div>会员</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="public">
        <div class="title">
          <div class="title_left">爱心公益</div>
        </div>
        <div class="publicbox flex_v_between">
          <div class="publicitem">
            <img src="../../assets/img/home/pubic.jpg" alt />
          </div>
          <div class="publicitem">
            <img src="../../assets/img/home/pubic.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <!-- 最后一坨 -->
    <div class="noname flex_vcLbetween">
      <div>
        <img src="../../assets/img/home/noname.jpg" alt />
      </div>
      <div>
        <img src="../../assets/img/home/noname.jpg" alt />
      </div>
    </div>
    <!-- 友情链接 -->
    <div class="friendship">
      <img src="../../assets/img/home/friendship.jpg" alt />
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
#home {
  width: 100%;
  height: 100%;


  .latestinfo {
    width: 100%;
    height: 376px;

    .latestinf_content {
      margin: 40px 0 70px 0;

      .latestinf_item {
        width: 280px;
        height: 100px;
        margin-bottom: 20px;
        margin-right: 26px;

        .latestinf_item_img {
          width: 108px;
          height: 100px;
        }

        .latestinf_item_text {
          margin-left: 10px;
          width: 162px;
          height: 100px;
          .latestinf_item_title {
            width: 100%;
            font-size: 18px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
          }
          .latestinf_item_content {
            width: 100%;
            span {
              font-size: 12px;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
            }
            .contact {
              width: 60px;
              height: 24px;
              border: 2px solid rgba(228, 78, 43, 1);
              border-radius: 2px;
              font-size: 10px;
              color: rgba(228, 78, 43, 1);
            }
          }
        }
      }
      .latestinf_item:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
  .enterprise {
    padding: 0px 0 70px 0;
    .enterprise_content {
      padding: 40px 0 0px 0;

      .enterprise_item:nth-child(5n) {
        margin-right: 0;
      }
      .enterprise_item {
        margin-right: 25px;
        margin-bottom: 20px;
        width: 220px;
        height: 230px;
        box-shadow: 0px 2px 6px 0px rgba(156, 156, 156, 0.3);
        .enterprise_item_img {
          width: 220px;
          height: 164px;
        }
        .enterprise_item_text {
          height: 66px;
          line-height: 33px;

          .enterprise_item_name {
            width: 200px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            border-bottom: 1px solid rgba(229, 229, 229, 1);
          }
          .enterprise_item_type {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
          }
        }
      }
    }
    .enterprise_bottom {
      width: 100%;
      height: 230px;
      .enterprise_bottomA {
        width: 220px;
        height: 230px;
      }
      .enterprise_bottomB {
        width: 460px;
        height: 230px;
        opacity: 0.53;
      }
      .enterprise_bottomC {
        width: 460px;
        height: 230px;
        opacity: 0.6;
      }
    }
  }
  .modelbase {
    .modelbase_content {
      margin: 40px 0 70px 0;
      .modelbase_item:nth-child(5n) {
        margin-right: 0;
      }
      .modelbase_item {
        margin-right: 25px;
        margin-bottom: 20px;
        width: 220px;
        height: 230px;
        background: red;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 6px 0px rgba(156, 156, 156, 0.3);
        .modelbase_item_img {
          width: 220px;
          height: 164px;
        }
        .modelbase_item_text {
          width: 100%;
          height: 66px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          .modelbase_item_name {
            width: 200px;
            line-height: 33px;
            height: 33px;
            border-bottom: 1px solid #e5e5e5;
            color: #333333;
          }
          .modelbase_item_price {
            width: 200px;
            height: 33px;
            color: rgba(102, 102, 102, 1);
            .see {
              height: 100%;
              width: 56px;
            }
          }
        }
      }
    }
  }
  .star {
    .star_content {
      margin: 40px 0 70px 0;
      .star_left {
        width: 380px;
        height: 460px;
        background: cyan;
      }
      .star_right {
        width: 380px;
        height: 460px;
        .star_righttop {
          width: 380px;
          height: 270px;
          background: cornflowerblue;
        }
        .star_rightbottom {
          width: 380px;
          div {
            width: 180px;
            height: 170px;
            background: chocolate;
          }
        }
      }
    }
  }
  .video {
    .video_content {
      margin: 40px 0 70px 0;
      .video_left {
        width: 460px;
        height: 312px;
      }
      .video_right {
        width: 700px;
        height: 312px;
        div {
          width: 220px;
          height: 146px;
          background: darkgoldenrod;
        }
      }
    }
  }
  .insureornews {
    .insureor {
      width: 380px;
      .insureor_item {
        margin: 40px 0 70px 0;
        width: 380px;
        height: 400px;
      }
    }
    .news {
      width: 700px;
      .news_item {
        margin: 20px 0 70px 0;
        width: 100%;
        height: 420px;
        border-top: 1px dotted rgba(204, 204, 204, 1);
        padding-top: 20px;
        box-sizing: border-box;
        .news_item_child {
          width: 100%;
          height: 120px;
          .news_item_img {
            width: 230px;
            height: 120px;
          }
          .news_item_text {
            margin-left: 12px;
            .news_item_title {
              font-size: 18px;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
            }
            .news_item_conent {
              margin-top: 11px;
              font-size: 12px;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
            }
            .news_item_date {
              width: 200px;
              margin-top: 27px;
              font-size: 10px;
              font-weight: 400;
              color: rgba(153, 153, 153, 1);
            }
          }
        }
      }
    }
  }
  .factory {
    .factory_box {
      margin: 40px 0 70px 0;
      .factory_top {
        .factory_item {
          width: 220px;
          height: 230px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 2px 6px 0px rgba(156, 156, 156, 0.3);
          margin-bottom: 20px;
          .factory_item_img {
            width: 220px;
            height: 164px;
          }
          .factory_item_text {
            height: 66px;
            .factory_item_name {
              width: 200px;
              line-height: 33px;
              border-bottom: 1px solid rgba(229, 229, 229, 1);
              height: 33px;
              font-size: 14px;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
            }
            .factory_item_type {
              width: 200px;
              font-size: 14px;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
            }
          }
        }
      }
      .factory_swiper {
        width: 100%;
        height: 230px;
        div {
          width: 580px;
          height: 230px;
        }
      }
    }
  }
  .consumaandpublic {
    .consumab {
      width: 700px;
      .consuma_box {
        margin: 40px 0 70px 0;
        .consuma_item {
          width: 220px;
          height: 230px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 2px 6px 0px rgba(156, 156, 156, 0.3);
          margin-bottom: 20px;
        }
        .consuma_img {
          width: 220px;
          height: 164px;
        }
        .consuma_text {
          font-size: 14px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          .consuma_text_name {
            width: 200px;
            height: 33px;
            border-bottom: 1px solid #e5e5e5;
          }
          div {
            height: 33px;
            line-height: 33px;
          }
        }
      }
    }
    .public {
      width: 409px;
      .publicbox {
        margin: 40px 0 70px 0;
        height: 480px;
        .publicitem {
          width: 100%;
          height: 230px;
          box-shadow: 0px 2px 6px 0px rgba(156, 156, 156, 0.3);

          background: chartreuse;
        }
      }
    }
  }
  .noname {
    width: 100%;
    height: 130px;
    div {
      width: 580px;
      height: 130px;
    }
  }
  .friendship {
    margin: 40px 0 70px 0;
    width: 1200px;
    height: 348px;
  }
}
</style>