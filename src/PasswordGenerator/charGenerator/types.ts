interface ICharGenerator {
  genChar: () => string
  get template(): string
}

export type {
  ICharGenerator
}