import { generateRandomRange } from '@/features/PasswordGenerator/generateRandomRange/generateRandomRange.ts'
import { AbstractCharGenerator } from '@/features/PasswordGenerator/charGenerator/types.ts'

type CharPosition = {
  index: number,
  char: string
}

const passwordGenerator = (length: number, generators: AbstractCharGenerator[]): string => {
  const positions: CharPosition[] = Array(length)
    .fill('')
    .map((v, i) => ({ index: i, char: v }))

  const result: CharPosition[] = []

  for (const generator of generators) {
    const CharPosition = positions.splice(generateRandomRange(0, positions.length - 1), 1)[0]

    CharPosition.char = generator.genChar()

    result.push(CharPosition)
  }

  while(positions.length) {
    const generator = generators[generateRandomRange(0, generators.length - 1)]
    const CharPosition = positions.pop() as CharPosition

    CharPosition.char = generator.genChar()

    result.push(CharPosition)
  }

  return result
    .sort((pos1, pos2) => pos2.index - pos1.index)
    .map(pos => pos.char)
    .join('')
}

export { passwordGenerator }