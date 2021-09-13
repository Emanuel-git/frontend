import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import { Container, Banner, Avatar, Details, Repos, LocationLogo } from './styles';
import Repo from '../../components/Repo';

function UserPage() {
    const params = useParams();

    const user = params.user ? params.user : {};

    const [userInfo, setUserInfo] = useState({});
    const [userRepos, setUserRepos] = useState([]);

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
                
                <img src={userInfo.avatar_url} alt={userInfo.login} />

                <Details>
                    <h1>{userInfo.name}</h1>
                    <h2>{userInfo.login}</h2>

                    <p>{userInfo.bio}</p>

                    <div className="follow">
                        <span>seguidores:</span> <h3>{userInfo.followers}</h3>
                        <span>seguindo:</span> <h3>{userInfo.following}</h3>
                    </div>

                    <div className="location">
                        <LocationLogo />
                        <span>{userInfo.location}</span>
                    </div>
                </Details>
            </Banner>

            <Repos>
                {userRepos.map(repo => (
                        <Repo
                             key={repo.id}
                             name={repo.name}
                             url={repo.html_url}
                             description={repo.description}
                             createdAt={repo.created_at}
                             updatedAt={repo.updated_at}
                             language={repo.language}
                        />
                    )
                )}
            </Repos>
        </Container>
    );
}

export default UserPage;