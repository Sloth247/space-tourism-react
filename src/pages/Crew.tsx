import { useSearchParams, Link } from 'react-router-dom';

import './Crew.scss';

import { motion } from 'framer-motion';

import data from '../data/data.json';

export default function Crew({
  downMotion,
  upMotion,
}: {
  downMotion: object;
  upMotion: object;
}) {
  const [searchParams] = useSearchParams();
  const pathId = Number(searchParams.get('id'));

  return (
    <>
      <motion.h1 className="crew__title" {...downMotion}>
        <span>02</span>Meet your crew
      </motion.h1>

      <div className="crew__inner-container">
        <div className="crew__text-container">
          <motion.div
            className="crew__btn-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, type: 'linear' }}
          >
            {data &&
              data.crew.map((crew) => (
                <Link
                  to={`?id=${crew.id}`}
                  className={
                    pathId === crew.id ? 'crew__btn active' : 'crew__btn'
                  }
                  key={crew.id}
                  aria-current={pathId === crew.id ? 'page' : 'false'}
                >
                  <span className="sr-only">{crew.id}</span>
                </Link>
              ))}
          </motion.div>

          <div className="crew__content">
            <motion.h3
              className="crew__role"
              key="down"
              initial={{ opacity: 0, y: '-200%' }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              {data.crew[pathId].role}
            </motion.h3>
            <motion.h2 className="crew__name" {...upMotion}>
              {data.crew[pathId].name}
            </motion.h2>
            <motion.p className="crew__bio" {...upMotion}>
              {data.crew[pathId].bio}
            </motion.p>
          </div>
        </div>
        <motion.div className="crew__hero-container" {...upMotion}>
          <img
            src={data.crew[pathId].images.png}
            alt=""
            aria-hidden="true"
            className="crew__hero-img"
          />
        </motion.div>
      </div>
    </>
  );
}
