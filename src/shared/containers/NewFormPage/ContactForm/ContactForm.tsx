import React, { memo } from "react"
import { areEqual } from 'Utils/equalityChecks';
import { FormPage, FormContent } from "Components/NewFormPage";

const ContactFormContainer =()=>(
    <FormPage>
        <FormContent/>
        INteresting Man
    </FormPage>

)
ContactFormContainer.defaultProps ={};
const ContactFormContainerMemo = memo(ContactFormContainer, areEqual);
export {ContactFormContainerMemo as ContactForm}