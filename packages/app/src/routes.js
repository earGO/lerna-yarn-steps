import React from 'react';
import {Helmet} from 'react-helmet';
import {ConnectedRouter} from 'connected-react-router';
import {Route, Switch} from 'react-router-dom';

import {name as appName} from '../package.json';

import {nsi} from '@ursip-box-front/modules';

import {Common, Main} from '@ursip-box-front/components';
import {projectCard} from '@ursip-box-front/modules';

const {Layout, Loading, NotFound} = Common;

const projectCardRoute = projectCard.baseRoute;
const nsiModuleRoute = nsi.baseRoute;

const routes = [
  {
    key: 'Main',
    path: '/',
    exact: true,
    component: React.lazy(() => Main)
  },
  {
    key: 'Nsi',
    path: nsiModuleRoute,
    component: React.lazy(() => nsi)
  },
  {
    key: 'project-card',
    path: projectCardRoute,
    component: React.lazy(() => projectCard)
  }
];

function Routes({history}) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{appName}</title>
      </Helmet>
      <ConnectedRouter history={history}>
        <Layout>
          <React.Suspense fallback={<Loading overlay />}>
            <Switch>
              {routes.map(route => (
                <Route {...route} />
              ))}
              <Route component={NotFound} />
            </Switch>
          </React.Suspense>
        </Layout>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default Routes;
