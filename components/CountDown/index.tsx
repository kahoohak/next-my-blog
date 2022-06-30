interface Iprops {
  time: number;
  onEnd: Function;
}

const CountDown = (props: Iprops) => {
  const { time } = props;
  return <div>{time}</div>;
};

export default CountDown;
