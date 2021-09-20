import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Container, Logo, SearchLogo } from './styles';

import UserFoundButton from '../../components/UserFoundButton';

function SearchUser() {

    const [searchingState, setSearchingState] = useState('pesquisar');
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState();

    function searchUser(event) {
        event.preventDefault();

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

            <form action="" onSubmit={event => searchUser(event)}>
                <input
                    type="search"
                    placeholder="search on github"
                    onChange={event => setSearch(event.target.value)}
                />

                <div>
                    <button type="submit">
                        <SearchLogo />
                        <span>{searchingState}</span>
                    </button>
                </div>
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