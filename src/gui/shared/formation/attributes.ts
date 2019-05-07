export enum attributes {
    touched = 'data-touched',
    valid = 'data-valid',
    validationErrors = 'data-validation-errors'
}

type el = HTMLInputElement 

export const setTouched = (e: el, v: boolean) => 
    e.setAttribute(attributes.touched, v.toString())

export const setValid = (e: el, v: boolean) => 
    e.setAttribute(attributes.valid, v.toString())

export const setValidationErrors = (e: el, errors: string[]) =>
    e.setAttribute(attributes.validationErrors, JSON.stringify(errors))
    
export const getTouched = (e: el) => 
    e.getAttribute(attributes.touched) === 'true'

export const getValid = (e: el) => 
    e.getAttribute(attributes.valid) === 'true'

export const getValidationErrors = (e: el) => 
    JSON.parse(e.getAttribute(attributes.validationErrors) || '[]')

export const clearValidationErrors = (e: el) =>
    e.removeAttribute(attributes.validationErrors)