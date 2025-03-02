import React, { RefObject } from 'react';
import mp4Video from '../../assets/images/bg/portfolio-access-animation-2-short.mp4';
import webmVideo from '../../assets/images/bg/portfolio-access-animation-2-short.webm';

/* eslint-disable no-undef */
interface AccessPageVideoProps {
  $videoElement: RefObject<HTMLVideoElement> | null;
}

function AccessPageVideo(props: AccessPageVideoProps): React.ReactElement {
  const { $videoElement } = props;
  /* eslint-disable jsx-a11y/media-has-caption */
  return (
    <video
      playsInline
      ref={$videoElement}
      className="accessPage-video"
      width="100%"
      muted
    >
      <source src={webmVideo} type="video/webm" />
      <source src={mp4Video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

/* eslint-disable no-undef */

export default AccessPageVideo;
