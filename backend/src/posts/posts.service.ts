import { Body, Injectable, UploadedFile } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postsRepository: typeof Post) { }


    async create(dto: CreatePostDto,
        image: any) {
        const fileName = "sdsdsd"
        const post = await this.postsRepository.create({ ...dto, image: fileName });
        return post;
    }
}
