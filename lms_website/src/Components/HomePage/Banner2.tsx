import React from 'react';
import Content from '../Banner content/Content';
import BlueButton from '../Button/BlueButton';
import courserate from '../../assets/Homepage/image3/courserate.svg';
import bdot from '../../assets/Homepage/image3/bluedot.svg';
import courseno from '../../assets/Homepage/image3/coursenumber.svg';
import b3girl from '../../assets/Homepage/image3/b3girl.svg';
import border from '../../assets/Homepage/image2/borderblue.svg'
interface Banner2Props {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Banner2: React.FC<Banner2Props> = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <>
      <Content title={title} description={description} />
      <BlueButton buttonText={buttonText} onClick={onButtonClick} />
      <div>
        <img src={border} alt="Background design element" />
        <img src={bdot} alt="Background design element" />
        <img src={courserate} alt="Background design element" />
        <img src={courseno} alt="Background design element" />
         <img src={b3girl} alt="Background design element" />
      </div>
    </>
  );
};

export default Banner2;
