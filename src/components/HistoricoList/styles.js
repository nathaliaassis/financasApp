import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 8px;
    margin-bottom: 8px;
    box-shadow: 1px 2px rgba(0,0,0, 0.4);
`;
export const Tipo = styled.View`
    flex-direction: row;
`;
export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.tipo === 'despesa' ? '#c62c36' : '#049301'};
    padding: 4px 8px;
    border-radius: 5px;
`;
export const TipoText = styled.Text`
    font-size: 14px;
    font-weight: 300;
    color: white;
    font-style: italic;
`;
export const ValorText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #222;
`;