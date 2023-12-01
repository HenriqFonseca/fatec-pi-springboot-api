import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Button } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react";

const Clientes = () => {
    function createData(primeiro_nome, sobrenome, email, btn_endereco, btn_telefone) {
        return { primeiro_nome, sobrenome, email, btn_endereco, btn_telefone };
    }

    const [clientes, setClientes] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8081/cliente")
        .then(({data}) => {
            setClientes(data)
        })    
    }, [])

   
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Primeiro Nome</TableCell>
                    <TableCell>Sobrenome</TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell>Endereço(s)</TableCell>
                    <TableCell>Telefone(s)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {clientes.map((cliente) => (
                    <TableRow
                    key={cliente.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell>{cliente.nome}</TableCell>
                        <TableCell>{cliente.sobrenome}</TableCell>
                        <TableCell>{cliente.email}</TableCell>
                        <TableCell><Button variant="outlined">Ver endereços</Button></TableCell>
                        <TableCell><Button variant="outlined">Ver telefones</Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Clientes