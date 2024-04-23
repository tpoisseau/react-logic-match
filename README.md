# Archived

It was an experiment, Due to how we write JSX this lib was not ideal and force to either pass a render function as children, or recheck value to not access properties into undefined variable.

I recommend to use ts-pattern instead

# react-logic-match

> Wrappers components for logical displaying

[![NPM](https://img.shields.io/npm/v/react-logic-match.svg)](https://www.npmjs.com/package/react-logic-match) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-logic-match
```

## Usage

```tsx
import * as React from 'react'

import {Match, Switch, Case, Default} from 'react-logic-match'

class Example extends React.Component {
  render () {
    const error = new Error('msg in jsx');

    return (
        <>
            <Match condition={'foo' === 'bar'}>
              <p>'foo' === 'bar'</p>
            </Match>
            <Match condition={'foo' === 'foo'}>
              <p>'foo' === 'foo'</p>
            </Match>
            <Match condition={'bar' === 'foo'} fallback={<p>Fallback 'bar' === 'foo'</p>>
              <p>'bar' === 'foo'</p>
            </Match>
            <Match condition={'bar' === 'bar'}>
              <p>'bar' === 'bar'</p>
            </Match>
            <Match condition={error}>{() => {
              <p>{error.message}</p>
            }</Match>

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
        </>
    )
  }
}
```

## API
- `<Match condition fallback>` render children if condition props is truthy else fallback (null by default and optional)
- `<Switch value>` rely on `<Case value>` and `<Default>`, ignore other children. Display first `<Case>` with value strictly equal from switch else `<Default>` or null if not given (with a `console.warn`)
- `<Case value>` display his childen
- `<Default>` display his children

See `<Switch value>-<Case value>-<Default>` as a simple js `switch-case-default` statement. without the cascasing and break behavior

For more info you can check the source code. It's strictly typed and not so much complicated

Since v1.0.7, children and fallbacks props can be render props (a function who return JSX)

## License

MIT © [tpoisseau](https://github.com/tpoisseau)
