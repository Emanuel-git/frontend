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
        <Container type="button" onClick={() => history.push(`/users?user=${login}`)}>
            <Avatar>
                <img src={avatarUrl} alt={login} />
            </Avatar>

            <Content>
                <span>{name}</span>
                <a href={linkPerfil} target="_blank" >{linkPerfil}</a>
                <div>
                    <span>Seguidores: {followers}</span>
                    <span>Seguindo: {followers}</span>
                </div>
            </Content>
        </Container>
    );
}

export default UserFoundButton;