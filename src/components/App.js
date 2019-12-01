import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import PropTypes from 'prop-types'

import Home from '../pages/Home'
import TVshows from '../pages/TVShows'
import Celebrities from '../pages/Celebrities'
import styles from './layout.module.scss'

const { Header, Content, Footer } = Layout

class AppLayout extends React.Component {
  state = { collapsed: false }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    // console.log(styles)
    return (
      <Router>
        <Layout className="layout" style={{ minHeight: '100vh' }}>
          <Header
            className={`header ${styles['layout-header']}`}
            style={{
              zIndex: 1,
              position: 'fixed',
              width: '100%',
              display: 'flex',
              boxShadow: '0px 5px 11px -5px rgba(0,0,0,0.72)',
            }}
          >
            <h1 style={{ flexGrow: 1 }}>
              <Link to="/">ReacTv</Link>
            </h1>

            <Menu
              mode="horizontal"
              theme="dark"
              defaultSelectedKeys={['0']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link to="/tvshows">Tv Shows</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/celebrities">Celebrities</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div
              style={{
                background: '#fff',
                padding: 24,
                minHeight: '60vh',
                marginTop: '6rem',
              }}
            >
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/tvshows">
                  <TVshows />
                </Route>
                <Route path="/celebrities">
                  <Celebrities />
                </Route>
              </Switch>
            </div>
          </Content>
          <Footer className={styles['layout-footer']}>ReacTV ©2019</Footer>
        </Layout>
      </Router>
    )
  }
}

// AppLayout.propTypes = {
//   children: PropTypes.element.isRequired,
// }

export default AppLayout
