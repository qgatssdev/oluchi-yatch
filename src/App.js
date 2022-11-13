import './App.scss';
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import * as animation from './lottie/43079-cute-bunnies-in-the-boat.json';
import * as animation2 from './lottie/91909-alarm.json';

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-11-22`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  function Mailto({ email, subject, body, className, ...props }) {
    return (
      <a
        href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}
        className={className}
      >
        {props.children}
      </a>
    );
  }

  return (
    <div className='App'>
      <section>
        <h1 className='sec__header'>All on board to Olly's Yatch party!!!!</h1>
        <img src={require('./assets/IMG_2324.png')} alt='' />
        <p className='sec__p1'>
          {timerComponents.length ? (
            timerComponents
          ) : (
            <span>Happy Birthday to Me!</span>
          )}
        </p>
        <div className='animation'>
          <div className='animation__1'>
            <Lottie animationData={animation} loop={true} className='lottie' />
          </div>
          <div className='animation__2'>
            <p className='p1'>8, wole olateju crescent</p>
            <p className='p2'>
              <span>
                <Lottie
                  animationData={animation2}
                  loop={true}
                  className='lottie2'
                />
              </span>
              6PM!
            </p>
            <Mailto
              email='Oluchinnose2000@gmail.com'
              subject='Birthday RSVP'
              body='Heyyy!, kindly rsvp 😊'
              className='RSVP'
            >
              Click here to RSVP
            </Mailto>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
