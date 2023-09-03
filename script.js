const scriptURL = 'https://script.google.com/macros/s/AKfycbyJJw614BLHbYYSqGS2bI633NGpoDhYou85qVbpihAd2-jrULrxj_ThPgvRgJQbbKif/exec'
  const form = document.forms['data-rongsok']

  form.addEventListener('submit', e => {
    e.preventDefault()
    alert('OK!!')
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        form.reset();
        console.log('Success!', response)})
      .catch(error => console.error('Error!', error.message))
  })