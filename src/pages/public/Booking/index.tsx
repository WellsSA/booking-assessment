import { NamedSection } from 'components/atoms';
import BookingDisplayer from './BookingDisplayer';
import BookingEditor from './BookingEditor';

import { Container } from './styles';

const Booking: React.FC = () => {
  return (
    <Container>
      <NamedSection name="Create a booking here">
        <BookingEditor />
      </NamedSection>

      <NamedSection name="See all your bookings here">
        <BookingDisplayer />
      </NamedSection>
    </Container>
  );
};

export default Booking;
