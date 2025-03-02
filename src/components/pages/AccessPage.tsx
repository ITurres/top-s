import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/pages/AccessPage.scss';
import '../../styles/animations/button-slide.scss';
import '../../styles/animations/shrink-and-center.scss';

import AccessPageVideo from '../animations/AccessPageVideo.tsx';
import FloatingAstronaut from '../animations/FloatingAstronaut.tsx';

import setPageTitle from '../../utils/setPageTitle.ts';

const AstronautStyleProps = {
  animationSpeed: 30,
  maxWidth: 150,
  move: {
    fromTop: 0,
    toTop: 300,
    fromLeft: -100,
    toLeft: 100,
    fromRight: 0,
    toRight: 0,
  },
  rotation: {
    rotate: -20,
  },
};

function AccessPage(): React.ReactElement {
  const $accessPageMain = useRef<HTMLElement>(null);
  const $videoElement = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  setPageTitle('Access 👨‍🚀');

  const handleMainElementAnimations = () => {
    if ($accessPageMain.current) {
      $accessPageMain.current.classList.remove('text-hue-rotate');
      $accessPageMain.current.classList.add('shrink-and-center');
    }
  };

  const handleVideoInteraction = () => {
    if ($videoElement.current) {
      setTimeout(() => {
        if ($videoElement.current) {
          $videoElement.current.style.display = 'block';
          $videoElement.current.muted = true;

          const playPromise = $videoElement.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                // eslint-disable-next-line
                console.log(
                  '/iturres-reactive-portfolio/ Video started successfully',
                );
                setPageTitle('🚀..........');
              })
              .catch((error) => {
                // eslint-disable-next-line
                console.error('Video play failed:', error);
                navigate('/homepage');
              });
          } else {
            navigate('/homepage');
          }
        }
      }, 200);

      $videoElement.current.addEventListener('ended', () => navigate('/homepage'));
    } else {
      navigate('/homepage');
    }
  };

  return (
    <div className="blend-in-out">
      <FloatingAstronaut
        animationSpeed={AstronautStyleProps.animationSpeed}
        maxWidth={AstronautStyleProps.maxWidth}
        move={AstronautStyleProps.move}
        rotation={AstronautStyleProps.rotation}
      />
      <main ref={$accessPageMain} className="access-page-main text-hue-rotate">
        <span>Arthur Iturres</span>
        <h1>Delivering The Future</h1>
        <button
          type="button"
          className="my-btn color2 slide-up"
          onClick={() => {
            handleMainElementAnimations();
            handleVideoInteraction();
          }}
        >
          Access
        </button>
      </main>
      <AccessPageVideo $videoElement={$videoElement} />
    </div>
  );
}

export default AccessPage;
