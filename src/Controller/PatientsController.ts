import {Request, Response} from "express"
import { Paciente } from "@prisma/client"
import { prismaClient } from "../database/prismaClient";

export default class {

    //cadastrando paciente
    static async createPatient(req: Request, res: Response){

        const {nome_paciente, 
              celular_paciente, 
              telefone_paciente,
              email_paciente,
              nome_responsavel, 
              telefone_responsavel} = req.body

            //validando campos obrigatórios
          if(!nome_paciente || !celular_paciente || !telefone_paciente) 
             res.status(400).json({error: "Existem campos obrigatórios que não foram preenchidos"})

        try {
           await prismaClient.paciente.create({
                data:{
                    nome_paciente,
                    celular_paciente,
                    telefone_paciente,
                    nome_responsavel,
                    telefone_responsavel,
                    email_paciente
                }
                
            })
            
            return res.status(201).json({message:"Paciente cadastrado com sucesso!"})
        } catch (error: any) {
            console.error(error)
            res.status(400).json({ message: "Não foi possível cadastrar um aluno!" });
        }
    }
    //listando pacientes
    static async listPacient(req:Request, res: Response){
        const getAll = await prismaClient.paciente.findMany()

        try {
            return res.status(200).json(getAll)
        } catch (error) {
            return res.status(400).json({error: "Não foi possível listar os pacientes"})
        }
    }
}