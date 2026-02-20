export interface UserStatsState {
    userStats: any;
    isLoadingStats: boolean;
    error: string | null;
}

export interface UserStatsResponse {
    totalAccounts: number;
    totalBalance: number;
    totalIncome: number;
    totalExpenses: number;
    totalTransactions : number;
    totalSavings: number;
}