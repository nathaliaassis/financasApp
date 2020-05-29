import React, { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Background } from './styles'
import Header from '../../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import Picker from '../../components/Picker';

export default function New() {

    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState(null);
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
                    />
                    <Picker onChange={setTipo} />
                    <SubmitBtn>
                        <SubmitTxt>
                            Registrar
                    </SubmitTxt>
                    </SubmitBtn>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>

    )
}

