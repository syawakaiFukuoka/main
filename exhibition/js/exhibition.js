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
new Vue({
    el: '#exhibition',
    data: {
      exhibitionDates: '2020 08.01 ～ 08.31',
    }
})