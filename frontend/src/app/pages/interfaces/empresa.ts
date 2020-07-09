export interface Empresa {
  error: string;
  data: {
    _id: string;
    name: string;
    cnpj: string;
    email: string;
    phone: string;
  };
}
