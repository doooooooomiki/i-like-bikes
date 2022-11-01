declare interface IAPIBody {
  data: any;
  meta: any;
}

declare interface IData {
  id: number;
  attributes: IBike;
}

declare interface IPagination{
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}