import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #131313;
    padding: 8px;
`;
export const Nome = styled.Text`
    font-size: 18px;
    font-style: italic;
    color: white; 
    text-align: center;
`;
export const Saldo = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: white;
    margin: 4px 0;
`;
export const Titulo = styled.Text`
    color: #00b94a;
    margin: 8px 0;
    align-self: flex-start;
`;
export const List = styled.FlatList`
    width: 100%;
    background-color: white;
    padding: 16px 8px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`;
export const Area = styled.View`
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    margin: 10px 0;
`;
