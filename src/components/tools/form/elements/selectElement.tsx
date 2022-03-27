import React from "react";
import { FormElementBaseProps, FORM_CONTROL } from "../formElement";
import { FastField, FastFieldProps } from 'formik';
import Select, { Props } from 'react-select'

type SelectElementValueType = { label: string; value: any } | Array<{ label: string; value: any }> | null

export interface SelectElementProps<FormInitialValueModel> extends FormElementBaseProps<FormInitialValueModel>, Omit<Props, 'name'> {
    control: FORM_CONTROL.SELECT_ELEMENT;
    onChange?: (value: any) => void;
}

export function SelectElement<FormInitialValueModel>(props: SelectElementProps<FormInitialValueModel>): JSX.Element {
    const { name, ...rest } = props;
    return (
        <FastField name={props.name as string}>
            {
                (fieldProps: FastFieldProps<SelectElementValueType>) => {
                    <div className={`${props.control}-element`}>
                        {
                            props.prefixIcon
                                ? props.prefixIcon
                                : undefined
                        }
                        <Select
                            {...rest}
                            value={fieldProps.field.value}
                            onBlur={(event: React.FocusEvent<HTMLInputElement, Element>) => {
                                fieldProps.form.setFieldTouched(props.name as string, true)
                            }}
                            onChange={(value: any) => {
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