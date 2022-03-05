import React, { useState, useEffect } from 'react';
import PortfolioList from '../PortfolioList/portfolioList';
import './portfolio.scss';
import {
  featuredPortfolio,
  webAppPortfolio,
  mobileAppPotfolio,
  designPortfolio,
  brandingPortfolio,
} from '../../data';

function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  useEffect(() => {
    switch(selected){
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webAppPortfolio);
        break;
      case 'mobile':
        setData(mobileAppPotfolio);
        break;
      case 'design':
        setData(designPortfolio);
        break;
      case 'branding':
        setData(brandingPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected])

  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web App',
    },
    {
      id: 'mobile',
      title: 'Mobile App',
    },
    {
      id: 'design',
      title: 'Design',
    },
    {
      id: 'branding',
      title: 'Branding',
    }
  ]
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
        <
          PortfolioList
          title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
        />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div className="item">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Portfolio;
