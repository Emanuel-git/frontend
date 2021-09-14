import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    Container,
    Avatar,
    Content
} from './styles';

function UserFoundButton({
    login,
    avatarUrl,
    linkPerfil,
    name,
    followers,
    following
}) {
    const history = useHistory();

    return (
        <Container type="button" onClick={() => history.push(`/users/${login}`)}>
            <Avatar>
                <img src={avatarUrl} alt={login} />
            </Avatar>

            <Content>
                <span>{name}</span>
                <span>{linkPerfil}</span>
                <div>
                    <h2>Seguidores: <span>{followers}</span></h2>
                    <h2>Seguindo: <span>{following}</span></h2>
                </div>
            </Content>
        </Container>
    );
}

export default UserFoundButton;