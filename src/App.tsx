import React, { useCallback, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => {
  const [displayThirdTab, setDisplayThirdTab] = useState<boolean>(false);

  const renderFirstTab = useCallback(() => {
    return <Tab1 setDisplayThirdTab={setDisplayThirdTab} />;
  }, []);

  const renderSecondTab = useCallback(() => {
    return <Tab2 setDisplayThirdTab={setDisplayThirdTab} />;
  }, []);

  const renderThirdTabRoute = useCallback(() => {
    if (displayThirdTab) {
      return (<Route path="/tab3" component={Tab3} />);
    } else {
      // This is weird, if I return null or undefined then I get all sorts of errors, seemingly
      // because the router is mad about a child not being a route.
      return (<Route path="/tab300" component={Tab1} />);
    }
  }, [displayThirdTab]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/tab1" render={renderFirstTab} exact={true} />
            <Route path="/tab2" render={renderSecondTab} exact={true} />
            {renderThirdTabRoute()}
            <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={triangle} />
              <IonLabel>Tab 1</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={ellipse} />
              <IonLabel>Tab 2</IonLabel>
            </IonTabButton>
            {displayThirdTab && (
              <IonTabButton tab="tab3" href="/tab3">
                <IonIcon icon={square} />
                <IonLabel>Tab 3</IonLabel>
              </IonTabButton>
            )}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
