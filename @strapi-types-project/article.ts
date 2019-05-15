/**
 * Model definition for article
 */
export interface IArticle {
  id: string;
  content?: string;
  title?: string;
  date?: Date;
  owner?: any;
  background?: string;
}
