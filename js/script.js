//Creando variables para obtener los datos y escuchar lo que hace el usuario en la página
// B O T O N   A G R E G A R
const profile__button_edit = document.querySelector(".profile__button-edit");
// B O T O N   G U A R D A R (EDIT)
const botonSaveEdit = document.querySelector("#boton__save-edit");
//B O T O N   C E R R A R (EDIT)
const popup__close_edit = document.querySelector(".popup__close-edit");
// Campos que aparecen en la pantalla
// Campos del area donde se encuentran los datos con los que se van a trabajar
const profile__info = document.querySelector(".profile__info");
// Lo que realiza innerHTML es devolver el contenido de HTML dentro de un elemento
const profile__name = profile__info.querySelector(".profile__info-name");
const profile__about_me = profile__info.querySelector(".profile__info-about");
const profileName = profile__name.textContent;
const profileAboutMe = profile__about_me.textContent;

// M O D A L   P A R A   E D I T A R F O R M U L A R I O
const popupEdit = document.querySelector(".popup__edit");
// Campos en el formulario edit
const name__user = popupEdit.querySelector(".form__input-name");
const about__me = popupEdit.querySelector(".form__input-aboutme");

/* B O T O N   A G R E G A R  I M A G E N E S   */
// Accediendo a los elementos html
const profile__button_add = document.querySelector(".profile__button-add");
const botonCreate = document.querySelector("#boton__create");
const title = document.querySelector(".form__input-title");
const imageUrl = document.querySelector(".form__input-imageurl");

// M O D A L  P A R A   A G R E G A R 
const popupAdd = document.querySelector(".popup__add");
// Campos del formulario add
const templateCard = document.querySelector(".template__card");
const cards = document.querySelector(".cards");
// B O T O N   P A R A   C E R R A R   E L   P O P U P 
const popup__close_add = document.querySelector(".popup__close-add");

// M O S T R A R   L A   I M A G E N   E N  P O P U P 
const popupImages = document.querySelector(".popup__images");
// B O T O N   C E R R A R   I M A G E N E S 
const popup__close_images = document.querySelector(".popup__close-images");

/* -Una vez que el usuario de click en el boton para editar se debe de mostrar el formulario,
los campos de nombre y acerca de mi deben de rellenarse con los valores que aparecen en la página 
(debo de traer los datos que aparecen en la pagina principal).*/

// Escuchando cuando el usuario pulsa el boton de editar para que se muestre sobre la pantalla
profile__button_edit.addEventListener("click", (e) => {
  // preventDefault previene que se ejecute en automatico
  e.preventDefault();
  popupEdit.classList.add("popup__opened");
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

// Si se manda a llamar al formulario se puedo utilizar SUBMIT y no click
botonSaveEdit.addEventListener("click", (e) => {
  e.preventDefault();

  profile__name.classList.add("profile__info-letra");
  profile__name.textContent = name__user.value;
  profile__about_me.classList.add("profile__info-letra");
  profile__about_me.textContent = about__me.value;
<<<<<<< HEAD
  popupEdit.classList.remove("popup__opened");
=======

  popup.classList.remove("popup_opened");
>>>>>>> 79946f458c12622c38cd46c44caf4de0bec9f2bc
});

/*-Para cerrar el cuadro emergente, elimina el modificador popup_opened del mismo.*/
popup__close_edit.addEventListener("click", (e) => {
  e.preventDefault();
  popupEdit.classList.remove("popup__opened");
});

<<<<<<< HEAD
// A G R E G A R   T A R J E T A S   D E   I M A G E N E S 

// BUTTON ADD MUESTRA POPUP FORMULARIO PARA AGREGAR TITULO Y URL
profile__button_add.addEventListener("click", (e) => {
  // preventDefault previene que se ejecute en automatico
  e.preventDefault();
  popupAdd.classList.add("popup__opened");
=======
/*Cuando se de click en el like debe de cambiar de color */
card__like.addEventListener("click", (evt) => {
  evt.preventDefault();
  evt.target.classList.toggle("card__like-active");
>>>>>>> 79946f458c12622c38cd46c44caf4de0bec9f2bc
});

// BUTTON CLOSE CIERRA EL POPUP FORMULARIO
popup__close_add.addEventListener("click", (e) => {
  e.preventDefault();
  popupAdd.classList.remove("popup__opened");
});

// C A R G A R   I M A G E N E S  I N I C I A L E S   A   H T M L 

const initialCards = [
  {
    name: "Mountains",
    link: "../images/mountains_people.jpg",
  },
  {
    name: "Colors",
    link: "../images/colors.jpg",
  },
  {
    name: "Birhat",
    link: "../images/birhat.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Parque Nacional",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// F U N C I O N   P A R A   A G R E G A R  I M A G E N E S
function cargandoImagenes(titulo, link) {
  // CADA ELEMENTO DE LA TARJETA CORRESPONDE A UNA TARJETA
  const card = templateCard.cloneNode(true).content.querySelector(".card");
  // IMAGEN DE LA TARJETA
  const cardImg = card.querySelector(".card__img"); //creacion de elemento img
  // TEXTO DE LA TARJETA
  const cardName = card.querySelector(".card__name"); //creacion de elemento p titulo de la tarjeta
  // B O T O N   M E   G U S T A
  const cardLike = card.querySelector(".card__like");
  // B O T O N   E L I M I N A R
  const botonTrash = card.querySelector(".card__trash");
  //AGREGANDO LOS DATOS
  cardImg.src = link; //Ruta de imagen
  cardName.textContent = titulo;
  // E V E N T O   D E   L I K E   P A R A   L A   T A R J E T A   Q U E   S E L E C C I O N E   E L   U S U A R I O
  cardLike.addEventListener("click", (e) => {
    cardLike.classList.toggle("card__like-active");
  });
  //E V E N T O   D E   E L I M I N A R   P A R A   L A   T A R J E T A   S E L E C C I O N A D A
  botonTrash.addEventListener("click", (e) => {
    card.remove();
  });
  // E V E N T O   P A R A   M O S T R A R   L A   I M A G E N   S E L E C C I O N A D A
  cardImg.addEventListener("click", (e) => {
    // Se abre el popup para mostrar las imagenes
    popupImages.classList.add("popup__opened");
    const popupImagen = popupImages.querySelector(".popup__imagen"); //creacion de elemento img
    const popupName = popupImages.querySelector(".popup__name"); //creacion de elemento p titulo de la tarjeta
    popupImagen.src = link; //Ruta de imagen
    popupName.textContent = titulo;
    initialCards.forEach(function (item) {
      popupImages.append(popupImagen);
      popupImages.append(popupName);
    });
  });
  return card;
}

// C A R G A N D O   I M A G E N E S  E N   E L   C O N T A I N E R
initialCards.forEach(function (item) {
  const chargeCard = cargandoImagenes(item.name, item.link);
  cards.append(chargeCard);
});

// B O T O N   P A R A    A G R E G A R   U N A   T A R J E T A   A L   P R I N C I P I O 

// F U N C I O N   A G R E G A R   T A R J E T A
botonCreate.addEventListener("click", (e) => {
  e.preventDefault();
  const agregarCard = cargandoImagenes(title.value, imageUrl.value);
  // A Ñ A D E   L A   T A R J E T A   A L  P R I N C I P I O   C O N PREPEND
  cards.prepend(agregarCard);
  popupAdd.classList.remove("popup__opened");
});
// B O T O N   C L O S E   P A R A   C E R R A R   P O P U P
popup__close_images.addEventListener("click", (e) => {
  e.preventDefault();
  popupImages.classList.remove("popup__opened");
});