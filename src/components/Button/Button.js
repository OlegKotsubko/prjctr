import classNames from "classnames";
import styles from './Button.module.scss'

const Button = ({
  href,
  isExternal,
  clickHandler,
  mod,
  type,
  children,
}) => {
  const attributes = isExternal ? 'noreferrer noopener' : null
  const cssStyles = classNames(styles.block, styles[mod])

  return (
    href
      ?
      <a
        href={href}
        rel={attributes}
        className={cssStyles}
      >
        {children}
      </a>
      :
      <button
        type={type}
        className={cssStyles}
        onClick={clickHandler}
      >
        {children}
      </button>
  )}


export default Button;
