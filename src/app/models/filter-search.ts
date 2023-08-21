export class FilterSearch {
  name: string;
  value: any;
  relationalOperator: RelationalOperator;

  constructor(filter: { name: string, value: any, relationalOperator: RelationalOperator }) {
    this.name = filter.name;
    this.value = filter.value;
    this.relationalOperator = filter.relationalOperator;
  }
}

export enum RelationalOperator {
  EQUAL = ':',
  LIKE = '~',
  DIFFERENT = '!',
  LESS_THAN = '<',
  LESS_THAN_OR_EQUAL = '<:',
  GREATER_THAN = '>',
  GREATER_THAN_OR_IQUAL = '>:'
}
