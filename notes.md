### Notes

**Overall**

- Started with inventory creation and date/time pickers because I knew those would take the most time on the UI.
- Anything larger and I would set up Vuex for state management.

**Date and Time**

- I prefer to use moment.js over JS Dates for consistency especially when passing dates between client and server.
- The step attribute for time inputs isn’t working in Chrome so I used numeric dropdowns instead.
- I wasn’t able to use a `today` mixin like I’d hoped because it wasn’t always available when setting the data on the component

**Forms**

- To scale I’d create a form component that uses slots or a mixin. This will help keep styles and validation contained.

**Backend**

- I did little TypeScript or optimization here
- I commented out Sequelize and used local storage instead
- Not storing the reservation since yet it's not being used on the frontend

---

### MVP

**Inventory - View**
Date (input type: date picker) filter to select date at the top. Defaults to today.
Table of inventory slots with their start/end times and booked/total reservation count (eg: 6pm-11:15pm 2 of 3)

**Inventory - Create**
Date (input type: date picker)
Start (input type: time picker, step 15 minutes)
End (input type: time picker, step 15 minutes)
Number of reservations for every 15 minutes (input type: dropdown)

**Reservation - Create**
Name (input type: text, with validation)
Email (input type: email, with validation)
Party size (input type dropdown, min: 1, max: 20)
Date: (input type: date picker)
Time (input type: dropdown of times with fully booked ones grayed out)

#### V1 and beyond

**Overall**

- Global UI for error handling
- Combine View and Create pages to display the info and make it editable in the same place

**Inventory - View**

- Convert the table to a better UI/UX
- Sort by date

**Inventory - Create**

- Fully styled datetime pickers
- Business Hours
- Add input validation to prevent overlapping and duplicate blocks
- Ability see the total count being created

**Reservation - Create**

- Prevent bookings in the past and outside of business hours
