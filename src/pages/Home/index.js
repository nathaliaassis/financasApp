import React, { useContext, useState, useEffect } from 'react';
import firebase from '../../services/firebaseConnection';
import {Alert, TouchableOpacity} from 'react-native';
import {format, isBefore} from 'date-fns';
import { AuthContext } from '../../contexts/auth';
import { Background, Nome, Saldo, Titulo, List, Area } from './styles';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';

import Icon from 'react-native-vector-icons/MaterialIcons';


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

    const [newDate, setNewDate] = useState(new Date());

    useEffect(()=>{
      async function loadList(){
        await firebase.database().ref('users').child(uid).on('value', (snapshot)=>{
          setSaldo(snapshot.val().saldo);
        });
  
        await firebase.database().ref('historico')
        .child(uid)
        .orderByChild('date').equalTo(format(newDate, 'dd/MM/yyyy'))
        .limitToLast(10).on('value', (snapshot)=>{
          setHistorico([]);
  
          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              tipo: childItem.val().tipo,
              valor: childItem.val().valor,
              date: childItem.val().date,
            };
            
            setHistorico(oldArray => [...oldArray, list].reverse());
          })
        })
  
      }
  
        loadList();
      }, []);

      function handleDelete(data){ 
        const [diaItem, mesItem, anoItem] = data.date.split('/');
        const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`);
        console.log(dateItem);
        
        const formatToday = format(new Date(), 'dd/MM/yyyy');
        const [dayToday, monthToday, yearToday] = formatToday.split('/');
        const today = new Date(`${yearToday}/${monthToday}/${dayToday}`)
        console.log(today);

        if(isBefore(dateItem, today)){
          alert('Você não pode excluir um registro antigo!');
          return;
        }
        Alert.alert(
          'Cuidado atenção!',
           `Você deseja excluir ${data.tipo} - ${data.valor} ?`,
           [
              {text: 'Cancelar', style: 'cancel'},
              {
                text: 'Sim',
                onPress: () => handleDeleteSuccess(data)
              }
           ]
        )
        async function handleDeleteSuccess(){
          await firebase.database().ref('historico').child(uid).child(data.key).remove()
          .then( async()=>{
            let saldoAtual = saldo;

            data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : 
            saldoAtual -= parseFloat(data.valor);

            await firebase.database().ref('users').child(uid).child('saldo').set(saldoAtual);
          }).catch(error => {
            console.log(error)
          })
        }
      }  


    return (
        <Background>
            <Header />

            <Nome>Olá, {user && user.nome}!</Nome>
            <Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Saldo>

            <Area>
              <Titulo>Últimas movimentações</Titulo>
              <TouchableOpacity onPress={()=>{}}>
                <Icon name='event' color='#fff' size={30}/>
              </TouchableOpacity>
            </Area>
            
            <List
                showsVerticalScrollIndicator={false}
                data={historico}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (<HistoricoList data={item} deleteItem={handleDelete}/>)}
            />
        </Background >
    )
}
