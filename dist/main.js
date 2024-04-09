!function(){"use strict";var e=document.querySelector(".profile__button-edit"),t=document.querySelector(".popup__close-edit"),r=document.querySelector(".profile__info"),n=r.querySelector("#profile__name"),o=r.querySelector("#profile__aboutme"),i=n.textContent,a=o.textContent,s=document.querySelector(".popup__edit"),u=document.querySelector(".form__edit"),c=u.querySelector("#nameUser"),l=u.querySelector("#aboutMe"),p=document.querySelector(".popup__add"),m=document.querySelector(".cards"),d=document.querySelector(".profile__button-add"),_=document.querySelector(".template__card"),f=document.querySelector(".form__add"),h=f.querySelector("#title"),v=f.querySelector("#imageUrl"),y=f.querySelector("#boton__create"),S=document.querySelector(".popup__close-add"),b=document.querySelector(".popup__images"),g=(b.querySelector(".popup__imagen"),b.querySelector(".popup__name"),document.querySelector(".popup__close-images"));function E(e){27!==e.keyCode&&e.target!==s&&e.target!==p&&e.target!==b||(s.classList.remove("popup__opened"),p.classList.remove("popup__opened"),b.classList.remove("popup__opened"))}function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,C(n.key),n)}}function C(e){var t=function(e,t){if("object"!=L(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==L(t)?t:t+""}document.body.addEventListener("keydown",E),s.addEventListener("click",E),p.addEventListener("click",E),b.addEventListener("click",E),d.addEventListener("click",(function(e){p.classList.add("popup__opened")})),f.addEventListener("submit",(function(e){e.preventDefault();var t=new w(h.value,v.value,_);m.prepend(t.generateCard()),p.classList.remove("popup__opened"),f.reset(),y.classList.add("button_inactive")})),S.addEventListener("click",(function(e){p.classList.remove("popup__opened")})),e.addEventListener("click",(function(e){s.classList.add("popup__opened"),c.value=i,l.value=a})),u.addEventListener("submit",(function(e){e.preventDefault(),n.textContent=c.value,o.textContent=l.value,s.classList.remove("popup__opened")})),t.addEventListener("click",(function(e){s.classList.remove("popup__opened")}));var w=function(){return e=function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.link=r,this.templateCard=n},(t=[{key:"_getTemplate",value:function(){this.card=_.cloneNode(!0).content.querySelector(".card")}},{key:"_setProperties",value:function(){this.cardImg=this.card.querySelector(".card__img"),this.cardName=this.card.querySelector(".card__name"),this.cardLike=this.card.querySelector(".card__like"),this.buttonTrash=this.card.querySelector(".card__trash"),this.cardImg.src=this.link,this.cardImg.alt=this.name,this.cardName.textContent=this.name}},{key:"_handleDelete",value:function(){this.card.remove()}},{key:"_handleLike",value:function(){this.cardLike.classList.toggle("card__like-active")}},{key:"_handleOpenImagesPopup",value:function(){this.popupImages=document.querySelector(".popup__images"),this.popupImages.classList.add("popup__opened"),this.popupImagen=this.popupImages.querySelector(".popup__imagen"),this.popupName=this.popupImages.querySelector(".popup__name"),this.popupImagen.src=this.link,this.popupImagen.alt=this.name,this.popupName.textContent=this.name}},{key:"_handleCloseImagesPopup",value:function(){b.classList.remove("popup__opened")}},{key:"_setEventListeners",value:function(){var e=this;this.buttonTrash.addEventListener("click",(function(){e._handleDelete()})),this.cardLike.addEventListener("click",(function(){e._handleLike()})),this.cardImg.addEventListener("click",(function(){e._handleOpenImagesPopup()})),g.addEventListener("click",(function(){e._handleCloseImagesPopup()})),this.regex=/\.(jpeg|jpg|png|gif|svg)$/i,""!==this.cardImg.src&&this.regex.test(this.cardImg.src)||(this.card.style.backgroundColor="#000")}},{key:"generateCard",value:function(){return this._getTemplate(),this._setProperties(),this._setEventListeners(),this.card}}])&&k(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,P(n.key),n)}}function B(e,t,r){return t&&I(e.prototype,t),r&&I(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function j(e,t,r){return(t=P(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){var t=function(e,t){if("object"!=q(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==q(t)?t:t+""}[{name:"Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"},{name:"Colors",link:"https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"},{name:"Birhat",link:"https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"},{name:"Montañas Calvas",link:"https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"},{name:"Parque Nacional",link:"https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"}].forEach((function(e){var t=new w(e.name,e.link,e.templateCard);m.append(t.generateCard())}));var x=B((function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),j(this,"_showInputError",(function(e,t){n.errorElement=n.formElement.querySelector(".".concat(e.id,"-error")),e.classList.add(n.inputErrorClass),n.errorElement.textContent=t,n.errorElement.classList.add(n.errorClass)})),j(this,"_hideInputError",(function(e){n.errorElement=n.formElement.querySelector(".".concat(e.id,"-error")),e.classList.remove(n.inputErrorClass),n.errorElement.classList.remove(n.errorClass),n.errorElement.textContent=""})),j(this,"_checkInputValidity",(function(e){e.validity.valid&&""!=e?n._hideInputError(e):n._showInputError(e,e.validationMessage)})),j(this,"_hasInvalidInput",(function(){return n.inputList.some((function(e){return!e.validity.valid}))})),j(this,"_toggleButtonState",(function(){n._hasInvalidInput(n.inputList)?n.buttonElement.classList.add(n.inactiveButtonClass):n.buttonElement.classList.remove(n.inactiveButtonClass)})),j(this,"_setEventListeners",(function(){n.inputList.forEach((function(e){e.addEventListener("input",(function(){n._checkInputValidity(e),n._toggleButtonState()}))})),n._toggleButtonState()})),j(this,"enableValidation",(function(){n.formList=Array.from(document.querySelectorAll(n.formSelector)),n.formList.forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),n._setEventListeners()}))})),this.formElement=t,this.formSelector=r.formSelector,this.inputSelector=r.inputSelector,this.submitButtonSelector=r.submitButtonSelector,this.inactiveButtonClass=r.inactiveButtonClass,this.inputErrorClass=r.inputErrorClass,this.errorClass=r.errorClass,this.buttonElement=this.formElement.querySelector(r.submitButtonSelector),this.inputList=Array.from(this.formElement.querySelectorAll(this.inputSelector))}));new x(f,{formSelector:".form__add",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error"}).enableValidation(),new x(u,{formSelector:".form__edit",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input_error"}).enableValidation()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixZQUFjQSxFQUNuQjBCLEtBQUt3RCxhQUFlekIsRUFBUXlCLGFBQzVCeEQsS0FBS3lELGNBQWdCMUIsRUFBUTBCLGNBQzdCekQsS0FBSzBELHFCQUF1QjNCLEVBQVEyQixxQkFDcEMxRCxLQUFLaUQsb0JBQXNCbEIsRUFBUWtCLG9CQUNuQ2pELEtBQUtzQyxnQkFBa0JQLEVBQVFPLGdCQUMvQnRDLEtBQUt1QyxXQUFhUixFQUFRUSxXQUMxQnZDLEtBQUtnRCxjQUFnQmhELEtBQUsxQixZQUFZaEIsY0FDcEN5RSxFQUFRMkIsc0JBRVYxRCxLQUFLNkMsVUFBWVEsTUFBTUMsS0FDckJ0RCxLQUFLMUIsWUFBWWlGLGlCQUFpQnZELEtBQUt5RCxlQUUzQyxJQ2VhLElBQUk1QixFQUFjdkQsRUFUbkIsQ0FDZGtGLGFBQWMsYUFDZEMsY0FBZSxlQUNmQyxxQkFBc0IsZ0JBQ3RCVCxvQkFBcUIsa0JBQ3JCWCxnQkFBaUIseUJBQ2pCQyxXQUFZLHNCQUlMb0IsbUJBQ1csSUFBSTlCLEVBQWM5RCxFQXBCckIsQ0FDZnlGLGFBQWMsY0FDZEMsY0FBZSxlQUNmQyxxQkFBc0IsZ0JBQ3RCVCxvQkFBcUIsa0JBQ3JCWCxnQkFBaUIseUJBQ2pCQyxXQUFZLHNCQWVGb0Isa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9qcy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL2pzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuL0NhcmQuanNcIjtcclxuXHJcbi8vIEIgTyBUIE8gTiAgIEEgRyBSIEUgRyBBIFJcclxuY29uc3QgcHJvZmlsZUJ1dHRvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvbi1lZGl0XCIpO1xyXG5jb25zdCBwb3B1cENsb3NlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlLWVkaXRcIik7XHJcbmNvbnN0IHByb2ZpbGVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19pbmZvXCIpO1xyXG5jb25zdCBwcm9maWxlTmFtZXMgPSBwcm9maWxlSW5mby5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfX25hbWVcIik7XHJcbmNvbnN0IHByb2ZpbGVBYm91dFVzID0gcHJvZmlsZUluZm8ucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlX19hYm91dG1lXCIpO1xyXG5jb25zdCBwcm9maWxlTmFtZSA9IHByb2ZpbGVOYW1lcy50ZXh0Q29udGVudDtcclxuY29uc3QgcHJvZmlsZUFib3V0TWUgPSBwcm9maWxlQWJvdXRVcy50ZXh0Q29udGVudDtcclxuXHJcbi8vIE0gTyBEIEEgTCAgIFAgQSBSIEEgICBFIEQgSSBUIEEgUiBGIE8gUiBNIFUgTCBBIFIgSSBPXHJcbmNvbnN0IHBvcHVwRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2VkaXRcIik7XHJcbmV4cG9ydCBjb25zdCBmb3JtRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fZWRpdFwiKTtcclxuZXhwb3J0IGNvbnN0IG5hbWVVc2VyID0gZm9ybUVkaXQucXVlcnlTZWxlY3RvcihcIiNuYW1lVXNlclwiKTtcclxuZXhwb3J0IGNvbnN0IGFib3V0TWUgPSBmb3JtRWRpdC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0TWVcIik7XHJcblxyXG4vLyBNIE8gRCBBIEwgIFAgQSBSIEEgICBBIEcgUiBFIEcgQSBSXHJcbmNvbnN0IHBvcHVwQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fYWRkXCIpO1xyXG5leHBvcnQgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzXCIpO1xyXG4vKiBCIE8gVCBPIE4gICBBIEcgUiBFIEcgQSBSICBJIE0gQSBHIEUgTiBFIFMgICAqL1xyXG5jb25zdCBwcm9maWxlQnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19idXR0b24tYWRkXCIpO1xyXG5leHBvcnQgY29uc3QgdGVtcGxhdGVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wbGF0ZV9fY2FyZFwiKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19hZGRcIik7XHJcbmV4cG9ydCBjb25zdCB0aXRsZSA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XHJcbmV4cG9ydCBjb25zdCBpbWFnZVVybCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1hZ2VVcmxcIik7XHJcbmNvbnN0IGJ1dHRvbkNyZWF0ZSA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm90b25fX2NyZWF0ZVwiKTtcclxuXHJcbi8vIEIgTyBUIE8gTiAgIFAgQSBSIEEgICBDIEUgUiBSIEEgUiAgIEUgTCAgIFAgTyBQIFUgUFxyXG5jb25zdCBwb3B1cENsb3NlQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2xvc2UtYWRkXCIpO1xyXG4vLyBNIE8gUyBUIFIgQSBSICAgTCBBICAgSSBNIEEgRyBFIE4gICBFIE4gIFAgTyBQIFUgUFxyXG5leHBvcnQgY29uc3QgcG9wdXBJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZXNcIik7XHJcbmV4cG9ydCBjb25zdCBwb3B1cEltYWdlbiA9IHBvcHVwSW1hZ2VzLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlblwiKTtcclxuZXhwb3J0IGNvbnN0IHBvcHVwTmFtZSA9IHBvcHVwSW1hZ2VzLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX25hbWVcIik7XHJcbi8vIEIgTyBUIE8gTiAgIEMgRSBSIFIgQSBSICAgSSBNIEEgRyBFIE4gRSBTXHJcbmV4cG9ydCBjb25zdCBwb3B1cENsb3NlSW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2xvc2UtaW1hZ2VzXCIpO1xyXG5cclxuLy9GVU5DSU9OIFBBUkEgQUJSSVIgRUwgRk9STVVMQVJJTyBFRElUXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuUHJvZmlsZUVkaXQoZSkge1xyXG4gIHBvcHVwRWRpdC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfX29wZW5lZFwiKTtcclxuICBuYW1lVXNlci52YWx1ZSA9IHByb2ZpbGVOYW1lO1xyXG4gIGFib3V0TWUudmFsdWUgPSBwcm9maWxlQWJvdXRNZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9maWxlSW5mbyhlKSB7XHJcbiAgLy8gU29sbyBsb3Mgc3VibWl0IGxsZXZhbiBwcmV2ZW50RGVmYXVsdFxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBwcm9maWxlTmFtZXMudGV4dENvbnRlbnQgPSBuYW1lVXNlci52YWx1ZTtcclxuICBwcm9maWxlQWJvdXRVcy50ZXh0Q29udGVudCA9IGFib3V0TWUudmFsdWU7XHJcbiAgcG9wdXBFZGl0LmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9fb3BlbmVkXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQcm9maWxlRWRpdChlKSB7XHJcbiAgcG9wdXBFZGl0LmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9fb3BlbmVkXCIpO1xyXG59XHJcblxyXG4vLyBDRVJSQVIgRUwgUE9QVVAgRURJVEFSL0FHUkVHQVIgQ1VBTkRPIFBSRVNJT05FTiBFU0NBUEUgTyBERU5UUk8gREVMIFBPUFVQXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVBvcHVwKGUpIHtcclxuICBpZiAoXHJcbiAgICBlLmtleUNvZGUgPT09IDI3IHx8XHJcbiAgICBlLnRhcmdldCA9PT0gcG9wdXBFZGl0IHx8XHJcbiAgICBlLnRhcmdldCA9PT0gcG9wdXBBZGQgfHxcclxuICAgIGUudGFyZ2V0ID09PSBwb3B1cEltYWdlc1xyXG4gICkge1xyXG4gICAgcG9wdXBFZGl0LmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9fb3BlbmVkXCIpO1xyXG4gICAgcG9wdXBBZGQuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX19vcGVuZWRcIik7XHJcbiAgICBwb3B1cEltYWdlcy5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfX29wZW5lZFwiKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEEgRyBSIEUgRyBBIFIgICBUIEEgUiBKIEUgVCBBIFMgICBEIEUgICBJIE0gQSBHIEUgTiBFIFNcclxuZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvbkFkZENhcmRzKGUpIHtcclxuICBwb3B1cEFkZC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfX29wZW5lZFwiKTtcclxufVxyXG5cclxuLy8gRUxJTUlOQVIgUE9QVVAgRk9STVVMQVJJTyBDQVJEU1xyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VGb3JtQWRkKGUpIHtcclxuICBwb3B1cEFkZC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfX29wZW5lZFwiKTtcclxufVxyXG5cclxuLy8gRiBVIE4gQyBJIE8gTiAgIEEgRyBSIEUgRyBBIFIgICBUIEEgUiBKIEUgVCBBXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDYXJkcyhlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGFkZENhcmQgPSBuZXcgQ2FyZCh0aXRsZS52YWx1ZSwgaW1hZ2VVcmwudmFsdWUsIHRlbXBsYXRlQ2FyZCk7XHJcbiAgLy8gQSDDkSBBIEQgRSAgIEwgQSAgIFQgQSBSIEogRSBUIEEgICBBIEwgIFAgUiBJIE4gQyBJIFAgSSBPICAgQyBPIE4gUFJFUEVORFxyXG4gIGNhcmRzLnByZXBlbmQoYWRkQ2FyZC5nZW5lcmF0ZUNhcmQoKSk7XHJcbiAgcG9wdXBBZGQuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX19vcGVuZWRcIik7XHJcbiAgZm9ybUVsZW1lbnQucmVzZXQoKTtcclxuICBidXR0b25DcmVhdGUuY2xhc3NMaXN0LmFkZChcImJ1dHRvbl9pbmFjdGl2ZVwiKTtcclxufVxyXG4vLyBDbG9zZSBQb3B1cFxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlUG9wdXApO1xyXG5wb3B1cEVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUG9wdXApO1xyXG5wb3B1cEFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQb3B1cCk7XHJcbnBvcHVwSW1hZ2VzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcHVwKTtcclxuXHJcbnByb2ZpbGVCdXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1dHRvbkFkZENhcmRzKTtcclxuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGRDYXJkcyk7XHJcbnBvcHVwQ2xvc2VBZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybUFkZCk7XHJcblxyXG5wcm9maWxlQnV0dG9uRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblByb2ZpbGVFZGl0KTtcclxuZm9ybUVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzYXZlUHJvZmlsZUluZm8pO1xyXG5wb3B1cENsb3NlRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQcm9maWxlRWRpdCk7IiwiaW1wb3J0IHtcclxuICAgIHRlbXBsYXRlQ2FyZCxwb3B1cENsb3NlSW1hZ2VzLCBwb3B1cEltYWdlcywgY2FyZHNcclxuICB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XHJcbiAgXHJcbiAgLy8gQyBBIFIgRyBBIFIgICBJIE0gQSBHIEUgTiBFIFMgIEkgTiBJIEMgSSBBIEwgRSBTICAgQSAgIEggVCBNIExcclxuICBleHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk1vdW50YWluc1wiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vbmV3LW1hcmtldHMvV0VCX3NwcmludF81L0VTL2xhZ28uanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNvbG9yc1wiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vbmV3LW1hcmtldHMvV0VCX3NwcmludF81L0VTL3Zhbm9pc2UuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkJpcmhhdFwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vbmV3LW1hcmtldHMvV0VCX3NwcmludF81L0VTL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJNb250YcOxYXMgQ2FsdmFzXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvYmFsZC1tb3VudGFpbnMuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBhcnF1ZSBOYWNpb25hbFwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vbmV3LW1hcmtldHMvV0VCX3NwcmludF81L0VTL3Zhbm9pc2UuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvbGFnby5qcGdcIixcclxuICAgIH0sXHJcbiAgXTtcclxuICBcclxuICBleHBvcnQgY2xhc3MgQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsaW5rLCB0ZW1wbGF0ZUNhcmQpIHtcclxuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5saW5rID0gbGluaztcclxuICAgICAgdGhpcy50ZW1wbGF0ZUNhcmQgPSB0ZW1wbGF0ZUNhcmQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBfZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgIHRoaXMuY2FyZCA9IHRlbXBsYXRlQ2FyZC5jbG9uZU5vZGUodHJ1ZSkuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBfc2V0UHJvcGVydGllcygpIHtcclxuICAgICAgdGhpcy5jYXJkSW1nID0gdGhpcy5jYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1nXCIpO1xyXG4gICAgICB0aGlzLmNhcmROYW1lID0gdGhpcy5jYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbmFtZVwiKTtcclxuICAgICAgdGhpcy5jYXJkTGlrZSA9IHRoaXMuY2FyZC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2VcIik7XHJcbiAgICAgIHRoaXMuYnV0dG9uVHJhc2ggPSB0aGlzLmNhcmQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190cmFzaFwiKTtcclxuICBcclxuICAgICAgdGhpcy5jYXJkSW1nLnNyYyA9IHRoaXMubGluaztcclxuICAgICAgdGhpcy5jYXJkSW1nLmFsdCA9IHRoaXMubmFtZTtcclxuICAgICAgdGhpcy5jYXJkTmFtZS50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIEhhbmRsZXIgY3VhbmRvIHNlIGVqZWN1dGEgdW5hIGZ1bmNpw7NuXHJcbiAgICBfaGFuZGxlRGVsZXRlKCkge1xyXG4gICAgICB0aGlzLmNhcmQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBfaGFuZGxlTGlrZSgpIHtcclxuICAgICAgdGhpcy5jYXJkTGlrZS5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1hY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBFIFYgRSBOIFQgTyAgIFAgQSBSIEEgICBNIE8gUyBUIFIgQSBSICAgTCBBICAgSSBNIEEgRyBFIE4gICBTIEUgTCBFIEMgQyBJIE8gTiBBIEQgQVxyXG4gICAgX2hhbmRsZU9wZW5JbWFnZXNQb3B1cCgpIHtcclxuICAgICAgdGhpcy5wb3B1cEltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlc1wiKTtcclxuICAgICAgdGhpcy5wb3B1cEltYWdlcy5jbGFzc0xpc3QuYWRkKFwicG9wdXBfX29wZW5lZFwiKTtcclxuICAgICAgdGhpcy5wb3B1cEltYWdlbiA9IHRoaXMucG9wdXBJbWFnZXMucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2VuXCIpO1xyXG4gICAgICB0aGlzLnBvcHVwTmFtZSA9IHRoaXMucG9wdXBJbWFnZXMucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fbmFtZVwiKTtcclxuICAgICAgdGhpcy5wb3B1cEltYWdlbi5zcmMgPSB0aGlzLmxpbms7XHJcbiAgICAgIHRoaXMucG9wdXBJbWFnZW4uYWx0ID0gdGhpcy5uYW1lO1xyXG4gICAgICB0aGlzLnBvcHVwTmFtZS50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIEUgViBFIE4gVCBPICAgUCBBIFIgQSAgIEMgRSBSIFIgQSBSICAgTCBBICAgSSBNIEEgRyBFIE4gICBTIEUgTCBFIEMgQyBJIE8gTiBBIEQgQVxyXG4gICAgX2hhbmRsZUNsb3NlSW1hZ2VzUG9wdXAoKSB7XHJcbiAgICAgIHBvcHVwSW1hZ2VzLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9fb3BlbmVkXCIpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gU2V0RXZlbnRMaXN0ZW5lciwgRXN0YWJsZWNlIGxvcyBldmVudG9zLT5TZSBjcmVhbiBsb3MgZXZlbnRvc1xyXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICB0aGlzLmJ1dHRvblRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRGVsZXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNhcmRMaWtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlTGlrZSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jYXJkSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlT3BlbkltYWdlc1BvcHVwKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBwb3B1cENsb3NlSW1hZ2VzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ2xvc2VJbWFnZXNQb3B1cCgpO1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgdGhpcy5yZWdleCA9IC9cXC4oanBlZ3xqcGd8cG5nfGdpZnxzdmcpJC9pO1xyXG4gICAgICBpZiAodGhpcy5jYXJkSW1nLnNyYyA9PT0gXCJcIiB8fCAhdGhpcy5yZWdleC50ZXN0KHRoaXMuY2FyZEltZy5zcmMpKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAwMFwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZUNhcmQoKSB7XHJcbiAgICAgIHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgICAgIHRoaXMuX3NldFByb3BlcnRpZXMoKTtcclxuICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICBcclxuICAgICAgcmV0dXJuIHRoaXMuY2FyZDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQyBBIFIgRyBBIE4gRCBPICAgSSBNIEEgRyBFIE4gRSBTICBFIE4gICBFIEwgICBDIE8gTiBUIEEgSSBOIEUgUlxyXG4gIGluaXRpYWxDYXJkcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoaXRlbS5uYW1lLCBpdGVtLmxpbmssIGl0ZW0udGVtcGxhdGVDYXJkKTtcclxuICAgIGNhcmRzLmFwcGVuZChjYXJkLmdlbmVyYXRlQ2FyZCgpKTtcclxuICB9KTtcclxuICBcclxuICBcclxuICAvKiBhYnN0cmFjY2lvblxyXG4gICAgQ0FQQVNcclxuICAgIHVuIGNsb24gZGUgdGFyamV0YVxyXG4gICAgdW5hIGltYWdlbiBjb24gbGlua1xyXG4gICAgdW4gdGV4dG9cclxuICAgIHVuYSBpbWFnZW4gZGUgYm90ZSBkZSBiYXN1cmFcclxuICAgIHVuIGxpa2VcclxuICAgICoqTUVUT0RPUyoqXHJcbiAgICBtZXRvZG8gcGFyYSBkYXJsZSBsaWtlIGEgbGEgdGFyamV0YVxyXG4gICAgbWV0b2RvIHBhcmEgYWdyZWdhciB0YXJqZXRhXHJcbiAgICBtZXRvZG8gcGFyYSByZW1vdmVyIHRhcmpldGFcclxuICAqL1xyXG4gICIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGZvcm1FbGVtZW50LCBzZXR0aW5nKSB7XHJcbiAgICAgIHRoaXMuZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcclxuICAgICAgdGhpcy5mb3JtU2VsZWN0b3IgPSBzZXR0aW5nLmZvcm1TZWxlY3RvcjtcclxuICAgICAgdGhpcy5pbnB1dFNlbGVjdG9yID0gc2V0dGluZy5pbnB1dFNlbGVjdG9yO1xyXG4gICAgICB0aGlzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgICAgdGhpcy5pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgICB0aGlzLmlucHV0RXJyb3JDbGFzcyA9IHNldHRpbmcuaW5wdXRFcnJvckNsYXNzO1xyXG4gICAgICB0aGlzLmVycm9yQ2xhc3MgPSBzZXR0aW5nLmVycm9yQ2xhc3M7XHJcbiAgICAgIHRoaXMuYnV0dG9uRWxlbWVudCA9IHRoaXMuZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBzZXR0aW5nLnN1Ym1pdEJ1dHRvblNlbGVjdG9yXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuaW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcclxuICAgICAgICB0aGlzLmZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5pbnB1dFNlbGVjdG9yKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgX3Nob3dJbnB1dEVycm9yID0gKGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgIHRoaXMuZXJyb3JFbGVtZW50ID0gdGhpcy5mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxyXG4gICAgICApO1xyXG4gICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICAgIHRoaXMuZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgICB0aGlzLmVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZXJyb3JDbGFzcyk7XHJcbiAgXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgX2hpZGVJbnB1dEVycm9yID0gKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLmVycm9yRWxlbWVudCA9IHRoaXMuZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcclxuICAgICAgKTtcclxuICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgICB0aGlzLmVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZXJyb3JDbGFzcyk7XHJcbiAgICAgIHRoaXMuZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIH07XHJcbiAgXHJcbiAgICBfY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCB8fCBpbnB1dEVsZW1lbnQgPT0gXCJcIikge1xyXG4gICAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgX2hhc0ludmFsaWRJbnB1dCA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5wdXRMaXN0LnNvbWUoKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBfdG9nZ2xlQnV0dG9uU3RhdGUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQodGhpcy5pbnB1dExpc3QpKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgZW5hYmxlVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICAgICAgdGhpcy5mb3JtTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmZvcm1TZWxlY3RvcikpO1xyXG4gICAgICB0aGlzLmZvcm1MaXN0LmZvckVhY2goKGZvcm1FbGVtZW50KSA9PiB7XHJcbiAgICAgICAgZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9XHJcbiAgIiwiLy8gSW1wb3J0YW5kbyBob2phcyBkZSBlc3RpbG9cclxuaW1wb3J0IFwiLi4vcGFnZXMvaW5kZXguY3NzXCI7IFxyXG5cclxuLy8gSW1wb3J0YW5kbyBjbGFzZXNcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuL0NhcmQuanNcIjtcclxuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gXCIuL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IHtcclxuICBmb3JtRWxlbWVudCxcclxuICBmb3JtRWRpdCxcclxufSBmcm9tIFwiLi91dGlscy5qc1wiO1xyXG5cclxuLy8gTyBCIEogRSBUIE8gUyAgIEQgRSAgIFYgQSBMIE8gUiBFIFMgICBEIEkgTiBBIE0gSSBDIE8gU1xyXG5jb25zdCBzYXZlRm9ybSA9IHtcclxuICBmb3JtU2VsZWN0b3I6IFwiLmZvcm1fX2VkaXRcIixcclxuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtX19idXR0b25cIixcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcImJ1dHRvbl9pbmFjdGl2ZVwiLFxyXG4gIGlucHV0RXJyb3JDbGFzczogXCJmb3JtX19pbnB1dF90eXBlX2Vycm9yXCIsXHJcbiAgZXJyb3JDbGFzczogXCJmb3JtX19pbnB1dF9lcnJvclwiLFxyXG59O1xyXG5cclxuY29uc3QgYWRkRm9ybSA9IHtcclxuICBmb3JtU2VsZWN0b3I6IFwiLmZvcm1fX2FkZFwiLFxyXG4gIGlucHV0U2VsZWN0b3I6IFwiLmZvcm1fX2lucHV0XCIsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLmZvcm1fX2J1dHRvblwiLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiYnV0dG9uX2luYWN0aXZlXCIsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiBcImZvcm1fX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICBlcnJvckNsYXNzOiBcImZvcm1fX2lucHV0LWVycm9yXCIsXHJcbn07XHJcbi8vIEluc3RhbmNpYXMgZGUgZm9ybVZhbGlkYXRvclxyXG5jb25zdCBmb3JtQ2FyZCA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1FbGVtZW50LCBhZGRGb3JtKTtcclxuZm9ybUNhcmQuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5jb25zdCBmb3JtUHJvZmlsZSA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1FZGl0LCBzYXZlRm9ybSk7XHJcbmZvcm1Qcm9maWxlLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbiJdLCJuYW1lcyI6WyJwcm9maWxlQnV0dG9uRWRpdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBvcHVwQ2xvc2VFZGl0IiwicHJvZmlsZUluZm8iLCJwcm9maWxlTmFtZXMiLCJwcm9maWxlQWJvdXRVcyIsInByb2ZpbGVOYW1lIiwidGV4dENvbnRlbnQiLCJwcm9maWxlQWJvdXRNZSIsInBvcHVwRWRpdCIsImZvcm1FZGl0IiwibmFtZVVzZXIiLCJhYm91dE1lIiwicG9wdXBBZGQiLCJjYXJkcyIsInByb2ZpbGVCdXR0b25BZGQiLCJ0ZW1wbGF0ZUNhcmQiLCJmb3JtRWxlbWVudCIsInRpdGxlIiwiaW1hZ2VVcmwiLCJidXR0b25DcmVhdGUiLCJwb3B1cENsb3NlQWRkIiwicG9wdXBJbWFnZXMiLCJwb3B1cENsb3NlSW1hZ2VzIiwiY2xvc2VQb3B1cCIsImUiLCJrZXlDb2RlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZENhcmQiLCJDYXJkIiwidmFsdWUiLCJwcmVwZW5kIiwiZ2VuZXJhdGVDYXJkIiwicmVzZXQiLCJuYW1lIiwibGluayIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJrZXkiLCJjYXJkIiwiY2xvbmVOb2RlIiwiY29udGVudCIsImNhcmRJbWciLCJjYXJkTmFtZSIsImNhcmRMaWtlIiwiYnV0dG9uVHJhc2giLCJzcmMiLCJhbHQiLCJ0b2dnbGUiLCJwb3B1cEltYWdlbiIsInBvcHVwTmFtZSIsIl90aGlzIiwiX2hhbmRsZURlbGV0ZSIsIl9oYW5kbGVMaWtlIiwiX2hhbmRsZU9wZW5JbWFnZXNQb3B1cCIsIl9oYW5kbGVDbG9zZUltYWdlc1BvcHVwIiwicmVnZXgiLCJ0ZXN0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJfZ2V0VGVtcGxhdGUiLCJfc2V0UHJvcGVydGllcyIsIl9zZXRFdmVudExpc3RlbmVycyIsImZvckVhY2giLCJpdGVtIiwiYXBwZW5kIiwiRm9ybVZhbGlkYXRvciIsIl9jcmVhdGVDbGFzcyIsInNldHRpbmciLCJfZGVmaW5lUHJvcGVydHkiLCJpbnB1dEVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJjb25jYXQiLCJpZCIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hpZGVJbnB1dEVycm9yIiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJpbnB1dExpc3QiLCJzb21lIiwiX2hhc0ludmFsaWRJbnB1dCIsImJ1dHRvbkVsZW1lbnQiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImZvcm1MaXN0IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvcm1TZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImVuYWJsZVZhbGlkYXRpb24iXSwic291cmNlUm9vdCI6IiJ9