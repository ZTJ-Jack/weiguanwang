<template>
  <div id="MarketActivity">
    <img
      src="../assets/images/add99.jpg"
      alt=""
      style="display: block; width: 100%"
    />
    <div class="search">
      <input type="text" placeholder="请输入搜索内容" />
      <div class="btn">搜索</div>
    </div>
    <div style="padding: 10px; overflow: hidden">
      <div
        v-for="(item, index) in Datalist"
        :key="index"
        @click="showdetail(index)"
      >
        <div
          style="
            margin: 10px auto;
            border-left: 5px red solid;
            background: #fff;
            padding: 10px 60px 10px 20px;
            position: relative;
          "
        >
          <img
            src="../assets/images/add101.png"
            alt=""
            class="jiantou"
            :class="{ select: index == showindex }"
          />
          <div class="flex">
            <div class="left">
              <div style="display: flex">
                <div
                  style="
                    background: #ff950c;
                    padding: 2px 5px;
                    width: 30px;
                    text-align: center;
                  "
                >
                  {{ item.type }}
                </div>
                <div
                  style="
                    margin-left: 10px;
                    background: #ccc;
                    padding: 2px 5px;
                    width: 30px;
                    text-align: center;
                  "
                  v-if="item.status == 0"
                >
                  结束
                </div>
              </div>
              <div style="font-size: 16px; margin: 5px 0">{{ item.name }}</div>
              <div class="h30 time">time：{{ item.time }}</div>
              <div class="h30 address">地址：{{ item.address }}</div>
            </div>
            <div class="right"></div>
          </div>
        </div>
        <div
          v-if="showindex == index"
          style="padding: 0 20px"
          class="wow bounceInUp"
        >
          <div class="h30">time：{{ item.time }}</div>
          <div class="h30">地址：{{ item.address }}</div>
          <div class="h30">座位号：{{ item.SeatNumber }}</div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { getexhibitionIn } from "@/api/api.js";
export default {
  name: "MarketActivity",
  data() {
    return {
      searchs: "",
      showdetails: false,
      showindex: -1,
      Datalist: [
        {
          type: "展会",
          status: 0,
          name: "展会名称展会名称展会名称展会名称展会名称",
          time: "2021-22-21",
          address: "杭州",
          SeatNumber: "2-001",
        },
        {
          type: "展会",
          status: 1,
          name: "展会名称展会名称展会名称展会名称展会名称",
          time: "2021-22-21",
          address: "杭州",
          SeatNumber: "2-001",
        },
        {
          type: "展会",
          status: 1,
          name: "展会名称展会名称展会名称展会名称展会名称",
          time: "2021-22-21",
          address: "杭州",
          SeatNumber: "2-001",
        },
        {
          type: "展会",
          status: 0,
          name: "展会名称展会名称展会名称展会名称展会名称",
          time: "2021-22-21",
          address: "杭州",
          SeatNumber: "2-001",
        },
      ],
    };
  },
  created() {
    let parmas = {
      page: 1,
      limit: 10,
      exhibitionName: this.searchs,
      address: this.searchs,
    };
    getexhibitionIn(parmas).then((res) => {
      console.log(res);
    });
  },
  methods: {
    routerbank() {
      this.$router.go(-1);
    },
    showdetail(index) {
      if (this.showindex == index) {
        this.showindex = -1;
      } else {
        this.showindex = index;
      }
    },
  },
};
</script>

<style lang="scss" scoped >
.search {
  background: #eee;
  border-bottom: 1px solid #dedede;
  padding: 5px 10px;
  /* position: fixed; */
  box-sizing: border-box;
  width: 100%;
  /* top: 40px; */
  display: flex;
  input {
    height: 30px;
    width: 100%;
    color: #333;
    border: none;
    box-sizing: border-box;
    padding-left: 15px;
  }
  input::-webkit-input-placeholder {
    color: #999;
  }
  .btn {
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    // color: #ffffff;
  }
}
.jiantou {
  position: absolute;
  right: 30px;
  bottom: 40px;
  width: 40px;
  height: 21px;
  transition: all 0.3s;
  &.select {
    transform: rotate(180deg);
  }
}
.h30 {
  line-height: 30px;
  font-size: 12px;
  color: #999999;
}
.time {
  // width: 0;
  padding-left: 20px;
  background: url("~@/assets/images/add103.png") center left no-repeat;
  background-size: 13px 14px;
}
.address {
  // width: 0;
  padding-left: 20px;
  background: url("~@/assets/images/add100.png") center left no-repeat;
  background-size: 12px 17px;
}
#MarketActivity {
  background: #eee;
  min-height: 100vh;
  overflow: hidden;
}
.nav {
  background: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  .title {
    text-align: center;
  }
}
</style>