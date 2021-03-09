import { v4 } from "uuid";
import { User } from "./User";

const user = new User('tanaka', 'taro', 44);

const uuId = v4();

const contentElem = document.getElementById('contents');
if(!!contentElem) {
    contentElem.innerHTML = `${user.familyName} ${user.givenName}`;
}

const word = (Val: string) => {
    return  Val;
}

const saibanButton = document.getElementById('saiban') as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLButtonElement;
const numId = document.getElementById('numId') as HTMLButtonElement;
const num = document.getElementById('num') as HTMLButtonElement;

saibanButton.onclick = (e) => {
    uuidSpan.innerHTML = uuId;
}

num.onclick = (e) => {
    numId.innerHTML = word('koko');
}