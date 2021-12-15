import styles from './Content.module.scss'

const Content = ({
  children
}) => (
  <div className={styles.block}>
    {children}
  </div>
)

export default Content;
