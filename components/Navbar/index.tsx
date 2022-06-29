import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navs } from './config';
import styles from './index.module.scss';
import { Button } from 'antd';
import { useState } from 'react';
import Login from '@/components/Login';

const Navbar: NextPage = () => {
  const { pathname } = useRouter();
  const [isShowLogin, setIsShowLogin] = useState(false)
  
  const handleGotoEditorPage = () => {

  }

  const handlerLogin = () => {
    setIsShowLogin(true)
  }

  const handleClose = () => {
    setIsShowLogin(false)
  }

  return (
    <div className={styles.navbar}>
      <section className={styles.logoArea}>logo</section>
      <section className={styles.linkArea}>
        {navs?.map((nav) => (
          <Link key={nav?.label} href={nav?.value}>
            <a className={pathname === nav.value ? styles.active : ''}>
              {nav?.label}
            </a>
          </Link>
        ))}
      </section>
      <section className={styles.operationArea}>
        <Button onClick={handleGotoEditorPage}>写文章</Button>
        <Button type="primary" onClick={handlerLogin}>登录</Button>
      </section>
      <Login isShow={isShowLogin} onClose={handleClose} />
    </div>
  );
};

export default Navbar;
