import { Booking, BookingInterval } from 'shared/types';
import { areIntervalsOverlapping } from 'date-fns';

export const isIntervalOverlappingBookings = (
  interval: BookingInterval,
  bookings: Booking[]
): boolean => {
  try {
    bookings.forEach(booking => {
      if (
        areIntervalsOverlapping(
          {
            start: new Date(interval.start),
            end: new Date(interval.end),
          },
          {
            start: new Date(booking.interval.start),
            end: new Date(booking.interval.end),
          }
        )
      ) {
        throw new Error('Overbooking');
      }
    });
    return false;
  } catch (error) {
    return true;
  }
};
