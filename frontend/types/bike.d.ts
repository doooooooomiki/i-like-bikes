declare interface IBike {
  location?: string;
  views: number;
  title?: string;
  slug: string;
  image: IImage;
  photographer: IPhotographer;
}

declare interface IImage {
  data: {
    id: number;
    attributes: IImageAttr;
  }
}

declare interface IImageAttr {
  url: string
}

declare interface IPhotographer {
  data: {
    id: number;
    attributes: IPhotographerAttr;
  }
}

declare interface IPhotographerAttr {
  name?: string;
  location?: string;
  twitterHandle?: string;
  slug: string;
  unsplashHandle?: string;
}