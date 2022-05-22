
import * as React from 'react';
import {Admin, Resource, EditGuesser, ListGuesser, defaultTheme} from 'react-admin';

import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from 'react-admin-firebase';
import {BursaryCreate, BursaryEdit, BursaryList, BursaryShow} from "./components/bursary";
import {TertiaryCreate, TertiaryEdit, TertiaryList} from "./components/tertiaries";
import {JobsCreate, JobsList, ListingsEdit} from "./components/listings";
import {QpCreate, QpEdit, QpList} from "./components/questionPapers";
import {StudyMaterialsCreate, StudyMaterialsEdit, StudyMaterialsList} from "./components/studyMaterials";

const config = {
  apiKey: "AIzaSyCqFaD23lt9liiO4ed6LRVGb1UdfIC5iSE",
  authDomain: "easycareergo-490d9.firebaseapp.com",
  databaseURL: "https://easycareergo-490d9.firebaseio.com",
  projectId: "easycareergo-490d9",
  storageBucket: "easycareergo-490d9.appspot.com",
  messagingSenderId: "274864759639",
  appId: "1:274864759639:web:3feab42a1b7164ce8c9412",
  measurementId: "G-RG7EB6NJSN"
};

const options = {};
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config);
const theme = {
  ...defaultTheme,
  palette: {
    type: 'dark',
  },
  RaImageField: {
    height: 10,
    width:10
  }
};

const App = () =>
    <Admin
        theme={theme}
        authProvider={authProvider}
        dataProvider={dataProvider}

    >
      <Resource
          name="bursary"
          list={BursaryList}
          edit={BursaryEdit}
          create={BursaryCreate}
          show={BursaryShow}
      />

      <Resource
          name="tertiaries"
          list={TertiaryList}
          edit={TertiaryEdit}
          create={TertiaryCreate}
      />
      <Resource
          name="listing"
          list={JobsList}
          edit={ListingsEdit}
          create={JobsCreate}
      />
      <Resource
          name="questionPapers"
          list={QpList}
          edit={QpEdit}
          create={QpCreate}

      />
      <Resource
          name="studyMaterials"
          list={StudyMaterialsList}
          edit={StudyMaterialsEdit}
          create={StudyMaterialsCreate}
      />

    </Admin>

export default App;

