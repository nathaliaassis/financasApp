import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Background, Container, Logo, AreaInput, Input, SubmitBtn, SubmitText, Link, LinkText } from './styles';
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext);

    function handleLogin() {
        signIn(email, password);
    }
    return (
        <Background>
            <Container behavior={Platform.os === 'ios' ? 'padding' : ''}>
                <Logo source={require('../../assets/Logo.png')} />
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
                <SubmitBtn onPress={() => handleLogin()}>
                    {loadingAuth ? 
                        <ActivityIndicator size={20} color='#fff'/> : 
                        <SubmitText>Entrar</SubmitText>
                    }
                   
                </SubmitBtn>
                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>
            </Container>
        </Background>
    )
}
