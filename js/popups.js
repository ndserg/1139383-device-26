'use strict';
/*popup contact form*/
var link_message = document.querySelector(".write-us-button");

var popup_message = document.querySelector(".write-us");
var close_message = popup_message.querySelector(".write-us-close");

var form = popup_message.querySelector("form");
var user_name = popup_message.querySelector("[name=user-name]");
var email = popup_message.querySelector("[name=user-email]");
var comment = popup_message.querySelector("[name=user-comment]");

link_message.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup_message.classList.add("write-us-show");
	user_name.focus();
});

close_message.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup_message.classList.remove("write-us-show");
	popup_message.classList.remove("write-us-error");
});

form.addEventListener("submit", function (evt) {
	if (!user_name.value || !email.value || !comment.value) {
	evt.preventDefault();
	popup_message.classList.remove("write-us-error");
	popup_message.offsetWidth = popup_message.offsetWidth;
	popup_message.classList.add("write-us-error");
	}
});
/*popup contact form end*/

/*popup map*/
var link_map = document.querySelector(".map-link");
var popup_map = document.querySelector(".popup-map");
var close_map = popup_map.querySelector(".map-close");

link_map.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup_map.classList.add("map-show");
});

close_map.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup_map.classList.remove("map-show");
});
/*popup map end*/

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup_message.classList.contains("write-us-show")) {
			popup_message.classList.remove("write-us-show");
			popup_message.classList.remove("write-us-error");
		};
		if (popup_map.classList.contains("map-show")) {
			popup_map.classList.remove("map-show")
		}
	}
});