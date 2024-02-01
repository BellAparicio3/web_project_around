//Creando variables para obtener los datos y escuchar lo que hace el usuario en la página
const profile__button_edit = document.querySelector(".profile__button-edit");
// boton de me gusta
const card__like = document.querySelector(".card__like");
// boton para guardar los datos
const boton__save = document.querySelector("#boton__save");
//boton para cerrar
const popup__close = document.querySelector(".popup__close");

// Campos que aparecen en la pantalla
// Campos del area donde se encuentran los datos con los que se van a trabajar
const profile__info = document.querySelector(".profile__info");
// Lo que realiza innerHTML es devolver el contenido de HTML dentro de un elemento
const profile__name = profile__info.querySelector(".profile__info-name");
const profile__about_me = profile__info.querySelector(".profile__info-about");
const profileName = profile__name.textContent;
const profileAboutMe = profile__about_me.textContent;

// modal
const popup = document.querySelector(".popup");
// formulario
const form = document.querySelector(".popup__form");
// Campos en el formulario
const name__user = popup.querySelector(".form__input-name");
const about__me = popup.querySelector(".form__input-aboutme");

/* -Una vez que el usuario de click en el boton para editar se debe de mostrar el formulario,
los campos de nombre y acerca de mi deben de rellenarse con los valores que aparecen en la página 
(debo de traer los datos que aparecen en la pagina principal).*/

// Escuchando cuando el usuario pulsa el boton de editar para que se muestre sobre la pantalla
profile__button_edit.addEventListener("click", (e) => {
  // preventDefault previene que se ejecute en automatico
  e.preventDefault();
  popup.classList.add("popup_opened");
  //los valores de html se agregan al formulario del modal
  name__user.value = profileName;
  about__me.value = profileAboutMe;
});

/*
-Se deberá editar los campos nombre y acerca de mi. Una vez que el usuario
introduzca nueva informacion  y haga click en el boton "SAVE"
si el usuario dio click en el boton SAVE se deberan guardar en los campos correspondientes.
Asi la pagina debe de actualizarse para reflejar los cambios realizados. */
/*Los datos que se encuentren en las variables del nombre y de acerca de mi, deben de mostrarse en los inputs */

boton__save.addEventListener("click", (e) => {
  e.preventDefault();

  profile__name.textContent = name__user.value;
  profile__about_me.textContent = about__me.value;
  popup.classList.remove("popup_opened");
});

/*-Para cerrar el cuadro emergente, elimina el modificador popup_opened del mismo.*/
opup__close.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.remove("popup_opened");
});

/*Cuando se de click en el like debe de cambiar de color */
card__like.addEventListener("click", (e) => {
  e.preventDefault();
  card__like.src = "../images/heart_black.png";
});
