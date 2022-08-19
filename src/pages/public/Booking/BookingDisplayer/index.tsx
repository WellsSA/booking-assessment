import { useAppDispatch, useAppSelector } from 'hooks';

import { formatDate } from 'util/formatting';
import { setSelectedBooking } from 'store/slices/booking';
import { Container, Card } from './styles';

const BookingDisplayer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { bookings, selectedBooking } = useAppSelector(state => state.booking);
  const actions = {
    select: booking => {
      dispatch(setSelectedBooking({ booking }));
    },
  };

  return (
    <Container>
      {bookings.map(booking => (
        <Card
          key={booking.id}
          active={selectedBooking?.id === booking.id}
          onClick={() => actions.select(booking)}
        >
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
