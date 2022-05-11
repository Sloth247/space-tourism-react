import './App.scss';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import { useLocation, Outlet, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import NotFound from './pages/NotFound';

const upAnimation = {
  initial: { opacity: 0, y: '50%' },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 2, ease: 'easeInOut' },
};
const downAnimation = {
  initial: { opacity: 0, y: '-200%' },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 2, ease: 'easeInOut' },
};

function App() {
  const location = useLocation();
  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout location={location} />}>
            <Route index element={<Home />} />
            <Route
              path="destination"
              element={<Destination upMotion={upAnimation} />}
            />
            <Route
              path="crew"
              element={
                <Crew downMotion={downAnimation} upMotion={upAnimation} />
              }
            />
            <Route
              path="technology"
              element={
                <Technology downMotion={downAnimation} upMotion={upAnimation} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </MotionConfig>
  );
}
function Layout({ location }: { location: any }) {
  let pathName = location.pathname;
  console.log(pathName);
  return (
    <div
      className={
        pathName === '/'
          ? 'inner-container home'
          : pathName === '/destination'
          ? 'inner-container destination'
          : pathName === '/crew'
          ? 'inner-container crew'
          : 'inner-container tech'
      }
    >
      <header className="header">
        <Navbar pageName={pathName} />
      </header>
      <motion.main
        className="main"
        transition={{ duration: 2, delay: 1, ease: 'easeInOut' }}
        exit={{
          transition: { duration: 2, delay: 1 },
          opacity: 0,
          y: '100%',
        }}
        key={location.key}
      >
        <Outlet />
      </motion.main>
    </div>
  );
}
export default App;
