import styles from './Alert.module.scss'

const Alert = ({
   text
}) => (
  <span className={styles.block}>
    {text}
  </span>
)

export default Alert;
