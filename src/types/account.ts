export type AccountType = 'CURRENT' | 'SAVINGS' | 'CREDIT' | 'BUSINESS';

export interface Account {
    id: number;
    accountName: string;
    accountType: AccountType;
    bankName: string;
    accountNumber: string;
    balance: number;
}

export interface AccountState {
    allAccounts: Account[];
    account: Account | null;
    isLoadingAccount: boolean;
    error: string | null;
    deleteAccountStatus: string | null;
    deletedAccount: Account | null;
}