import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth';
import { Background, Nome, Saldo, Titulo, List } from './styles';
import Header from '../../components/Header';


export default function Home() {
    const { user } = useContext(AuthContext);
    return (
        <Background>
            <Header />

            <Nome>{user && user.nome}</Nome>
            <Saldo>R$ {user.saldo}</Saldo>
            <Titulo>Últimas movimentações</Titulo>
            <List
                showsVerticalScrollIndicator={false}
                data={}
                keyExtractot={}
                rederItem={}
            />
        </Background >
    )
}
