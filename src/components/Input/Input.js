import classNames from "classnames";

import styles from './Input.module.scss'

const Input = ({
  type,
  inputHandler,
  placeholder,
  value,
}) => {
  if(type === "textarea") {
    return (
      <textarea
        rows="6"
        className={classNames(styles.block, styles.textarea)}
        placeholder={placeholder}
        value={value}
        onChange={inputHandler}
      />
    )
  }
  return (
    <input
      type={type}
      className={classNames(styles.block)}
      onInput={inputHandler}
      value={value}
      placeholder={placeholder}
    />
  )
}


export default Input;
