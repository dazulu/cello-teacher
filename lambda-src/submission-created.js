const NetlifyAPI = require('netlify')

exports.handler = function (event, context, callback) {
  /*
   * Get an [] of submissions from all forms under SITE_ID
   * Loop through and delete each submission
   */

  const client = new NetlifyAPI(process.env.NETLIFY_API_ACCESS_TOKEN)

  const getSubmissions = () => {
    return client
      .listSiteSubmissions({
        site_id: process.env.SITE_ID,
      })
      .catch((e) => console.log(e))
  }

  const deleteSubmission = (submission_id) => {
    client
      .deleteSubmission({ submission_id: submission_id })
      .catch((e) => console.log(e))
  }

  ;(async () => {
    const submissions = await getSubmissions()

    if (submissions.length) {
      submissions.forEach((submission) => {
        deleteSubmission(submission.id)
      })
      callback(null, {
        statusCode: 200,
        body: 'Ok',
      })
    } else {
      callback(null, {
        statusCode: 200,
        body: 'Nothing to delete',
      })
    }
  })()
}
