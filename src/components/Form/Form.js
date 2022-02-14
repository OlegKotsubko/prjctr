import React from "react";

import Alert from "../Alert/Alert";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Content from "../Content/Content";

import styles from './Form.module.scss'

const Form = ({
  mainTitle,
  firstInputTitle,
  firstInputHandler,
  firstInputAlerts,
  secondInputTitle,
  secondInputHandler,
  secondInputType,
  secondInputAlerts,
  submitButtonTitle,
  submitHandler,
  clearForm,
}) => {
  return (
    <Content>
      <div className={styles.block}>
        <h1>{mainTitle}</h1>
        <form>
          <div className={styles.offset}>
            <Input
              type="text"
              placeholder="Title"
              value={firstInputTitle}
              inputHandler={firstInputHandler}
            />
            <Alert text={firstInputAlerts} />
          </div>
          <div className={styles.offset}>
            <Input
              type={secondInputType}
              value={secondInputTitle}
              placeholder="Description"
              inputHandler={secondInputHandler}
            />
            <Alert text={secondInputAlerts} />
          </div>
          <div className={styles.footer}>
            <Button
              clickHandler={submitHandler}
              type="button"
            >
              {submitButtonTitle}
            </Button>
            <Button
              clickHandler={clearForm}
              mod="empty"
              type="reset"
            >
              Clear form
            </Button>
          </div>

        </form>
      </div>
    </Content>
  )
}

export default React.memo(Form);
