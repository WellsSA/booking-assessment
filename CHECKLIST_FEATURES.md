# Booking Application

The proposal is to create a simple but well structured react frontend for booking.

> A booking is when a guest selects a start and end date and submits a 
> reservation on a property.

## Functional requirements

- [ ] Create a Booking
  - [ ] Listing Properties. `Property: (id, name, location)`
  - [ ] Implement a DatePicker component for booking intervals. `BookingInterval: (startDate, endDate)`
  - [ ] Create a `Booking (id, Property, BookingInterval)`
    - [ ] Validation: Prevent double bookings (overlapping).
    - [ ] Validation: Validate the start and end dates for a booking.

- [ ] List all bookings
  - Implement a list of cards representing summarized information for `Bookings (Property: name, BookingInterval: startDate, endDate)`

- [ ] Read a Booking
  - [ ] Select a booking from the All-bookings list.
  - [ ] Fill in the current `Property` and `BookingInterval` with the `Booking` information.

- [ ] Update a booking
  - [ ] Use the `id` for the Selected Booking when submitting the Booking data.

- [ ] Cancel a booking update
  - [ ] Clean the current Selected Booking

- [ ] Delete a booking
  - [ ] While in the All-bookings list, allow the user to delete a booking.

## Non-Functional requirements

- [ ] Global state management
- [ ] Responsive Desing

