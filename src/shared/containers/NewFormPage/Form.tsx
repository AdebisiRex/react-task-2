import React, {memo} from "react"
import { areEqual } from 'Utils/equalityChecks';
import { ContactForm} from "./ContactForm"

const FormContainer =()=><ContactForm/>; 

const FormContainerMemo = memo(FormContainer, areEqual);

export {FormContainerMemo as FormContainer}