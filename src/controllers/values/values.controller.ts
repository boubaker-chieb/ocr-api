import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse
  } from "tsoa";
  
  const values = [7,2,8,8,6,45,89,14];

/**
 * User controller
 */
  @Route("values")
  export class ValuesController extends Controller {
    @Get("{index}")
    public async getValueAt(
      @Path() index: number
    ): Promise<number> {
      return values[index]
    }

    @Get()
    public async getValues(
    ): Promise<number[]> {
      return values;
    }
  }