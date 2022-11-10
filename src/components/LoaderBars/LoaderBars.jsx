import { Bars } from 'react-loader-spinner';
import './styles.css';

const LoaderBars = ({height = 15, width = 15}) => {
  return (
    <div className="cnLoaderBarsContainer">
      <Bars color="#000BFF" height={height} width={width}/>
    </div>
  );
};

export default LoaderBars;