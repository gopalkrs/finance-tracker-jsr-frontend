export interface LoginPayload {
    email: string;
    password: string;
}

export interface User {
    fullName: string;
    email: string;
    password: string;
}

export interface AuthState {
    user: User | null,
    isLoading: boolean,
    isAuthenticated: boolean,
    error: string | null,
}

export interface SignupPayload {
  fullName: string;
  email: string;
  password: string;
}