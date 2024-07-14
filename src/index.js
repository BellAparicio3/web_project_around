// Importando hojas de estilo
import "../src/index.css";
// Importando clases
import { Api } from "../components/Api.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import {
  formElement,
  formEdit,
  formUpdate,
  cards,
  profileName,
  profileAboutMe,
  avatar
} from "../components/utils.js";

//instancia de la clase Api
export const api = new Api(
  'https://around.nomoreparties.co/v1/web_es_11',
  '1e0b59e5-c96f-4c07-9a56-66e25879441b'
);

api.getInitialCards().then((data) => {
  const cardSection = new Section(
    {
      items: data,
      renderer: () => {
        data.forEach(function (item) {
          const card = new Card(item.name, item.link, item.templateCard, () => {}, item._id, item.likes, item.owner._id);
          cards.append(card.generateCard());
        });
      },
    },
    ".cards"
  );
  cardSection.renderer();
});

api.loadUserInfo().then((user) => {
  profileName.textContent = user.name;
  profileAboutMe.textContent = user.about;
  avatar.src = user.avatar;
}).catch(err => {
  console.error(err);
});








// O B J E T O S   D E   V A L O R E S   D I N A M I C O S
const saveForm = {
  formSelector: ".forms",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input_error",
};

const addForm = {
  formSelector: ".forms",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error",
};

const updateInfo = {
  formSelector: ".forms",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error",
};

// Instancias de formValidator
const formCard = new FormValidator(formElement[1], addForm);
formCard.enableValidation();
const formProfile = new FormValidator(formEdit, saveForm);
formProfile.enableValidation();
const updateData = new FormValidator(formUpdate, updateInfo);
updateData.enableValidation();