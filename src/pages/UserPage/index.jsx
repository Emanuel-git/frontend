import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import { Container, Banner, Avatar, Details, Repos } from './styles';
import Repo from '../../components/Repo';

function UserPage() {
    const params = useParams();

    const user = params.user ? params.user : {};

    const [userInfo, setUserInfo] = useState({});
    const [userRepos, setUserRepos] = useState();

    async function getUserInfo() {
        const res = await axios.get(`https://api.github.com/users/${user}`);

        setUserInfo(res.data);
    }

    async function getUserRepos() {
        const res = await axios.get(`https://api.github.com/users/${user}/repos`);

        setUserRepos(res.data);
    }

    useEffect(() => {
        getUserInfo();
        getUserRepos();
    }, []);

    return (
        <Container>
            <Banner>
                <Avatar>
                    <img src={userInfo.avatar_url} alt={userInfo.login} />
                </Avatar>

                <Details>
                    <h1>{userInfo.name}</h1>
                    <h2>{userInfo.login}</h2>

                    <p>{userInfo.bio}</p>

                    <div className="follow">
                        <span>seguidores:</span> <h3>{userInfo.followers}</h3>
                        <span>seguindo:</span> <h3>{userInfo.following}</h3>
                    </div>
                </Details>
            </Banner>

            <Repos>
                <Repo></Repo>
            </Repos>
        </Container>
    );
}

export default UserPage;