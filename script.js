AOS.init({
  offset: 100,
    // アニメーションの開始位置（トリガーの元の位置より100px下に設定）
    // offset (in px) from the original trigger point    
    
    delay: 0, 
    // 遅延 values from 0 to 3000, with step 50ms
    
    duration: 3000, 
    // アニメーションにかける時間（1000ミリ秒かける）
    // values from 0 to 3000, with step 50ms

    easing: 'ease', 
    // アニメーションの仕方　default easing for AOS animations
    
    once: false, 
    // tureにすると、1回だけ実行され、falseだとずっと実行される
    // whether animation should happen only once - while scrolling down
    
    mirror: false, 
    // 要素をスクロールしながら、アニメーション化する必要があるかどうか
    // whether elements should animate out while scrolling past them
    
    anchorPlacement: 'top-bottom', 
    // アニメーション開始のスクロール位置
    // defines which position of the element regarding to window should trigger the animation
});


$(function () {

  // scrollイベントを取得した際の処理を定義
  $(window).on("scroll", function () {
    // scrollTop()が0より大きい場合
    if ($(this).scrollTop() > 0) {
      // ヘッダーバーをslideDownして表示
      $(".cb-header").slideDown();
    // scrollTop()が0の場合
    } else {
      // ヘッダーバーをslideUpして非表示
      $(".cb-header").slideUp();
    }
  });

});