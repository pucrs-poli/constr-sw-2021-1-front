export type building = {
  floors: number;
  name: string;
  description: string;
  maxCapacity: number;
  _id: string;
};

export type room = {
  number: number;
  buildingID: string;
  description: string;
  maxCapacity: number;
  type: string;
  _id: string;
};
