import { FilterSearch } from "./filter-search";

export enum SortOrder {
    ASC = 'ASC',
    DESC = 'DESC'
  }
  
  export class Filter {
    page = 0;
    itemsPerPage = 10;
    sortField = 'id';
    sortOrder = SortOrder.ASC;
    filtersPes: FilterSearch[] = [];
  }