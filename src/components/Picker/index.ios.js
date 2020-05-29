import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import { PickerView } from './styles'

export default function Picker() {
    return (
        <PickerView>
            <RNPickerSelect
                style={{
                    inputIOS: {
                        height: 50,
                        padding: 5,
                        backgroundColor: '#fff',
                        fontSize: 16
                    }
                }}
                placeholder={{
                    label: 'Selecione o Tipo',
                    color: '#222',
                    value: null,

                }}
                onValueChange={}
                items={[
                    {
                        label: 'Receita',
                        value: 'receita',
                        color: '#222'
                    },
                    {
                        label: 'Despesa',
                        value: 'despesa',
                        color: '#222'
                    },
                ]}
            />
        </PickerView>
    )
}
