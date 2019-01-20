var recipes= {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value
}

//Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) 
//updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object: