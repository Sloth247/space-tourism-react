import './App.scss';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import {
  useLocation,
  Outlet,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
function Layout() {
  const location = useLocation();
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
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.main
          className="main"
          // initial={{ opacity: 0, y: '50%' }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          exit={{ transition: { duration: 1.5 }, opacity: 0, y: '100%' }}
          key={location.key}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
export default App;
