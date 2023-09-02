document.addEventListener('DOMContentLoaded', function() {
  const haveApiKeyCheckbox = document.getElementById('haveApiKey');
  const apiKeyField = document.getElementById('apiKey');
  const e164NumberField = document.getElementById('e164Number');
  const messageField = document.getElementById('message');
  const sendSMSButton = document.getElementById('sendSMS');
  const resultText = document.createElement('p');
  
  haveApiKeyCheckbox.addEventListener('change', function() {
    apiKeyField.style.display = this.checked ? 'block' : 'none';

    if (this.checked) {

      const apiKeyInput = document.createElement('input');
      apiKeyInput.type = 'text';
      apiKeyInput.id = 'apiKey';
      apiKeyInput.placeholder = 'API Key';
      apiKeyInput.className = 'api-key-input';


      haveApiKeyCheckbox.parentNode.insertBefore(apiKeyInput, haveApiKeyCheckbox.nextSibling);
    } else {
      const apiKeyInput = document.querySelector('.api-key-input');

      if (apiKeyInput) {
        apiKeyInput.parentNode.removeChild(apiKeyInput);
      }
    }
  });

  sendSMSButton.addEventListener('click', function() {
    const phoneNumber = e164NumberField.value;
    const message = messageField.value;
    const apiKey = apiKeyField.value || 'textbelt';

    fetch('https://textbelt.com/text', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: phoneNumber,
        message: message,
        key: apiKey,
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        resultText.textContent = `Successfully sent "${message}" to ${phoneNumber}`;
      } else {
        resultText.textContent = `Failure sending "${message}" to ${phoneNumber}. Is it in the correct E.164 format? If yes, try again later`;
      }

      e164NumberField.value = '';
      messageField.value = '';
      apiKeyField.value = '';
      haveApiKeyCheckbox.checked = false;

      const formContainer = document.body;
      formContainer.innerHTML = '';
      formContainer.appendChild(resultText);
    });
  });
});
