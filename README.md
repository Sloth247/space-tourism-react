# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./src/assets/preview.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/space-tourism-website-react-react-router-framer-motion-sass-S184ObKI9](https://www.frontendmentor.io/solutions/space-tourism-website-react-react-router-framer-motion-sass-S184ObKI9)
- Live Site URL: [https://space-tourism-react-nine.vercel.app/](https://space-tourism-react-nine.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- TypeScript
- [Remix](https://remix.run/)
- [framer motion](https://www.framer.com/motion/) - animation library for React

### What I learned

### React Router components/hooks

I wanted to reuse navigation bar at the top on every pages, so I used Layout component to achieve.

To get the path names, I used 'useLocation' hook and created different classNames to change background image by each routes. The path names are also used to change classNames in Navbar.tsx.

I used 'useSearchParams' hook to read the query string sent by buttons on each pages.

For example:

- Destination.tsx

```js
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
```

#### framer-motion

It is my first time using framer motion, and I still need improvements, but I acheived exit animation when going to next routes by:

- App.tsx

```js
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
```

```js
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
```

#### Accessibility

- For Reduced Motion Users
  I read framer motion document and used `<MotionConfig reducedMotion="user">` to consider those users.

- Keyboard control for mobile menu modal
  I included the function to close menu by using esc key on keyboard.

```js
const closeMenu = (e: { keyCode: number }) => {
      if (e.keyCode === 27) {
        setClicked(false);
        setExpanded(false);
      }
    };
    window.addEventListener('keydown', closeMenu); };
```

### Continued development

I wanted to add the function to close the mobile menu modal when clicking outside, but the function has been conflicted with onClick function, so this time I decided not to use it. I want to know how to solve this issue.

```js
const checkIfClickedOutside = (e: any) => {
  if (expanded && ref.current && !ref.current.contains(e.target)) {
    setClicked(false);
    setExpanded(false);
  }
};
```

### Useful resources

- [React Router](https://reactrouter.com/docs/en/v6)
- [The Net Ninja Youtube channel for Framer Motion (for React)](https://www.youtube.com/watch?v=2V1WK-3HQNk) - He covers incredible range of tech stacks that I really want to learn.

## Author

- Frontend Mentor - [@Sloth247](https://www.frontendmentor.io/profile/Sloth247)
