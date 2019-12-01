/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react'
import { PageHeader, Input, Row, Col, List, Avatar, Typography } from 'antd'
import tvmaze from '../api/tvmaze'

const { Search } = Input
const { Title, Text } = Typography

const TVShows = () => {
  const [shows, setShows] = useState([])

  const fetchShows = async query => {
    const results = await tvmaze.get(`/search/shows?q=${query}`)
    setShows(results.data)
  }

  // const renderShows = () => {
  //   return shows.map(({ show }) => {
  //     return (
  //       <List key={show.id}>
  //         <a href={show.url}>{show.name}</a>
  //       </List>
  //     )
  //   })
  // }
  return (
    <div>
      <Row align="middle" justify="space-between" type="flex">
        <Col span={8}>
          <Row type="flex" align="middle">
            <Col>
              <Title level={2}>Tv Shows</Title>
            </Col>
            <Col offset={1}>
              <Text type="secondary">Start searching shows!</Text>
            </Col>
          </Row>
        </Col>

        <Col>
          <Search
            placeholder="Search..."
            onSearch={value => fetchShows(value)}
            style={{ width: 300 }}
          />
        </Col>
      </Row>
      <Row type="flex" align="middle" justify="center">
        <List
          style={{ width: '70%' }}
          itemLayout="vertical"
          dataSource={shows}
          rowKey="show.id"
          renderItem={({ show }) => (
            <List.Item
              extra={
                <img
                  className="image me"
                  width={150}
                  src={show.image ? show.image.medium : ''}
                  alt={`${show.name} logo`}
                />
              }
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    size="large"
                    shape="square"
                    src={show.image ? show.image.medium : ''}
                  />
                }
                title={<a href={show.url}>{show.name}</a>}
                description={
                  <div
                    style={{ textAlign: 'justify' }}
                    dangerouslySetInnerHTML={{ __html: show.summary }}
                  />
                }
              />
            </List.Item>
          )}
        />
      </Row>
    </div>
  )
}

export default TVShows
