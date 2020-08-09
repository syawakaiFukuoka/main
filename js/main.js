window.onload=function(){
  new Vue({
    el: '#app',
    //スライダー
    data: {
      eventTitle: 'Online:Vol.7',
      // eventVolOn: 'Vol.9',
      eventVolOff: 'Vol.7',
      // eventDateOn: '8/8(土) 18:00～',
      eventDateOff: '2020.7.12～8/31',
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