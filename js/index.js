$(function(){
  //섹션 1의 슬라이더 bxslider

  $(".slider1").bxSlider({
    auto: true,
    mode:'fade',
    pager: false,
    autoControls: true,
    autoControlsCombine: true,


    onSlideBefore:function($slideElement, oldIndex, newIndex){
      //슬라이드 넘어가기 직전
      $slideElement.children('img').removeClass('on')
    },
    onSlideAfter:function($slideElement, oldIndex, newIndex){
      $slideElement.children('img').addClass('on');
      $('.count').text(newIndex+1);
    },
  })


  // 섹션1 슬라이더 이미지 사이즈

  let winWidth=$(window).innerWidth();
  let winHeight = $(window).innerHeight();
  $('.slider1 img').width(winWidth+(winWidth*0.3));
  $('.slider1 img').height(winHeight+(winHeight*0.3));

  // fullpagel

  $('#fullpage').fullpage({
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    menu:'#right_nav',
    slidesNavigation: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fifthPage','sixthPage','seventhPage','eighthPage','lastPage'],

    afterRender: function(){
    $('.slogon_title').delay(200).animate({top:'50px', opacity:1}, 800)
    $('.slogon_txt').delay(1200).animate({top:'50px', opacity:1}, 800)
    },

    afterLoad: function(origin, destination, direction, trigger){
     if(destination.index==2 || destination.index==3 || destination.index==5 || destination.index==7){
      $('.header').removeClass('up');
      $('#left_nav').removeClass('up');
     }else if(destination.index==0 || destination.index==1 ||destination.index==4 || destination.index==6){
      $('.header').addClass('up');
      $('#left_nav').addClass('up');
     }


     //1,3번 섹션의 내용 보이게 하기
     if(destination.index==1){
      $('.section2 .inner').animate({paddingTop:'100px', opacity:1})
     }else if(destination.index==3){
      $('.section4 .inner').animate({paddingTop:'100px', opacity:1})
     }
    }//end: afterLoad 콜백
  });//end fullpage




  // 섹션2 슬라이드 slick 슬라이더
  $('.slider2').slick({
    dots: true,
    autoplay:true,
    speed: 300,
    autoplaySpeed:2000,
    arrow: false,
    
  })

  $('.play').on('click', function(){
    $('.slider2').slick('slickPlay')
  })
  $('.pause').on('click', function(){
    $('.slider2').slick('slickPause')
  })


  // gnb

  $('.gnb').on('mouseenter',function(){
    $('.header').addClass('on');
    $('.gnb_bg').stop().slideDown();
    $('.dep2').stop().slideDown();
  })
  $('.pop_notice, .section, .util, #logo').on('mouseenter',function(){
    $('.header').removeClass('on');
    $('.gnb_bg').stop().slideUp();
    $('.dep2').stop().slideUp();
  })

/*섹션5 슬라이더 swiper*/
    // Initialize Swiper.js inside FullPage.js
    new Swiper('.information-swiper-Swiper', {
      direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 3000, // Adjust autoplay delay as needed
      },
      pagination: {
        el: '.swiper-pagination', // Pagination element
        clickable: true // Enable navigation through pagination
      },
    });


  $(".slider3").bxSlider({
    minSlides: 3,
    maxSlides: 5,
    slideWidth: 282,
    slideMargin: 5,
    pager: false,
  });

// 섹션6 슬라이드 대여서비스 swiper 슬라이더
var swiper = new Swiper(".rental-method-Swiper", {
  slidesPerView: "auto",
  spaceBetween: 80,
  autoplay:true,
  delay:5000,
  disableOnInteraction: false,
});
$('.rental-method-Swiper').on('mouseover', function(){
  swiper.autoplay.stop();
});
$('.rental-method-Swiper').on('mouseout', function(){
  swiper.autoplay.start();
})



})//jq



// map

$(document).ready(function(e) {
  $('img[usemap]').rwdImageMaps();
});

$(document).ready(function() {
$('map[name="image-map"] area').click(function(e) {
  e.preventDefault();
  var markerId = $(this).attr('id');
  var popupId = 'popup' + markerId.substr(-1);
  var markerLabel = $('#marker' + markerId.substr(-1) + '-label');
  var popup = $('#' + popupId);

  // 팝업과 마커 레이블 초기화
  $('.popup').hide();
  $('.marker-label').removeClass('click');

  // 클릭한 마커에 대한 팝업과 마커 레이블 표시
  popup.show();
  markerLabel.addClass('click');

  // 이벤트 전파 중지
  e.stopPropagation();
});

$('map[name="image-map"] area').mouseover(function(){
  var markerId = $(this).attr('id');
  var markerLabel = $('#marker' + markerId.substr(-1) + '-label');
  markerLabel.addClass('hovered')
})

$('map[name="image-map"] area').mouseout(function(){
  var markerId = $(this).attr('id');
  var markerLabel = $('#marker' + markerId.substr(-1) + '-label');
  markerLabel.removeClass('hovered')
})


// 문서의 다른 부분 클릭 시

$(document).click(function(e){
  if(!$(e.target).closest('map[name="image-map"]').length){
    $('.popup').hide();
    $('.marker-label').removeClass('click');
  }
})
});

    

var copy1 = document.querySelector('.logos-slide').cloneNode(true);
var copy2 = document.querySelector('.logos-slide').cloneNode(true);

document.querySelector('.local-government').appendChild(copy1);
document.querySelector('.local-government').appendChild(copy2);



// quickMenu
let menuBtn = document.querySelector('.menu-btn');
const quickMenu = document.querySelector('.quick-menu');
let sidebar = document.querySelector('.sidebar');

let sidebarOpen = false; // 사이드바 상태를 나타내는 변수 추가

menuBtn.addEventListener('click', function(){
  if(!sidebarOpen){
    // 사이드바가 닫혀 있는 경우
    sidebar.style.right = '0';
    sidebarOpen = true;
    quickMenu.style.transition = 'right 0.5s ease'; // 퀵 메뉴의 이동에 대한 transition 추가
    quickMenu.style.right = '260px'; // 퀵 메뉴를 사이드바가 열린 위치로 이동
  } else {
    // 사이드바가 열려 있는 경우
    sidebar.style.right = '-200px';
    sidebarOpen = false;
    quickMenu.style.transition = 'right 0.5s ease'; // 퀵 메뉴의 이동에 대한 transition 추가
    quickMenu.style.right = '60px'; // 퀵 메뉴를 사이드바가 닫힌 위치로 이동
  } 
});

$(document).ready(function() {
  $('#fullpage').fullpage({
    afterLoad: function(anchorLink, index) {
      if (index !== 1) {
        $('#topBtn').fadeIn();
      } else {
        $('#topBtn').fadeOut();
      }
    }
  });

  $('#topBtn').click(function() {
    $.fn.fullpage.moveTo(1);
  });
});

// dropdown
let dropdown = document.querySelector('.dropdown');
let dropdownBtn = document.querySelector('.dropdown-btn');
let dropdownSubmenu = document.querySelector('.dropdown-submenu');
let dropdownImg = document.querySelector(".dropdown-btn img");
dropdown.addEventListener("click", function() {
  dropdownSubmenu.classList.toggle("active");
  dropdownImg.classList.toggle("show");
});

// 다른 곳을 클릭했을 때 드롭다운 메뉴가 닫히도록 설정
document.addEventListener("click", function(event) {
  if (!dropdown.contains(event.target)) {
    dropdownSubmenu.classList.remove("active");
    dropdownImg.classList.remove("show");
  }
});