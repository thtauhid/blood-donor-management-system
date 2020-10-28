import React, { useState, useEffect } from "react"
import { Route } from "react-router-dom"
import { Layout, Breadcrumb } from "antd"
import Sidebar from "./Sidebar"
import "antd/dist/antd.css"

import DonorList from "./DonorList"
import CreateDonor from "./CreateDonor"
import DonationList from "./DonationList"
import CreateDonation from "./CreateDonation"

const { Content, Footer } = Layout
const { netlifyIdentity } = window

const login = () => {
  netlifyIdentity.open()
}

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={DonorList} />
      {/* <Route path="/donors" exact component={DonorList} /> */}
      <Route path="/donor/create" component={CreateDonor} />
      <Route path="/donations" exact component={DonationList} />
      <Route path="/donation/create" component={CreateDonation} />
    </>
  )
}

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")

  netlifyIdentity.on("init", (user) => {
    if (user) {
      setLoggedIn(true)

      setUserName(user.user_metadata.full_name)
    } else {
      setLoggedIn(false)
    }
  })

  netlifyIdentity.on("login", (user) => {
    setLoggedIn(true)
    setUserName(user.user_metadata.full_name)
  })

  netlifyIdentity.on("logout", () => {
    setLoggedIn(false)
  })

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Donor</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Routes />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Coded with 🖤 by{" "}
            <a href="https://github.com/thtauhid" target="_blank">
              Tauhid
            </a>
          </Footer>
        </Layout>
      </Layout>
    </>
  )
}

export default App
