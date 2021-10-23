import React, { useState } from 'react';
import { appleAppsList, googleAppsList } from './dummyData';

export default function Form() {
  const [playStoreQuery, setPlayStoreQuery] = useState('');
  const [appStoreQuery, setAppStoreQuery] = useState('');

  const [selectedPlayStore, setSelectedPlayStore] = useState(null);
  const [selectedAppStore, setSelectedAppStore] = useState(null);

  let handleInputChange = (callback, e) => {
    callback(e.target.value);
  };

  let handleSelectPlayStore = (app) => {
    setSelectedPlayStore(app);
    setPlayStoreQuery('');
  };

  let handleSelectAppStore = (app) => {
    setSelectedAppStore(app);
    setAppStoreQuery('');
  };

  return (
    <div className="form">
      <label htmlFor="google-play">Google Play Application</label>
      <div className="form__field">
        <input
          className="form__field--search"
          type="text"
          placeholder="Search"
          name="google-play"
          id="google-play"
          value={playStoreQuery}
          onChange={(e) => handleInputChange(setPlayStoreQuery, e)}
          style={{ visibility: selectedPlayStore ? 'hidden' : 'visible' }}
        />
        <div className="form__suggestions">
          <ul>
            {googleAppsList
              .filter((app) =>
                app.name.toLowerCase().includes(playStoreQuery.toLowerCase())
              )
              .map((app) => {
                return (
                  <li key={app.name}>
                    <button
                      tabIndex="0"
                      onClick={() => handleSelectPlayStore(app)}
                    >
                      <img src={app.icon} alt="" />
                      {app.name}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
        {selectedPlayStore && (
          <div className="form__selected">
            <img src={selectedPlayStore.icon} alt="" />
            <p>{selectedPlayStore.name}</p>
            <button onClick={() => setSelectedPlayStore(null)}>X</button>
          </div>
        )}
      </div>
      <label htmlFor="app-store">App Store Application</label>
      <div className="form__field">
        <input
          className="form__field--search"
          type="text"
          placeholder="Search"
          name="app-store"
          id="app-store"
          value={appStoreQuery}
          onChange={(e) => handleInputChange(setAppStoreQuery, e)}
          style={{ visibility: selectedAppStore ? 'hidden' : 'visible' }}
        />
        <div className="form__suggestions">
          <ul>
            {appleAppsList
              .filter((app) =>
                app.name.toLowerCase().includes(appStoreQuery.toLowerCase())
              )
              .map((app) => {
                return (
                  <li key={app.name}>
                    <button
                      tabIndex="0"
                      onClick={() => handleSelectAppStore(app)}
                    >
                      <img src={app.icon} alt="" />
                      {app.name}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
        {selectedAppStore && (
          <div className="form__selected">
            <img src={selectedAppStore.icon} alt="" />
            <p>{selectedAppStore.name}</p>
            <button onClick={() => setSelectedAppStore(null)}>X</button>
          </div>
        )}
      </div>
      <label htmlFor="extra-1">Some other info</label>
      <input type="text" name="extra-1" id="extra-1" />
      <label htmlFor="extra-2">Some other info</label>
      <input type="text" name="extra-2" id="extra-2" />
    </div>
  );
}
