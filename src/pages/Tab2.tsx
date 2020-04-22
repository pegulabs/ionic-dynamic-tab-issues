import React, { useCallback } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

type Props = {
  setDisplayThirdTab: (value: boolean) => void;
};

const Tab2 = ({ setDisplayThirdTab }: Props) => {
  const doIt = useCallback(() => {
    setDisplayThirdTab(true);
  }, [setDisplayThirdTab]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <h1 onClick={doIt}>shaaaaa</h1>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
