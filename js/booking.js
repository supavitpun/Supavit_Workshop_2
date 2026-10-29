const roomTypeSelect = document.querySelector('#room-type');
const roomNumberSelect = document.querySelector('#room-number');
const bookingStatus = document.querySelector('#status');
const bookingPreview = document.querySelector('#preview');

roomTypeSelect.addEventListener('change', () => {
  const selectedType = roomTypeSelect.value;
  roomNumberSelect.innerHTML = '';
  const firstOption = document.createElement('option');
  firstOption.value = '';
  firstOption.textContent = selectedType ? 'Choose room number' : 'Choose room type first';
  roomNumberSelect.appendChild(firstOption);
  roomNumberSelect.disabled = !selectedType;
  if (!selectedType) return;
  availableRoomsByType[selectedType].forEach((roomNumber) => {
    const option = document.createElement('option');
    option.value = roomNumber;
    option.textContent = roomNumber;
    roomNumberSelect.appendChild(option);
  });
  bookingStatus.textContent = `Room type changed. Choose one of ${availableRoomsByType[selectedType].length} dummy available room numbers.`;
});

document.querySelector('#booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!roomNumberSelect.value) { bookingStatus.textContent = 'Choose a room number before reviewing the booking.'; return; }
  const payment = document.querySelector('input[name="payment"]:checked').value;
  bookingPreview.hidden = false;
  bookingPreview.innerHTML = `<h2>Booking review</h2><p>Check-in: ${document.querySelector('#check-in').value}</p><p>Check-out: ${document.querySelector('#check-out').value}</p><p>Guests: ${document.querySelector('#guests').value}</p><p>Room: ${roomTypeSelect.options[roomTypeSelect.selectedIndex].text} ${roomNumberSelect.value}</p><p>Payment: ${payment}</p><p>This is a preview only. No booking is stored.</p>`;
  bookingStatus.textContent = 'Booking review shown below. Check the information before a real system would confirm it.';
});
