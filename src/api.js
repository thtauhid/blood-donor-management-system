// API Methods to call functions

const createDonor = (data) => {
  return fetch("/.netlify/functions/createDonor", {
    body: JSON.stringify(data),
    method: "POST",
  }).then((res) => {
    return res.json()
  })
}

const getDonors = () => {
  return fetch("/.netlify/functions/allDonor").then((res) => {
    return res.json()
  })
}

const createDonation = (data) => {
  return fetch("/.netlify/functions/createDonation", {
    body: JSON.stringify(data),
    method: "POST",
  }).then((res) => {
    return res.json()
  })
}

const getDonations = () => {
  return fetch("/.netlify/functions/allDonation").then((res) => {
    return res.json()
  })
}

export default {
  createDonor: createDonor,
  getDonors: getDonors,
  createDonation: createDonation,
  getDonations: getDonations,
}
