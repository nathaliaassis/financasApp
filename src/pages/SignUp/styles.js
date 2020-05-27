import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #131313;
    padding: 16px;
`;
export const Container = styled.KeyboardAvoidingView`
   flex: 1;
   align-items: center;
   justify-content: center; 
`;
export const Logo = styled.Image`
    margin-bottom: 24px;
`;
export const AreaInput = styled.View`
    flex-direction: row;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255, 255, 255, 0.2)'
})`
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    font-size: 16px;
    color: #fff;
    margin-bottom: 16px;
    padding: 12px;
    border-radius: 5px;
`;
export const SubmitBtn = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    margin: 12px auto;
`;
export const SubmitText = styled.Text`
    font-size: 20px;
    color: #131313;

`;