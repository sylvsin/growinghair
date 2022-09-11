import 'bootstrap/dist/css/bootstrap.min.css';
import './Manual.css';

import React from 'react';

import { useParams } from 'react-router-dom';

const Manual: React.FC = () => {
  const params = useParams();
  const { slug } = params;

  return (
    <div className="manual">
      <h5 className="manual-text">
        Use Mimis Cream <strong>once a month after washing your hair</strong>{' '}
        for best result.
        <br /> Usage should be applied to <strong>damp hair</strong>.
      </h5>
    </div>
  );
};

export default Manual;
