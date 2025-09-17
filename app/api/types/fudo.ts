type FudoType = "Customer";

export type CustomerFudoRequest = {
  data: {
    type: FudoType;
    attributes: {
      active: boolean;
      comment: string;
      discountPercentage?: number;
      email: string;
      name: string;
    };
  };
};

export type FudoCustomerResponse = {
  data: {
    type: "Customer";
    id: string;
    attributes: Customer;
    relationships: Record<string, any>;
  }[];
};

export type Customer = {
  active: boolean;
  address: string;
  comment: string;
  createdAt: string;
  discountPercentage: number;
  email: string;
  firstSaleDate: string;
  historicalSalesCount: number;
  historicalTotalSpent: number;
  houseAccountBalance: number;
  houseAccountEnabled: boolean;
  lastSaleDate: string;
  name: string;
  origin: string;
  phone: string;
  salesCount: number;
  vatNumber: string;
};
