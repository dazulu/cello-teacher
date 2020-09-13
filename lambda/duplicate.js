const NetlifyAPI = require('netlify')

exports.handler = async function (event, context) {
  const client = new NetlifyAPI(process.env.NETLIFY_API_ACCESS_TOKEN)

  const submissions = await client
    .listSiteSubmissions({
      site_id: '997302d3-b8aa-4e14-ad02-31cce307c79d',
    })
    .catch((e) => console.log('Error getting submissions', e))

  if (submissions.length) {
    for (i = 0; i < submissions.length; i++) {
      const submissionID = submissions[i].id
      console.log('starting to delete submission: ', submissionID)
      await client.deleteSubmission({ submission_id: submissionID })
      console.log('deleted submission: ', submissionID)
    }
    return {
      statusCode: 200,
      body: 'Submissions deleted',
    }
  } else {
    console.log('No submissions to delete')
    return {
      statusCode: 200,
      body: 'No submissions to delete',
    }
  }
}
