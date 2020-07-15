import React, { useState, useContext } from 'react';
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Background, Input, SubmitBtn, SubmitTxt } from './styles';

import Header from '../../components/Header';
import Picker from '../../components/Picker';

import {AuthContext} from '../../contexts/auth';

export default function New() {

    const navigation = useNavigation();

    const {user:usuario} = useContext(AuthContext);
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState(null);

    function handleSubmit(){
        if(isNaN(parseFloat(valor)) || tipo === null){
            alert('Preencha todos os campos!');
            return;
        }
        Alert.alert(
            'Confirmando dados',
            `Tipo: ${tipo} || Valor: ${parseFloat(valor)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Continuar',
                    onPress: ()=> handleAdd(),
                }
            ]
        )
    }

    async function handleAdd(){
        let uid = usuario.uid;
        let key = await firebase.database().ref('historico').child(uid).push().key
        await firebase.database().ref('historico').child(uid).child(key).set({
            tipo: tipo,
            valor: parseFloat(valor),
            date: format(new Date(), 'dd/MM/yy')
        })

        let user = firebase.database().ref('users').child(uid);
        await user.once('value').then(snapshot => {
            let saldo  = parseFloat(snapshot.val().saldo);
            
            tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);

            user.child('saldo').set(saldo);
        });

        setValor('');
        Keyboard.dismiss();
        navigation.navigate('Home');
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header />
                <SafeAreaView style={{ alignItems: 'center' }}>
                    <Input
                        placeholder="Valor desejado"
                        KeyboardType="numeric"
                        returnKeyType="next"
                        onSubmitEditing={() => Keyboard.dismiss()}
                        onChangeText={text => setValor(text)}
                        value={valor}
                    />
                    <Picker 
                        onChange={setTipo} 
                    />
                    <SubmitBtn onPress={() => handleSubmit()}>
                        <SubmitTxt>
                            Registrar
                    </SubmitTxt>
                    </SubmitBtn>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>

    )
}

