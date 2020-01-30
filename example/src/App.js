import React, { Component } from 'react'

import {Match, Case, Default, Switch} from 'react-logic-match';

export default class App extends Component {
  render () {
    return (
      <div>
        <Match condition={'foo' === 'bar'}>
          <p>'foo' === 'bar'</p>
        </Match>
        <Match condition={'foo' === 'foo'}>
          <p>'foo' === 'foo'</p>
        </Match>
        <Match condition={'bar' === 'foo'}>
          <p>'bar' === 'foo'</p>
        </Match>
        <Match condition={'bar' === 'bar'}>
          <p>'bar' === 'bar'</p>
        </Match>

        <Switch value={1}>
          <Case value={0}>
            <p>Case 0</p>
          </Case>
          <Default>
            <p>Default</p>
          </Default>
        </Switch>

        <Switch value={1}>
          <Case value={0}>
            <p>Case 0</p>
          </Case>
          <Case value={1}>
            <p>Case 1</p>
          </Case>
        </Switch>

        <hr />

        <p>
          Go to React Dev Tools and change Switch props
        </p>
      </div>
    )
  }
}
