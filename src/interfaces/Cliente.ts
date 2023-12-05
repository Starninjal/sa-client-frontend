import type Usuario from "./Usuario"

export default interface Cliente {
    id: number,
    nomeCliente: String,
    cpfCliente: string,
    telefoneCliente: String,
    enderecoCliente: String,
    emailCliente: String,
    usuarioDto: Usuario,
    idUsuario: number,
    image: Blob
}