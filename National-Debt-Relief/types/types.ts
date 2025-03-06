export interface ExpenseType {
    id: string;
    name: string;
    amount: string;
    percentage: string;
}
  
export interface IncomeType {
    id: string;
    name: string;
    amount: string;
}
  
export interface TransactionType {
    id: string;
    type: 'transaction_fee' | 'customer_fee' | 'deposit';
    name: 'Transaction Fee' | 'Customer Fee' | 'Deposit';
    amount: string;
    date: string;
}