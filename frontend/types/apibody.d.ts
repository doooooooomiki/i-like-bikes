declare interface IAPIBody {
  data: any;
  meta: any;
}

declare interface IData {
  id: number;
  attributes: IBike;
}

declare interface IPagination{
  page: 1;
  pageSize: 25;
  pageCount: 1;
  total: 2;
}