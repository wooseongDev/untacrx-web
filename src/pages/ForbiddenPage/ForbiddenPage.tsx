import { Redirect } from 'react-router-dom';

function ForbiddenPage() {
  return <Redirect to="/" />;
}

export default ForbiddenPage;
