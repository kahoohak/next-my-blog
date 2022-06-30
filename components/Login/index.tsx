import { ChangeEvent, useState } from 'react';
import CountDown from '@/components/CountDown';
import styles from './index.module.scss';

interface Iprops {
  isShow: boolean;
  onClose: Function;
}

const Login = (props: Iprops) => {
  const { isShow = false } = props;
  const [isShowCountDown, setIsShowCountDown] = useState(false);
  const [form, setForm] = useState({
    phone: '',
    verify: '',
  });

  const handleClose = () => {};

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleGetVerifyCode = () => {
    setIsShowCountDown(true);
  };

  const handleCountDownEnd = () => {
    setIsShowCountDown(false);
  };

  const handleLogin = () => {};

  const handleOAuthGithub = () => {};

  return isShow ? (
    <div className={styles.loginArea}>
      <div className={styles.loginBox}>
        <div className={styles.loginTitle}>
          <div>手机号登录</div>
          <div className={styles.close} onClick={handleClose}>
            x
          </div>
        </div>
        <input
          name="phone"
          type="text"
          placeholder="请输入手机号"
          value={form.phone}
          onChange={handleFormChange}
        />
        <div className={styles.verifyCodeArea}>
          <input
            name="verify"
            type="text"
            placeholder="请输入验证码"
            value={form.verify}
            onChange={handleFormChange}
          />
          <span className={styles.verifyCode} onClick={handleGetVerifyCode}>
            {isShowCountDown ? (
              <CountDown time={10} onEnd={handleCountDownEnd} />
            ) : (
              '获取验证码'
            )}
          </span>
        </div>
        <div className={styles.loginBtn} onClick={handleLogin}>
          登录
        </div>
        <div className={styles.otherLogin} onClick={handleOAuthGithub}>
          GitHub登录
        </div>
        <div className={styles.loginPrivacy}>
          注册登录即表示同意
          <a href="https://moco.imooc.com/privacy.html" target="_blink">
            隐私协议
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default Login;
