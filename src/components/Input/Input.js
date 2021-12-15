import classNames from "classnames";

import styles from './Input.module.scss'

const Input = ({
  type,
  value,
  inputHandler,
  placeholder,
  className,
}) => (
  <input
    type={type}
    className={classNames(styles.block, className)}
    value={value}
    onInput={inputHandler}
    placeholder={placeholder}
  />
)


export default Input;
