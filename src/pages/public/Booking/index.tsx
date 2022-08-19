import { NamedSection } from 'components/atoms';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { Container } from './styles';

const DEFAULT_SELECTION_RANGE = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
};

const Booking: React.FC = () => {
  const [dateRange, setDateRange] = useState(DEFAULT_SELECTION_RANGE);

  const handleSelect = ranges => {
    console.log(ranges);

    setDateRange(ranges.selection);
  };

  const actions = {
    create: () => {
      console.log(dateRange);
    },
  };

  return (
    <Container>
      <NamedSection name="Create a booking here">
        <form>
          <label htmlFor="property">Select a property to book:</label>
          <input type="text" name="property" id="property" />
          <label htmlFor="booking-interval">
            Find an interval for your booking:
          </label>
          <DateRangePicker
            id="booking-interval"
            name="booking-interval"
            ranges={[dateRange]}
            onChange={handleSelect}
          />

          <button
            type="submit"
            onClick={e => {
              e.preventDefault();
              actions.create();
            }}
          >
            Confirm booking
          </button>
        </form>
      </NamedSection>

      <NamedSection name="See all your bookings here">
        bookings listing
      </NamedSection>
    </Container>
  );
};

export default Booking;
