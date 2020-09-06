// Vue.component('exhibition-item', {
//   template: `<div class="exhibition__item">
//     <div class="exhibition__item__img">
//       <img src="{{ img/dummy_img01.jpg }}" alt="">
//     </div>
//     <div class="exhibition__item__box">
//       <h4>{{ title }}</h4>
//       <ul>
//         <li>{{ dates }}</li>
//         <li>{{ place }}</li>
//       </ul>
//     </div>
//   </div>`,
//   data: {
//     function () {
//       return {
//         title: 'testdummy',
//         dates: 'dummyday',
//         place: 'dummyplace'
//       }
//     }
//   }
// })
window.onload=function() {
  new Vue({
      el: '#exhibition',
      data: {
        exhibitionDates: '2020 09.01 ～ 09.30',
        tagArtCulture: 'アート・カルチャー',
        tagFashion: 'ファッション',
        tagAnimal: '動物',
        tagLandscape: '風景',
        tagPortlait: 'ポートレート',
        tagSnap: 'スナップ',
        tagLive: 'ライブ',
      }
  })
}