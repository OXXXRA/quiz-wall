export class CreateTestDto {
  start_date: Date;
  comment: string;
  text: string;
  parent_id: number;

  created_at: Date;
  owner_id: number;
  likes: number;
}