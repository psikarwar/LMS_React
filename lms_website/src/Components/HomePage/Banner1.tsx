// import React from 'react';
// import Content from '../Banner content/Content';
// import BlueButton from '../Button/BlueButton';
// import d1 from '../../assets/frame-427318996.svg';
// import d2 from '../../assets/frame-427318997.svg';
// import joinus from '../../assets/Homepage/image3/joinus.svg'
// import b1girl from '../../assets/frame-469322.svg';
// import ell54 from '../../assets/ellipse-54.svg';
// import ell55 from '../../assets/ellipse-55.svg';
// import ell57 from '../../assets/ellipse-57.svg';
// import pollygon from '../../assets/polygon-1.svg';
// import ell139 from '../../assets/ellipse-139.svg';
// import im8 from '../../assets/image-8.svg';
// import im6 from '../../assets/image-6.svg';
// import f1 from '../../assets/frame-427318762.svg';
// import f2 from '../../assets/frame-427318761.svg';
// interface Banner1Props {
//   title: string;
//   description: string;
//   buttonText: string;
//   onButtonClick: () => void;
// }

// const Banner1: React.FC<Banner1Props> = ({ title, description, buttonText, onButtonClick }) => {
//   return (
//     <>
//       <Content title={title} description={description} />
//       <BlueButton buttonText={buttonText} onClick={onButtonClick} />
//       <div>
//         <img src={d1} alt="Background design element" />
//         <img src={d2} alt="Background design element" />
//         <img src={joinus} alt="Background design element" />
//         <img src={b1girl} alt="Background design element" />
//         <img src={ell54} alt="Background design element" />
//         <img src={ell55} alt="Background design element" />
//         <img src={ell57} alt="Background design element" />
//          <img src={pollygon} alt="Background design element" />
//          <img src={ell139} alt="Background design element" />
//         <img src={im8} alt="Background design element" />
//         <img src={im6} alt="Background design element" />
//          <img src={f1} alt="Background design element" />
//         <img src={f2} alt="Background design element" />
        
        
//       </div>
//     </>
//   );
// };

// export default Banner1;


import React from 'react';
import Content from '../Banner content/Content';
import BlueButton from '../Button/BlueButton';
import d1 from '../../assets/frame-427318996.svg';
import d2 from '../../assets/frame-427318997.svg';
import joinus from '../../assets/Homepage/image3/joinus.svg';
import b1girl from '../../assets/frame-469322.svg';
import ell54 from '../../assets/ellipse-54.svg';
import ell55 from '../../assets/ellipse-55.svg';
import ell57 from '../../assets/ellipse-57.svg';
import pollygon from '../../assets/polygon-1.svg';
import ell139 from '../../assets/ellipse-139.svg';
import im8 from '../../assets/image-8.svg';
import im6 from '../../assets/image-6.svg';
import f1 from '../../assets/frame-427318762.svg';
import f2 from '../../assets/frame-427318761.svg';
import './Banner1.css'; // CSS file for styling

interface Banner1Props {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Banner1: React.FC<Banner1Props> = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <Content title={title} description={description} />
        <BlueButton buttonText={buttonText} onClick={onButtonClick} />
      </div>
      <div className="banner-images">
        <img src={d1} alt="Background design element" />
        <img src={d2} alt="Background design element" />
        <img src={joinus} alt="Join us" />
        <img src={b1girl} alt="Girl illustration" />
        <img src={ell54} alt="Elliptical design" />
        <img src={ell55} alt="Elliptical design" />
        <img src={ell57} alt="Elliptical design" />
        <img src={pollygon} alt="Polygon design" />
        <img src={ell139} alt="Elliptical design" />
        <img src={im8} alt="Image 8" />
        <img src={im6} alt="Image 6" />
        <img src={f1} alt="Frame design" />
        <img src={f2} alt="Frame design" />
      </div>
    </div>
  );
};

export default Banner1;
