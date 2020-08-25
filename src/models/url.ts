export default class URL {
  originalURL: string;

  shortenedURL: string;

  constructor(original: string, shortened: string) {
    this.originalURL = original;
    this.shortenedURL = shortened;
  }
}
