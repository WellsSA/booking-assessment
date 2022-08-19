import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';

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
        <Card key={booking.id}>{booking.property.name}</Card>
      ))}
    </Container>
  );
};

export default BookingDisplayer;
