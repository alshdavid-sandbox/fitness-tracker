import React, { FormHTMLAttributes } from 'react';
import { attributes, getValid } from './attributes'
import { FormElementProps } from './form-element';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    onSubmitError?: (msg: string) => void
    onSubmitJSON?: (json: Record<string, any>) => void
}

export class Form extends React.Component<IProps> {
    ref = React.createRef<HTMLFormElement>()

    onSubmit = (e: any) => {
        e.preventDefault()
        const payload: any = {}
        this.triggerValidation()
        for (const element of e.target.elements) {
            if (element.getAttribute(attributes.valid) && !getValid(element)) {
                this.props.onSubmitError && this.props.onSubmitError('InvalidForm')
                return
            }
            if (!element.name) {
                continue
            }
            payload[element.name] = element.value
        }
        this.props.onSubmitJSON && this.props.onSubmitJSON(payload)
    }

    get el(): HTMLFormElement {
        if (!this.ref.current) {
            throw new Error()
        }
        return this.ref.current
    }

    // Because I am spreading the attributes over a
    // native form and it doesn't have the custom
    // attributes I am adding to it
    get formProps() {
        const props = {}
        for (const prop of FormElementProps) {
            if ((this.props as any)[prop] === undefined) {
                continue
            };
            (props as any)[prop] = (this.props as any)[prop]
        }
        return props
    }

    componentDidMount() {
        this.el.addEventListener('submit', this.onSubmit)
    }

    componentWillUnmount() {
        this.el.removeEventListener('submit', this.onSubmit)
    }

    triggerValidation() {
        const elements:any = Array.from(this.el.elements)
        for (const element of elements) {
            if (element.type && element.type === 'submit') {
                continue
            }
            element.click()
            element.focus()
            element.blur()
            document.body.click()
        }
    }

    render() {
        return <form
            {...{
                ...this.formProps,
                ref: this.ref,
            }} />
    }
}

