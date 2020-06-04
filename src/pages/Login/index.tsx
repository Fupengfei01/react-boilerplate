import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../actions/user';

export default function Login(): React.ReactElement {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      login({
        username: 'test',
        password: 'test',
      }),
    );
  }, []);

  return <div>Login</div>;
}
