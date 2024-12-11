import { Field, Formik } from "formik";
import React from "react";

type Props = {
    label?: string;
    name: string;
    type?:string;
    disabled?:any;
    style?:any
    placeHolder:string
};

const FormikInput = (props: Props) => {
  
  return (
    <>
     <div className="input__container  d-flex f-direction-column align-i-flex-start justify-center gap-1">
        <label className="input__container__label text text-dark-mode">{props.label}</label>
        <Field 
        name={props.name}
        type={props.type || "text"}
        className="input__container__input text text-dark-mode"
        disabled={props.disabled}
        placeHolder={props.placeHolder}
        style={props.style}
        />
     </div>
      
    </>
  );
};

export default FormikInput;
