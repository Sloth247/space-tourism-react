import { useSearchParams, Link } from 'react-router-dom';

import { motion } from 'framer-motion';

// import '../../public/data.json';
import { useEffect, useState } from 'react';

const upAnimation = {
  key: 'up',
  initial: { opacity: 0, y: '50%' },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.5, ease: 'easeInOut' },
};

// export const loader: LoaderFunction = async () => {
//   console.log(data);
//   return json(data);
// };

export default function destination() {
  // let [index, setIndex] = useState<number>(0);
  const [searchParams] = useSearchParams();
  const pathId = Number(searchParams.get('id'));
  const [data, setData] = useState(null);

  const fetchData = async () => {
    // const response = await fetch('./data.json');
    const response = await fetch('./data.json');
    const json = await response.json();
    console.log(json);
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <motion.h1
        className="destination__title"
        initial={{ opacity: 0, y: '-200%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <span>01</span> Pick your destination
      </motion.h1>
      <div className="destination__inner">
        <motion.div className="destination__hero-container" {...upAnimation}>
          <img
            src={data.destinations[pathId].images.png}
            alt=""
            aria-hidden="true"
            className="destination__hero-img"
          />
        </motion.div>
        <section className="destination__text-container">
          <div className="destination__button-container">
            {data &&
              data.destinations.map((destination) => (
                <Link
                  to={`?id=${destination.id}`}
                  className={
                    pathId === destination.id
                      ? 'destination__planet-btn active'
                      : 'destination__planet-btn'
                  }
                  key={destination.id}
                  aria-current={pathId === destination.id ? 'page' : 'false'}
                >
                  {destination.name}
                </Link>
              ))}
          </div>
          <motion.h2 className="destination__planet-name" {...upAnimation}>
            {data.destinations[pathId].name}
          </motion.h2>
          <motion.p className="destination__description" {...upAnimation}>
            {data.destinations[pathId].description}
          </motion.p>
          <motion.div {...upAnimation} className="destination__stats-container">
            <div className="destination__distance-container">
              <h3>Avg. distance</h3>
              <p>{data.destinations[pathId].distance}</p>
            </div>
            <div className="destination__time-container">
              <h3>Est. travel time</h3>
              <p>{data.destinations[pathId].travel}</p>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
