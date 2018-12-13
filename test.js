import React from 'react'
import renderer from 'react-test-renderer'
import { Tabs } from 'antd'

const TabPane = Tabs.TabPane

if (typeof window !== 'undefined') {
  global.window.resizeTo = (width, height) => {
    global.window.innerWidth = width || global.window.innerWidth;
    global.window.innerHeight = height || global.window.innerHeight;
    global.window.dispatchEvent(new Event('resize'));
  };
  global.window.scrollTo = () => {};
}

// The built-in requestAnimationFrame and cancelAnimationFrame not working with jest.runFakeTimes()
// https://github.com/facebook/jest/issues/5147
global.requestAnimationFrame = cb => setTimeout(cb, 0);
global.cancelAnimationFrame = cb => clearTimeout(cb, 0);

it('TabPane', () => {
  expect(renderer.create(<div></div>).toJSON()).toMatchSnapshot() // works
  expect(renderer.create(<Tabs><TabPane tab="demo" key="demo"></TabPane></Tabs>).toJSON()).toMatchSnapshot() // fail
})

