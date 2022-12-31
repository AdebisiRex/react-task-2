import { Tab } from 'Components/Tabs/Tab'
import { Icon } from 'Components/Icons';
import React, { memo, ReactNode, useState } from 'react'
import classes from "./FormPage.module.css"
import { width } from 'Utils/screen';
import { areEqual } from 'Utils/equalityChecks';



interface Props {
    id?: string;
    className?: string;
    children?: ReactNode;
  }

const createTabs = (activeTab: string, onTabClick: (e: any) => void) => (
    <>
      <Tab
        key="contact-form"
        id="contact-form"
        className={`${classes.flexCenter} ${classes.button} ${
          activeTab === 'contact-form' ? `active ${classes['active-Tab']}` : ''
        }`}
        target="employees"
        onClick={onTabClick}
      >
        <>
          <Icon type="projects" className={classes.icon} />
          <span>Contact Form</span>
        </>
      </Tab>
    
    </>
  );

const FormPage = ({ id = 'tabs', className, children }: Props) => {

    const [activeTab, setActiveTab] = useState('contact-form');
    const onTabClick = (e: any) => {
        // Occasionally, e.currentTarget is undefined.  Set the current activeTab if we run into this bug
        setActiveTab(e?.currentTarget?.id || activeTab);
      };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className={classes.peopleTabWrapper}>
            <div className={classes.tabsContainer}>
              <ul
                className={`nav nav-tabs ${width < 576 ? 'flex-sm-column' : 'width'}   ${classes.tabs} ${
                  className || ''
                }`}
                id={id}
                role="tablist"
              >
                {createTabs(activeTab, onTabClick)}
              </ul>
            </div>
            <div className="tab-content w-100 h-100 d-inline-block" id="peopleTabContent" style={{ height: 'auto' }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

FormPage.defaultProps = {
    id: undefined,
    className: undefined,
    children: undefined,
  };

const FormPageMemo = memo(FormPage, areEqual);
export {FormPageMemo as FormPage}