export type validatorFunc = (input: string | number) => errors | null

export enum errors {
    MinLength = 'MinLength',
    Email = "Email"
}

export const minLength = (length: number): validatorFunc => 
    (value) => 
        value.toString().length >= length 
            ? null 
            : errors.MinLength

export const email: validatorFunc = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
        ? null
        : errors.Email
}