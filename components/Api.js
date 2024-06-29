//import { buttonUpdate} from "./utils.js";

export class Api {
  constructor(baseUrl, token) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  getInitialCards() {
    //la promesa se tiene que cumplir o no
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        authorization: this.token,
      }
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  loadUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: this.token,
      }
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  editUserInfo(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  addCard(name, link) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  likeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: {
        authorization: this.token
      }
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    }).then((data) => {
      return data;
    }).catch((err) => console.log(err));
  }

  dislikeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this.token
      }
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    }).then((data) => {
      return data;
    }).catch((err) => console.log(err));
  }

  // deleteCard(cardId) {
  //   return fetch(`${this.baseUrl}/cards/${cardId}`, {
  //     method: "DELETE",
  //     headers: {
  //       authorization: this.token
  //     }
  //   }).then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //     return Promise.reject(`Error: ${res.status}`);
  //   });
  // }

  // updatePhotoProfile() {
  //   return fetch(`${this.baseUrl}/user/me/avatar`, {
  //     method: "PATCH",
  //     headers: {
  //       authorization: this.token,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       avatar: "url.jpg",
  //     }),
  //   }).then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //     // si el servidor devuelve un error, rechaza el promise
  //     return Promise.reject(`Error: ${res.status}`);
  //   }).then((data) => {
  //     return data;
  //   }).catch((error) => {
  //     return error;
  //   }).finally((res) => {
  //     buttonUpdate.textContent = "";
  //     console.log("Guardando", res);
  //   });
  // }
  // savingInfo(button) {
  //   button.textContent = "Guardando...";
  // }
}
/*
  GET: Para obtener datos.
  POST: Para agregar nuevos datos.
  PUT: Para actualizar datos existentes.
  DELETE: Para eliminar datos.

*/