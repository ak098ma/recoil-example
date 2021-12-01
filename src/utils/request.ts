export class RequestError extends Error {
  response: Response

  constructor(response: Response) {
    super(response.statusText)
    this.name = this.constructor.name
    this.response = response
  }
}

type Try<T, E> = Success<T> | Failure<E>

class Success<T> {
  constructor(content: T) {
    this.result = content
  }

  result: T
}

class Failure<E> {
  constructor(error: E) {
    this.error = error
  }

  error: E
}

export const isSuccess = <T, E>(value: Try<T, E>): value is Success<T> => {
  return value instanceof Success
}

export const isFailure = <T, E>(value: Try<T, E>): value is Failure<E> => {
  return value instanceof Failure
}

export const request = async <T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<Try<T, RequestError | unknown>> => {
  try {
    const response = await fetch(input, init)
    if (!response.ok) {
      return new Failure(new RequestError(response))
    }

    return new Success((await response.json()) as T)
  } catch (error) {
    return new Failure(error)
  }
}
