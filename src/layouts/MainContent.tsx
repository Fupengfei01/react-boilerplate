import React from 'react';
import { LoadableComponent } from '@loadable/component';
import { RouteComponentProps } from 'react-router-dom';

interface MainContentProps {
  component: LoadableComponent<RouteComponentProps>;
  matchProps: RouteComponentProps;
}

export default function MainContent(props: MainContentProps): React.ReactElement {
  const { component: Component, matchProps } = props;

  return (
    <div className="main-content">
      <Component {...matchProps} />
    </div>
  );
}
