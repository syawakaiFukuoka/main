//header
Vue.component('header-component', {
  template: `
  <header class="header">
  <div class="header__block">
    <h1><a href="#">写話会福岡</a></h1>
  </div>
  <slide right width="400">
    <nav class="sidebar__inner">
      <div class="sidebar__box">
        <h2 class="sidebar__ttl"><a href="https://syawakaifukuoka.github.io/main/index.html">トップページ</a></h2>
        <ul>
          <li class="sidebar__txt"><a href="https://syawakaifukuoka.github.io/main/index.html#about">ABOUT</a></li>
          <li class="sidebar__txt"><a href="https://syawakaifukuoka.github.io/main/index.html#photo">PHOTO?</a></li>
          <li class="sidebar__txt"><a href="https://syawakaifukuoka.github.io/main/index.html#event">EVENT</a></li>
        </ul>
      </div>
      <div class="sidebar__box">
        <h2 class="sidebar__ttl"><a href="https://syawakaifukuoka.github.io/main/exhibition/index.html">福岡の写真展情報</a></h2>
        <ul>
          <li class="sidebar__txt"><a href="https://syawakaifukuoka.github.io/main/exhibition/index.html">EXHIBITION</a></li>
        </ul>
      </div>
    </nav>
  </slide>
  <div id="page-wrap"></div>
  </header>`
})

//footer
Vue.component('footer-component', {
  template: `
  <footer>
  <p>写話会福岡(しゃわかいふくおか)</p>
  <ul>
    <li><a href="https://www.instagram.com/shawakai_fukuoka/" target="_blank">instagram</a></li>
    <li><a href="https://twitter.com/maPhotalk" target="_blank">twitter</a></li>
    <li><a href="https://coten.pics/maPhotalk" target="_blank">coten</a></li>
    <li><a href="https://note.com/maphotalk" target="_blank">note</a></li>
  </ul>
  <div class="copyright">
    <small>(c) Copyright SyawakaiFukuoka. All Rights reserved.</small>
  </div>
</footer>`
})

//sns
Vue.component('sns-component', {
  template: `  
  <div class="sns-area">
    <ul>
      <li><a href="https://twitter.com/maPhotalk" target="_blank"><img src="https://syawakaifukuoka.github.io/main/common/img/sns_1.png" alt="twitterアイコン"></a></li>
      <li><a href="https://www.instagram.com/shawakai_fukuoka/" target="_blank"><img src="https://syawakaifukuoka.github.io/main/common/img/sns_2.png" alt="instagramアイコン"></a></li>
      <li><a href="https://note.com/maphotalk" target="_blank"><img src="https://syawakaifukuoka.github.io/main/common/img/sns_3.png" alt="noteアイコン"></a></li>
    </ul>
  </div>`
})

//fadein
Vue.component('FadeInComponent', {
  template: `
    <div :class="{fadeIn: visible}">
      <slot v-show="visible"></slot>
    </div>
  `,
  data() {
    return {
      visible: false
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        var top = this.$el.getBoundingClientRect().top;
        this.visible = top < window.innerHeight + 100;
      }
    }
  }
});


const {Slide} = window['vue-burger-menu'];
Vue.component('slide', Slide);