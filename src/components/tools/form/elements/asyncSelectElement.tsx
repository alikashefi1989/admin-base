import React from "react";
import { FormElementBaseProps, FORM_CONTROL } from "../formElement";
import { FastField, FastFieldProps } from 'formik';
import Async, { AsyncProps } from 'react-select/async';

type AsyncSelectElementValueType = { label: string; value: any } | Array<{ label: string; value: any }> | null

export interface AsyncSelectElementProps<FormInitialValueModel> extends FormElementBaseProps<FormInitialValueModel>, Omit<AsyncProps<any, any, any>, 'name'> {
    control: FORM_CONTROL.ASYNC_SELECT_ELEMENT;
    onChange?: (value: any) => void;
}

export function AsyncSelectElement<FormInitialValueModel>(props: AsyncSelectElementProps<FormInitialValueModel>): JSX.Element {
    const { name, ...rest } = props;
    return (
        <FastField name={props.name as string}>
            {
                (fieldProps: FastFieldProps<AsyncSelectElementValueType>) => {
                    <div className={`${props.control}-element`}>
                        {
                            props.prefixIcon
                                ? props.prefixIcon
                                : undefined
                        }
                        <Async
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