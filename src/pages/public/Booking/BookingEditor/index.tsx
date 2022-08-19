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
import Select from 'react-select';
import { notifyError } from 'services/notify';
import { Container } from './styles';

const DEFAULT_SELECTION_RANGE = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
};

interface Props {
  selectedBooking?: Booking;
}

// Note: The properties are mocked, since the important part for now is the booking itself. :)
const PROPERTIES_LIST = [
  {
    id: 'green-valley',
    name: 'Green Valley',
    location: 'Lane 1',
  },
  {
    id: 'blue-valley',
    name: 'Blue Valley',
    location: 'Lane 12',
  },
];

const BookingEditor: React.FC<Props> = ({ selectedBooking }: Props) => {
  const dispatch = useAppDispatch();

  const isEditing = !!selectedBooking;

  const [selectedInterval, setSelectedInterval] = useState(
    DEFAULT_SELECTION_RANGE
  );
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handlers = {
    propertySelect: ({ value, label }) => {
      setSelectedProperty({ value, label });
    },
    intervalPick: ({ selection }) => {
      setSelectedInterval(selection);
    },
  };

  const actions = {
    create: () => {
      if (!selectedProperty || !selectedInterval) {
        notifyError('Please select a property and an interval');
        return;
      }

      dispatch(
        createBookingRequest({
          property: PROPERTIES_LIST.find(
            property => property.id === selectedProperty.value
          ),
          interval: {
            start: selectedInterval.startDate,
            end: selectedInterval.endDate,
          },
        })
      );
    },
    update: () => {
      dispatch(
        updateBookingRequest({
          booking: {
            id: selectedBooking?.id,
            property: PROPERTIES_LIST.find(
              property => property.id === selectedProperty.value
            ),
            interval: {
              start: selectedInterval.startDate,
              end: selectedInterval.endDate,
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

  useEffect(() => {
    if (!selectedBooking) return;

    setSelectedInterval({
      key: 'selection',
      startDate: new Date(selectedBooking.interval.start),
      endDate: new Date(selectedBooking.interval.end),
    });

    setSelectedProperty({
      value: selectedBooking.property.id,
      label: selectedBooking.property.name,
    });
  }, [selectedBooking]);

  return (
    <Container>
      <form>
        <label htmlFor="property">Select a property to book:</label>
        <Select
          options={PROPERTIES_LIST.map(({ id, name }) => ({
            value: id,
            label: name,
          }))}
          value={selectedProperty}
          onChange={handlers.propertySelect}
        />
        <label htmlFor="booking-interval">
          Find an interval for your booking:
        </label>
        <DateRangePicker
          id="booking-interval"
          name="booking-interval"
          ranges={[selectedInterval]}
          onChange={handlers.intervalPick}
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
