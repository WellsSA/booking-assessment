import React, { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { DateRangePicker } from 'react-date-range';
import { createBookingRequest } from 'store/slices/booking';
import { Container } from './styles';

const DEFAULT_SELECTION_RANGE = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
};

const BookingEditor: React.FC = () => {
  const dispatch = useAppDispatch();
  const [dateRange, setDateRange] = useState(DEFAULT_SELECTION_RANGE);

  const handleSelect = ranges => {
    console.log(ranges);

    setDateRange(ranges.selection);
  };

  const actions = {
    create: () => {
      dispatch(
        createBookingRequest({
          property: {
            id: '1',
            name: 'Property 1',
            location: 'Lane 1',
          },
          interval: {
            start: dateRange.startDate,
            end: dateRange.endDate,
          },
        })
      );
    },
  };

  return (
    <Container>
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
    </Container>
  );
};

export default BookingEditor;
