export enum PRODUCT_ID {
  BIKE = 'BIKE',
  JEWELLERY = 'JEWELLERY',
  ELECTRONICS = 'ELECTRONICS',
  SPORTS = 'SPORTS',
}

export interface IProductDetails {
  id: PRODUCT_ID;
  productName: string;
  minCoverage: number;
  maxCoverage: number;
  risk: number;
  image: string;
}

export const productDetails: Array<IProductDetails> = [
  {
    id: PRODUCT_ID.BIKE,
    productName: 'Bike',
    minCoverage: 0,
    maxCoverage: 3000,
    risk: 30,
    image:
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  },
  {
    id: PRODUCT_ID.JEWELLERY,
    productName: 'Jewellery',
    minCoverage: 500,
    maxCoverage: 10000,
    risk: 5,
    image:
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80',
  },
  {
    id: PRODUCT_ID.ELECTRONICS,
    productName: 'Electronics',
    minCoverage: 500,
    maxCoverage: 6000,
    risk: 35,
    image:
      'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80',
  },
  {
    id: PRODUCT_ID.SPORTS,
    productName: 'Sports equipment',
    minCoverage: 0,
    maxCoverage: 20000,
    risk: 30,
    image:
      'https://images.unsplash.com/photo-1602211844066-d3bb556e983b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2226&q=80',
  },
];
