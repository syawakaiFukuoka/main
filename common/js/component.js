//header
Vue.component('header-component', {
  template: `
  <header class="header">
  <div class="header__block">
    <h1><a href="https://syawakaifukuoka.github.io/main/index.html">写話会福岡</a></h1>
  </div>
  <slide right width="400">
    <nav class="sidebar__inner">
      <div class="sidebar__box">
        <h2 class="sidebar__ttl"><a href="https://syawakaifukuoka.github.io/main/index.html">トップページ</a></h2>
        <ul>
          <li id="menu-about" class="sidebar__txt"><a href="https://syawakaifukuoka.github.io/main/index.html#about">ABOUT</a></li>
          <li id="menu-photo" class="sidebar__txt"><a href="https://syawakaifukuoka.github.io/main/index.html#photo">PHOTO?</a></li>
          <li id="menu-event" class="sidebar__txt"><a href="https://syawakaifukuoka.github.io/main/index.html#event">EVENT</a></li>
        </ul>
      </div>
      <div class="sidebar__box">
        <h2 class="sidebar__ttl"><a href="https://syawakaifukuoka.github.io/main/exhibition/index.html">福岡の写真展情報</a></h2>
        <ul>
          <li id="menu-ex" class="sidebar__txt"><a href="https://syawakaifukuoka.github.io/main/exhibition/index.html">EXHIBITION</a></li>
        </ul>
      </div>
      <div class="sidebar__box">
        <h2 class="sidebar__ttl"><a href="{{ eventUrl }}">開催予定のイベント</a></h2>
        <ul>
          <li id="menu-event" class="sidebar__txt"><a href="{{ eventUrl }}">EVENT</a></li>
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
    <li><a href="https://twitter.com/maPhotalk" target="_blank">twitter</a></li>
    <li><a href="https://www.instagram.com/syawakai_fukuoka/" target="_blank">instagram</a></li>
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
  props: ['position'],
  data() {
    return {
        show: false
    };
  },
  template:'<transition name="fade">'+ `  
  <div class="sns-area" :style="styles" v-if="show">
    <ul>
      <li><a href="https://twitter.com/maPhotalk" target="_blank"><img src="https://syawakaifukuoka.github.io/main/common/img/sns_1.png" alt="twitterアイコン"></a></li>
      <li><a href="https://www.instagram.com/syawakai_fukuoka/" target="_blank"><img src="https://syawakaifukuoka.github.io/main/common/img/sns_2.png" alt="instagramアイコン"></a></li>
      <li><a href="https://note.com/maphotalk" target="_blank"><img src="https://syawakaifukuoka.github.io/main/common/img/sns_3.png" alt="noteアイコン"></a></li>
    </ul>
  </div>`,
  computed: {
    styles() {
      let styles = { position: 'fixed', bottom: '0', left: '0'};
      return styles;
    }
  },
  mounted() {
    let style = document.createElement('style');
    style.innerHTML = `
        .fade-enter-active, .fade-leave-active {
          transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to {
          opacity: 0;
        }
      `;
      document.getElementsByTagName('head')[0].appendChild(style);

      window.addEventListener('scroll', () => {
        this.show = (window.scrollY > 400);
      });
   },
}); 

//moveTop
Vue.component('movetop-component', {
  props: ['position'],
  data() {
    return {
        show: false
    };
  },
  template: '<transition name="fade">'+
  '<button type="button" :style="styles" v-if="show" @click="moveTop"><slot></slot></button>'+
  '</transition>',
  methods: {
    moveTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  computed: {
    styles() {
      let styles = { position: 'fixed' };
      if(this.position === 'top-left') {
          styles['top'] = '15%';
          styles['left'] = '6%';
      } else if(this.position === 'top-right') {
          styles['top'] = '15%';
          styles['right'] = '6%';
      } else if(this.position === 'bottom-left') {
          styles['bottom'] = '15%';
          styles['left'] = '6%';
      } else {
          styles['bottom'] = '15%';
          styles['right'] = '6%';
      }
      return styles;
    }
  },
  mounted() {
    let style = document.createElement('style');
    style.innerHTML = `
        .fade-enter-active, .fade-leave-active {
          transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to {
          opacity: 0;
        }
      `;
      document.getElementsByTagName('head')[0].appendChild(style);

      window.addEventListener('scroll', () => {
        this.show = (window.scrollY > 800);
      });
 },
}); 


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