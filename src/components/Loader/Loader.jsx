import { RotatingLines } from 'react-loader-spinner';

export const Loader = ({visible}) => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="50"
      visible={visible}
    />
  );
};
