import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navs } from './config';
import styles from './index.module.scss';
import { Button } from 'antd';

const Navbar: NextPage = () => {
  const { pathname } = useRouter();
  console.log(pathname);

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
        <Button>写文章</Button>
        <Button>登录</Button>
      </section>
    </div>
  );
};

export default Navbar;
