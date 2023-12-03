// /auth/Register
export interface RegisterRequest {
    email: string,
    password: string,
}

// /auth/Login
export interface LoginRequest {
    email: string,
    password: string,
}