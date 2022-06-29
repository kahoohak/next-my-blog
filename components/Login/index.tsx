
interface Iprops {
    isShow: boolean
    onClose: Function
}

const Login = (props: Iprops) => {
  const {isShow = false} = props

  return (
    isShow ? <div>login dialog</div> : null
  );
};

export default Login;
