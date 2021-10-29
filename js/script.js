"use strict"


//ibg photo ======================================================================================
function ibg(){
	let ibg=document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
  }
}
ibg();
//=====================================================================================================

// Меню бургер на чистом JS =======================================================================
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
//====================================================================================

// slick slider ============================================================
$(document).ready(function(){
	$('.main-slider').slick({
		dots:true,
		arrows:false,
		slidesToShow:1,
		speed:300,
		easing:'ease',
		touchThreshold:10,
		responsive:[
			{
				breakpoint:767,
				settings: {
					slidesToShow:1,
					adaptiveHeight:true,
				}
			}
		]

	});

	$('.slider-big').slick({
		dots:false,
		adaptiveHeight:true,
		fade: true,
		arrows:false,
		slidesToShow:1,
		speed:300,
		easing:'ease',
		touchThreshold:10,
		asNavFor: '.slider-min',
		responsive:[
			{

			}
		]

	});

	$('.slider-min').slick({
		asNavFor: '.slider-big',
		dots:false,
		arrows:true,
		centerMode: true,
        centerPadding: '0px',
		slidesToShow:3,
		speed:300,
		easing:'ease',
		 focusOnSelect: true,
		touchThreshold:10,
		responsive:[
			{

			}
		]

	});

});

//=========================================================================


//Spoiler ============================================================
/*
$(document).ready(function(){
	$('.tabs-spol__title').click(function(event){
		if($('.tabs-spol').hasClass('_one')){
			$('.tabs-spol__title').not($(this)).removeClass('_show');
			$('.tabs-spol__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('show').next().slideToggle(300);
	});
});
*/
//=========================================================================


// Прокрутка при клике ====================================================================

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length>0) {
	menuLinks.forEach(menuLink =>{
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e){
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top+pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
//===========================================================================================
// Tabs ==============================================================
/*
$('.tabs__item').click(function(event){
	$(this).addClass('_open').siblings().removeClass('_open')
	$(this).closest('.tabs').find('.tabs__text').removeClass('_open').eq($(this).index()).addClass('_open');
});
*/
//===============================================================