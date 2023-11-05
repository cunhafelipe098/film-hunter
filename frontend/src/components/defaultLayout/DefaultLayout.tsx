import './DefaultLayout.scss'
import '@ui5/webcomponents-react/dist/Assets';

import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Button, Page, Bar } from '@ui5/webcomponents-react';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';


const pages = [
    {
        key: "home",
        label: <Link to={"/home"}>Home</Link>,
    },
    {
        key: "favorite",
        label: <Link to={"/favorite"}>Favorite</Link>,
    }
]

function DefaulLayout() {
    const location = useLocation();
    const currentUrl = location.pathname;

    const [colorScheme, setColorScheme] = useState('light');

    const toggleColorScheme = () => {    
      setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');  
      setTheme(colorScheme === 'dark' ? 'sap_horizon' : 'sap_horizon_dark')
  
    }

    return (
        <Page
            className='default-page'
            floatingFooter={true}
            footer={
            <Bar 
                design="FloatingFooter"
                startContent={<Button icon="home" title="Go Home"/>}
            />
            }
            header={
                <Bar 
                    endContent={
                        <Button 
                            onClick={toggleColorScheme} 
                            icon={colorScheme === 'dark' ? 'light-mode' : 'dark-mode'} 
                            title="Change Theme"
                        />
                    } 
                    startContent={<Button icon="home" title="Go Home"/>}
                >
                    <div className='menu-container'>
                        {
                            pages?.map((item) =>
                                <div
                                    className={`${currentUrl === `${item.label?.props?.to}` ? 'selectedItem' : ''}`}
                                >
                                        {item.label}
                                </div>
                            )
                        }
                    </div>
                </Bar>
            }
        >
            <div className='container'>
                <Outlet/>
            </div>
        </Page>

    )
}

export default DefaulLayout;