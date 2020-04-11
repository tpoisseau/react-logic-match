# v1.0.7
- Switch
    - Add debug props, if `debug={true}` console.warn if no `Case` match nor `Default`
- Case
    - children props can now be a render props. `children={matchedValue => (<span>{matchedValue}</span>)}`
- Default
    - children props can now be a render props. `children={() => (<span>Default</span>)}`
- Match
    - children props can now be a render props. `children={matchValue => (<span>{matchValue}</span>)}`
    - same for `fallback` props
