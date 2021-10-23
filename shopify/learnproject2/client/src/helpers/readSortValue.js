export const readSortValue = (value) => {
  const readiedValue = value.split('.')

  if (readiedValue.indexOf('reverse') !== -1) {
    return {sortKey: readiedValue[0], reverse: true}
  } else {
    return {sortKey: readiedValue[0], reverse: false}
  }
}
