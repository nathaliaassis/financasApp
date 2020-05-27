import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Background, Container, AreaInput, Input, SubmitBtn, SubmitText } from './styles'


export default function SignUp() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Background>
            <Container behavior={Platform.os === 'ios' ? 'padding' : ''}>

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
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </AreaInput>
                <SubmitBtn>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitBtn>
            </Container>
        </Background>
    )
}
