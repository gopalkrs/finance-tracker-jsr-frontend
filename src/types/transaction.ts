export type TransactionType = 'CREDIT' | 'DEBIT';

export interface TransactionFormInput {
    transactionName: string;
    categoryName: string;
    transactionType: TransactionType;
    accountId: string;
    amount: number;
    transactionDate: string;
}

export interface TransactionOutput {
    transactionId: string,
    transactionName: string;
    categoryName: string;
    transactionType: TransactionType;
    accountId: string;
    amount: number;
    transactionDate: string;
}

export interface TransactionState {
    transactionsList: TransactionOutput[];
    txnResponse: TransactionOutput | null;
    isLoadingTxn: boolean;
    error: string | null;
}