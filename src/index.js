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
  userInfo
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
        // C A R G A N D O   I M A G E N E S  E N   E L   C O N T A I N E R -> SECTION
        data.forEach(function (item) {
          const card = new Card(item.name, item.link, item.templateCard);
          cards.append(card.generateCard());
        });
      },
    },
    ".cards"
  );
  cardSection.renderer();
});

api.loadUserInfo().then((data) => {
  userInfo.setUserInfo({ nameUser: data.name, aboutUs: data.about });
})
.catch(err => {
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
const formCard = new FormValidator(formElement, addForm);
formCard.enableValidation();
const formProfile = new FormValidator(formEdit, saveForm);
formProfile.enableValidation();
const updateData = new FormValidator(formUpdate, updateInfo);
updateData.enableValidation();