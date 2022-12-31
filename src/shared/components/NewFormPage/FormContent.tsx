import React, { memo, useState, useEffect } from 'react'
import { LetterHeader } from 'Components/People/PeopleTabs'
import { PurpleButton } from 'Components/Button/PurpleButton';
import classes from "./FormContent.module.css"
import { areEqual } from 'Utils/equalityChecks';
import { Icon } from 'Components/Icons';

const FormContent = () => {
  const [formList, setFormList] = useState([]);
  useEffect(()=>{
    // let endPooint = `/companies/${companyId}/contract-forms`; 
  })
  return (
    // <div>
    
        <div className={classes.formContent}>
    <div className={`d-flex justify-content-start align-items-center mb-4 ${classes.contentHeader}`}>
      <h2>Form Templates</h2>
      <PurpleButton className={classes.addButton} >
        Add +
      </PurpleButton>
    </div>
    <table className= {`table  fs-6 ${classes.table}`}>
      <thead className="table-head">
        <tr>
          <td></td>
          <td>TEMPLATE NAME</td>
          <td>DATE CREATED</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>          </td>
          <td className="fw-bold">Ben test          </td>
          <td>Aug 25, 2022          </td>
          <td> <Icon type="trash" />       </td>
        </tr>
        <tr>
          <td>          </td>
          <td className="fw-bold">Ben test          </td>
          <td>Aug 25, 2022          </td>
          <td> <Icon type="trash" />       </td>
        </tr>
        <tr>
          <td>          </td>
          <td className="fw-bold">Ben test          </td>
          <td>Aug 25, 2022          </td>
          <td> <Icon type="trash" />       </td>
        </tr>
        <tr>
          <td>          </td>
          <td className="fw-bold">Ben test          </td>
          <td>Aug 25, 2022          </td>
          <td> <Icon type="trash" />       </td>
        </tr>
        <tr>
          <td>          </td>
          <td className="fw-bold">Ben test          </td>
          <td>Aug 25, 2022          </td>
          <td> <Icon type="trash" />       </td>
        </tr>
        
      </tbody>
    </table>

    </div>
  )
}

const FormContentMemo = memo(FormContent, areEqual);
export {FormContentMemo as FormContent}