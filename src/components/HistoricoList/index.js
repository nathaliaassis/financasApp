import React from 'react'
import { View, Text } from 'react-native'
import { Container, Tipo, TipoText } from './styles'
import { Icon } from 'react-native-vector-icons/Icon'

export default function HistoricoList({ data }) {
    return (
        <Container>
            <Tipo>
                <IconView tipo={data.tipo}>
                    <Icon
                        name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'}
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
