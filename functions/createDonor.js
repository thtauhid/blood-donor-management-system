const faunadb = require("faunadb")
const q = faunadb.query

exports.handler = async (event, context) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET,
  })

  const data = JSON.parse(event.body)
  const newDonor = { data }

  return client
    .query(q.Create(q.Ref("classes/donors"), newDonor))
    .then((res) => {
      console.log("Success: ", res)

      return {
        statusCode: 200,
        body: JSON.stringify(res),
      }
    })
    .catch((err) => {
      console.log("Error: ", err)

      return {
        statusCode: 400,
        body: JSON.stringify(err),
      }
    })
}
