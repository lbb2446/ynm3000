import unzip from './unzip'

/**
 * 和unzip一样，不过这个接受的是零散的数组，组合之后还是调的unzip
 */
function zip(...arrays) {
  return unzip(arrays)
}
export default zip
