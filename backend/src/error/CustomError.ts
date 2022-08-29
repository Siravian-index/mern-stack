class CustomError extends Error {
  private _code: number
  constructor(msg: string, code: number) {
    super(msg)
    this._code = code
  }

  get code(): number {
    return this._code
  }

  public sendMessage(): string {
    return `${this.message} - ${this.code}`
  }
}

export default CustomError