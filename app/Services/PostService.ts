import {inject} from "@adonisjs/fold";

@inject()
export default class PostService {
    
    public async findAll() {
        return [
            {
              id: 1,
              title: 'Hello world',
            },
            {
              id: 2,
              title: 'Hello universe',
            },
        ];
    }
}