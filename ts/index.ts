import UUID from "uuid";
import { User } from "./User";

const user = new User('tanaka', 'taro', 44);

const contentElem = document.getElementById('contents');
if(!!contentElem) {
    contentElem.innerHTML = `${user.familyName} ${user.givenName}`;
}

const saibanButton = document.getElementById('saiban') as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLButtonElement;

saibanButton.onclick = (e) => {
    uuidSpan.innerHTML = UUID.v4();
}