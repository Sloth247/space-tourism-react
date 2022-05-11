import { useSearchParams, Link } from 'react-router-dom';
import './Destination.scss';
import { motion } from 'framer-motion';

import data from '../data/data.json';

export default function Destination({ upMotion }: { upMotion: object }) {
  const [searchParams] = useSearchParams();
  const pathId = Number(searchParams.get('id'));
  console.log(pathId);
  console.log(data.destinations[pathId].images.png);

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
        <motion.div className="destination__hero-container" {...upMotion}>
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
          <motion.h2 className="destination__planet-name" {...upMotion}>
            {data.destinations[pathId].name}
          </motion.h2>
          <motion.p className="destination__description" {...upMotion}>
            {data.destinations[pathId].description}
          </motion.p>
          <motion.div {...upMotion} className="destination__stats-container">
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
