export default interface LoginResponse {
    token: string | undefined;
    expiresIn: number | undefined;
}