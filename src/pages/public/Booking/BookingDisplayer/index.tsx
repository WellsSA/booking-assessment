import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';

import { formatDate } from 'util/formatting';
import { Container, Card } from './styles';

const BookingDisplayer: React.FC = () => {
  const { bookings } = useAppSelector(state => state.booking);
  const actions = {
    select: () => {},
    delete: () => {},
  };

  return (
    <Container>
      {bookings.map(booking => (
        <Card key={booking.id}>
          <h2>{booking.property.name}</h2>
          <p>
            {formatDate(booking.interval.start)} -{' '}
            {formatDate(booking.interval.end)}
          </p>
        </Card>
      ))}
    </Container>
  );
};

export default BookingDisplayer;
