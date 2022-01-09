/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
  const { email, list } = req.query

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  if (!list) {
    return res.status(400).json({ error: 'List is required' })
  }
  let FORM_ID = ''
  switch (list) {
    case '12-tips-production-apps':
      FORM_ID = process.env.EMAILOCTOPUS_TIPS_FORM_ID
      break
    case 'tailwind':
      FORM_ID = process.env.EMAILOCTOPUS_TAILWIND_FORM_ID
      break
    default:
      FORM_ID = process.env.EMAILOCTOPUS_MONTHLY_FORM_ID
      break
  }
  const API_KEY = process.env.EMAILOCTOPUS_API_KEY
  const API_URL = process.env.EMAILOCTOPUS_API_URL

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
