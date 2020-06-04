import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Route as IRoute } from '../routes';
import { user } from '../utils';

import MainContent from './MainContent';

export default function MainLayout(props: IRoute): React.ReactElement<IRoute> {
  const { component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps): React.ReactNode =>
        user.isLogin() ? (
          <div className="main-layout">
            <div className="main-content-wrapper">
              <MainContent component={component} matchProps={matchProps} />
            </div>
          </div>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: matchProps.location,
              },
            }}
          />
        )
      }
    />
  );
}
