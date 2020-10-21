// API Methods to call functions

const create = (data) => {
  return fetch("/.netlify/functions/createDonor", {
    body: JSON.stringify(data),
    method: "POST",
  }).then((res) => {
    return res.json()
  })
}

export default {
  create,
}
