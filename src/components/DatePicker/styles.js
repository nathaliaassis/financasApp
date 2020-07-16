import styled from 'styled-components';
import { Platform } from 'react-native';

export const Container = styled.TouchableOpacity`
  background-color: ${Platform.OS === 'ios' ? '#00000066' : 'transparent'};
  position: absolute;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;
export const Header = styled.TouchableOpacity`
  padding: 16px;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: white;
  border-bottom-width: 1px;
  border-color: gray;
`;