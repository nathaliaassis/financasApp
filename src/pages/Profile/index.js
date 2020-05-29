import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import * as S from './styles';

import Header from '../../components/Header';

export default function Profile() {
    const { user, signOut } = useContext(AuthContext);
    return (
        <S.Container>
            <Header />
            <S.Nome>{user.nome}</S.Nome>
            <S.NewLink onPress={() => navigation.navigate('Registrar')}>
                <S.NewText>Registrar Gastos</S.NewText>
            </S.NewLink>
            <S.Logout onPress={() => signOut()}>
                <S.LogoutText>Sair</S.LogoutText>
            </S.Logout>
        </S.Container>
    )
}

