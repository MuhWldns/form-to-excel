const scriptURL = 'https://script.google.com/macros/s/AKfycbyJJw614BLHbYYSqGS2bI633NGpoDhYou85qVbpihAd2-jrULrxj_ThPgvRgJQbbKif/exec'
  const form = document.forms['data-rongsok']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })