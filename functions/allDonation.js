const faunadb = require("faunadb")
const q = faunadb.query

exports.handler = async (event, context) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET,
  })

  return client
    .query(q.Paginate(q.Match(q.Ref("indexes/all_donations"))))

    .then((res) => {
      const donorRefs = res.data
      const getAllDonorQuery = donorRefs.map((ref) => {
        return q.Get(ref)
      })

      return client
        .query(getAllDonorQuery)

        .then((res) => {
          return {
            statusCode: 200,
            body: JSON.stringify(res),
          }
        })
    })
}
