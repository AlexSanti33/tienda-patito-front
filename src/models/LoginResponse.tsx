import Empleado from "./Empleado";

export default interface LoginResponse {
    token: string | undefined;
    expiresIn: number | undefined;
    empleado: Empleado;
}