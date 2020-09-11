const NetlifyAPI = require('netlify')

exports.handler = async function (event, context, callback) {
  /*
   * Get an [] of submissions from all forms under SITE_ID
   * Loop through and delete each submission
   */

  const client = new NetlifyAPI(process.env.NETLIFY_API_ACCESS_TOKEN)

  const submissions = await client
    .listSiteSubmissions({
      site_id: process.env.SITE_ID,
    })
    .catch((e) => console.log(e))

  if (submissions.length) {
    submissions.forEach((submission) => {
      client
        .deleteSubmission({ submission_id: submission.id })
        .catch((e) => console.log(e))
    })
    callback(null, {
      statusCode: 200,
      body: 'Submissions deleted',
    })
  } else {
    callback(null, {
      statusCode: 200,
      body: 'No submissions to delete',
    })
  }
}
