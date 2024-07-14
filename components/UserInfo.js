
export class UserInfo {
  constructor(nameSelector, aboutUsSelector, avatarSelector) {
    this.nameElement = document.querySelector(nameSelector);
    this.aboutUsElement = document.querySelector(aboutUsSelector);
    this.avatarElement = document.querySelector(avatarSelector);
  }
  getUserInfo() {
    return{
      nameUser: this.nameElement.textContent,
      aboutUs: this.aboutUsElement.textContent,
      avatar : this.avatarElement.src
    };
  }
  setUserInfo(userInfo) {
    this.nameElement.textContent = userInfo.nameUser;
    this.aboutUsElement.textContent = userInfo.aboutUs;
    if (userInfo.avatar) {
      this.avatarElement.src = userInfo.avatar
    }
  }
}

