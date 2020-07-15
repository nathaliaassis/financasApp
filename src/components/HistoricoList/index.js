import React from 'react';
import { Container, Tipo, IconView, TipoText, ValorText } from './styles';
import Icon from 'react-native-vector-icons/AntDesign'

export default function HistoricoList({ data }) {
    return (
        <Container>
            <Tipo>
                <IconView tipo={data.tipo}>
                    <Icon
                        name={data.tipo === 'despesa' ? 'arrowdown' : 'arrowup'}
                        color='#fff'
                        size='20'
                    />
                    <TipoText>{data.tipo} </TipoText>
                </IconView>
            </Tipo>
            <ValorText>
                {data.valor}
            </ValorText>
        </Container>
    )
}
