import React from "react"
import { Link } from "react-router-dom"
import { Layout, Menu, Divider } from "antd"
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons"

const { Sider } = Layout

const Sidebar = () => {
  return (
    <Sider
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
