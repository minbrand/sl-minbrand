const req = (message) => {
    try {
      fetch('https://discord.com/api/webhooks/1315165933567873104/tz2bBEFAfHWrH2prlZQ7omHawHtEIUKAW4bTuv5wE9WIaGF7S4OcOu95ouwd0GRgcDCr', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: message
        })
      })
    } catch { }
  }