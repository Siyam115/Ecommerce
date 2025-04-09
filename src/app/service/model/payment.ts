export interface Payment {
  id?: number;
  amount: number;
  status: string;
  paymentMethod: string;
  paymentDate: string;
}
