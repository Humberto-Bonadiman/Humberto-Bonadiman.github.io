import React, { useState } from 'react';
import './works.scss';
import arrowLeft from '../../images/arrow.png';
import mobile from '../../images/mobile.png';
import globe from '../../images/globe.png';
import writing from '../../images/writing.png'

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: 1,
      icon: mobile,
      title: 'Web Design',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'https://www.rj.senac.br/wp-content/uploads/2017/05/web-designer-3.jpg',
    },
    {
      id: 2,
      icon: globe,
      title: 'Mobile Application',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'https://www.dynamicedgecreative.com/wp-content/uploads/2021/08/creative8.png',
    },
    {
      id: 3,
      icon: writing,
      title: 'Branding',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'https://bstdesign.com.br/blog/wp-content/uploads/2018/04/o-que-e-branding.png',
    }
  ];
  const handleClick = (way) => {
    way === 'left'
    ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2)
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icon} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>
                    {item.desc}
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <
        img
        src={ arrowLeft }
        className="arrow left"
        alt="change to the left"
        onClick={() => handleClick('left')}
      />
      <
        img
        src={ arrowLeft }
        className="arrow right"
        alt="change to the right"
        onClick={() => handleClick()}
      />
    </div>
  )
};

export default Works;
