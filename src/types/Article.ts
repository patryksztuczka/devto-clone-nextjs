export interface IArticle {
  id: number;
  title: string;
  tags: string[];
  reactions: number;
  comments: number;
  timestamp: string;
  author: string;
}
