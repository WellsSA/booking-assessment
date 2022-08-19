# Booking Application

The proposal is to create a simple but well-structured react frontend for booking.

> A booking is when a guest selects a start and end date and submits a
> reservation on a property.

## Functional requirements

- [X] Create a Booking
  - [X] Listing Properties. `Property: (id, name, location)`
  - [X] Implement a DatePicker component for booking intervals. `BookingInterval: (startDate, endDate)`
  - [X] Create a `Booking (id, Property, BookingInterval)`
    - [X] Validation: Prevent double bookings (overlapping).
    - [X] Validation: Validate the start and end dates for a booking.

- [X] List all bookings
  - [X] Implement a list of cards representing summarized information for `Bookings (Property: name, BookingInterval: startDate, endDate)`

- [X] Read a Booking
  - [X] Select a booking from the All-bookings list.
  - [X] Fill in the current `Property` and `BookingInterval` with the `Booking` information.

- [X] Update a booking
  - [X] Use the `id` for the Selected Booking when submitting the Booking data.

- [X] Cancel a booking update
  - [X] Clean the current Selected Booking

- [X] Delete a booking
  - [X] While in the All-bookings list, allow the user to delete a booking.

## Non-Functional requirements

- [X] React App using ES6 or newer
- [X] Use Functional Components
- [X] Global state management
- [X] Responsive Desing

## Technical proposal

### React App using ES6 or newer

Implement a well-structured react with:
- Typescript: for data structure documentation and project maintenance.
- Prettier + ESlint + Editor Config: Providing proper linting and ensuring code patterns through the team.
- Atomic Desing: For better organizing the component hierarchy.

### Global state management

Implement Redux Toolkit as the prefered global state manager. Using the structure of creating Store Slices and dividing the state management in 3 main sections:
- Actions: defining the actions that can be dispatched to interact with the Global State.
- Reducers: to manage the access to the Global State data.
- Sagas: to act as middlewares for the dispatched Actions. Managing asynchronous operations and service rules.

### Responsive Desing

Implement Styled Components to allow component-level styles in the application. Managing the layout changes through CSS Media Queries.
