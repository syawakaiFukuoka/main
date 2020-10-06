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
        exhibitionDates: '2020 10.01 ～ 11.30',
        tagArt: 'アート',
        tagCulture: 'カルチャー',
        tagFashion: 'ファッション',
        tagAnimal: '動物',
        tagLandscape: '風景',
        tagNature: '自然',
        tagPortlait: 'ポートレート',
        tagSnap: 'スナップ',
        tagLive: 'ライブ',
        tagMemory: '記録',
      }
  })
}