function overArgs(func, transforms) {
  const funcsLength = transforms.length
  return function (...args) {
    const length = Math.min(args.length, funcsLength)

    let index = -1
    while (++index < length) {
      args[index] = transforms[index].call(this, args[index])
    }

    return func.apply(this, args)
  }
}

export default overArgs
