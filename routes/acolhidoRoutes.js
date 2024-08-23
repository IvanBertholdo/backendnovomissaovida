const acolhidoController = require('../controllers/acolhidoController');

async function acolhidoRoutes(fastify, options) {
    // Rota para criar um novo acolhido
    fastify.post('/Acolhido', {
        schema: {
            description: 'Cria um novo paciente',
            tags: ['Acolhido'],
            consumes: ['application/json'],
            produces: ['application/json'],
            body: {
                type: 'object',
                properties: {
                    nome_acolhido: { type: 'string' },
                    cidade_natural: { type: 'string' },
                    estado_natural: { type: 'string' },
                    cidade_origem: { type: 'string' },
                    estado_origem: { type: 'string' },
                    cpf_acolhido: { type: 'string' },
                    rg_acolhido: { type: 'string' },
                    orgao_expedidor_rg: { type: 'string' },
                    data_nascimento: { type: 'string', format: 'date' },
                    declaracao_racial: { type: 'string' },
                    filiacao_pai: { type: 'string' },
                    filiacao_mae: { type: 'string' },
                    endereco_familiar: { type: 'string' },
                    telefone: { type: 'string' },
                    whatsapp: { type: 'string' },
                    escolaridade_acolhido: { type: 'string' },
                    profissao_acolhido: { type: 'string' },
                    estado_civil_acolhido: { type: 'string' },
                    apoio_familiar: { type: 'boolean' },
                    contato_familiar: { type: 'string' },
                    filhos_acolhido: { type: 'integer' },
                    religiao_acolhido: { type: 'string' },
                    acolhidoFilhos: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                nome_filho: { type: 'string' },
                                paga_pensao: { type: 'boolean' }
                            },
                            required: ['nome_filho', 'paga_pensao']
                        }
                    },
                    dados_saude: {
                        type: 'object',
                        properties: {
                            tratamento_psiquiatrico: { type: 'boolean' },
                            local_tratamento: { type: 'string' },
                            lesao_fisica: { type: 'boolean' },
                            local_lesao_fisica: { type: 'string' },
                            doenca_respiratoria: { type: 'boolean' },
                            nome_doenca_respiratoria: { type: 'string' },
                            alergia_alimentar: { type: 'boolean' },
                            nome_alimento: { type:'string' },
                            alergia_medicamentos: { type: 'boolean' },
                            nome_alergia_medicamento: { type: 'string' },
                            outras_doencas: { type: 'string' },
                            tentativa_suicidio: { type: 'boolean' },
                            automutilacao: { type: 'boolean' },
                            historico_cancer: { type: 'string' },
                            tipo_cancer: { type: 'string' }
                        },
                        required: [
                            'tratamento_psiquiatrico',
                            'local_tratamento',
                            'lesao_fisica',
                            'local_lesao_fisica',
                            'doenca_respiratoria',
                            'nome_doenca_respiratoria',
                            'alergia_alimentar',
                            'nome_alimento',
                            'alergia_medicamentos',
                            'nome_alergia_medicamento',
                            'outras_doencas',
                            'tentativa_suicidio',
                            'automutilacao',
                            'historico_cancer',
                            'tipo_cancer'
                        ]
                    },
                    medicamento: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                medicamento_psicotropico: { type: 'boolean' },
                                nome_medicamento: { type: 'string' },
                                motivo_uso: { type: 'string' }
                            },
                            required: ['medicamento_psicotropico', 'nome_medicamento','motivo_uso']
                        }
                    },
                    vida_juridica: {
                        type: 'object',
                        properties: {
                            historico_prisao: { type: 'boolean' },
                            motivo_prisao: { type: 'string' },
                            processos: { type: 'boolean' },
                            cidade_processo: { type: 'string' },
                            estado_processo: { type: 'string' },
                            uso_tornozeleira: { type: 'boolean' },
                            informou_central: { type: 'boolean' },
                            cumpriu_pena: { type: 'boolean' },
                            situacao_legal: { type: 'boolean' },
                            motivo_situacao_legal: { type: 'string' }
                        },
                        required: [
                            'historico_prisao',
                            'motivo_prisao',
                            'processos',
                            'cidade_processo',
                            'estado_processo',
                            'uso_tornozeleira',
                            'informou_central',
                            'cumpriu_pena',
                            'situacao_legal',
                            'motivo_situacao_legal'
                        ]
                    },
                    substancia: {
                        type: 'object',
                        properties: {
                            uso_alcool: { type: 'boolean' },
                            idade_alcool: { type: 'number' },
                            motivo_alcool: { type: 'string' },
                            uso_tabaco: { type: 'boolean' },
                            idade_tabaco: { type: 'number' },
                            motivo_tabaco: { type: 'string' },
                            outras_drogas: { type: 'string' },
                            motivo_outras_drogas: { type: 'string' },
                            principal_substancia: { type: 'string' }
                        },
                        required: [
                            'uso_alcool',
                            'idade_alcool',
                            'motivo_alcool',
                            'uso_tabaco',
                            'idade_tabaco',
                            'motivo_tabaco',
                            'outras_drogas',
                            'motivo_outras_drogas',
                            'principal_substancia'
                        ]             
                    },
                    estado_social: {
                        type: 'object',
                        properties: {
                            situacao_rua: { type: 'boolean' },
                            tempo_rua: { type: 'string' },
                            motivo_rua: { type: 'string' },
                            chegada_missao_vida: { 'type': 'string' },
                            sentimentos: { type: 'string' },
                            objetivos: { type: 'string' },
                            outros_centros: { type: 'boolean' },
                            nome_outros_centros: { type: 'string' },
                            tempo_outros_centros: { type: 'string' },
                            motivo_saida_outros_centros: { type: 'string' }
                        },
                        required: [
                            'situacao_rua',
                            'tempo_rua',
                            'motivo_rua',
                            'chegada_missao_vida',
                            'sentimentos',
                            'objetivos',
                            'outros_centros',
                            'nome_outros_centros',
                            'tempo_outros_centros',
                            'motivo_saida_outros_centros'
                        ]
                    },
                    termo_guarda: {
                        type: 'object',
                        properties: {
                            autorizacao_guarda: { type: 'boolean' },
                            documentos_guardados: { type: 'string' },
                            descricao_carteira: { type: 'string' },
                            recurso_especie: { type: 'number' },
                            aparelho_celular: { type: 'string' },
                            outros_objetos: { type: 'string' }
                        },
                        required: [
                            'autorizacao_guarda',
                            'documentos_guardados',
                            'descricao_carteira',
                            'recurso_especie',
                            'aparelho_celular',
                            'outros_objetos'
                        ]
                    },
                    termo_responsabilidade: {
                        type: 'object',
                        properties: {
                            pdf_termo_responsabilidade: { type: 'string', contentEncoding: 'base64' }
                        },
                        required: ['pdf_termo_responsabilidade']
                    
                    },
                    termo_alta: {
                        type: 'object',
                        properties: {
                            pdf_termo_alta: { type: 'string', contentEncoding: 'base64' }
                        },
                        required: ['pdf_termo_alta']                 
                    },
                },
                required: [
                    'nome_acolhido', 
                    'cidade_natural', 
                    'estado_natural', 
                    'cidade_origem', 
                    'estado_origem', 
                    'cpf_acolhido', 
                    'rg_acolhido', 
                    'orgao_expedidor_rg', 
                    'data_nascimento', 
                    'declaracao_racial', 
                    'filiacao_pai', 
                    'filiacao_mae', 
                    'endereco_familiar', 
                    'telefone', 
                    'whatsapp', 
                    'escolaridade_acolhido', 
                    'profissao_acolhido', 
                    'estado_civil_acolhido', 
                    'apoio_familiar', 
                    'contato_familiar', 
                    'filhos_acolhido', 
                    'religiao_acolhido',
                    'acolhidoFilhos',
                    'dados_saude',
                    'medicamento',
                    'vida_juridica',
                    'substancia',
                    'estado_social',
                    'termo_guarda',
                    'termo_responsabilidade',
                    'termo_alta'
                ]
            },
            response: {
                201: {
                    description: 'Acolhido criado com sucesso',
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                        acolhido: { type: 'object' }
                    }
                },
                400: {
                    description: 'Erro ao criar acolhido',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        preHandler: [fastify.authenticate],
        handler: acolhidoController.createAcolhido
    });

    // Rota para atualizar um acolhido existente
    fastify.put('/Acolhido', {
        schema: {
            description: 'Cria um novo paciente',
            tags: ['Acolhido'],
            consumes: ['application/json'],
            produces: ['application/json'],
            body: {
                type: 'object',
                properties: {
                    nome_acolhido: { type: 'string' },
                    cidade_natural: { type: 'string' },
                    estado_natural: { type: 'string' },
                    cidade_origem: { type: 'string' },
                    estado_origem: { type: 'string' },
                    cpf_acolhido: { type: 'string' },
                    rg_acolhido: { type: 'string' },
                    orgao_expedidor_rg: { type: 'string' },
                    data_nascimento: { type: 'string', format: 'date' },
                    declaracao_racial: { type: 'string' },
                    filiacao_pai: { type: 'string' },
                    filiacao_mae: { type: 'string' },
                    endereco_familiar: { type: 'string' },
                    telefone: { type: 'string' },
                    whatsapp: { type: 'string' },
                    escolaridade_acolhido: { type: 'string' },
                    profissao_acolhido: { type: 'string' },
                    estado_civil_acolhido: { type: 'string' },
                    apoio_familiar: { type: 'boolean' },
                    contato_familiar: { type: 'string' },
                    filhos_acolhido: { type: 'integer' },
                    religiao_acolhido: { type: 'string' },
                    acolhidoFilhos: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                nome_filho: { type: 'string' },
                                paga_pensao: { type: 'boolean' }
                            },
                            required: ['nome_filho', 'paga_pensao']
                        }
                    },
                    dados_saude: {
                        type: 'object',
                        properties: {
                            tratamento_psiquiatrico: { type: 'boolean' },
                            local_tratamento: { type: 'string' },
                            lesao_fisica: { type: 'boolean' },
                            local_lesao_fisica: { type: 'string' },
                            doenca_respiratoria: { type: 'boolean' },
                            nome_doenca_respiratoria: { type: 'string' },
                            alergia_alimentar: { type: 'boolean' },
                            nome_alimento: { type:'string' },
                            alergia_medicamentos: { type: 'boolean' },
                            nome_alergia_medicamento: { type: 'string' },
                            outras_doencas: { type: 'string' },
                            tentativa_suicidio: { type: 'boolean' },
                            automutilacao: { type: 'boolean' },
                            historico_cancer: { type: 'string' },
                            tipo_cancer: { type: 'string' }
                        },
                        required: [
                            'tratamento_psiquiatrico',
                            'local_tratamento',
                            'lesao_fisica',
                            'local_lesao_fisica',
                            'doenca_respiratoria',
                            'nome_doenca_respiratoria',
                            'alergia_alimentar',
                            'nome_alimento',
                            'alergia_medicamentos',
                            'nome_alergia_medicamento',
                            'outras_doencas',
                            'tentativa_suicidio',
                            'automutilacao',
                            'historico_cancer',
                            'tipo_cancer'
                        ]
                    },
                    medicamento: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                medicamento_psicotropico: { type: 'boolean' },
                                nome_medicamento: { type: 'string' },
                                motivo_uso: { type: 'string' }
                            },
                            required: ['medicamento_psicotropico', 'nome_medicamento','motivo_uso']
                        }
                    },
                    vida_juridica: {
                        type: 'object',
                        properties: {
                            historico_prisao: { type: 'boolean' },
                            motivo_prisao: { type: 'string' },
                            processos: { type: 'boolean' },
                            cidade_processo: { type: 'string' },
                            estado_processo: { type: 'string' },
                            uso_tornozeleira: { type: 'boolean' },
                            informou_central: { type: 'boolean' },
                            cumpriu_pena: { type: 'boolean' },
                            situacao_legal: { type: 'boolean' },
                            motivo_situacao_legal: { type: 'string' }
                        },
                        required: [
                            'historico_prisao',
                            'motivo_prisao',
                            'processos',
                            'cidade_processo',
                            'estado_processo',
                            'uso_tornozeleira',
                            'informou_central',
                            'cumpriu_pena',
                            'situacao_legal',
                            'motivo_situacao_legal'
                        ]
                    },
                    substancia: {
                        type: 'object',
                        properties: {
                            uso_alcool: { type: 'boolean' },
                            idade_alcool: { type: 'number' },
                            motivo_alcool: { type: 'string' },
                            uso_tabaco: { type: 'boolean' },
                            idade_tabaco: { type: 'number' },
                            motivo_tabaco: { type: 'string' },
                            outras_drogas: { type: 'string' },
                            motivo_outras_drogas: { type: 'string' },
                            principal_substancia: { type: 'string' }
                        },
                        required: [
                            'uso_alcool',
                            'idade_alcool',
                            'motivo_alcool',
                            'uso_tabaco',
                            'idade_tabaco',
                            'motivo_tabaco',
                            'outras_drogas',
                            'motivo_outras_drogas',
                            'principal_substancia'
                        ]             
                    },
                    estado_social: {
                        type: 'object',
                        properties: {
                            situacao_rua: { type: 'boolean' },
                            tempo_rua: { type: 'string' },
                            motivo_rua: { type: 'string' },
                            chegada_missao_vida: { 'type': 'string' },
                            sentimentos: { type: 'string' },
                            objetivos: { type: 'string' },
                            outros_centros: { type: 'boolean' },
                            nome_outros_centros: { type: 'string' },
                            tempo_outros_centros: { type: 'string' },
                            motivo_saida_outros_centros: { type: 'string' }
                        },
                        required: [
                            'situacao_rua',
                            'tempo_rua',
                            'motivo_rua',
                            'chegada_missao_vida',
                            'sentimentos',
                            'objetivos',
                            'outros_centros',
                            'nome_outros_centros',
                            'tempo_outros_centros',
                            'motivo_saida_outros_centros'
                        ]
                    },
                    termo_guarda: {
                        type: 'object',
                        properties: {
                            autorizacao_guarda: { type: 'boolean' },
                            documentos_guardados: { type: 'string' },
                            descricao_carteira: { type: 'string' },
                            recurso_especie: { type: 'number' },
                            aparelho_celular: { type: 'string' },
                            outros_objetos: { type: 'string' }
                        },
                        required: [
                            'autorizacao_guarda',
                            'documentos_guardados',
                            'descricao_carteira',
                            'recurso_especie',
                            'aparelho_celular',
                            'outros_objetos'
                        ]
                    },
                    termo_responsabilidade: {
                        type: 'object',
                        properties: {
                            pdf_termo_responsabilidade: { type: 'string', contentEncoding: 'base64' }
                        },
                        required: ['pdf_termo_responsabilidade']
                    
                    },
                    termo_alta: {
                        type: 'object',
                        properties: {
                            pdf_termo_alta: { type: 'string', contentEncoding: 'base64' }
                        },
                        required: ['pdf_termo_alta']                 
                    },
                },
                required: [
                    'nome_acolhido', 
                    'cidade_natural', 
                    'estado_natural', 
                    'cidade_origem', 
                    'estado_origem', 
                    'cpf_acolhido', 
                    'rg_acolhido', 
                    'orgao_expedidor_rg', 
                    'data_nascimento', 
                    'declaracao_racial', 
                    'filiacao_pai', 
                    'filiacao_mae', 
                    'endereco_familiar', 
                    'telefone', 
                    'whatsapp', 
                    'escolaridade_acolhido', 
                    'profissao_acolhido', 
                    'estado_civil_acolhido', 
                    'apoio_familiar', 
                    'contato_familiar', 
                    'filhos_acolhido', 
                    'religiao_acolhido',
                    'acolhidoFilhos',
                    'dados_saude',
                    'medicamento',
                    'vida_juridica',
                    'substancia',
                    'estado_social',
                    'termo_guarda',
                    'termo_responsabilidade',
                    'termo_alta'
                ]
            },
            response: {
                200: {
                    description: 'Paciente atualizado com sucesso',
                    type: 'null'
                },
                400: {
                    description: 'Erro ao atualizar paciente',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        preHandler: [fastify.authenticate],
        handler: acolhidoController.updateAcolhido
    });

    // Rota para obter todos os acolhidos
    fastify.get('/Acolhidos', {
        schema: {
            description: 'Obtém a lista de todos os acolhidos',
            tags: ['Acolhido'],
            response: {
                200: {
                    description: 'Lista de acolhidos recuperada com sucesso',
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            nome_acolhido: { type: 'string' },
                            cidade_natural: { type: 'string' },
                            estado_natural: { type: 'string' },
                            cidade_origem: { type: 'string' },
                            estado_origem: { type: 'string' },
                            cpf_acolhido: { type: 'string' },
                            rg_acolhido: { type: 'string' },
                            orgao_expedidor_rg: { type: 'string' },
                            data_nascimento: { type: 'string', format: 'date' },
                            declaracao_racial: { type: 'string' },
                            filiacao_pai: { type: 'string' },
                            filiacao_mae: { type: 'string' },
                            endereco_familiar: { type: 'string' },
                            telefone: { type: 'string' },
                            whatsapp: { type: 'string' },
                            escolaridade_acolhido: { type: 'string' },
                            profissao_acolhido: { type: 'string' },
                            estado_civil_acolhido: { type: 'string' },
                            apoio_familiar: { type: 'boolean' },
                            contato_familiar: { type: 'string' },
                            filhos_acolhido: { type: 'integer' },
                            religiao_acolhido: { type: 'string' },
                            filho: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        nome_filho: { type: 'string' },
                                        paga_pensao: { type: 'boolean' }
                                    }
                                }
                            },
                            saude: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        tratamento_psiquiatrico: { type: 'boolean' },
                                        local_tratamento: { type: 'string' },
                                        lesao_fisica: { type: 'boolean' },
                                        local_lesao_fisica: { type: 'string' },
                                        doenca_respiratoria: { type: 'boolean' },
                                        nome_doenca_respiratoria: { type: 'string' },
                                        alergia_alimentar: { type: 'boolean' },
                                        nome_alimento: { type:'string' },
                                        alergia_medicamentos: { type: 'boolean' },
                                        nome_alergia_medicamento: { type: 'string' },
                                        outras_doencas: { type: 'string' },
                                        tentativa_suicidio: { type: 'boolean' },
                                        automutilacao: { type: 'boolean' },
                                        historico_cancer: { type: 'string' },
                                        tipo_cancer: { type: 'string' }
                                    }
                                }
                            },
                            medicamento: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        medicamento_psicotropico: { type: 'boolean' },
                                        nome_medicamento: { type: 'string' },
                                        motivo_uso: { type: 'string' }
                                    }
                                }   
                            },
                            vidajuridica: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        historico_prisao: { type: 'boolean' },
                                        motivo_prisao: { type: 'string' },
                                        processos: { type: 'boolean' },
                                        cidade_processo: { type: 'string' },
                                        estado_processo: { type: 'string' },
                                        uso_tornozeleira: { type: 'boolean' },
                                        informou_central: { type: 'boolean' },
                                        cumpriu_pena: { type: 'boolean' },
                                        situacao_legal: { type: 'boolean' },
                                        motivo_situacao_legal: { type: 'string' }
                                    }
                                }
                            },
                            substancia: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        uso_alcool: { type: 'boolean' },
                                        idade_alcool: { type: 'number' },
                                        motivo_alcool: { type: 'string' },
                                        uso_tabaco: { type: 'boolean' },
                                        idade_tabaco: { type: 'number' },
                                        motivo_tabaco: { type: 'string' },
                                        outras_drogas: { type: 'string' },
                                        motivo_outras_drogas: { type: 'string' },
                                        principal_substancia: { type: 'string' }
                                    }
                                }
                            },
                            social: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        situacao_rua: { type: 'boolean' },
                                        tempo_rua: { type: 'string' },
                                        motivo_rua: { type: 'string' },
                                        chegada_missao_vida: { 'type': 'string' },
                                        sentimentos: { type: 'string' },
                                        objetivos: { type: 'string' },
                                        outros_centros: { type: 'boolean' },
                                        nome_outros_centros: { type: 'string' },
                                        tempo_outros_centros: { type: 'string' },
                                        motivo_saida_outros_centros: { type: 'string' }
                                    }
                                }
                            },
                            termoguarda: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        autorizacao_guarda: { type: 'boolean' },
                                        documentos_guardados: { type: 'string' },
                                        descricao_carteira: { type: 'string' },
                                        recurso_especie: { type: 'number' },
                                        aparelho_celular: { type: 'string' },
                                        outros_objetos: { type: 'string' }
                                    }
                                }
                            },
                            termoresponsabilidade: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        pdf_termo_responsabilidade: { type: 'string', contentEncoding: 'base64' }
                                    }
                                }
                            },
                            termoalta: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        pdf_termo_alta: { type: 'string', contentEncoding: 'base64' }
                                    }
                                }                            
                            },
                        }
                    }
                },
                400: {
                    description: 'Erro ao obter acolhidos',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        preHandler: [fastify.authenticate],
        handler: acolhidoController.getAcolhidos
    });

    // Rota para obter um acolhido por ID
    fastify.get('/Acolhido/:id_acolhido', {
        schema: {
            description: 'Obtém um acolhido pelo ID',
            tags: ['Acolhido'],
            params: {
                type: 'object',
                properties: {
                    id_acolhido: { type: 'string' }
                },
                required: ['id_acolhido']
            },
            response: {
                200: {
                    description: 'Acolhido recuperado com sucesso',
                    type: 'object',
                        properties: {
                            nome_acolhido: { type: 'string' },
                            cidade_natural: { type: 'string' },
                            estado_natural: { type: 'string' },
                            cidade_origem: { type: 'string' },
                            estado_origem: { type: 'string' },
                            cpf_acolhido: { type: 'string' },
                            rg_acolhido: { type: 'string' },
                            orgao_expedidor_rg: { type: 'string' },
                            data_nascimento: { type: 'string', format: 'date' },
                            declaracao_racial: { type: 'string' },
                            filiacao_pai: { type: 'string' },
                            filiacao_mae: { type: 'string' },
                            endereco_familiar: { type: 'string' },
                            telefone: { type: 'string' },
                            whatsapp: { type: 'string' },
                            escolaridade_acolhido: { type: 'string' },
                            profissao_acolhido: { type: 'string' },
                            estado_civil_acolhido: { type: 'string' },
                            apoio_familiar: { type: 'boolean' },
                            contato_familiar: { type: 'string' },
                            filhos_acolhido: { type: 'integer' },
                            religiao_acolhido: { type: 'string' },
                            filho: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        nome_filho: { type: 'string' },
                                        paga_pensao: { type: 'boolean' }
                                    }
                                }
                            },
                            saude: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        tratamento_psiquiatrico: { type: 'boolean' },
                                        local_tratamento: { type: 'string' },
                                        lesao_fisica: { type: 'boolean' },
                                        local_lesao_fisica: { type: 'string' },
                                        doenca_respiratoria: { type: 'boolean' },
                                        nome_doenca_respiratoria: { type: 'string' },
                                        alergia_alimentar: { type: 'boolean' },
                                        nome_alimento: { type:'string' },
                                        alergia_medicamentos: { type: 'boolean' },
                                        nome_alergia_medicamento: { type: 'string' },
                                        outras_doencas: { type: 'string' },
                                        tentativa_suicidio: { type: 'boolean' },
                                        automutilacao: { type: 'boolean' },
                                        historico_cancer: { type: 'string' },
                                        tipo_cancer: { type: 'string' }
                                    }
                                }
                            },
                            medicamento: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        medicamento_psicotropico: { type: 'boolean' },
                                        nome_medicamento: { type: 'string' },
                                        motivo_uso: { type: 'string' }
                                    }
                                }   
                            },
                            vidajuridica: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        historico_prisao: { type: 'boolean' },
                                        motivo_prisao: { type: 'string' },
                                        processos: { type: 'boolean' },
                                        cidade_processo: { type: 'string' },
                                        estado_processo: { type: 'string' },
                                        uso_tornozeleira: { type: 'boolean' },
                                        informou_central: { type: 'boolean' },
                                        cumpriu_pena: { type: 'boolean' },
                                        situacao_legal: { type: 'boolean' },
                                        motivo_situacao_legal: { type: 'string' }
                                    }
                                }
                            },
                            substancia: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        uso_alcool: { type: 'boolean' },
                                        idade_alcool: { type: 'number' },
                                        motivo_alcool: { type: 'string' },
                                        uso_tabaco: { type: 'boolean' },
                                        idade_tabaco: { type: 'number' },
                                        motivo_tabaco: { type: 'string' },
                                        outras_drogas: { type: 'string' },
                                        motivo_outras_drogas: { type: 'string' },
                                        principal_substancia: { type: 'string' }
                                    }
                                }
                            },
                            social: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        situacao_rua: { type: 'boolean' },
                                        tempo_rua: { type: 'string' },
                                        motivo_rua: { type: 'string' },
                                        chegada_missao_vida: { 'type': 'string' },
                                        sentimentos: { type: 'string' },
                                        objetivos: { type: 'string' },
                                        outros_centros: { type: 'boolean' },
                                        nome_outros_centros: { type: 'string' },
                                        tempo_outros_centros: { type: 'string' },
                                        motivo_saida_outros_centros: { type: 'string' }
                                    }
                                }
                            },
                            termoguarda: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        autorizacao_guarda: { type: 'boolean' },
                                        documentos_guardados: { type: 'string' },
                                        descricao_carteira: { type: 'string' },
                                        recurso_especie: { type: 'number' },
                                        aparelho_celular: { type: 'string' },
                                        outros_objetos: { type: 'string' }
                                    }
                                }
                            },
                            termoresponsabilidade: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        pdf_termo_responsabilidade: { type: 'string', contentEncoding: 'base64' }
                                    }
                                }
                            },
                            termoalta: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        pdf_termo_alta: { type: 'string', contentEncoding: 'base64' }
                                    }
                                }
                            },
                        }
                },
                404: {
                    description: 'Acolhido não encontrado',
                    type: 'object',
                    properties: {
                        message: { type: 'string' }
                    }
                },
                400: {
                    description: 'Erro ao obter acolhido',
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        preHandler: [fastify.authenticate],
        handler: acolhidoController.getAcolhidoById
    });
}


module.exports = acolhidoRoutes;