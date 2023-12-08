import { NotFoundException } from "src/utils/exceptions"


/**
 * For all other undefined routes, we return an error
 */
export const UnknownRoutesHandler = () => {
  throw new NotFoundException(`La resource demandée n'existe pas`)
}