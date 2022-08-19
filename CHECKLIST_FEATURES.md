# Booking Application

The proposal is to create a simple but well-structured react frontend for booking.

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

- [ ] React App using ES6 or newer
- [ ] Use Functional Components
- [ ] Global state management
- [ ] Responsive Desing

## Technical proposal

### React App using ES6 or newer

Implement a well-structured react with:
- Typescript: for data structure documentation and project maintenance.
- Prettier + ESlint + Editor Config: Providing proper linting and ensuring code patterns through the team.

### Global state management

Implement Redux Toolkit as the prefered global state manager. Using the structure of creating Store Slices and dividing the state management in 3 main sections:
- Actions: defining the actions that can be dispatched to interact with the Global State.
- Reducers: to manage the access to the Global State data.
- Sagas: to act as middlewares for the dispatched Actions. Managing asynchronous operations and service rules.

### Responsive Desing

Implement Styled Components to allow component-level styles in the application. Managing the layout changes through CSS Media Queries.