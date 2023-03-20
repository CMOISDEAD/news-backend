export class CreatePostDto {
  id: number;
  user_id: number;
  title: string;
  description: string;
  url: string;
  created_at: Date;
}
