import { ApiException } from '~~/types/exception'

/**
  * Generic class used to create HTTP errors (here 400 and 404)
  *
  * We specify that our class must correspond to the `ApiException` interface
  *
  * The `readonly` keywords serve as shorthand for `this.property = value`,
  * they also prevent us from changing these values later.
  *
  * Here `this.error = error` and `this.status = status`
  */
class Exception implements ApiException {
  constructor(readonly error: any, readonly status: number) {}
}

/**
 * Create 404 Exception
 */
export class NotFoundException extends Exception {
  /**
   * On appelle le `constructor` de la classe parente `Exception`
   */
  constructor(error: any) {
    super(error, 404)
  }
}

/**
 * Create 400 Exception
 */
export class BadRequestException extends Exception {
  /**
   * On appelle le `constructor` de la classe parente `Exception`
   */
  constructor(error: any) {
    super(error, 400)
  }
}