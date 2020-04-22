import React, { useCallback } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

type Props = {
  setDisplayThirdTab: (value: boolean) => void;
};

const Tab1 = ({ setDisplayThirdTab }: Props) => {
  const doIt = useCallback(() => {
    setDisplayThirdTab(true);
  }, [setDisplayThirdTab]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <h1 onClick={doIt}>CLICK ME TO MAKE THE THIRD TAB APPEAR!!!!!!!!1</h1>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
