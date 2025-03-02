import React from 'react';

import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import SplideCarouselSlide from './SplideCarouselSlide.tsx';

import getRandomId from '../../utils/getRandomId.ts';

interface SplideCarouselProps {
  projectsGroup: Array<{}>;
  projectsLikes: Array<{}>;
}

function SplideCarousel(props: SplideCarouselProps): React.ReactElement {
  const { projectsGroup, projectsLikes } = props;

  return (
    <>
      <Splide
        aria-label="Projects carousel"
        options={{
          rewind: true,
          type: 'loop',
          perPage: 3,
          width: '100%',
          height: '50%',
          gap: '1rem',
          cover: false,
          isNavigation: false,
          pagination: true,
          mediaQuery: 'max',
          breakpoints: {
            800: {
              arrows: false,
              perPage: 1,
            },
            1048: {
              perPage: 2,
            },
          },
        }}
      >
        {projectsGroup.map((projectData) => (
          <SplideCarouselSlide
            key={getRandomId()}
            projectData={projectData}
            projectsLikes={projectsLikes}
          />
        ))}
      </Splide>
    </>
  );
}

export default SplideCarousel;
