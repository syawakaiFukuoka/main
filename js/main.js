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

window.onload=function(){
  new Vue({
    el: '#app',
    //スライダー
    data: {
      current_slide: 0,　//追加
      slides: [
        {img: 'img/kv_img01.jpg'},
        {img: 'img/kv_img02.jpg'},
        {img: 'img/kv_img03.jpg'},
        {img: 'img/kv_img04.jpg'},
        {img: 'img/kv_img05.jpg'}
      ],
    },
    mounted() {
      　　setInterval(() => {
            this.current_slide = this.current_slide < this.slides.length -1 ? this.current_slide +1 : 0
          }, 6000)
      }
  })
} 
