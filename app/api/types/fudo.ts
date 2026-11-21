type FudoType = "Customer";

export type CustomerFudoRequest = {
  data: {
    attributes: {
      active: boolean;
      comment: string;
      discountPercentage?: number;
      email: string;
      name: string;
    };
    type: FudoType;
  };
};

export type FudoCustomerResponse = {
  data: {
    attributes: Customer;
    id: string;
    relationships: Record<string, unknown>;
    type: "Customer";
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
