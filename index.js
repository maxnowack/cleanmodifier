const flatten = require('flat')

module.exports = function cleanModifier(newObj, oldObj, prefix = '') {
  const $set = {}
  const flat = flatten(newObj || {})
  const flatOriginal = flatten(oldObj || {})

  let changed = false
  Object.keys(flat).forEach((key) => {
    if (flat[key] === flatOriginal[key]) return
    $set[`${prefix || ''}${prefix && '.'}${key}`] = flat[key]
    changed = true
  })
  if (!changed) return false
  return { $set }
}
