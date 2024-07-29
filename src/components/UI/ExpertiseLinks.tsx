import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/UI/ExpertiseLinks.scss';

function ExpertiseLinks(): React.ReactElement {
  return (
    <div className="expertise-links">
      <Link
        to="/homepage/expertise"
        className="text-hue-rotate"
        aria-label="navigate to expertise section"
      >
        languages
      </Link>
      <Link
        to="/homepage/expertise"
        className="text-hue-rotate"
        aria-label="navigate to expertise section"
      >
        frameworks
      </Link>
      <Link
        to="/homepage/expertise"
        className="text-hue-rotate"
        aria-label="navigate to expertise section"
      >
        skills
      </Link>
      <a
        href="https://docs.google.com/document/d/1oCGTGmHpSoumnVm-3aEKVdW8zkpKnAbf/edit?usp=sharing&ouid=111255547278244482581&rtpof=true&sd=true"
        className="text-hue-rotate"
        aria-label="navigate to Arthur's resume which is hosted on Google Docs"
        target="_blank"
        rel="noreferrer noopener"
      >
        resume
      </a>
    </div>
  );
}

export default ExpertiseLinks;
