import { useState } from 'react'
import './app.scss'
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import '@ui5/webcomponents-react/dist/Assets';
import { Button } from '@ui5/webcomponents-react';
import { Card } from '@ui5/webcomponents-react';

function App() {

  const [colorScheme, setColorScheme] = useState('light');

  const toggleColorScheme = () => {    
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');  
    setTheme(colorScheme === 'dark' ? 'sap_horizon' : 'sap_horizon_dark')

  }
  return (
    <div >
      <Button onClick={toggleColorScheme}>Hello world!</Button>
      <Card className="skeleton-placeholder">
        
      </Card>
    </div>
  )
}

export default App
