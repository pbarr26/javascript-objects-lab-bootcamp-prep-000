var recipes= {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj= Object.assign({}, object)
  delete newObj.key
  return newObj
}

//  1) Objects deleteFromObjectByKey(object, key)
//deletes `key` from a clone of object and returns the new object (it is non-destructive):
