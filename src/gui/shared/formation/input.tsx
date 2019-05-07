import React, { InputHTMLAttributes } from 'react';
import * as validators from './validators'
import { setTouched, setValid, setValidationErrors, clearValidationErrors } from './attributes'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    validators?: validators.validatorFunc[]
}

export class Input extends React.Component<IProps> {
    ref = React.createRef<HTMLInputElement>()
    onFocus = () => setTouched(this.el, true)
    onInput = () => this.runValidators()

    get el(): HTMLInputElement {
        if (!this.ref.current) {
            throw new Error()
        }
        return this.ref.current
    }

    componentDidMount() {
        this.el.addEventListener('click', this.onFocus)
        this.el.addEventListener('focus', this.onFocus)
        this.el.addEventListener('input', this.onInput)
        setTouched(this.el, false)
        this.runValidators()
    }

    componentWillUnmount() {
        this.el.removeEventListener('click', this.onFocus)
        this.el.removeEventListener('focus', this.onFocus)
        this.el.removeEventListener('input', this.onInput)
    }

    runValidators() {
        if (!this.props.validators) {
            clearValidationErrors(this.el)
            setValid(this.el, true)
            return
        }
        const errors = []
        for (const validator of this.props.validators) {
            const result = validator(this.el.value)
            if (result !== null) {
                errors.push(result)
            }
        }
        if (errors && errors.length) {
            setValid(this.el, false)
            setValidationErrors(this.el, errors)
        } else {
            clearValidationErrors(this.el)
            setValid(this.el, true)
        }
    }

    render() {
        return <input
            {...{ 
                ...this.props, 
                validators: null, 
                ref: this.ref 
            }} />
    }
}