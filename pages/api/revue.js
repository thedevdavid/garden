/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
  const { email } = req.query

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }
  let FORM_ID = ''
  const API_URL = 'http://business-of-it.davidlevai.com/add_subscriber'

  const data = { api_key: API_KEY, email_address: email }

  const URL = `${API_URL}/${FORM_ID}/contacts`

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    // Any error from = return custom message
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the list.`,
      })
    }

    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
