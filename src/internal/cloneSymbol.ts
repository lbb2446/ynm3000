function cloneSymbol(symbol){
  return Object(Symbol.prototype.valueOf.call(symbol))
}

export default cloneSymbol