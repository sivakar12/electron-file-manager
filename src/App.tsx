import React from 'react';

import {getHomeDirectory, getFolderContents } from './backend'
const App: React.FC = () => {
  const homeFolder = getHomeDirectory()
  const files = getFolderContents(homeFolder)
  return (
    <div>
      <p>Home folder: {homeFolder}</p>
      <ul>
        {files.map(f => <li key={f.name}>{f.name}</li>)}
      </ul>
    </div>
    );
  }
  
  export default App;
  