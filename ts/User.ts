export class User {
    public age: number;
    public familyName: string;
    public givenName: string;
    constructor (famliyName: string, givenName: string, age: number) {
        this.age = age;
        this.familyName = famliyName;
        this.givenName = givenName;
    }
}