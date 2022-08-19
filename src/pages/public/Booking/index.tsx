import { NamedSection } from 'components/atoms';
import { Container } from './styles';

const Booking: React.FC = () => {
  return (
    <Container>
      <NamedSection name="Create a booking here">create booking</NamedSection>

      <NamedSection name="See all your bookings here">
        bookings listing
      </NamedSection>
    </Container>
  );
};

export default Booking;
