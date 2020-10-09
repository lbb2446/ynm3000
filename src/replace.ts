function replace(...args) {
  const string = `${args[0]}`

  return args.length < 3 ? string : string.replace(args[1], args[2])
}

export default replace
