export function xo(str: string) {
  return str.toUpperCase().split('').reduce(reducer, 0) === 0
}

const reducer = (acc, curr): number => {
  switch (curr) {
    case 'X': return acc += 1
    case 'O': return acc -= 1
    default: return acc
  }
}