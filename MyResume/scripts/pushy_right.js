/*! Pushy - v0.9.1 - 2013-9-16
* Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.
* https://github.com/christophery/pushy/
* by Christopher Yee */

$(window).load(function () {
    var e = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        e = true
    }
    
    if (e == false) {
        menuBtn = $('.menu-btn') //css classes to toggle the menu
        
    } else {
        menuBtn = $('.menu-btn, .pushy a') //css classes to toggle the menu
    }


$(function() {
	var pushy = $('.pushy-right'), //menu css class
		body = $('body'),
		container = $('#wrapper'), //container css class
		container2 = $('section#home'), //container css class
		push = $('.push'), //css class to add pushy capability
		siteOverlay = $('.site-overlay'), //site overlay
		pushyClass = "pushy-right pushy-open-right", //menu position & menu open class
		pushyActiveClass = "pushy-active", //css class to toggle site overlay
		containerClass = "container-push", //container open class
		pushClass = "push-push", //css class to add pushy capability
		//menuBtn = $('.menu-btn'), //css classes to toggle the menu (customized for smartphone)
		menuSpeed = 200, //jQuery fallback menu speed
		menuWidth = pushy.width() + "px"; //jQuery fallback menu width

	function togglePushy(){
		body.toggleClass(pushyActiveClass); //toggle site overlay
		pushy.toggleClass(pushyClass);
		container.toggleClass(containerClass);
		container2.toggleClass(containerClass);
		push.toggleClass(pushClass); //css class to add pushy capability
	}

	function openPushyFallback(){
		body.addClass(pushyActiveClass);
		pushy.animate({right: "0px"}, menuSpeed);
		container.animate({right: menuWidth}, menuSpeed);
		push.animate({right: menuWidth}, menuSpeed); //css class to add pushy capability
	}

	function closePushyFallback(){
		body.removeClass(pushyActiveClass);
		pushy.animate({right: "-" + menuWidth}, menuSpeed);
		container.animate({right: "0px"}, menuSpeed);
		push.animate({right: "0px"}, menuSpeed); //css class to add pushy capability
	}

	if(Modernizr.csstransforms3d){
		//toggle menu
		menuBtn.click(function() {
			togglePushy();
		});
		//close menu when clicking site overlay
		siteOverlay.click(function(){ 
			togglePushy();
		});
	}else{
		//jQuery fallback
		pushy.css({right: "-" + menuWidth}); //hide menu by default
		container.css({"overflow-x": "hidden"}); //fixes IE scrollbar issue
		

		//keep track of menu state (open/close)
		var state = true;

		//toggle menu
		menuBtn.click(function() {
			if (state) {
				openPushyFallback();
				state = false;
			} else {
				closePushyFallback();
				state = true;
			}
		});

		//close menu when clicking site overlay
		siteOverlay.click(function(){ 
			if (state) {
				openPushyFallback();
				state = false;
			} else {
				closePushyFallback();
				state = true;
			}
		});
	}
});

});