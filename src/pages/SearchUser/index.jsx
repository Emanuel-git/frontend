import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Container, Logo, SearchBar, SearchButton } from './styles';

import UserFoundButton from '../../components/UserFoundButton'; 

function SearchUser() {

    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState('');

    function searchUser() {
        if (!search) return;

        axios.get(`https://api.github.com/users/${search}`).then(res => {
            setSearchResult({
                login: res.data.login,
                avatarUrl: res.data.avatar_url,
                linkPerfil: res.data.html_url,
                name: res.data.name,
                followers: res.data.followers,
                following: res.data.following
            });
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
                onClick={() => searchUser(search)}
            >pesquisar
            </SearchButton>

            <UserFoundButton
                login={searchResult.login}
                avatarUrl={searchResult.avatarUrl}
                linkPerfil={searchResult.linkPerfil}
                name={searchResult.name}
                followers={searchResult.followers}
                following={searchResult.following}
            />                
        </Container>
    );
}

export default SearchUser;