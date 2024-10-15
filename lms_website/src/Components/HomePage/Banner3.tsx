import React from 'react';
import Content from '../Banner content/Content';
import BlueButton from '../Button/BlueButton';
import joinus from '../../assets/Homepage/image3/joinus.svg'
import courseno from '../../assets/Homepage/image3/coursenumber.svg';
import courserate from '../../assets/Homepage/image3/courserate.svg';
import bdot from '../../assets/Homepage/image3/bluedot.svg';
import rectangle from '../../assets/Homepage/image3/brectangle.svg';
import b3girl from '../../assets/Homepage/image3/b3girl.svg';
interface Banner3Props {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Banner3: React.FC<Banner3Props> = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <>
      <Content title={title} description={description} />
      <BlueButton buttonText={buttonText} onClick={onButtonClick} />
      <div>
        <img src={joinus} alt="Background design element" />
        <img src={courseno} alt="Background design element" />
        <img src={courserate} alt="Background design element" />
        <img src={bdot} alt="Background design element" />
          <img src={rectangle} alt="Background design element" />
        <img src={b3girl} alt="Background design element" />

      </div>
    </>
  );
};

export default Banner3;
