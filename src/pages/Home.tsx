import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.scss';

export default function Home() {
  return (
    <div className="main__inner">
      <div className="main__container">
        <section className="main__text-container">
          <motion.h2
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="main__sub-title"
          >
            So, you want to travel to
          </motion.h2>

          <motion.h1
            key="sub-title"
            initial={{ opacity: 0, y: '50%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="main__title"
          >
            Space
          </motion.h1>
          <motion.p
            key="description"
            initial={{ opacity: 0, y: '50%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: 'linear' }}
            className="main__description"
          >
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </motion.p>
        </section>

        <Link to="/destination" className="explore-btn">
          <span>Explore</span>
        </Link>
      </div>
    </div>
  );
}
