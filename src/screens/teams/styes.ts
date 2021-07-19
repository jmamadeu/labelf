import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: ${(props) => props.theme.colors.darker};

    padding: 20px;
`;

export const InputContainer = styled.View`
    background: ${(props) => props.theme.colors.darkLight};
    border-radius: 14px;
`;
