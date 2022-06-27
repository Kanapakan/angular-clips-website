export default interface IUser {
    email: string,
    // ? means optional
    password?: string,
    age: number,
    name: string,
    phoneNumber: string
}