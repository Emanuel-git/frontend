import React from 'react';

import { Container } from './styles';

import { parseISO } from 'date-fns';
import { format } from 'date-fns-tz';

function Repo({
    name,
    url,
    description,
    createdAt,
    updatedAt,
    language
}) {

    const createdAtFormated = format(parseISO(createdAt), 'dd/MM/yyyy HH:mm', {
        timeZone: 'America/Sao_paulo'
    });

    const updatedAtFormated = format(parseISO(updatedAt), 'dd/MM/yyyy HH:mm', {
        timeZone: 'America/Sao_paulo'
    });

    return (
      <Container>
          <span>{name}</span>
          <span>{description}</span>
          <span>Created at {createdAtFormated}</span>
          <span>Updated at {updatedAtFormated}</span>
          <span>{language}</span>
      </Container>
  );
}

export default Repo;