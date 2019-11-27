import React from 'react'
import { Layout, Menu } from 'antd'
import PropTypes from 'prop-types'
import './layout.module.css'

const { Header, Content, Footer } = Layout

class AppLayout extends React.Component {
  state = { collapsed: false }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header
          style={{
            backgroundColor: '#fff',
            zIndex: 1,
            position: 'fixed',
            width: '100%',
            display: 'flex',
            boxShadow: '0px 5px 11px -5px rgba(0,0,0,0.72)',
          }}
        >
          <h1 style={{ flexGrow: 1 }}>ReacTv</h1>

          <Menu
            mode="horizontal"
            color="primary"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '61px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div
            style={{
              background: '#fff',
              padding: 24,
              minHeight: '60vh',
              marginTop: '8rem',
            }}
            className="sample"
          >
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>
          ReacTV ©2019
        </Footer>
      </Layout>
    )
  }
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AppLayout
