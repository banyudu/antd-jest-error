import React from 'react'
import renderer from 'react-test-renderer'
import { Tabs } from 'antd'

const TabPane = Tabs.TabPane

it('TabPane', () => {
  expect(renderer.create(<div></div>).toJSON()).toMatchSnapshot() // works
  expect(renderer.create(<Tabs><TabPane tab="demo" key="demo"></TabPane></Tabs>).toJSON()).toMatchSnapshot() // fail
})

