test('test equal', () => {
  expect(2 + 2).toBe(4)
})
test('not equal', () => {
  expect(2 + 2).not.toBe(5)
})

test('to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('number test', () => {
  expect(4).toBeGreaterThan(3)
  expect(4).toBeLessThan(5)
})

test('test object', () => {
  expect({ name: 'ck', age: 20 }).toEqual({ name: 'ck', age: 20 })
})
