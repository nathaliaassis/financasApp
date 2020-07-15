import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #131313;
    padding: 24px;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#222'
})`
    height: 45px;
    width: 100%;
    background-color: rgba(255,255,255, 0.9);
    margin: 24px 0;
    font-size: 18px;
    padding: 0 12px;
    border-radius: 5px;
`;
export const SubmitBtn = styled.TouchableOpacity`
    height: 50px;
    width: 90%;
    margin: 16px 0;
    background-color: #00b94a;
    justify-content: center;
    align-items: center;
    padding: 7px;
    border-radius: 5px;
`;
export const SubmitTxt = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color:white;
`;