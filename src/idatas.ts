export interface IPost {
  id: number;
  title: string;
  imageUrl: String;
  body: string;
  template?: string;
  buildTemplate?: () => string;
}

export interface IComments {
  id: number;
  idPost: number;
  email: string;
  body: string;
  template?: string;
  buildTemplate?: () => string;
}
