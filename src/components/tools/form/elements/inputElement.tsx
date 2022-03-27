import React from "react";
import { FormElementBaseProps, FORM_CONTROL } from "../formElement";
import { FastField, FastFieldProps } from 'formik';

export interface InputElementProps<FormInitialValueModel> extends FormElementBaseProps<FormInitialValueModel> {
    control: FORM_CONTROL.INPUT_ELEMENT;
    onChange?: (value: string | undefined) => void;
}

export function InputElement<FormInitialValueModel>(props: InputElementProps<FormInitialValueModel>): JSX.Element {
    return (
        <FastField name={props.name as string}>
            {
                (fieldProps: FastFieldProps<string | undefined>) => {
                    <div className={`${props.control}-element`}>
                        {
                            props.prefixIcon
                                ? props.prefixIcon
                                : undefined
                        }
                        <input
                            type="text"
                            placeholder={typeof props.formElementPlaceholder === "string" ? props.formElementPlaceholder : undefined}
                            readOnly={props.readonly}
                            required={props.required}
                            disabled={props.disabled}
                            value={fieldProps.field.value}
                            onBlur={(event: React.FocusEvent<HTMLInputElement, Element>) => {
                                fieldProps.form.setFieldTouched(props.name as string, true);
                            }}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                if (props.onChange) {
                                    props.onChange(event.target.value);
                                } else {
                                    fieldProps.form.setFieldValue(props.name as string, event.target.value);
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