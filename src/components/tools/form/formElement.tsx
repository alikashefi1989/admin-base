import React from "react";
import { AsyncSelectElement, AsyncSelectElementProps } from "./elements/asyncSelectElement";
import { InputElement, InputElementProps } from "./elements/inputElement";
import { NumberElement, NumberElementProps } from "./elements/numberElement";
import { SelectElement, SelectElementProps } from "./elements/selectElement";
import { StringedNumberElement, StringedNumberElementProps } from "./elements/stringedNumberElement";

export interface FormElementBaseProps<FormInitialValueModel> {
    control: FORM_CONTROL;
    name: keyof FormInitialValueModel;
    formElementLabel?: JSX.Element | string;
    formElementPlaceholder?: JSX.Element | string;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    isEmpty?: boolean;
    suffixIcon?: JSX.Element;
    prefixIcon?: JSX.Element;
}

export enum FORM_CONTROL {
    INPUT_ELEMENT = 'INPUT-ELEMENT',
    NUMBER_ELEMENT = 'NUMBER-ELEMENT',
    STRINGED_NUMBER_ELEMENT = 'STRINGED-NUMBER-ELEMENT',
    SELECT_ELEMENT = 'SELECT-ELEMENT',
    ASYNC_SELECT_ELEMENT = 'ASYNC-SELECT-ELEMENT',
    DATE_TIME_PICKER_ELEMENT = 'DATE-TIME-PICKER-ELEMENT',
    FILE_PICKER_ELEMENT = 'FILE-PICKER-ELEMENT',
    TEXT_AREA_ELEMENT = 'TEXT-AREA-ELEMENT',
    RADIO_BUTTON_ELEMENT = 'RADIO-BUTTON-ELEMENT',
    CHECK_BOX_ELEMENT = 'CHECK-BOX-ELEMENT',
}

export function FormElement<FormInitialValueModel>(props: FormElementBaseProps<FormInitialValueModel>): JSX.Element {
    return (
        <div className={elementClassNameGenerator<FormInitialValueModel>(props)}>
            {formElementLabel<FormInitialValueModel>(props)}
            {formElementSwitcher<FormInitialValueModel>(props)}
            {formElementError<FormInitialValueModel>(props)}
        </div>
    )
}

function formElementLabel<FormInitialValueModel>(props: FormElementBaseProps<FormInitialValueModel>): JSX.Element {
    return (
        <>
            <label htmlFor={props.name as string}></label>
        </>
    )
}

function formElementSwitcher<FormInitialValueModel>(props: FormElementBaseProps<FormInitialValueModel>): JSX.Element {
    switch (props.control) {
        case FORM_CONTROL.INPUT_ELEMENT:
            return <InputElement {...props as InputElementProps<FormInitialValueModel>} />
        case FORM_CONTROL.NUMBER_ELEMENT:
            return <NumberElement {...props as NumberElementProps<FormInitialValueModel>} />
        case FORM_CONTROL.STRINGED_NUMBER_ELEMENT:
            return <StringedNumberElement {...props as StringedNumberElementProps<FormInitialValueModel>} />
        case FORM_CONTROL.SELECT_ELEMENT:
            return <SelectElement {...props as SelectElementProps<FormInitialValueModel>} />
        case FORM_CONTROL.ASYNC_SELECT_ELEMENT:
            return <AsyncSelectElement {...props as AsyncSelectElementProps<FormInitialValueModel>} />
        case FORM_CONTROL.DATE_TIME_PICKER_ELEMENT:
            return <div>DATE_TIME_PICKER_ELEMENT</div>
        case FORM_CONTROL.FILE_PICKER_ELEMENT:
            return <div>FILE_PICKER_ELEMENT</div>
        case FORM_CONTROL.TEXT_AREA_ELEMENT:
            return <div>TEXT_AREA_ELEMENT</div>
        case FORM_CONTROL.RADIO_BUTTON_ELEMENT:
            return <div>RADIO_BUTTON_ELEMENT</div>
        case FORM_CONTROL.CHECK_BOX_ELEMENT:
            return <div>CHECK_BOX_ELEMENT</div>
        default:
            return <></>
    }
}

function formElementError<FormInitialValueModel>(props: FormElementBaseProps<FormInitialValueModel>): JSX.Element {
    return (
        <>
            <div>ERROR</div>
        </>
    )
}

function elementClassNameGenerator<FormInitialValueModel>(props: FormElementBaseProps<FormInitialValueModel>): string {
    let elementClassName: string = `Form-Element ${props.control}-element-wrapper ${props.name}`
    if (props.required && props.required === true) {
        elementClassName = elementClassName + ` required`;
    }

    if (props.readonly && props.readonly === true) {
        elementClassName = elementClassName + ` readonly`;
    }

    if (props.disabled && props.disabled === true) {
        elementClassName = elementClassName + ` disabled`;
    }

    if (props.isEmpty && props.isEmpty === true) {
        elementClassName = elementClassName + ` empty`;
    } else {
        elementClassName = elementClassName + ` full`;
    }

    return elementClassName;
}

