import green from '../assets/producers/green.png';
import salad from '../assets/producers/salad.png';
import jennyJack from '../assets/producers/jenny-jack.png';
import grow from '../assets/producers/grow.png';
import potager from '../assets/producers/potager.png';

const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

const producers = {
  title: 'Producers',
  list: [{
    name: 'Green',
    image: green,
    distance: `${generateRandom(1, 500)}m`,
    stars: generateRandom(1, 5)
  }, {
    name: 'Jenny Jack',
    image: jennyJack,
    distance: `${generateRandom(1,500)}m`,
    stars: generateRandom(1, 5)
  },
  {
    name: 'Salad',
    image: salad,
    distance: `${generateRandom(1,500)}m`,
    stars: generateRandom(1, 5)
  },
  {
    name: 'Grow',
    image: grow,
    distance: `${generateRandom(1,500)}m`,
    stars: generateRandom(1, 5)
  }, {
    name: 'Potager',
    image: potager,
    distance: `${generateRandom(1,500)}m`,
    stars: generateRandom(1, 5)
  }]
};

export default producers;