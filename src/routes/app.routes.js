import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerStyle={{
                backgroundColor: '#171717'
            }}
            drawerContent={(props) => <CustomDrawer {...props}/>}
            drawerContentOptions={{
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeBackgroundColor: '#00b94a',
                activeTintColor: '#171717',
                inactiveTintColor: '#ddd',
            }}
        >
            <AppDrawer.Screen name="Home" component={Home} />
            <AppDrawer.Screen name="Registar" component={New} />
            <AppDrawer.Screen name="Perfil" component={Profile} />
        </AppDrawer.Navigator>
    );
}

