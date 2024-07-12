export function helloworld(name: string) {
  return `Hello ${name} !`;
}

export function formatType(type: string) {
  if (type === 'Feu') {
    return 'red'
  } else if (type === 'Eau') {
    return 'blue'
  } else {
    return '';
  }
}