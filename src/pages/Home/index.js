import React, { useContext, useState, useEffect } from 'react';
import firebase from '../../services/firebaseConnection';
import {format} from 'date-fns';
import { AuthContext } from '../../contexts/auth';
import { Background, Nome, Saldo, Titulo, List } from './styles';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';


export default function Home() {
    const { user } = useContext(AuthContext);

    const [historico, setHistorico] = useState([
        {key: '1', tipo: 'despesa', valor: 123.34},
        {key: '3', tipo: 'receita', valor: 432.34},
        {key: '5', tipo: 'despesa', valor: 143.34},
        {key: '6', tipo: 'receita', valor: 12.34},
    ]);
    const [saldo, setSaldo] = useState(0);

    const uid = user && user.uid;

    useEffect(()=>{
        async function loadList(){
          await firebase.database().ref('users').child(uid).on('value', (snapshot)=>{
            setSaldo(snapshot.val().saldo);
          });
    
          await firebase.database().ref('historico')
          .child(uid)
          .orderByChild('date').equalTo(format(new Date, 'dd/MM/yy'))
          .limitToLast(10).on('value', (snapshot)=>{
            setHistorico([]);
    
            snapshot.forEach((childItem) => {
              let list = {
                key: childItem.key,
                tipo: childItem.val().tipo,
                valor: childItem.val().valor
              };
              
              setHistorico(oldArray => [...oldArray, list].reverse());
            })
          })
    
        }
    
        loadList();
      }, []);
    return (
        <Background>
            <Header />

            <Nome>Olá, {user && user.nome}!</Nome>
            <Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Saldo>
            <Titulo>Últimas movimentações</Titulo>
            
            <List
                showsVerticalScrollIndicator={false}
                data={historico}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (<HistoricoList data={item}/>)}
            />
        </Background >
    )
}
