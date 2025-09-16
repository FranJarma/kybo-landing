type FudoType = "Customer";

export type FudoRequest = {
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
