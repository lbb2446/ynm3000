import nth from './nth'

function nthArg(n) {
  return (...args) => nth(args, n)
}

export default nthArg
