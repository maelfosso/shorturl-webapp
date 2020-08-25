export default class URL {
  originalURL: string;

  shortenURL: string;

  constructor(original: string, shortened: string) {
    this.originalURL = original;
    this.shortenURL = shortened;
  }
}
