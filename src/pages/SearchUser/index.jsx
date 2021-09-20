import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Container, Logo, SearchBar, SearchButton, SearchLogo } from './styles';

import UserFoundButton from '../../components/UserFoundButton';

function SearchUser() {

    const [searchingState, setSearchingState] = useState('pesquisar');
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState();

    function searchUser() {
        if (!search) return;

        setSearchingState('pesquisando...');

        axios.get(`https://api.github.com/users/${search}`).then(res => {
            setSearchResult({
                login: res.data.login,
                avatarUrl: res.data.avatar_url,
                linkPerfil: res.data.html_url,
                name: res.data.name,
                followers: res.data.followers,
                following: res.data.following
            });

            setSearchingState('pesquisar');
        }).catch(() => {
            setSearchingState('pesquisar');
         });
    }

    return (
        <Container>
            <Logo />

            <form onSubmit={() => searchUser(search)}>
                <SearchBar
                    type="search"
                    placeholder="Digite o user do Github"
                    onChange={event => setSearch(event.target.value)}
                />
                
                <SearchButton>
                    <SearchLogo />
                    <button type="submit">{searchingState}</button>
                </SearchButton>
            </form>

            {searchResult && (
                <UserFoundButton
                    login={searchResult.login}
                    avatarUrl={searchResult.avatarUrl}
                    linkPerfil={searchResult.linkPerfil}
                    name={searchResult.name}
                    followers={searchResult.followers}
                    following={searchResult.following}
                />
            )}
        </Container>
    );
}

export default SearchUser;