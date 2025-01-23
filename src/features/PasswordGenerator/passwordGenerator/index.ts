import { generateRandomRange } from '@/features/PasswordGenerator/generateRandomRange/generateRandomRange.ts'
import { AbstractCharGenerator } from '@/features/PasswordGenerator/charGenerator/types.ts'

type charPosition = {
  index: number,
  char: string
}

const passwordGenerator = (length: number, generators: AbstractCharGenerator[]): string => {
  const positions: charPosition[] = Array(length)
    .fill('')
    .map((v, i) => ({ index: i, char: v }))

  const result: charPosition[] = []

  for (const generator of generators) {
    const charPosition = positions.splice(generateRandomRange(0, positions.length - 1), 1)[0]

    charPosition.char = generator.genChar()

    result.push(charPosition)
  }

  while(positions.length) {
    const generator = generators[generateRandomRange(0, generators.length - 1)]
    const charPosition = positions.pop() as charPosition

    charPosition.char = generator.genChar()

    result.push(charPosition)
  }

  return result
    .sort((pos1, pos2) => pos2.index - pos1.index)
    .map(pos => pos.char)
    .join('')
}

export { passwordGenerator }