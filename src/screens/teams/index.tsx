import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';

import { AppContainer } from '../../components/container';
import { SearchInput } from '../../components/inputs/search-input';
import { Container, InputContainer } from './styes';

export const Teams: FC = () => {
    return (
        <Container>
            <StatusBar style="light" />
            <AppContainer />
            <InputContainer>
                <SearchInput />
            </InputContainer>
        </Container>
    );
};
