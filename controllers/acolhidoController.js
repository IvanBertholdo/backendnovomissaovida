const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createAcolhido = async (req, reply) => {
    const { nome_acolhido, cidade_natural, estado_natural, cidade_origem, estado_origem, cpf_acolhido, rg_acolhido, orgao_expedidor_rg, data_nascimento, declaracao_racial, filiacao_pai, filiacao_mae, endereco_familiar, telefone, whatsapp, escolaridade_acolhido, profissao_acolhido, estado_civil_acolhido, apoio_familiar, contato_familiar, filhos_acolhido, religiao_acolhido, acolhidoFilhos, dados_saude, medicamento, vida_juridica, substancia, estado_social, termo_guarda, termo_responsabilidade, termo_alta} = req.body;
    //const transaction = await prisma.$transaction()
    try {      
        const acolhido = await prisma.acolhido.create({
            data: {
                nome_acolhido,
                cidade_natural,
                estado_natural,
                cidade_origem,
                estado_origem,
                cpf_acolhido,
                rg_acolhido,
                orgao_expedidor_rg,
                data_nascimento,
                declaracao_racial,
                filiacao_pai,
                filiacao_mae,
                endereco_familiar,
                telefone,
                whatsapp,
                escolaridade_acolhido,
                profissao_acolhido,
                estado_civil_acolhido,
                apoio_familiar,
                contato_familiar,
                filhos_acolhido,
                religiao_acolhido
            }
        });
               
        if (acolhidoFilhos && acolhidoFilhos.length > 0) {
            for (const filho of acolhidoFilhos) {
                await prisma.acolhidoFilho.create({
                    data: {
                        nome_filho: filho.nome_filho,
                        paga_pensao: filho.paga_pensao,
                        id_acolhido: acolhido.id_acolhido
                    }
                });
            }
        }

        await prisma.dadosSaude.create({
            data: {
                tratamento_psiquiatrico: dados_saude.tratamento_psiquiatrico,
                local_tratamento: dados_saude.local_tratamento,
                lesao_fisica: dados_saude.lesao_fisica,
                local_lesao_fisica: dados_saude.local_lesao_fisica,
                doenca_respiratoria: dados_saude.doenca_respiratoria,
                nome_doenca_respiratoria: dados_saude.nome_doenca_respiratoria,
                alergia_alimentar: dados_saude.alergia_alimentar,
                nome_alimento: dados_saude.nome_alimento,
                alergia_medicamentos: dados_saude.alergia_medicamentos,
                nome_alergia_medicamento: dados_saude.nome_alergia_medicamento,
                outras_doencas: dados_saude.outras_doencas,
                tentativa_suicidio: dados_saude.tentativa_suicidio,
                automutilacao: dados_saude.automutilacao,
                historico_cancer: dados_saude.historico_cancer,
                tipo_cancer: dados_saude.tipo_cancer,
                id_acolhido: acolhido.id_acolhido
            }
        });

        
        if (medicamento && medicamento.length > 0) {
            for (const medicamentos of medicamento) {
                await prisma.medicamento.create({
                    data: {
                        medicamento_psicotropico: medicamentos.medicamento_psicotropico,
                        nome_medicamento: medicamentos.nome_medicamento,
                        motivo_uso: medicamentos.motivo_uso,
                        id_acolhido: acolhido.id_acolhido
                    }
                });
            }
        }

        await prisma.vidaJuridica.create({
            data: {
                historico_prisao: vida_juridica.historico_prisao,
                motivo_prisao: vida_juridica.motivo_prisao,
                processos: vida_juridica.processos,
                cidade_processo: vida_juridica.cidade_processo,
                estado_processo: vida_juridica.estado_processo,
                uso_tornozeleira: vida_juridica.uso_tornozeleira,
                informou_central: vida_juridica.informou_central,
                cumpriu_pena: vida_juridica.cumpriu_pena,
                situacao_legal: vida_juridica.situacao_legal,
                motivo_situacao_legal: vida_juridica.motivo_situacao_legal,
                id_acolhido: acolhido.id_acolhido
            }
        });

        await prisma.substancia.create({
            data: {
                uso_alcool: substancia.uso_alcool,
                idade_alcool: substancia.idade_alcool,
                motivo_alcool: substancia.motivo_alcool,
                uso_tabaco: substancia.uso_tabaco,
                idade_tabaco: substancia.idade_tabaco,
                motivo_tabaco: substancia.motivo_tabaco,
                outras_drogas: substancia.outras_drogas,
                motivo_outras_drogas: substancia.motivo_outras_drogas,
                principal_substancia: substancia.principal_substancia,
                id_acolhido: acolhido.id_acolhido
            }
        })

        await prisma.estadoSocial.create({
            data: {
                situacao_rua: estado_social.situacao_rua,
                tempo_rua: estado_social.tempo_rua,
                motivo_rua: estado_social.motivo_rua,
                chegada_missao_vida: estado_social.chegada_missao_vida,
                sentimentos: estado_social.sentimentos,
                objetivos: estado_social.objetivos,
                outros_centros: estado_social.outros_centros,
                nome_outros_centros: estado_social.nome_outros_centros,
                tempo_outros_centros: estado_social.tempo_outros_centros,
                motivo_saida_outros_centros: estado_social.motivo_saida_outros_centros,
                id_acolhido: acolhido.id_acolhido
            }
        });

        await prisma.termoGuarda.create({
            data: {
                autorizacao_guarda: termo_guarda.autorizacao_guarda,
                documentos_guardados: termo_guarda.documentos_guardados,
                descricao_carteira: termo_guarda.descricao_carteira,
                recurso_especie: termo_guarda.recurso_especie,
                aparelho_celular: termo_guarda.aparelho_celular,
                outros_objetos: termo_guarda.outros_objetos,
                id_acolhido: acolhido.id_acolhido
            }
        });

        await prisma.termoResponsabilidade.create({
            data: {
                pdf_termo_responsabilidade: termo_responsabilidade.pdf_termo_responsabilidade,
                id_acolhido: acolhido.id_acolhido
            }
        });

        await prisma.termoAlta.create({
            data: {
                pdf_termo_alta: termo_alta.pdf_termo_alta,
                id_acolhido: acolhido.id_acolhido
            }
        });

        //await transaction.commit();
        console.log("Acolhido Cadastrado")
        return reply.status(200).send({ message: 'Acolhido cadastrado!' });  
    } catch (error) {
        //await transaction.rollback();
        return reply.status(400).send(error);
    }
};

const updateAcolhido = async (req, reply) => {
    const { nome_acolhido, cidade_natural, estado_natural, cidade_origem, estado_origem, cpf_acolhido, rg_acolhido, orgao_expedidor_rg, data_nascimento, declaracao_racial, filiacao_pai, filiacao_mae, endereco_familiar, telefone, whatsapp, escolaridade_acolhido, profissao_acolhido, estado_civil_acolhido, apoio_familiar, contato_familiar, filhos_acolhido, religiao_acolhido, acolhidoFilhos, dados_saude, medicamento, vida_juridica, substancia, estado_social, termo_guarda, termo_responsabilidade, termo_alta } = req.body;

    //const transaction = await prisma.$transaction()
    try {
        await prisma.acolhido.update({
            where: { rg_acolhido },
            data: {
                nome_acolhido,
                cidade_natural,
                estado_natural,
                cidade_origem,
                estado_origem,
                cpf_acolhido,
                rg_acolhido,
                orgao_expedidor_rg,
                data_nascimento,
                declaracao_racial,
                filiacao_pai,
                filiacao_mae,
                endereco_familiar,
                telefone,
                whatsapp,
                escolaridade_acolhido,
                profissao_acolhido,
                estado_civil_acolhido,
                apoio_familiar,
                contato_familiar,
                filhos_acolhido,
                religiao_acolhido
            }
        });

        const acolhido = await prisma.acolhido.findUnique({
            where: { cpf_acolhido }
        });

        if (acolhidoFilhos && acolhidoFilhos.length > 0) {
            await prisma.acolhidoFilho.deleteMany({
                where: { id_acolhido: acolhido.id_acolhido }
            });
            for (const filho of acolhidoFilhos) {
                await prisma.acolhidoFilho.create({
                    data: {
                        nome_filho: filho.nome_filho,
                        paga_pensao: filho.paga_pensao,
                        id_acolhido: rg_acolhido
                    }
                });
            }
        }

        await prisma.dadosSaude.update({
            where: { id_acolhido: acolhido.id_acolhido },
            data: {
                tratamento_psiquiatrico: dados_saude.tratamento_psiquiatrico,
                local_tratamento: dados_saude.local_tratamento,
                lesao_fisica: dados_saude.lesao_fisica,
                local_lesao_fisica: dados_saude.local_lesao_fisica,
                doenca_respiratoria: dados_saude.doenca_respiratoria,
                nome_doenca_respiratoria: dados_saude.nome_doenca_respiratoria,
                alergia_alimentar: dados_saude.alergia_alimentar,
                nome_alimento: dados_saude.nome_alimento,
                alergia_medicamentos: dados_saude.alergia_medicamentos,
                nome_alergia_medicamento: dados_saude.nome_alergia_medicamento,
                outras_doencas: dados_saude.outras_doencas,
                tentativa_suicidio: dados_saude.tentativa_suicidio,
                automutilacao: dados_saude.automutilacao,
                historico_cancer: dados_saude.historico_cancer,
                tipo_cancer: dados_saude.tipo_cancer
            }
        });

        if (medicamento && medicamento.length > 0) {
            await prisma.medicamento.deleteMany({
                where: { id_acolhido: acolhido.id_acolhido }
            });
            for (const medicamentos of medicamento) {
                await prisma.medicamento.create({
                    data: {
                        medicamento_psicotropico: medicamentos.medicamento_psicotropico,
                        nome_medicamento: medicamentos.nome_medicamento,
                        motivo_uso: medicamentos.motivo_uso,
                        id_acolhido: acolhido.id_acolhido
                    }
                });
            }
        }

        await prisma.vidaJuridica.update({
            where: { id_acolhido: acolhido.id_acolhido },
            data: {
                historico_prisao: vida_juridica.historico_prisao,
                motivo_prisao: vida_juridica.motivo_prisao,
                processos: vida_juridica.processos,
                cidade_processo: vida_juridica.cidade_processo,
                estado_processo: vida_juridica.estado_processo,
                uso_tornozeleira: vida_juridica.uso_tornozeleira,
                informou_central: vida_juridica.informou_central,
                cumpriu_pena: vida_juridica.cumpriu_pena,
                situacao_legal: vida_juridica.situacao_legal,
                motivo_situacao_legal: vida_juridica.motivo_situacao_legal
            }
        });

        await prisma.substancia.update({
            where: { id_acolhido: acolhido.id_acolhido },
            data: {
                uso_alcool: substancia.uso_alcool,
                idade_alcool: substancia.idade_alcool,
                motivo_alcool: substancia.motivo_alcool,
                uso_tabaco: substancia.uso_tabaco,
                idade_tabaco: substancia.idade_tabaco,
                motivo_tabaco: substancia.motivo_tabaco,
                outras_drogas: substancia.outras_drogas,
                motivo_outras_drogas: substancia.motivo_outras_drogas,
                principal_substancia: substancia.principal_substancia
            }
        });


        await prisma.estadoSocial.update({
            where: { id_acolhido: acolhido.id_acolhido },
            data: {
                situacao_rua: estado_social.situacao_rua,
                tempo_rua: estado_social.tempo_rua,
                motivo_rua: estado_social.motivo_rua,
                chegada_missao_vida: estado_social.chegada_missao_vida,
                sentimentos: estado_social.sentimentos,
                objetivos: estado_social.objetivos,
                outros_centros: estado_social.outros_centros,
                nome_outros_centros: estado_social.nome_outros_centros,
                tempo_outros_centros: estado_social.tempo_outros_centros,
                motivo_saida_outros_centros: estado_social.motivo_saida_outros_centros
            }
        });

        await prisma.termoGuarda.update({
            where: { id_acolhido: acolhido.id_acolhido },
            data: {
                autorizacao_guarda: termo_guarda.autorizacao_guarda,
                documentos_guardados: termo_guarda.documentos_guardados,
                descricao_carteira: termo_guarda.descricao_carteira,
                recurso_especie: termo_guarda.recurso_especie,
                aparelho_celular: termo_guarda.aparelho_celular,
                outros_objetos: termo_guarda.outros_objetos
            }
        });

        await prisma.termoResponsabilidade.update({
            where: { id_acolhido: acolhido.id_acolhido },
            data: {
                pdf_termo_responsabilidade: termo_responsabilidade.pdf_termo_responsabilidade
            }
        });

        await prisma.termoAlta.update({
            where: { id_acolhido: acolhido.id_acolhido },
            data: {
                pdf_termo_alta: termo_alta.pdf_termo_alta
            }
        });

        //await transaction.commit();
        console.log("Acolhido Atualizado");
        return reply.status(200).send({ message: 'Acolhido atualizado!' });
    } catch (error) {
        //await transaction.rollback();
        return reply.status(400).send(error);
    }
};

const getAcolhidos = async (req, reply) => {
    try {
        const acolhidos = await prisma.acolhido.findMany({
            include: {
                filho: true,
                saude: true,
                medicamento: true,
                vidajuridica: true,
                substancia: true,
                social: true,
                termoguarda: true,
                termoresponsabilidade: true,
                termoalta: true
            }
        });
        return reply.send(acolhidos);
    } catch (error) {
        return reply.status(400).send(error);
    }
};

const getAcolhidoById = async (req, reply) => {
    const { id_acolhido } = req.params;
    const id = parseInt(id_acolhido)
    try {
        const acolhido = await prisma.acolhido.findUnique({
            where: { id_acolhido : id },
            include: {
                filho: true,
                saude: true,
                medicamento: true,
                vidajuridica: true,
                substancia: true,
                social: true,
                termoguarda: true,
                termoresponsabilidade: true,
                termoalta: true
            }
        });
        
        if (!acolhido) {
            return reply.status(404).send({ message: "Acolhido não encontrado" });
        }
        
        return reply.send(acolhido);
    } catch (error) {
        return reply.status(400).send(error);
    }
};

module.exports = {
    createAcolhido,
    updateAcolhido,
    getAcolhidos,
    getAcolhidoById
};