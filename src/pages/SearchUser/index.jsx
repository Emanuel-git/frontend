import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Container, Logo, SearchBar, SearchButton } from './styles';

function SearchUser() {

    const [search, setSearch] = useState('');

    function getUser() {
        if (!search) return;

        axios.get(`https://api.github.com/users/${search}`).then(res => {
            console.log(res);
        }).catch(() => {});
    }

    return (
        <Container>
            <Logo />
            <SearchBar
                type="search"
                placeholder="Digite o user do Github"
                onChange={event => setSearch(event.target.value)}
            />
            <SearchButton
                type="button"
                onClick={() => getUser(search)}
            >pesquisar</SearchButton>
        </Container>
    );
}

export default SearchUser;