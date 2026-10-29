const provinceSelect = document.querySelector('#province');
const registrationStatus = document.querySelector('#status');

// Create one option for each known province. The first placeholder option stays in the HTML.
thaiProvinces.forEach((provinceName) => {
  const option = document.createElement('option');
  option.value = provinceName;
  option.textContent = provinceName;
  provinceSelect.appendChild(option);
});

document.querySelector('#registration-form').addEventListener('submit', (event) => {
  event.preventDefault();
  registrationStatus.textContent = `Province selected: ${provinceSelect.value}. No customer data was saved.`;
});
