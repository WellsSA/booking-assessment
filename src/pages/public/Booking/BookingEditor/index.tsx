import React, { useState, useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { DateRangePicker } from 'react-date-range';
import {
  createBookingRequest,
  deleteBookingRequest,
  setSelectedBooking,
  updateBookingRequest,
} from 'store/slices/booking';
import { Booking } from 'shared/types';
import { Button } from 'components/atoms/_common';
import { Container } from './styles';

const DEFAULT_SELECTION_RANGE = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
};

interface Props {
  selectedBooking?: Booking;
}

const BookingEditor: React.FC<Props> = ({ selectedBooking }: Props) => {
  const dispatch = useAppDispatch();

  const isEditing = !!selectedBooking;

  const [dateRange, setDateRange] = useState(DEFAULT_SELECTION_RANGE);

  const handleSelect = ranges => {
    setDateRange(ranges.selection);
  };

  useEffect(() => {
    if (!selectedBooking) return;

    setDateRange({
      key: 'selection',
      startDate: new Date(selectedBooking.interval.start),
      endDate: new Date(selectedBooking.interval.end),
    });
  }, [selectedBooking]);

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
    update: () => {
      dispatch(
        updateBookingRequest({
          booking: {
            id: selectedBooking?.id,
            property: {
              id: '1',
              name: 'Property 1',
              location: 'Lane 1',
            },
            interval: {
              start: dateRange.startDate,
              end: dateRange.endDate,
            },
          },
        })
      );
    },
    unselect: () => {
      dispatch(setSelectedBooking({ booking: null }));
    },
    delete: () => {
      dispatch(deleteBookingRequest({ bookingId: selectedBooking.id }));
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

        <Button
          variant="primary"
          onClick={!isEditing ? actions.create : actions.update}
        >
          {!isEditing ? 'Confirm booking' : 'Update booking'}
        </Button>

        {isEditing && (
          <>
            <Button variant="danger" onClick={actions.delete}>
              Delete booking
            </Button>
            <Button variant="outlined" onClick={actions.unselect}>
              Cancel editing
            </Button>
          </>
        )}
      </form>
    </Container>
  );
};

BookingEditor.defaultProps = {
  selectedBooking: null,
};

export default BookingEditor;
