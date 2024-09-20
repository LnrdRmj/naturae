export type News = {
  date: string;
  title: string;
  body: string;
  button?: {
    text: string,
    url: string,
  }
};
