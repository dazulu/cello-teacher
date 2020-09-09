const NetlifyAPI = require('netlify')

const SITE_ID = process.env.SITE_ID // default Netlify env var
const ACCESS_TOKEN = process.env.NETLIFY_API_ACCESS_TOKEN // custom Netlify env var

const client = new NetlifyAPI(ACCESS_TOKEN)

/*
 * Get an [] of submissions from all forms under SITE_ID
 * Loop through and delete each submission
 */
client
  .listSiteSubmissions({
    site_id: SITE_ID,
  })
  .then((submissions) => {
    if (submissions) {
      submissions.forEach((submission) => {
        client.deleteSubmission({ submission_id: submission.id })
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
