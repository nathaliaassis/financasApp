import React, { useContext } from 'react'
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {AuthContext} from '../../contexts/auth';

export default function CustomDrawer(props) {

  const {user, signOut} = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 24, marginBottom: 24}}>
        <Image 
          source={require('../../assets/Logo.png')}
          style={{width: 85, height: 85}}
          resizeMode='contain'
        /> 
        <Text style={{color:'#FFF', fontSize: 18}}>
          Hey,
        </Text>
        <Text style={{color:'#FFF', fontSize: 18, fontWeight: 'bold'}}>
          {user && user.nome}
        </Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem 
        {...props}
        label='Sair'
        inactiveBackgroundColor='#c62c36'
        onPress={() => signOut()}
      />
    </DrawerContentScrollView>
  )
}
