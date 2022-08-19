import { NamedSection } from 'components/atoms';
import { useAppSelector } from 'hooks';
import BookingDisplayer from './BookingDisplayer';
import BookingEditor from './BookingEditor';

import { Container } from './styles';

const Booking: React.FC = () => {
  const { selectedBooking } = useAppSelector(state => state.booking);
  return (
    <Container>
      <NamedSection name="Create a booking here">
        <BookingEditor selectedBooking={selectedBooking} />
      </NamedSection>

      <NamedSection name="See all your bookings here">
        <BookingDisplayer />
      </NamedSection>
    </Container>
  );
};

export default Booking;
