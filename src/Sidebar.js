import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Layout, Menu, Divider, Button } from "antd"
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons"

const { Sider } = Layout
const { netlifyIdentity } = window

const Sidebar = () => {
  // onCollapse = (collapsed) => {
  //   console.log(collapsed)
  //   setCollapsed(collapsed)
  // }

  const [loggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")
  // const [collapsed, setCollapsed] = useState(false)

  netlifyIdentity.on("init", (user) => {
    if (user) {
      setLoggedIn(true)

      setUserName(user.user_metadata.full_name)
    } else {
      setLoggedIn(false)
    }
  })

  netlifyIdentity.on("init", (user) => {
    if (user) {
      setLoggedIn(true)

      setUserName(user.user_metadata.full_name)
    } else {
      setLoggedIn(false)
    }
  })

  const login = () => {
    console.log("Clicked")
    netlifyIdentity.open()
  }

  netlifyIdentity.on("login", (user) => {
    setLoggedIn(true)
    setUserName(user.user_metadata.full_name)
  })

  netlifyIdentity.on("logout", () => {
    setLoggedIn(false)
  })

  return (
    <Sider
      // collapsible
      // collapsed={collapsed}
      // onCollapse={this.onCollapse}

      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken)
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
    >
      <div className="logo" />
      {/* <Title type="success">BDMS</Title> */}
      <Button type="primary" onClick={login}>
        Login
      </Button>

      <Divider />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/">Donors</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/donations">Donations</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DesktopOutlined />}>
          <Link to="/donor/create">Create Donor</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<DesktopOutlined />}>
          <Link to="/donation/create">Create Donation</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar
