import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
import { User } from "../models/user.model";
import { UsersService } from "../services/user.servide";
  
  @Route("users")
  export class UsersController {
    @Get("{userId}")
    public async getUser(
      @Path() userId: number,
      @Query() name?: string
    ): Promise<User> {
      return new UsersService().get(userId, name);
    }
  
    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public async createUser(
      @Body() requestBody: User
    ): Promise<void> {
      new UsersService().create(requestBody);
      return;
    }
  }