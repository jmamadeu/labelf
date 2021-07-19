import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const SearchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const SearchInput = styled.TextInput.attrs((props) => ({
    placeholderTextColor: props.theme.colors.darkGray,
}))`
    height: 54px;
    align-self: flex-start;
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
    flex: 1;
`;

export const SearchIcon = styled(Ionicons)`
    color: ${(props) => props.theme.colors.darkGray};
    padding: 6px;
    justify-content: center;
    font-size: 20px;
`;

export const SendButton = styled(TouchableOpacity)`
    background: ${(props) => props.theme.colors.dark};
    height: 54px;
    justify-content: center;
    align-items: center;
    width: 50px;
    align-self: flex-end;
    border-bottom-right-radius: 14px;
    border-top-right-radius: 14px;
`;
