import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import data from '../data/data.json';

import './Technology.scss';

export default function Technology({
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
      <motion.h1 className="technology__title" {...downMotion}>
        <span>03</span>Space Launch 101
      </motion.h1>
      <div className="technology__container">
        <div className="technology__left-container">
          <motion.div className="technology__btn-container" {...upMotion}>
            {data &&
              data.technology.map((tech) => (
                <Link
                  to={`?id=${tech.id}`}
                  className={
                    pathId === tech.id
                      ? 'technology__btn active'
                      : 'technology__btn'
                  }
                  aria-current={pathId === tech.id ? 'page' : 'false'}
                  key={tech.id}
                >
                  <span>{tech.id + 1}</span>
                </Link>
              ))}
          </motion.div>
          <section className="technology__text-container">
            <motion.h3 className="technology__sub-title" {...downMotion}>
              The Terminology...
            </motion.h3>
            <motion.h2 className="technology__name" {...upMotion}>
              {data.technology[pathId].name}
            </motion.h2>
            <motion.p className="technology__description" {...upMotion}>
              {data.technology[pathId].description}
            </motion.p>
          </section>
        </div>
        <motion.picture className="technology__hero-container" {...upMotion}>
          <source
            srcSet={data.technology[pathId].images.portrait}
            media="(min-width: 62.5em)"
          />
          <img
            src={data.technology[pathId].images.landscape}
            alt=""
            aria-hidden="true"
            className="technology__hero-img"
          />
        </motion.picture>
      </div>
    </>
  );
}
