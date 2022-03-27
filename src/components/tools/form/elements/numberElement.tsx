import React from "react";
import { FormElementBaseProps, FORM_CONTROL } from "../formElement";
import { FastField, FastFieldProps } from 'formik';

export interface NumberElementProps<FormInitialValueModel> extends FormElementBaseProps<FormInitialValueModel> {
    control: FORM_CONTROL.NUMBER_ELEMENT;
    onChange?: (value: number | undefined) => void;
}

export function NumberElement<FormInitialValueModel>(props: NumberElementProps<FormInitialValueModel>): JSX.Element {
    return (
        <FastField name={props.name as string}>
            {
                (fieldProps: FastFieldProps<number | undefined>) => {
                    <div className={`${props.control}-element`}>
                        {
                            props.prefixIcon
                                ? props.prefixIcon
                                : undefined
                        }
                        <input
                            type="number"
                            placeholder={typeof props.formElementPlaceholder === "string" ? props.formElementPlaceholder : undefined}
                            readOnly={props.readonly}
                            required={props.required}
                            disabled={props.disabled}
                            value={fieldProps.field.value}
                            onBlur={(event: React.FocusEvent<HTMLInputElement, Element>) => {
                                fieldProps.form.setFieldTouched(props.name as string, true);
                            }}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                let numericValue: number = Number(event.target.value);
                                let isNotNumber: boolean = isNaN(numericValue);
                                let value: number | undefined = isNotNumber ? undefined : numericValue;
                                if (props.onChange) {
                                    props.onChange(value);
                                } else {
                                    fieldProps.form.setFieldValue(props.name as string, value);
                                }
                            }}
                        />
                        {
                            props.suffixIcon
                                ? props.suffixIcon
                                : undefined
                        }
                    </div>
                }
            }
        </FastField>
    )
}