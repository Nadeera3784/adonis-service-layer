import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PostService from 'App/Services/PostService';
import { HttpStatusEnum  as HttpStatus} from 'App/Enums/HttpStatusEnum';
import { ResponseTypeEnum as ResponseType } from 'App/Enums/ResponseTypeEnum';
import {inject} from "@adonisjs/fold";

@inject()
export default class PostsController {

    constructor(private readonly postService: PostService) {}
    
    public async index(context: HttpContextContract) {
      try {
          const posts = await this.postService.findAll();
          return context.response.status(HttpStatus.OK).json({
            type: ResponseType.SUCCESS,
            message: null,
            data: posts ,
          });
        } catch (error) {
          return context.response.status(HttpStatus.BAD_REQUEST).json({
            type: ResponseType.SUCCESS,
            message: 'Something went wrong, Please try again later',
            data: null,
          });
        }
    }
}
