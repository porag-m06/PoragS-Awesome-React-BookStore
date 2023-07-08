import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../style/circularProgress.css';
import React from 'react';

function CircularProgress() {
  const progress = Math.floor(Math.random() * 101);
  return (
    <div className="cp-container">
      <div className="c-progress">
        <CircularProgressbar value={progress} />
      </div>
      <div>
        <p className="progress-percent">{`${progress}%`}</p>
        <span className="c-completed">Completed</span>
      </div>
    </div>
  );
}

export default CircularProgress;
