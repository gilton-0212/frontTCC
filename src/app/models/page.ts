export class Page<T> {

  totalElements: number;
  totalPages: number;
  content: Array<T>;

  constructor() {
    this.content = [];
    this.totalElements = 0;
    this.totalPages = 0;
  }

}
