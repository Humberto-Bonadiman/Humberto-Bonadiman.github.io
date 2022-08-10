import React, { useState, useEffect } from 'react';
import PortfolioList from '../PortfolioList/portfolioList';
import './projects.scss';
import {
  recipeApp,
  trybetunes,
  droneFeeder,
  blogsAPI,
  pixelArts,
} from '../../data';

function Projects() {
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
      case 'droneFeeder':
        setData(droneFeeder);
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
      id: 'droneFeeder',
      title: 'Drone-Feeder',
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
    <div className="projects" id="projects">
      <h1>Projects</h1>
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
          <div className="itens">
            <div className="item">
              <a target='_blank' rel="noreferrer" href={item.link}><img src={item.img} alt={item.title} /></a>
              <h3>{item.title}</h3>
            </div>
            <div className="about-it">
              <h3>{item.title}</h3>
              <p>{item.information}</p>
              <a target='_blank' rel="noreferrer" href={item.repository}><p className="link">Repository</p></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Projects;