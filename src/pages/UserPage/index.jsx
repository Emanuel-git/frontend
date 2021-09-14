import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import {
    Container,
    Banner,
    Details,
    Repos,
    LocationIcon,
    FilterBar,
    PeopleIcon
} from './styles';

import Repo from '../../components/Repo';

function UserPage() {
    const params = useParams();

    const user = params.user ? params.user : {};

    const [userInfo, setUserInfo] = useState({});
    const [userRepos, setUserRepos] = useState([]);
    const [repos, setRepos] = useState([]);
    const [reposRender, setReposRender] = useState();

    async function getUserInfo() {
        const res = await axios.get(`https://api.github.com/users/${user}`);

        setUserInfo(res.data);
    }

    async function getUserRepos() {
        const res = await axios.get(`https://api.github.com/users/${user}/repos`);

        setUserRepos(res.data);
    }

    function changeReposOrdenation(ordenation) {
        if (ordenation === 'starsASC') {
            repos.sort((repoA, repoB) => {
                if (repoA.stargazers_count < repoB.stargazers_count) return -1
                else return true;
            })

            setReposRender(repos.map(repo => (
                <Repo
                    key={repo.id}
                    name={repo.name}
                    url={repo.html_url}
                    description={repo.description}
                    stars={repo.stargazers_count}
                    updatedAt={repo.updated_at}
                    language={repo.language}
                />
            )));
        }
        
        if (ordenation === 'starsDESC') {
            repos.sort((repoA, repoB) => {
                if (repoA.stargazers_count > repoB.stargazers_count) return -1
                else return true;
            })

            setReposRender(repos.map(repo => (
                <Repo
                    key={repo.id}
                    name={repo.name}
                    url={repo.html_url}
                    description={repo.description}
                    stars={repo.stargazers_count}
                    updatedAt={repo.updated_at}
                    language={repo.language}
                />
            )));
        }

        if (ordenation === 'default') {
            setReposRender(userRepos.map(repo => (
                <Repo
                    key={repo.id}
                    name={repo.name}
                    url={repo.html_url}
                    description={repo.description}
                    stars={repo.stargazers_count}
                    updatedAt={repo.updated_at}
                    language={repo.language}
                />
            )));
        }

        return;
    }

    useEffect(() => {
        getUserInfo();
        getUserRepos();      
    }, []);

    useEffect(() => {
        setReposRender(userRepos.map(repo => (
            <Repo
                key={repo.id}
                name={repo.name}
                url={repo.html_url}
                description={repo.description}
                stars={repo.stargazers_count}
                updatedAt={repo.updated_at}
                language={repo.language}
            />
        )))
    }, [userRepos]);

    return (
        <Container>
            <Banner>
                
                <img src={userInfo.avatar_url} alt={userInfo.login} />

                <Details>
                    <h1>{userInfo.name}</h1>
                    <h2>{userInfo.login}</h2>

                    <p>{userInfo.bio}</p>

                    <div className="follow">
                        <PeopleIcon />
                        <h3>{userInfo.followers}</h3><span>seguidores .</span>
                        <span>seguindo</span><h3>{userInfo.following}</h3>
                    </div>

                    <div className="location">
                        <LocationIcon />
                        <span>{userInfo.location}</span>
                    </div>
                </Details>
            </Banner>

            <FilterBar>
                <select onChange={event => changeReposOrdenation(event.target.value)}>
                    <option value="default">default</option>
                    <option value="starsASC">less stars</option>
                    <option value="starsDESC">more stars</option>
                </select>
            </FilterBar>

            <Repos>
                {reposRender}
            </Repos>
        </Container>
    );
}

export default UserPage;