<template>
  <div>

    <!--//-> 这里是顶部导航栏 -->

    <!--<header class="header">-->
      <!--<symbol id="icon-cart" viewBox="0 0 38 32">-->
        <!--<title>cart</title>-->
        <!--<path class="path1" d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"></path>-->
        <!--<path class="path2" d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"></path>-->
        <!--<path class="path3" d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>-->
        <!--<path class="path4" d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>-->
      <!--</symbol>-->
      <!--<div class="navbar">-->
        <!--<div class="navbar-left-container">-->
          <!--<a href="/">-->
            <!--<img class="navbar-brand-logo" src="static/logo.png"></a>-->
        <!--</div>-->
        <!--<div class="navbar-right-container" style="display: flex;">-->
          <!--<div class="navbar-menu-container">-->
            <!--&lt;!&ndash;<a href="/" class="navbar-link">我的账户</a>&ndash;&gt;-->
            <!--<span class="navbar-link"></span>-->
            <!--<a href="javascript:void(0)" class="navbar-link">Login</a>-->
            <!--<a href="javascript:void(0)" class="navbar-link">Logout</a>-->
            <!--<div class="navbar-cart-container">-->
              <!--<span class="navbar-cart-count"></span>-->
              <!--<a class="navbar-link navbar-cart-link" href="/#/cart">-->
                <!--<svg class="navbar-cart-logo">-->
                  <!--<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>-->
                <!--</svg>-->
              <!--</a>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</header>-->


    <!--//-> 这里是顶部导航栏 -->
    <nav-header></nav-header>

    <!--------  上面为顶部  --------->

    <!--//-> 这里是面包屑 -->

    <!--<div class="nav-breadcrumb-wrap">-->
      <!--<div class="container">-->
        <!--<nav class="nav-breadcrumb">-->
          <!--<a href="/">Home</a>-->
          <!--<span>Goods</span>-->
        <!--</nav>-->
      <!--</div>-->
    <!--</div>-->

    <!--//-> 这里是面包屑 -->
    <nav-bread>
      <span slot="bread">Goods /</span>
      <span slot="thirdBread">Phones</span>
    </nav-bread>

    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="_showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}" @click="priceChecked='all'">All</a></dd>
              <dd v-for="(price,index) in priceFilter" >
                <a href="javascript:void(0)" @click="_setPriceFilter(index)"  v-bind:class="{'cur':priceChecked==index}">{{price.startPrice}} - {{price.endPrice}}</a>
              </dd>
              <!--<dd>-->
                <!--<a href="javascript:void(0)">100 - 500</a>-->
              <!--</dd>-->
              <!--<dd>-->
                <!--<a href="javascript:void(0)">500 - 1000</a>-->
              <!--</dd>-->
              <!--<dd>-->
                <!--<a href="javascript:void(0)">1000 - 2000</a>-->
              <!--</dd>-->
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item,index) in goodsList">
                  <div class="pic">
                    <a href="#">
                      <!--<img v-bind:src="'/static/'+item.productImg" alt="">-->
                      <img v-lazy="'/static/'+item.productImage" alt="">
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.salePrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
                <!--<li>-->
                  <!--<div class="pic">-->
                    <!--<a href="#"><img src="static/2.jpg" alt=""></a>-->
                  <!--</div>-->
                  <!--<div class="main">-->
                    <!--<div class="name">XX</div>-->
                    <!--<div class="price">1000</div>-->
                    <!--<div class="btn-area">-->
                      <!--<a href="javascript:;" class="btn btn&#45;&#45;m">加入购物车</a>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<div class="pic">-->
                    <!--<a href="#"><img src="static/3.jpg" alt=""></a>-->
                  <!--</div>-->
                  <!--<div class="main">-->
                    <!--<div class="name">XX</div>-->
                    <!--<div class="price">500</div>-->
                    <!--<div class="btn-area">-->
                      <!--<a href="javascript:;" class="btn btn&#45;&#45;m">加入购物车</a>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<div class="pic">-->
                    <!--<a href="#"><img src="static/4.jpg" alt=""></a>-->
                  <!--</div>-->
                  <!--<div class="main">-->
                    <!--<div class="name">XX</div>-->
                    <!--<div class="price">2499</div>-->
                    <!--<div class="btn-area">-->
                      <!--<a href="javascript:;" class="btn btn&#45;&#45;m">加入购物车</a>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</li>-->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--// 这里是底部内容 -->

    <!--<footer class="footer">-->
      <!--<div class="footer__wrap">-->
        <!--<div class="footer__secondary">-->
          <!--<div class="footer__inner">-->
            <!--<div class="footer__region">-->
              <!--<span>Region</span>-->
              <!--<select class="footer__region__select">-->
                <!--<option value="en-US">USA</option>-->
                <!--<option value="zh-CN">China</option>-->
                <!--<option value="in">India</option>-->
              <!--</select>-->
            <!--</div>-->
            <!--<div class="footer__secondary__nav">-->
              <!--<span>Copyright © 2017 IMooc All Rights Reserved.</span>-->
              <!--<a href="http://us.lemall.com/us/aboutUs.html">-->
                <!--About Us-->
              <!--</a>-->
              <!--<a href="http://us.lemall.com/us/termsofUse.html">-->
                <!--Terms &amp; Conditions-->
              <!--</a>-->
              <!--<a href="http://us.lemall.com/us/privacyPolicy.html">-->
                <!--Privacy Policy-->
              <!--</a>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</footer>-->


    <!--// 这里是遮罩 -->
    <div class="md-overlay" v-show="overLayFlag" @click="_closePop"></div>
    <!--// 这里是底部内容 -->
    <nav-footer></nav-footer>

  </div>
</template>
<script>
  import './../assets/css/base.css'
  import './../assets/css/product.css'
  import './../assets/css/login.css'           //->顶部导航栏样式

  import NavHeader from '@/components/NavHeader.vue'
  import NavFooter from '@/components/NavFooter.vue'
  import NavBread  from '@/components/NavBread.vue'
  import axios from 'axios'
  export default{

      data(){
        return{
            goodsList:[],
            // 做价格过滤的时候，会用到
            priceFilter:[
              {
                  startPrice: '0.00',
                  endPrice: '500.00'
              },
              {
                  startPrice: '500.00',
                  endPrice: '1000.00'
              },
              {
                  startPrice: '1000.00',
                  endPrice: '2000.00'
              }
            ],
            priceChecked: 'all',

            // 排序
            filterBy: false,
            overLayFlag:false
        }
      },
      components:{
        NavHeader: NavHeader,
        NavFooter: NavFooter,
        NavBread : NavBread
      },
      // mounted是生命周期里面的方法
      mounted: function(){
          this._getGoodsList();
      },

      // http://localhost:3000/posts
      methods:{
          _getGoodsList(){

            axios.get("/goods").then((response)=>{
                var res = response.data;
                console.log(res);
                if(res.status == "0"){
                    this.goodsList = res.result.list;
                }else{
                    this.goodsList = [];
                }
            })


          },
          // 控制左侧价格过滤的点击默认样式
          _setPriceFilter(index){
              this.priceChecked = index;
              this._closePop();
          },

          // 点击显示出价格过滤
          _showFilterPop(){
              this.filterBy = true;       // 控制价格过滤，显示
              this.overLayFlag = true;    // 控制遮罩，显示
          },
          // 点击关闭遮罩
          _closePop(){
            this.filterBy = false;       // 控制价格过滤，隐藏
            this.overLayFlag = false;    // 控制遮罩，隐藏
          }
      }
  }
</script>
