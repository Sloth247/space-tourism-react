import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      return navigate('/');
    }, 10000);
  });
  return (
    <div className="error-container">
      <h1 className="error-title">404 - Not found</h1>
      <p>
        This page will be automatically redirected to homepage in 10 seconds.
      </p>
    </div>
  );
}
