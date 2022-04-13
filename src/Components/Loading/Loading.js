import { ReactComponent as LoadingSvg } from '../../assets/images/loading.svg';
import './loading.scss';
const Loading = () => {
  return (
    <div className="loading">
      <LoadingSvg />
    </div>
  );
};

export default Loading;
