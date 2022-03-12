import React, { useState, useEffect } from 'react';
import PortfolioList from '../PortfolioList/portfolioList';
import './portfolio.scss';
import {
  recipeApp,
  trybetunes,
  trybewallet,
  blogsAPI,
  pixelArts,
} from '../../data';

function Portfolio() {
  const [selected, setSelected] = useState('recipeApp');
  const [data, setData] = useState([]);
  useEffect(() => {
    switch(selected){
      case 'recipeApp':
        setData(recipeApp);
        break;
      case 'trybetunes':
        setData(trybetunes);
        break;
      case 'trybewallet':
        setData(trybewallet);
        break;
      case 'blogsAPI':
        setData(blogsAPI);
        break;
      case 'branding':
        setData(pixelArts);
        break;
      default:
        setData(pixelArts);
    }
  }, [selected])

  const list = [
    {
      id: 'recipeApp',
      title: 'Recipe App',
    },
    {
      id: 'trybetunes',
      title: 'Trybetunes',
    },
    {
      id: 'trybewallet',
      title: 'Trybewallet',
    },
    {
      id: 'blogsAPI',
      title: 'Blogs-API',
    },
    {
      id: 'pixelArts',
      title: 'Pixel Arts',
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
            <a target='_blank' rel="noreferrer" href={item.link}><img src={item.img} alt={item.title} /></a>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Portfolio;