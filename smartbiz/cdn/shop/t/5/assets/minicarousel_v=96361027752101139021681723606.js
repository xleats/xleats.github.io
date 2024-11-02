/** Shopify CDN: Minification failed

Line 722:0 Transforming const to the configured target environment ("es5") is not supported yet
Line 735:10 Transforming const to the configured target environment ("es5") is not supported yet
Line 758:4 Transforming const to the configured target environment ("es5") is not supported yet

**/
var currentTabStamp = 1;
/*$=jQuery;*/


$('.blogs_list .grid').addClass('slider');


$('.blogs_list .grid.slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: true,
        slidesToShow: 1
      }
    }
  ]
});



$('.minicarousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    centerMode: true
});


$('.minicarousel_coconutsecret').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    centerMode: true,
    responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

      ]

  
});

$('.minicarousel-recipe').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    centerMode: true,
    responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

      ]

  
});


  
$('.headcarousel').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 30000
});

  $(".recipes_slideshow").slick({
    slidesToShow: 1,
    infinite:true,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".pull-left",
    nextArrow: ".pull-right",

     // dots: false, Boolean
    // arrows: false, Boolean
  });

/*$(".left-right-arrow-nav").slick({
    slidesToShow: 1,
    infinite:true,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".pull-left",
    nextArrow: ".pull-right",

     // dots: false, Boolean
    // arrows: false, Boolean
  });*/
  if($('.product_single_thumbnails').hasClass('slider_thumb_cookbook')){
    $(".product_mobile_thumbnails").slick({
      slidesToShow: 1,
      infinite:true,
      slidesToScroll: 1,
      arrows: false,
      dots: true
      // arrows: false, Boolean
    });
  }else{    
    $(".product_mobile_thumbnails").slick({
      slidesToShow: 1,
      infinite:true,
      slidesToScroll: 1,
      arrows: false,
      dots: true
      // arrows: false, Boolean
    });
  }

  $(document).ready(function(){
    //if($("body").hasClass("help-faqs")){
      //$('#AccessibleNav1 .sub-menu-item--1:eq(0)').addClass('active');
      $('#AccessibleNav1 .sub-menu-item--1').click(function(){
        $('#AccessibleNav1 .sub-menu-item--1').removeClass('active');
        $(this).addClass('active');
      });

        var url = location.href;
        var new_url = url.split('#');
        if (url.indexOf("#") >= 0){
          var scrl = $('#'+new_url[1]).offset().top - $('#shopify-section-header').height() - 15;
          if($('body').hasClass('apple-iphone') || $('body').hasClass('android')){
            scrl = $('#'+new_url[1]).offset().top - $('#shopify-section-header').height();
          }
          $('html, body').animate({ 
              scrollTop: scrl
          }, 2000);
        }
    
      $('#AccessibleNav1 .sub-menu-item--1 a').click(function(){ //alert('aa');
        $('#AccessibleNav1 .sub-menu-item--1').removeClass('active');
        var url = $(this).attr('href');
        var new_url = url.split('#');
        if (url.indexOf("#") >= 0){
          var scrl = $('#'+new_url[1]).offset().top - $('#shopify-section-header').height() - 15;
          if($('body').hasClass('apple-iphone') || $('body').hasClass('android')){
            scrl = $('#'+new_url[1]).offset().top - $('#shopify-section-header').height();
          }
          $('html, body').animate({ 
              scrollTop: scrl
          }, 2000);
          $(this).parent().addClass('active');
          return false;
        }else{
          return true;
        }
      });
    //}
  });

  if($("body").hasClass("help-faqs") || $("body").hasClass("template-blog")){
    
    
    $('.sub_menu_li').on('init', function(event, slick){
        //$('.sub_menu_li .slick-slide:eq(0)').addClass('active');
        $('.sub_menu_li .slick-slide').click(function(){
          $('.sub_menu_li .slick-slide').removeClass('active');
          $(this).addClass('slick-slide-active');
        });
    });
    
    $(".sub_menu_li").slick({
      infinite:false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      variableWidth: true,
      centerMode: true
      // arrows: false, Boolean
    });

    
  }else{ 
    
    /*$('.sub_menu_li').on('init', function(event, slick){
        alert("initialized");
    });*/
    
    $(".sub_menu_li").slick({
      infinite:false,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      variableWidth: true
      //centerMode: true,
      // arrows: false, Boolean
    });
    
  }


  /*$(".pro_des_tabs_menu_li").slick({
    slidesToShow: 2.5,
    infinite:false,
    slidesToScroll: 1,
    arrows: false,
    dots: false
    //centerMode: true,
    // arrows: false, Boolean
  });*/


  $(".pro_blog_menu_li").slick({
    slidesToShow: 1,
    infinite:true,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
	prevArrow:"<div class='slick_prevs'><img src='https://cdn.shopify.com/s/files/1/0558/2988/9078/t/2/assets/left_arrow.png'></div>",
    nextArrow:"<div class='slick_nexts'><img src='https://cdn.shopify.com/s/files/1/0558/2988/9078/t/2/assets/right_arrow.png'></div>",
  });

  $(".our_story_sec_eight_nav_mobile").slick({
    slidesToShow: 2.7,
    infinite:false,
    slidesToScroll: 1,
    arrows: false,
    dots: false
    //centerMode: true,
    // arrows: false, Boolean
  });



  $(".featured_collection").slick({
    slidesToShow: 3,
    infinite:true,
    slidesToScroll: 1,
    arrows: true,
	prevArrow:"<div class='slick_prevs'><img src='https://cdn.shopify.com/s/files/1/0558/2988/9078/t/2/assets/left_arrow.png'></div>",
    nextArrow:"<div class='slick_nexts'><img src='https://cdn.shopify.com/s/files/1/0558/2988/9078/t/2/assets/right_arrow.png'></div>",
    responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },      
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

      ]    
  });

  $("#awards-and-recognition_sec_eight-nav").slick({
    slidesToShow: 6,
    infinite:true,
    slidesToScroll: 1,
    arrows: true,
	prevArrow:"<div class='slick_prevs'><img src='https://cdn.shopify.com/s/files/1/0558/2988/9078/t/2/assets/left_arrow.png'></div>",
    nextArrow:"<div class='slick_nexts'><img src='https://cdn.shopify.com/s/files/1/0558/2988/9078/t/2/assets/right_arrow.png'></div>",
    responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },      
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

      ]    
  });



/*
$('.headcarousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log(event);
    console.log(slick);
    console.log(currentSlide);
    console.log(nextSlide);
});
*/
$('.carousel-stamps').slick({
    dots: false,
    infinite: false,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: false
});

$('.timeline').slick({
    dots: false,
    infinite: false,
    centerMode: true,
    centerPadding: '8%',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    autoplay: false
});

$('.section-redtabs-wrapper').slick({
    dots: true,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: false
});


$('.prevyear').click(function(){
    $(".timeline").slick('slickPrev');
});
$('.nextyear').click(function(){
    $(".timeline").slick('slickNext');
});

$('#carousel-stamps a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.carousel-stamps').slick('slickGoTo', slideno - 1);
    $(".header-mini-tabmenu li").removeClass("active");
    currentTabStamp = slideno ;
    stampCurrentTab(currentTabStamp);
  });

  $('#carousel-impact a[data-slide]').click(function(e) { 
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.section-redtabs-wrapper').slick('slickGoTo', slideno - 1);
    $("#carousel-impact li").removeClass("active");
    currentTabStamp = slideno ;
    stampCurrentTab(currentTabStamp);
  });

  
// $('.pro_slider_content').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   fade: false,
// 	infinite: true,
// 	speed: 1000,
//   asNavFor: '.slider_thumb',
//     arrows: true,
//     prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
//     nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
// });
// $('.slider_thumb').slick({
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   asNavFor: '.pro_slider_content',
//   dots: false,
//   centerMode: false,
//   focusOnSelect: true
// });

 $('.pro_slider_content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,   
  asNavFor: '.slider_thumb'
});
$('.slider_thumb').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.pro_slider_content',
  dots: false,
    prevArrow: '<button type="button" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><img src="https://cdn.shopify.com/s/files/1/0558/2988/9078/files/arrow_left_af26d238-eda2-4ae7-b828-b2e7fc1f5b52.png"></button>',
    nextArrow: '<button type="button" class="slick-next" aria-label="Next" tabindex="0" role="button"><img src="https://cdn.shopify.com/s/files/1/0558/2988/9078/files/arrow_right_5fd26753-eea7-45ee-b5eb-000bd1952318.png"></button>',
  centerMode: false,
  focusOnSelect: true
});

jQuery(document).ready(function() {
	$('.carousel--fullscreen').parallaxify({
		positionProperty: 'transform',
		mouseMotionType: 'gaussian',
		useMouseMove: true
	});
    
    jQuery( ".faqs-category--wrapper ul li:first-child a" ).trigger( "click" );

    currentPage = document.location.pathname;

    namePage = currentPage.split('/'); 

    console.log(namePage);
    switch (namePage[2]){
        case "/": $(".header-mini-menu li:nth-child(1)").addClass("active"); 
                              stampCurrentTab(1);
                              $(".site-menu .menu-item--1:nth-child(1)").addClass("current-page"); 
        break;
        case "shop":  $(".header-mini-menu li:nth-child(2)").addClass("active"); 
                          stampCurrentTab(1);
                          $(".site-menu .menu-item--1:nth-child(2)").addClass("current-page"); 
        break;
        case "our-story":  $(".header-mini-menu li:nth-child(2)").addClass("active"); 
                           stampCurrentTab(1);
                          $(".site-menu .menu-item--1:nth-child(3)").addClass("current-page");
                          //$(".site-menu .menu-item--1:nth-child(2) > a").addClass("current-page"); 
        break;
        case "recipes":  $(".header-mini-menu li:nth-child(1)").addClass("active"); 
                         stampCurrentTab(1);
                          $(".site-menu .menu-item--1:nth-child(4)").addClass("current-page");
                          //$(".site-menu .menu-item--1:nth-child(2) > a").addClass("current-page"); 
        break;
    }
   /* if ( namePage[1] == "all" || namePage[1] == "collections" ){
        $(".site-menu .menu-item--1:nth-child(1) > a").addClass("current-page"); 
    }
    if ( namePage[1] == "our-story" ){
        $(".site-menu .menu-item--1:nth-child(3) > a").addClass("current-page"); 
    }
    if ( namePage[2] == "recipes" ){
      $(".header-mini-menu li:nth-child(1)").addClass("active");
    }
    if ( namePage[2] == "blog" ){
      $(".header-mini-menu li:nth-child(2)").addClass("active");
    }
    if ( namePage[2] == "stories" ){
      $(".header-mini-menu li:nth-child(3)").addClass("active");
    }
    if ( namePage[2] == "coconutsecret-recipes" ){
      $(".header-mini-menu li:nth-child(1)").addClass("active");
    }
    if ( namePage[2] == "coconutsecret-blog" ){
      $(".header-mini-menu li:nth-child(2)").addClass("active");
    }*/
    /************** SCROLLMAGIC *****************/

    var row1L = new TimelineMax();
    var row1R = new TimelineMax();
    var row2L = new TimelineMax();
    var row2R = new TimelineMax();
    var row3L = new TimelineMax();
    var row3R = new TimelineMax();

    var spinach3 = TweenMax.fromTo(".spinach-3", 1.5, {x: "-172%", y:"0%", rotation: 25},{x: "158%", y:"-235%", rotation: 0, ease:Expo.easeOuteaseOut});
    var spinach2 = TweenMax.fromTo(".spinach-2", 1.5, {x: "-250%", y:"0%", rotation: 25},{x: "80%", y:"-235%", rotation: 0, ease:Expo.easeOuteaseOut});
    var spinach1 = TweenMax.fromTo(".spinach-1", 1.5, {x: "-338%", y:"0%", rotation: 25},{x: "-8%", y:"-235%", rotation: 0, ease:Expo.easeOuteaseOut});

    var flax3 = TweenMax.fromTo(".flax-3", 2, {x: "-310%", y:"40%", rotation: 25},{x: "196%", y:"-109%", rotation: 0, ease:Expo.easeOuteaseOut});
    var flax2 = TweenMax.fromTo(".flax-2", 2, {x: "-390%", y:"40%", rotation: 25},{x: "116%", y:"-105%", rotation: 0, ease:Expo.easeOuteaseOut});
    var flax1 = TweenMax.fromTo(".flax-1", 2, {x: "-506%", y:"40%", rotation: 25},{x: "0%", y:"-109%", rotation: 0, ease:Expo.easeOuteaseOut});

    var orange = TweenMax.fromTo(".oranges", 2, {x: "424%", y:"-14%", rotation: -100},{x: "144%", y:"-108%", rotation: 0, ease:Expo.easeOuteaseOut});
    var coconut = TweenMax.fromTo(".coconut", 2, {x: "358%", y:"-58%", rotation: -100},{x: "168%", y:"-88%", rotation: 0, ease:Expo.easeOuteaseOut});

    row1L.add(spinach3).add(spinach2, "-=.90").add(spinach1, "-=.80").add(flax3, "-=1").add(flax2, "-=.90").add(flax1, "-=.80");
    row1R.add(orange).add(coconut, "-=.90");

    var apple = TweenMax.fromTo(".apple", 10, {x: "-187%", y:"-10%", rotation: 45},{x: "63%", y:"-158%", rotation: 0, ease:Expo.easeOuteaseOut});
    var hempseed = TweenMax.fromTo(".hempseed", 10, {x: "-196%", y:"27%", rotation: 25},{x: "66%", y:"-73%", rotation: 0, ease:Expo.easeOuteaseOut});
    var palm1 = TweenMax.fromTo(".palm-1", 9, {x: "-228%", y:"-120%", rotation: 25},{x: "-8%", y:"-348%", rotation: 0, ease:Expo.easeOuteaseOut});
    var palm2 = TweenMax.fromTo(".palm-2", 9, {x: "-348%", y:"-100%", rotation: 25},{x: "-14%", y:"-277%", rotation: 0, ease:Expo.easeOuteaseOut});
    var palm3 = TweenMax.fromTo(".palm-3", 9, {x: "-228%", y:"-100%", rotation: 25},{x: "50%", y:"-198%", rotation: 0, ease:Expo.easeOuteaseOut});
    var palm4 = TweenMax.fromTo(".palm-4", 9, {x: "-348%", y:"-50%", rotation: 25},{x: "-14%", y:"-149%", rotation: 0, ease:Expo.easeOuteaseOut});
    var palm5 = TweenMax.fromTo(".palm-5", 9, {x: "-318%", y:"-50%", rotation: 25},{x: "50%", y:"-156%", rotation: 0, ease:Expo.easeOuteaseOut});
    var palm6 = TweenMax.fromTo(".palm-6", 9, {x: "-313%", y:"-30%", rotation: 25},{x: "-3%", y:"-79%", rotation: 0, ease:Expo.easeOuteaseOut});

    var brocol1 = TweenMax.fromTo(".brocol-1", 10, {x: "546%", y:"-50%", rotation: -100},{x: "266%", y:"-334%", rotation: 0, ease:Expo.easeOuteaseOut});
    var brocol2 = TweenMax.fromTo(".brocol-2", 10, {x: "546%", y:"-50%", rotation: -100},{x: "206%", y:"-180%", rotation: 0, ease:Expo.easeOuteaseOut});
    var brocol3 = TweenMax.fromTo(".brocol-3", 10, {x: "546%", y:"-50%", rotation: -100},{x: "262%", y:"-174%", rotation: 0, ease:Expo.easeOuteaseOut});
    var chiaseed = TweenMax.fromTo(".chiaseed", 9, {x: "436%", y:"10%", rotation: -100},{x: "246%", y:"-135%", rotation: 0, ease:Expo.easeOuteaseOut});

    var sunseed1 = TweenMax.fromTo(".sunseed-1", 9, {x: "1099%", y:"80%", rotation: -100},{x: "539%", y:"-97%", rotation: 0, ease:Expo.easeOuteaseOut});
    var sunseed2 = TweenMax.fromTo(".sunseed-2", 9, {x: "1099%", y:"100%", rotation: -100},{x: "542%", y:"-135%", rotation: 0, ease:Expo.easeOuteaseOut});
    var sunseed3 = TweenMax.fromTo(".sunseed-3", 9, {x: "1099%", y:"120%", rotation: -100},{x: "541%", y:"-177%", rotation: 0, ease:Expo.easeOuteaseOut});
    var sunseed4 = TweenMax.fromTo(".sunseed-4", 9, {x: "1099%", y:"120%", rotation: -100},{x: "563%", y:"-195%", rotation: 0, ease:Expo.easeOuteaseOut});

    row2L.add(apple).add(palm1).add(palm3,"-=3").add(palm2,"-=3").add(hempseed).add(palm5, "-=7").add(palm4, "-=6").add(palm6, "-=5");
    row2R.add(brocol1).add(brocol2,"-=7").add(brocol3,"-=5").add(chiaseed,"-=10").add(sunseed4,"-=9").add(sunseed3,"-=8").add(sunseed2,"-=7").add(sunseed1,"-=6");

    var haz1 = TweenMax.fromTo(".haz-1", 12, {x: "-357%", y:"-274%", rotation: 85},{x: "13%", y:"-514%", rotation: 0, ease:Expo.easeOuteaseOut});
    var haz2 = TweenMax.fromTo(".haz-2", 12, {x: "-357%", y:"-274%", rotation: 75},{x: "61%", y:"-428%", rotation: 0, ease:Expo.easeOuteaseOut});
    var haz3 = TweenMax.fromTo(".haz-3", 12, {x: "-357%", y:"-274%", rotation: 95},{x: "135%", y:"-514%", rotation: 0, ease:Expo.easeOuteaseOut});
    var haz4 = TweenMax.fromTo(".haz-4", 12, {x: "-357%", y:"-274%", rotation: 125},{x: "146%", y:"-469%", rotation: 0, ease:Expo.easeOuteaseOut});

    var avocado1 = TweenMax.fromTo(".avocado-1", 10, {x: "-278%", y:"-22%", rotation: 125},{x: "-8%", y:"-112%", rotation: 0, ease:Expo.easeOuteaseOut});
    var avocado2 = TweenMax.fromTo(".avocado-2", 10, {x: "-192%", y:"-22%", rotation: 125},{x: "68%", y:"-112%", rotation: 0, ease:Expo.easeOuteaseOut});

    var sweetpotato = TweenMax.fromTo(".sweetpotato", 10, {x: "400%", y:"-58%", rotation: -125},{x: "165%", y:"-228%", rotation: 0, ease:Expo.easeOuteaseOut});

    var mush1 = TweenMax.fromTo(".mush-1", 10, {x: "691%", y:"-173%", rotation: -125},{x: "391%", y:"-333%", rotation: 0, ease:Expo.easeOuteaseOut});
    var mush2 = TweenMax.fromTo(".mush-2", 10, {x: "691%", y:"-173%", rotation: -125},{x: "338%", y:"-265%", rotation: 0, ease:Expo.easeOuteaseOut});
    var mush3 = TweenMax.fromTo(".mush-3", 10, {x: "691%", y:"-173%", rotation: -125},{x: "406%", y:"-263%", rotation: 0, ease:Expo.easeOuteaseOut});

    var straw1 = TweenMax.fromTo(".straw-1", 10, {x: "799%", y:"14%", rotation: -25},{x: "270%", y:"-226%", rotation: 0, ease:Expo.easeOuteaseOut});
    var straw2 = TweenMax.fromTo(".straw-2", 10, {x: "799%", y:"14%", rotation: -25},{x: "334%", y:"-216%", rotation: 0, ease:Expo.easeOuteaseOut});
    var straw3 = TweenMax.fromTo(".straw-3", 10, {x: "799%", y:"14%", rotation: -25},{x: "399%", y:"-226%", rotation: 0, ease:Expo.easeOuteaseOut});
    var straw4 = TweenMax.fromTo(".straw-4", 10, {x: "799%", y:"4%", rotation: -25},{x: "270%", y:"-143%", rotation: 0, ease:Expo.easeOuteaseOut});
    var straw5 = TweenMax.fromTo(".straw-5", 10, {x: "799%", y:"4%", rotation: -25},{x: "339%", y:"-136%", rotation: 0, ease:Expo.easeOuteaseOut});
    var straw6 = TweenMax.fromTo(".straw-6", 10, {x: "799%", y:"4%", rotation: -25},{x: "402%", y:"-142%", rotation: 0, ease:Expo.easeOuteaseOut});

    var pea6 = TweenMax.fromTo(".pea-6", 10, {x: "999%", y:"209%", rotation: -25},{x: "727%", y:"-284%", rotation: 0, ease:Expo.easeOuteaseOut});
    var pea5 = TweenMax.fromTo(".pea-5", 10, {x: "999%", y:"209%", rotation: -25},{x: "727%", y:"-245%", rotation: 0, ease:Expo.easeOuteaseOut});
    var pea4 = TweenMax.fromTo(".pea-4", 10, {x: "999%", y:"209%", rotation: -25},{x: "727%", y:"-216%", rotation: 0, ease:Expo.easeOuteaseOut});
    var pea3 = TweenMax.fromTo(".pea-3", 10, {x: "999%", y:"209%", rotation: -25},{x: "727%", y:"-184%", rotation: 0, ease:Expo.easeOuteaseOut});
    var pea2 = TweenMax.fromTo(".pea-2", 10, {x: "999%", y:"209%", rotation: -25},{x: "727%", y:"-148%", rotation: 0, ease:Expo.easeOuteaseOut});
    var pea1 = TweenMax.fromTo(".pea-1", 10, {x: "999%", y:"209%", rotation: -25},{x: "729%", y:"-122%", rotation: 0, ease:Expo.easeOuteaseOut});

    var carrot = TweenMax.fromTo(".carrot", 15, {x: "762%", y:"54%", rotation: -45},{x: "612%", y:"-106%", rotation: 0, ease:Expo.easeOuteaseOut});

    row3L.add(haz4).add(haz3, "-=7").add(haz2, "-=7").add(haz1, "-=7").add(avocado2, "-=5").add(avocado1, "-=5");
    row3R.add(sweetpotato).add(mush2, "-=7").add(mush1, "-=7").add(mush3, "-=7").add(straw1, "-=2").add(straw2, "-=7").add(straw3, "-=7").add(straw4, "-=7").add(straw5, "-=6").add(straw6, "-=6").add(pea6, "-=6").add(pea5, "-=6").add(pea4, "-=6").add(pea3, "-=6").add(pea2, "-=6").add(pea1, "-=6").add(carrot, "-=6");

    var controller = new ScrollMagic.Controller();
    var startpin1L = new ScrollMagic.Scene({triggerElement: "#vegetables-triger",duration: "350"}).setTween(row1L).addTo(controller);
    var startpin1R = new ScrollMagic.Scene({triggerElement: "#vegetables-triger",duration: "350"}).setTween(row1R).addTo(controller);
    var startpin2L = new ScrollMagic.Scene({triggerElement: "#second-row", offset:"-250%", duration: "400"}).setTween(row2L).addTo(controller);
    var startpin2R = new ScrollMagic.Scene({triggerElement: "#second-row", offset:"-250%", duration: "400"}).setTween(row2R).addTo(controller);
    var startpin3L = new ScrollMagic.Scene({triggerElement: "#tree-row", offset:"-250%", duration: "400"}).setTween(row3L).addTo(controller);
    var startpin3R = new ScrollMagic.Scene({triggerElement: "#tree-row", offset:"-250%", duration: "400"}).setTween(row3R).addTo(controller);

});

function stampCurrentTab(n){
    $(".header-mini-tabmenu li:nth-child("+n+")").addClass("active");
}

jQuery('#SortBy').change(function () {
  urlSearchParams = new URLSearchParams(window.location.search);

  urlSearchParams.set(this.name, this.value);

  window.location = `?${urlSearchParams}`;
});

var current_modal;

jQuery('.open-modal').click(function () { 
    current_modal = this.getAttribute("data-modal");
    jQuery('.modal-box-wrapper--'+current_modal).addClass("show");
});

jQuery('.close-modal').click(function () {
    current_modal = this.getAttribute("data-modal");
    jQuery('.modal-box-wrapper--'+current_modal).removeClass("show");
});


jQuery('.varian-options').click(function () { 
    jQuery('.variables-wrapper a').removeClass("variant-selected");
    jQuery('.variables-wrapper a:nth-child('+ ($(this).index() + 1 ) +')').addClass("variant-selected");
    product_value = this.getAttribute("data-value");
    jQuery('.product-form__select').val( product_value ).trigger('change');
    jQuery('.hiden-variant-val').val( product_value );
    jQuery('.product-form__select option').attr('selected',false);
    jQuery('.product-form__select [value="'+product_value+'"]').attr('selected',true);


    console.log(product_value);
});

jQuery('.products-tab li a').click(function () { 
    current_tab = this.getAttribute("href");
    current_tab = current_tab.substring(1, current_tab.length);

    jQuery(".products-tab li").removeClass("active");
    jQuery(".tab-section").removeClass("active");

    jQuery(".tab-head-"+current_tab).addClass("active");
    jQuery(".product--"+current_tab).addClass("active");

});

var acc = document.getElementsByClassName("faq--question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

jQuery('.faqs-category--wrapper ul li a').click(function () {
    jQuery(".faqs-category--wrapper ul li a").removeClass('active');
    jQuery(this).addClass('active');
    current_cat = this.getAttribute("id");
    current_cat = current_cat.substring(1, current_cat.length);
    jQuery(".faqs--accordion .faq").fadeOut();
    jQuery(".faqs--accordion .faq."+current_cat).fadeIn();

    /*jQuery('.modal-box-wrapper--'+current_modal).removeClass("show");*/
});


var actry = document.getElementsByClassName("country-name");
var i;

for (i = 0; i < actry.length; i++) {
    actry[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
/* touchstart */
$('a[data-child]').on("click", function(e) {

    goToLevel = this.getAttribute("data-child");

    switch( goToLevel ){
      case "l1": $(".mobile-menu-l1").animate({left:"0vw"});
      break;
      case "l2": $(".mobile-menu-l1").animate({left:"-100vw"});
                 $(".mobile-menu-l3").animate({left:"200vw"});
      break;
      case "l3": $(".mobile-menu-l1").animate({left:"-200vw"});
                goToSubLevel = this.getAttribute("rel");
                $(".l3-group-"+goToSubLevel).animate({left:"100vw"});
      break;

    }

});

$(".mobile-menu-btn, .nav-mobile-close").on("click", function(e) {
  $(".nav-mobile").toggleClass("active");
});

$(".mobile_tab_filter, .mobile_tab_filter_close").on("click", function(e) {
  $(".mobile_filter_list").toggleClass("active");
});

$(".nav_user_icon, .nav_user_dropdown_close").on("click", function(e) {
  $(".nav_user_dropdown").toggleClass("active");
});



$(".js-drawer-open-top").on("click", function(e) {
  $("#SearchDrawer.drawer").fadeIn();
});

$(".js-drawer-close").on("click", function(e) {
  $("#SearchDrawer.drawer").fadeOut();
});

/** insta ***/

if (document.getElementById('instagram-feed') !=null){

  function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}(function(a,b){"function"==typeof define&&define.amd?define([],b):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=b():a.InstagramFeed=b()})(this,function(){function a(a){return a.replace(/[&<>"'`=\/]/g,function(a){return k[a]})}function b(a){return"undefined"!=typeof a.node.edge_media_to_caption.edges[0]&&"undefined"!=typeof a.node.edge_media_to_caption.edges[0].node&&"undefined"!=typeof a.node.edge_media_to_caption.edges[0].node.text&&null!==a.node.edge_media_to_caption.edges[0].node.text?a.node.edge_media_to_caption.edges[0].node.text:"undefined"!=typeof a.node.title&&null!==a.node.title&&0!=a.node.title.length?a.node.title:"undefined"!=typeof a.node.accessibility_caption&&null!==a.node.accessibility_caption&&0!=a.node.accessibility_caption.length&&a.node.accessibility_caption}function c(a,b){var c=b||!1;if(!b&&0<a.cache_time){var d=localStorage.getItem(a.cache_time_key);null!==d&&parseInt(d)+60000*a.cache_time>new Date().getTime()&&(c=!0)}if(c){var e=localStorage.getItem(a.cache_data_key);if(null!==e)return JSON.parse(e)}return!1}function d(a,b){var c=localStorage.getItem(a.cache_time_key),d=0!=a.cache_time&&(null===c||parseInt(c)+60000*a.cache_time>new Date().getTime());d&&(localStorage.setItem(a.cache_data_key,JSON.stringify(b)),localStorage.setItem(a.cache_time_key,new Date().getTime()))}function e(a,b){switch(a){case"username":case"tag":case"location":try{b=b.split("window._sharedData = ")[1].split("</script>")[0]}catch(a){return!1}return b=JSON.parse(b.substr(0,b.length-1)),b=b.entry_data.ProfilePage||b.entry_data.TagPage||b.entry_data.LocationsPage,"undefined"!=typeof b&&(b[0].graphql.user||b[0].graphql.hashtag||b[0].graphql.location);break;case"userid":return"undefined"!=typeof b.data.user&&b.data.user;}}function f(a,b,c,d,g,h){var i;g&&h&&(i="https://images"+~~(3333*Math.random())+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url="+a);var j=new XMLHttpRequest;j.onload=function(){4===j.readyState&&200===j.status&&(data=e(b,j.responseText),!1===data?d(!1):d(data))},j.onerror=function(i){1<c?(console.warn("Instagram Feed: Request failed, "+(c-1)+" tries left. Retrying..."),f(a,b,c-1,d,g,!h)):d(!1,i)},j.open("GET",i||a,!0),j.send()}function g(a,b){var e=c(a,!1);if(!1!==e)b(e);else{var g;switch(a.type){case"username":g=a.host+a.id+"/";break;case"tag":g=a.host+"explore/tags/"+a.id+"/";break;case"location":g=a.host+"explore/locations/"+a.id+"/";break;case"userid":g=a.host+"graphql/query/?query_id=17888483320059182&variables={\"id\":\""+a.id+"\",\"first\":"+a.items+",\"after\":null}";}f(g,a.type,a.max_tries,function(e,f){!1===e?"undefined"==typeof f?a.on_error("Instagram Feed: It looks like the profile you are trying to fetch is age restricted. See https://github.com/jsanahuja/InstagramFeed/issues/26",3):(e=c(a,!0),!1===e?a.on_error("Instagram Feed: Unable to fetch the given user/tag. Instagram responded with the status code: "+f.status,5):b(e)):(d(a,e),b(e))},a.host===i.host&&"userid"!=a.type,!1)}}function h(c,d){var e,f="";if(c.styling){var g=(100-2*c.margin*c.items_per_row)/c.items_per_row;e={profile_container:" style=\"text-align:center;\"",profile_image:" style=\"border-radius:10em;width:15%;max-width:125px;min-width:50px;\"",profile_name:" style=\"font-size:1.2em;\"",profile_biography:" style=\"font-size:1em;\"",gallery_image:" style=\"width:100%;\"",gallery_image_link:" style=\"width:"+g+"%; margin:"+c.margin+"%;position:relative; display: inline-block; height: 100%;\""},c.display_captions&&(f+="<style>                    a[data-caption]:hover::after {                        content: attr(data-caption);                        text-align: center;                        font-size: 0.8rem;                        color: black;                        position: absolute;                        left: 0;                        right: 0;                        bottom: 0;                        padding: 1%;                        max-height: 100%;                        overflow-y: auto;                        overflow-x: hidden;                        background-color: hsla(0, 100%, 100%, 0.8);                    }                </style>")}else e={profile_container:"",profile_image:"",profile_name:"",profile_biography:"",gallery_image:"",gallery_image_link:""};if(c.display_profile&&"userid"!==c.type&&(f+="<div class=\"instagram_profile\""+e.profile_container+">",f+="<img class=\"instagram_profile_image\" src=\""+d.profile_pic_url+"\" alt=\""+("tag"==c.type?d.name+" tag pic":d.username+" profile pic")+"\""+e.profile_image+(c.lazy_load?" loading=\"lazy\"":"")+" />","tag"==c.type?f+="<p class=\"instagram_tag\""+e.profile_name+"><a href=\"https://www.instagram.com/explore/tags/"+c.tag+"/\" rel=\"noopener\" target=\"_blank\">#"+c.tag+"</a></p>":"username"==c.type?(f+="<p class='instagram_username'"+e.profile_name+">@"+d.full_name+" (<a href='https://www.instagram.com/"+c.username+"/' rel='noopener' target='_blank'>@"+c.username+"</a>)</p>",c.display_biography&&(f+="<p class='instagram_biography'"+e.profile_biography+">"+d.biography+"</p>")):"location"==c.type&&(f+="<p class='instagram_location'"+e.profile_name+"><a href='https://www.instagram.com/explore/locations/"+c.location+"/' rel='noopener' target='_blank'>"+d.name+"</a></p>"),f+="</div>"),c.display_gallery)if("undefined"!=typeof d.is_private&&!0===d.is_private)f+="<p class=\"instagram_private\"><strong>This profile is private</strong></p>";else{var h="undefined"==typeof j[c.image_size]?j[640]:j[c.image_size],k=(d.edge_owner_to_timeline_media||d.edge_hashtag_to_media||d.edge_location_to_media).edges,l=k.length>c.items?c.items:k.length;f+="<div class='instagram_gallery'>";for(var m=0;m<l;m++){var n,o,p="https://www.instagram.com/p/"+k[m].node.shortcode,q=b(k[m],d);switch(!1===q&&(q=("userid"==c.type?"":c.id)+" image"),q=a(q),k[m].node.__typename){case"GraphSidecar":o="sidecar",n=k[m].node.thumbnail_resources[h].src;break;case"GraphVideo":o="video",n=k[m].node.thumbnail_src;break;default:o="image",n=k[m].node.thumbnail_resources[h].src;}f+="<a href=\""+p+"\""+(c.display_captions?" data-caption=\""+q+"\"":"")+" class=\"instagram-"+o+"\" rel=\"noopener\" target=\"_blank\""+e.gallery_image_link+">",f+="<img"+(c.lazy_load?" loading=\"lazy\"":"")+" src=\""+n+"\" alt=\""+q+"\""+e.gallery_image+" />",f+="</a>"}f+="</div>"}if(c.display_igtv&&"undefined"!=typeof d.edge_felix_video_timeline){var r=d.edge_felix_video_timeline.edges,l=r.length>c.items?c.items:r.length;if(0<r.length){f+="<div class=\"instagram_igtv\">";for(var m=0;m<l;m++){var p="https://www.instagram.com/p/"+r[m].node.shortcode,q=b(r[m],d);!1===q&&(q=("userid"==c.type?"":c.id)+" image"),q=a(q),f+="<a href=\""+p+"\""+(c.display_captions?" data-caption=\""+q+"\"":"")+" rel=\"noopener\" target=\"_blank\""+e.gallery_image_link+">",f+="<img"+(c.lazy_load?" loading=\"lazy\"":"")+" src=\""+r[m].node.thumbnail_src+"\" alt=\""+q+"\""+e.gallery_image+" />",f+="</a>"}f+="</div>"}}c.container.innerHTML=f}var i={host:"https://www.instagram.com/",username:"",tag:"",user_id:"",location:"",container:"",display_profile:!0,display_biography:!0,display_gallery:!0,display_captions:!1,display_igtv:!1,max_tries:8,callback:null,styling:!0,items:8,items_per_row:4,margin:.5,image_size:640,lazy_load:!1,cache_time:360,on_error:console.error},j={150:0,240:1,320:2,480:3,640:4},k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return"function"!=typeof Object.assign&&(Object.assign=function(a){'use strict';if(null==a)throw new TypeError("Cannot convert undefined or null to object");a=Object(a);for(var b,c=1;c<arguments.length;c++)if(b=arguments[c],null!=b)for(var d in b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a}),function(a){this.valid=!1;var b=Object.assign({},i);return(b=Object.assign(b,a),""==b.username&&""==b.tag&&""==b.user_id&&""==b.location)?(b.on_error("Instagram Feed: Error, no username, tag or user_id defined.",1),!1):("undefined"!=typeof a.display_profile&&a.display_profile&&""!=b.user_id&&console.warn("Instagram Feed: 'display_profile' is not available using 'user_id' (GraphQL API)"),"undefined"!=typeof a.display_biography&&a.display_biography&&(""!=b.tag||""!=b.location||""!=b.user_id)&&console.warn("Instagram Feed: 'display_biography' is not available unless you are loading an user ('username' parameter)"),"undefined"!=typeof b.get_data&&console.warn("Instagram Feed: options.get_data is deprecated, options.callback is always called if defined"),null==b.callback&&""==b.container?(b.on_error("Instagram Feed: Error, neither container found nor callback defined.",2),!1):void(""==b.username?""==b.tag?""==b.location?(b.type="userid",b.id=b.user_id):(b.type="location",b.id=b.location):(b.type="tag",b.id=b.tag):(b.type="username",b.id=b.username),b.cache_data_key="instagramFeed_"+b.type+"_"+b.id,b.cache_time_key=b.cache_data_key+"_time",g(b,function(a){""!=b.container&&h(b,a),null!=b.callback&&b.callback(a)}),this.valid=!0))}});

  (function(){
    new InstagramFeed({
      'username': 'nutiva',
      'container': document.getElementById("instagram-feed"),
      'display_profile': false,
      'display_biography': false,
      'display_gallery': true,
      'display_captions': false,
      'max_tries': 3,
      'callback': null,
      'styling': true,
      'items': 3,
      'items_per_row': 3,
      'margin': 1,
      'lazy_load': true,
      'on_error': console.error
    });
  })();

}
/////******* FILTER *********/////


const farray = [];

if (top.location.pathname === '/blogs/recipes' || top.location.pathname === '/blogs/blog' || top.location.pathname === '/blogs/stories' || top.location.pathname === '/blogs/coconutsecret-recipes' || top.location.pathname === '/blogs/coconutsecret-blog' )
{

  $( document ).ready(function() {

      filter();
      $("#stags").on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
          var str = $('#stags').val().toLowerCase();
          console.log(str);
          var add = true
          const index = farray.indexOf(str);
          if (index > -1) {
            add = false
          } 

          if (str != "" & add) { 
            $(".token-template").clone().removeClass("token-template nvis").attr('id', 'tkn' + str.replace(" ","_")).appendTo(".token-container");
            $("#tkn" + str.replace(" ","_")).append(str);
            $("#tkn" + str.replace(" ","_")).append('<span id="' +  str.replace(" ","_") + '" onclick="removetag(this);">X</span>');
            $('#stags').val('');
            farray.push(str);
            filter()
          }
        }
      });
  });
  
}



function removetag(elmnt) {
    $("#tkn" + elmnt.id.replace(" ","_")).remove();
    const index = farray.indexOf(elmnt.id.replace("_"," "));
    if (index > -1) {
      farray.splice(index, 1);
      filter()
    }
}

function filter() {
  
  if (farray.length == 0) {
    $('.paginator').show();
    var limit = page * t_page;
      var start = limit - t_page;
      var totpag = Math.floor(ddata.length / t_page) + 1;
      $('#pagcount').text(page + " / " + totpag)
    
    $('.recipe-grid-wrapper').empty();
    var arrayLength = ddata.length;
    for (var i = start; i < limit; i++) {
    var unit = ddata[i];
      addelmt(unit);
    }
      
  } else {
   $('.paginator').hide();
    $('.recipe-grid-wrapper').empty();
    var add = false;
    var arrayLength = ddata.length;
    var arrayLength2 = farray.length;

    for (var i = 0; i < arrayLength; i++) {
  var unit = ddata[i];
      add = false;	
      for (var z = 0; z < arrayLength2; z++) {
          if (unit["metafields"].includes(farray[z])) {
            add = true;
            break;
        }
          
        if (unit["title"].includes(farray[z])) {
            add = true;
            break;
        }
        
      }
      
      if (add) {
       addelmt(unit);
      }

    }
  
  }

}

function addelmt(unit) {
if (unit == null) return;
  if (unit['image'] != null) {
  
      var nnel = '<div class="recipe-listing"><div class="recipe-list-image">' +
                  '<a href="/blogs/' + unit["template_suffix"] + '/' + unit["handle"] + '" style="background-image: url(' +  unit["image"]["src"] +');"> </a>' +
                '</div>' +  
                '<h6 class="recipe-title"><a href="/blogs/' + unit["template_suffix"] + '/' + unit["handle"] + '">' + unit["title"] + '</a></h6>' +
            '</div>';
  
    $('.recipe-grid-wrapper').append(nnel)
    
  }
  
}
/*function addelmt(unit) {
if (unit == null) return;
  if (unit['image'] != null) {
  
      var nnel = '<div class="recipe-listing"><div class="recipe-list-image">' +
                  '<a href="/news/' + unit["template_suffix"] + '/' + unit["handle"] + '" style="background-image: url(' +  unit["image"]["src"] +');"> </a>' +
                '</div>' +  
                '<h6 class="recipe-title"><a href="/news/' + unit["template_suffix"] + '/' + unit["handle"] + '">' + unit["title"] + '</a></h6>' +
            '</div>';
  
    $('.recipe-grid-wrapper').append(nnel)
    
  }
  
}*/

  function onNext() {
    var totpag = Math.floor(ddata.length / t_page) + 1;
    if (page < totpag) {
  page = page + 1;
       filter();
    }
  }

 function onPrev() {
   if (page > 0) {
  page = page - 1;
     filter();
   }
  }

// Javascript
// jQuery to collapse the navbar on scroll
/*const $window = $(window);

$window.on('scroll', function() {
  let scroll = $window.scrollTop();
  if (scroll > 20) {
    $(".head_logo").addClass("top-nav-collapse");
    //$("img.logo-image").attr('src', "images/master_logo_black.svg");
  } else {
    $(".head_logo").removeClass("top-nav-collapse");
    //$("img.logo-image").attr('src', "images/master_logo_gold.svg")
  }
});*/

