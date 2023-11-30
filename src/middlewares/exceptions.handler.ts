import { NextFunction, Request, Response } from 'express'

/**
 * Global error management middleware
 * @param err 
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const ExceptionsHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  /**
   * See "The default error handler" in the official doc indicated above
   */
  if (res.headersSent) {
    return next(err)
  }

  /**
   * If so, we know it's our own mistake
   */
  if (err.status && err.error) {
    return res
      .status(err.status)
      .json({ error: err.error })
  }

  /**
   * In other cases, we return a 500
   */
  return res
    .status(500)
    .json({ error: 'Erreur interne' })
}