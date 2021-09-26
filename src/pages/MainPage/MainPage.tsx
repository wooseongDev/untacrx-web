import React from 'react';
import { Link } from 'react-router-dom';

import { Hello } from '../../components';

function MainPage() {
  return (
    <>
      <Hello />
      <Link to="/match">link</Link>
    </>
  );
}

export default MainPage;
