import { IUser } from './user';

/**
 * Model definition for article
 */
export interface IArticle {
  id: string;
  content?: string;
  title?: string;
  date?: Date;
  owner?: IUser;
  background?: string;
}
