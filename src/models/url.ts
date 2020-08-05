export default class URL {
  private originalURL: string;
  private shortenedURL: string;

  constructor(original: string, shortened: string) {
    this.originalURL = original;
    this.shortenedURL = shortened;
  }
  
}
