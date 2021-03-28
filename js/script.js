let dropdown = document.querySelector('.dropdown');
let togglePages = document.querySelector('.togglePages');
togglePages.onclick = function() {
	dropdown.classList.toggle('dropdown__active');
}
// Табы
let tabBtn = document.querySelectorAll('.tab-btn');
let tabItem = document.querySelectorAll('.comments__item');
tabBtn.forEach(function(item){
	item.addEventListener('click', function(){
		let currentBtn = item;
		let tabContent = currentBtn.getAttribute("data-tab");
		tabBtn.forEach(function(item){
			item.classList.remove('tab-btn-active');
		})
		tabItem.forEach(function(item){
			if (item.classList.contains(tabContent)) {
				item.classList.add('tab-active');
			}else {
				item.classList.remove('tab-active');
			}
		})
		currentBtn.classList.add('tab-btn-active');
	});

});
// Select в блоке form
let selectItem = document.querySelectorAll('.select__item');
let selecTitle = document.querySelector('.form__select__title');
let selectDropdown = document.querySelector('.select__dropdown');
let formValue = document.querySelector('.form__option');
let formSelect = document.querySelector('.form__select');
formSelect.onclick = function(){
	selectDropdown.classList.toggle('selectDropdownActive');
}
for(let i = 0;i<selectItem.length;i++){
	selectItem[i].onclick = function(){
		selecTitle.innerHTML = selectItem[i].innerHTML;
		formValue.value = selectItem[i].innerHTML;
	}
}
// Табы на блоке с новостями
let newsTab = document.querySelectorAll('.news__tab');
let newsItem = document.querySelectorAll('.news__tab__content');
newsTab.forEach(function(item){
	item.addEventListener('click', function(){
		let currentBtn = item;
		let tabContent = currentBtn.getAttribute("news-tab");
		newsTab.forEach(function(item){
			item.classList.remove('news__tab__active');
		})
		newsItem.forEach(function(item){
			if (item.classList.contains(tabContent)) {
				item.classList.add('news__item__active');
			}else {
				item.classList.remove('news__item__active');
			}
		})
		currentBtn.classList.add('news__tab__active');
	});

});
// табы на footer е
let footerBtn = document.querySelectorAll('.footer__target');
let footerInner = document.querySelectorAll('.footer__inner');
footerBtn.forEach(function(item){
	item.addEventListener('click', function(){
		let currentBtn = item;
		let tabContent = currentBtn.getAttribute('tab-num');
		footerBtn.forEach(function(item){
			item.classList.remove('footer-target-active');
		})
		footerInner.forEach(function(item){
			if (item.classList.contains(tabContent)) {
				item.classList.add('footer-tab-active');
			}else {
				item.classList.remove('footer-tab-active');
			}
		})
		currentBtn.classList.add('footer-target-active');
	});

});
// Бургер меню
let burgerHold = document.querySelector('.burger__hold');
let burgerWrap = document.querySelector('.burger__wrap');
let headerRight = document.querySelector('.header__right');
burgerHold.onclick = function(){
	let dropdown = document.querySelector('.dropdown');
	let burgerTop = document.querySelector('.burger-top');
	let burgerCenter = document.querySelector('.burger-middle');
	let burgerBottom = document.querySelector('.burger-bottom');
	burgerTop.classList.toggle('burgerAnimation');
	burgerCenter.classList.toggle('burgerAnimation2');
	burgerBottom.classList.toggle('burgerAnimation3');
	burgerWrap.classList.toggle('burger__wrap__active');
	headerRight.classList.toggle('header__right__active');
	dropdown.classList.remove('dropdown__active');
}
