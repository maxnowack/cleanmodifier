const test = require('ava')
const { diff } = require('lo-diff')
const clean = require('./index')

test('simple', (t) => {
  const oldObj = {
    nested: {
      bla: 'bla',
      test: false,
    },
  }
  const newObj = {
    nested: {
      bla: 'bla',
      test: true,
    },
  }
  console.log(diff(oldObj, newObj))
  t.deepEqual(clean(newObj, oldObj), {
    $set: {
      'nested.test': true,
    },
  })
})

test('empty', (t) => {
  const oldObj = {}
  const newObj = {
    nested: {
      test: true,
    },
  }

  console.log(diff(oldObj, newObj))
  t.deepEqual(clean(newObj, oldObj), {
    $set: {
      nested: { test: true },
    },
  })
})
