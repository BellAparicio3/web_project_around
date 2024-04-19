export class UserInfo {
  constructor(nameSelector, aboutUsSelector) {
    this.nameElement = document.querySelector(nameSelector);
    this.aboutUsElement = document.querySelector(aboutUsSelector);
  }
  getUserInfo() {
    return{
      name : this.nameElement.textContent,
      aboutUs : this.aboutUsElement.textContent 
    };
  }
  setUserInfo(userInfo) {
    this.nameElement.textContent = userInfo.name.value;
    this.aboutUsElement.textContent = userInfo.aboutUs.value;
  }
}

