import { Ionicons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { useTheme } from 'styled-components';

import {
    SearchContainer,
    SearchInput as Input,
    SearchIcon,
    SendButton,
} from './search.styles';

export const SearchInput: FC = () => {
    const { colors } = useTheme();

    return (
        <SearchContainer>
            <SearchIcon name="search" />
            <Input
                placeholder="Enter the year"
                maxLength={4}
                keyboardType="number-pad"
            />
            <SendButton>
                <Ionicons
                    name="send-outline"
                    size={20}
                    color={colors.darkGray}
                />
            </SendButton>
        </SearchContainer>
    );
};
