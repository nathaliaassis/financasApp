import React, { Component } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Container, Header} from './styles';
import { Platform, TouchableOpacity } from 'react-native';

export default function DatePiker() {

  const [dateNow, setDateNow] = useState(new Date());
  return(
    <Container>
      {Platform.OS === 'ios' &&
        <Header>
          <TouchableOpacity onPress={()=>{}}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </Header>
      }
      <DateTimePicker 
        value={dateNow}
        mode='date'
        display='default'
        onChange={(e, d)=>{}}
        style={{backgroundColor: 'white'}}
      />
    </Container>
  );
}

