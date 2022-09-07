import 'bootstrap/dist/css/bootstrap.min.css';
import './Manual.css';

import React from 'react';

import { useParams } from 'react-router-dom';

const Manual: React.FC = () => {
  const params = useParams();
  const { slug } = params;

  return (
    <div className="manual">
      <span className="manual-text">Manual</span>
      <span className="manual-text">
        Use Mimis Cream <strong>once a month after washing your hair</strong>{' '}
        for best result. Usage should be applied to <strong>damp hair</strong>.
      </span>
      {/* {slug} */}
    </div>
  );
};

export default Manual;
