export default class URL {
  _id: string = '';

  originalURL: string;

  shortenURL: string;

  createdAt: Date = new Date();

  constructor(original: string, shortened: string) {
    this.originalURL = original;
    this.shortenURL = shortened;
  }
}
