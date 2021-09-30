
function* generatorUID(): IterableIterator<string> {
  let i = 1;
  while (true) {
    yield i + Date.now().toString(36) + Math.random().toString(36).substring(2)
    i += 1
  }
}

const generator = generatorUID()


export default function uid(): string {
  return generator.next().value
}