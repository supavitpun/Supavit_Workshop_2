# Workshop 02: Hotel Booking UI Improvement

## Rules

Work only in `workshop_02_student`. The `js` folder already contains complete JavaScript and dummy data: **edit HTML files only**. Do not add a database, local storage, login, payment gateway, or real customer data. This is a prototype with dummy data and temporary on-page feedback.

Open your folder using VS Code and Live Server. Do not double-click the HTML files.

## Step 1: Personalize only the landing-page HTML

In `index.html`, replace `REPLACE-WITH-YOUR-STUDENT-ID` with your student ID. Change the random-image seed in the `picsum.photos` URL. Do not upload a personal photo.

## Step 2: Improve customer registration

Open `register.html`. Leave address line 1, address line 2, and ZIP code as text inputs. Addresses are open-ended, and ZIP codes may begin with zero.

Replace the existing form with the following HTML. Address line 1, address line 2, and ZIP remain text inputs; only the province becomes a constrained list.

```html
<form id="registration-form">
  <label>Name<input type="text" required></label>
  <label>Email<input type="email" required></label>
  <label>Phone<input type="tel"></label>
  <label>Address line 1<input type="text"></label>
  <label>Address line 2<input type="text"></label>
  <label>ZIP code<input type="text" inputmode="numeric" maxlength="5"></label>
  <label>Province<select id="province" required><option value="">Choose province</option></select></label>
  <button type="submit">Review customer details</button>
  <p id="status" class="status" role="status">No data is stored in this prototype.</p>
</form>

<script src="js/provinces.js"></script>
<script src="js/register.js"></script>
```

Test: choose a province, press the button, and read the temporary status message. Refreshing the page should remove the result because nothing is stored.

## Step 3: Improve the booking controls

In `booking.html`, replace the existing form and status text with this HTML. The supplied scripts are already complete.

```html
<form id="booking-form">
  <label>Check-in date<input id="check-in" type="date" required></label>
  <label>Check-out date<input id="check-out" type="date" required></label>
  <label>Guest count<input id="guests" type="number" min="1" max="4" value="1" required></label>
  <label>Room type
    <select id="room-type" required>
      <option value="">Choose room type</option>
      <option value="standard">Standard room</option>
      <option value="deluxe">Deluxe room</option>
      <option value="family">Family room</option>
    </select>
  </label>
  <label>Room number<select id="room-number" required disabled><option value="">Choose room type first</option></select></label>
  <fieldset>
    <legend>Payment method</legend>
    <label class="inline"><input type="radio" name="payment" value="Card" checked>Card</label>
    <label class="inline"><input type="radio" name="payment" value="Bank transfer">Bank transfer</label>
  </fieldset>
  <label>Special request<textarea id="request" placeholder="Optional request"></textarea></label>
  <button type="submit">Review booking</button>
  <p id="status" class="status" role="status">Choose dates, room type, and room number.</p>
</form>

<section id="preview" class="preview" hidden></section>

<script src="js/rooms.js"></script>
<script src="js/booking.js"></script>
```

Notice the design reason for each control: date pickers for dates, a number field for quantity, selects for constrained choices, radio buttons for one payment choice, and a textarea for an optional open-ended request.

## Step 4: Dependent select challenge

When the user changes room type, the supplied JavaScript will:

1. Remove old room-number options.
2. Add the matching dummy room numbers.
3. Enable the room-number select.
4. Show a status message.

Test: select Standard, then Deluxe. The room-number list must change and must not keep the old selection.

## Step 5: Make one individual design decision

The supplied **Review booking** button shows a temporary review below the form. Now make **one HTML-only change of your own** that makes the booking flow clearer or easier to use. Do not add data storage.

Examples (choose one, or create your own idea):

- improve a label or placeholder;
- add short helpful text near a field;
- change the order of two related controls;
- add a clear default or a visible required-field hint;
- improve the wording of the review button or status message.

Write one sentence in an HTML comment near your change explaining: `Why does this reduce user effort or confusion?`

## Step 6: Individual usability-test plan

Individually write a short test task in an HTML comment near the bottom of `booking.html`. It must describe a realistic hotel-booking goal, but do not reuse a classmate's task word-for-word.

Use this pattern:

```html
<!-- Usability test task: A guest wants to ... -->
<!-- Expected evidence: I will watch for ... -->
```

Then ask one other student to try your task without explaining the interface. Record where they hesitate, make an error, or ask for help. If time allows, revise your one design decision using that evidence.
