export class CreatePostDto {
  body: string;
  name: string;

  created_at: Date;
  owner_id: number;
  likes: number;
}

export default CreatePostDto;