import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Default} from './layout/default';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import routes from './router/routes';
import React,{ Suspense } from 'react';

function App() {

  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

  return (
    <Router>
      <Suspense fallback={loading}>
        <Default>
          <Switch>
              {
                routes.map((route,idx)=>{
                  return (
                      route.component && (
                        <Route 
                          exact={route.exact} key={idx} path={route.path} name={route.name} render={props => <route.component {...props} />}/>
                      )
                    )
                })
              }
          </Switch>
        </Default>
      </Suspense>
    </Router>
  );
}

export default App;
