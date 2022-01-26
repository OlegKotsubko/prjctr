import classNames from "classnames";

import styles from './Input.module.scss'

const Input = ({
  type,
  value,
  inputHandler,
  placeholder,
  className,
  name,
}) => (
  <input
    type={type}
    className={classNames(styles.block, className)}
    value={value}
    name={name}
    onInput={inputHandler}
    placeholder={placeholder}
  />
)


export default Input;
