import React from 'react';

import { Container, StarIcon } from './styles';

import { parseISO, differenceInDays, differenceInHours } from 'date-fns';
import { format } from 'date-fns-tz';

function Repo({
    name,
    url,
    description,
    stars,
    updatedAt,
    language
}) {

    function formatUpdatedTime(time) {
        const updatedAtFormated = format(parseISO(time), 'yyyy-MM-dd HH:mm', { timeZone: 'America/Sao_paulo' }).replace(' ', 'T');

        const days = differenceInDays(new Date().getTime(), new Date(updatedAtFormated).getTime());

        const hours = differenceInHours(new Date().getTime(), new Date(updatedAtFormated).getTime());

        const month = format(parseISO(time), 'MM/dd', { timeZone: 'America/Sao_paulo' });
        
        if (days >= 360) return 'updated a year ago';

        if (days >= 30) return `updated on ${month}`;

        if (days < 1) return `updated ${hours} hour(s) ago`;

        else return `updated ${days} day(s) ago`;
    }

    return (
      <Container>
          <a href={url} target="_blank">{name}</a>
          <span>{description}</span>
          <span>{formatUpdatedTime(updatedAt)}</span>
          <div><StarIcon /><span>{stars}</span></div>
          <span>{language}</span>
      </Container>
  );
}

export default Repo;