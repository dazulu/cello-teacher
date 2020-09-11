'use strict'

const NetlifyAPI = require('netlify')

exports.handler = async function (event, context) {
  console.log('EVENT:', event)
  console.log('CONTEXT:', context)
  /*
   * Get an [] of submissions from all forms under SITE_ID
   * Loop through and delete each submission
   */

  const client = new NetlifyAPI(process.env.NETLIFY_API_ACCESS_TOKEN)

  const submissions = await client
    .listSiteSubmissions({
      site_id: process.env.SITE_ID,
    })
    .catch((e) => console.log('Error getting submissions', e))

  console.log('SUBMISSIONS:', submissions)

  if (submissions.length) {
    submissions.forEach(async (submission) => {
      console.log('DELETE:', submission.id)
      await client
        .deleteSubmission({ submission_id: submission.id })
        .catch((e) => console.log('Error deleting submission', e))
    })
    return {
      statusCode: 200,
      body: 'Submissions deleted',
    }
  } else {
    console.log('NOTHING TO DELETE')
    return {
      statusCode: 200,
      body: 'No submissions to delete',
    }
  }
}
