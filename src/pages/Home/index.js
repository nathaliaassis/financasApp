import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth';
import { Background, Nome, Saldo, Titulo, List } from './styles';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';


export default function Home() {
    const { user } = useContext(AuthContext);

    const [historico, setHistorico] = [
        { key: '1', tipo: 'receita', valor: '10' },
        { key: '2', tipo: 'despesa', valor: '20' },
        { key: '3', tipo: 'receita', valor: '540' },
        { key: '4', tipo: 'despesa', valor: '640' },
        { key: '5', tipo: 'receita', valor: '760' },
    ]
    return (
        <Background>
            <Header />

            <Nome>{user && user.nome}</Nome>
            <Saldo>R$ {user.saldo}</Saldo>
            <Titulo>Últimas movimentações</Titulo>
            {/* <List
                showsVerticalScrollIndicator={false}
                data={historico}
                keyExtractot={item => item.key}
                rederItem={({ item }) => (<HistoricoList data={item} />)}
            /> */}
        </Background >
    )
}
