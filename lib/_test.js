const { otherFunction } = require('./index')

describe('Unit test for lib', () => {
  it('calls otherFunction', () => {
    expect(otherFunction()).toBe(3)
  })
})
