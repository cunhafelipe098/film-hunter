import { useState } from 'react'
import './app.scss'
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import '@ui5/webcomponents-react/dist/Assets';
import { Button, Page, Bar, Label } from '@ui5/webcomponents-react';
import Skeleton from './components/Skeleton';

function App() {

  const [colorScheme, setColorScheme] = useState('light');

  const toggleColorScheme = () => {    
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');  
    setTheme(colorScheme === 'dark' ? 'sap_horizon' : 'sap_horizon_dark')

  }
  return (
      <Page
      floatingFooter={false}
      footer={
        <Bar 
          design="FloatingFooter" 
          endContent={
            <>
              <Button design="Positive">Accept</Button>
              <Button design="Negative">Decline</Button>
              <Button design="Transparent">Cancel</Button>
            </>
          } 
          startContent={<Button icon="home" title="Go Home"/>}
        />
      }
      header={
        <Bar 
          endContent={<Button icon="settings" title="Go to Settings"/>} 
          startContent={<Button icon="home" title="Go Home"/>}
        >
          <Label>Title</Label>
        </Bar>}
      style={{
        height: '500px'
      }}
    >
      <Button onClick={toggleColorScheme}>Hello world!</Button>
      <Skeleton/>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed sed risus pretium. Eget nullam non nisi est sit amet facilisis. Imperdiet dui accumsan sit amet nulla facilisi morbi. Sem viverra aliquet eget sit amet tellus cras adipiscing. Faucibus purus in massa tempor nec. Egestas quis ipsum suspendisse ultrices gravida dictum. Amet facilisis magna etiam tempor. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Ac orci phasellus egestas tellus. Quis imperdiet massa tincidunt nunc. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
        </p>
        <p>
          Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra tellus in hac habitasse. Praesent tristique magna sit amet purus gravida quis blandit. Magnis dis parturient montes nascetur ridiculus. Sit amet nulla facilisi morbi tempus iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse sed nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus integer feugiat scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ante in nibh mauris cursus mattis. Sagittis vitae et leo duis.
        </p>
        <p>
          Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tellus rutrum tellus pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis elementum nibh. Velit laoreet id donec ultrices tincidunt arcu non sodales. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Odio ut sem nulla pharetra diam sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Donec enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ac placerat vestibulum lectus mauris ultrices.
        </p>
        <p>
          Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra tellus in hac habitasse. Praesent tristique magna sit amet purus gravida quis blandit. Magnis dis parturient montes nascetur ridiculus. Sit amet nulla facilisi morbi tempus iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse sed nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus integer feugiat scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ante in nibh mauris cursus mattis. Sagittis vitae et leo duis.
        </p>
        <p>
          Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tellus rutrum tellus pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis elementum nibh. Velit laoreet id donec ultrices tincidunt arcu non sodales. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Odio ut sem nulla pharetra diam sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Donec enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ac placerat vestibulum lectus mauris ultrices.
        </p>
      </div>
    </Page>
  )
}

export default App