import React from 'react';
import Content from '../Banner content/Content';
import BlueButton from '../Button/BlueButton';
import p1 from '../../assets/Homepage/image4/pexels.svg';
import p2 from '../../assets/Homepage/image4/pexels.svg';
import girl from '../../assets/Homepage/image4/b4girl.svg';
import vector from '../../assets/Homepage/image4/vector.svg'
interface Banner1Props {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Banner4: React.FC<Banner1Props> = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <>
      <Content title={title} description={description} />
      <BlueButton buttonText={buttonText} onClick={onButtonClick} />
      <div>
         <img src={p2} alt="Background design element" />
        <img src={girl} alt="girl" />
        <img src={vector} alt="frame" />
        <img src={p1} alt="Background design element" />
      </div>
    </>
  );
};

export default Banner4;
