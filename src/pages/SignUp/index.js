import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import { Background, Container, AreaInput, Input, SubmitBtn, SubmitText } from './styles'

export default function SignUp() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signUp, loadingAuth} = useContext(AuthContext);

    function handleSignUp() {
        signUp(email, password, nome);
    }

    return (
        <Background>
            <Container behavior={Platform.os === 'ios' ? 'padding' : ''} enabled>
                <AreaInput>
                    <Input
                        placeholder='Nome'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={nome}
                        onChangeText={text => setNome(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder='E-mail'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder='Senha'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={password}
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />
                </AreaInput>
                <SubmitBtn onPress={handleSignUp}>
                    {loadingAuth ? 
                        <ActivityIndicator size={20} color='#fff'/> : 
                        <SubmitText>Cadastrar</SubmitText>
                    }
                </SubmitBtn>
            </Container>
        </Background>
    )
}
