import {Link, Outlet} from 'react-router-dom'
import image from '../../logo.svg'

import Content from "../Content/Content";
import Button from "../Button/Button";

import styles from './Layout.module.scss'

const Layout = () => (
  <Content>
    <header className={styles.block}>
      <Link to="/">
        <img src={image} alt="" className={styles.logo}/>
      </Link>
      <Button
        className={styles.button}
      >
        Log In
      </Button>
    </header>
    <main>
      <Outlet />
    </main>
  </Content>
)

export default Layout
