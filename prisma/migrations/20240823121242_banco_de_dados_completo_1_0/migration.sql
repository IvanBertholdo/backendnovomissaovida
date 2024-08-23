/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nome_usuario" VARCHAR(50) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Acolhido" (
    "id_acolhido" SERIAL NOT NULL,
    "nome_acolhido" VARCHAR(50) NOT NULL,
    "cidade_natural" VARCHAR(50) NOT NULL,
    "estado_natural" VARCHAR(50) NOT NULL,
    "cidade_origem" VARCHAR(50) NOT NULL,
    "estado_origem" VARCHAR(50) NOT NULL,
    "cpf_acolhido" VARCHAR(20) NOT NULL,
    "rg_acolhido" VARCHAR(20) NOT NULL,
    "orgao_expedidor_rg" VARCHAR(50) NOT NULL,
    "data_nascimento" VARCHAR(11) NOT NULL,
    "declaracao_racial" VARCHAR(50) NOT NULL,
    "filiacao_pai" VARCHAR(50) NOT NULL,
    "filiacao_mae" VARCHAR(50) NOT NULL,
    "endereco_familiar" VARCHAR(50) NOT NULL,
    "telefone" VARCHAR(50) NOT NULL,
    "whatsapp" VARCHAR(50) NOT NULL,
    "escolaridade_acolhido" VARCHAR(50) NOT NULL,
    "profissao_acolhido" VARCHAR(50) NOT NULL,
    "estado_civil_acolhido" VARCHAR(50) NOT NULL,
    "apoio_familiar" BOOLEAN NOT NULL,
    "contato_familiar" VARCHAR(50) NOT NULL,
    "filhos_acolhido" INTEGER NOT NULL,
    "religiao_acolhido" VARCHAR(50) NOT NULL,

    CONSTRAINT "Acolhido_pkey" PRIMARY KEY ("id_acolhido")
);

-- CreateTable
CREATE TABLE "AcolhidoFilho" (
    "id_acolhido_filho" SERIAL NOT NULL,
    "nome_filho" VARCHAR(50) NOT NULL,
    "paga_pensao" BOOLEAN NOT NULL,
    "id_acolhido" INTEGER NOT NULL,

    CONSTRAINT "AcolhidoFilho_pkey" PRIMARY KEY ("id_acolhido_filho")
);

-- CreateTable
CREATE TABLE "DadosSaude" (
    "id_dados_saude" SERIAL NOT NULL,
    "tratamento_psiquiatrico" BOOLEAN NOT NULL,
    "local_tratamento" VARCHAR(50) NOT NULL,
    "lesao_fisica" BOOLEAN NOT NULL,
    "local_lesao_fisica" VARCHAR(255) NOT NULL,
    "doenca_respiratoria" BOOLEAN NOT NULL,
    "nome_doenca_respiratoria" VARCHAR(50) NOT NULL,
    "alergia_alimentar" BOOLEAN NOT NULL,
    "nome_alimento" VARCHAR(50) NOT NULL,
    "alergia_medicamentos" BOOLEAN NOT NULL,
    "nome_alergia_medicamento" VARCHAR(50) NOT NULL,
    "outras_doencas" VARCHAR(50) NOT NULL,
    "tentativa_suicidio" BOOLEAN NOT NULL,
    "automutilacao" BOOLEAN NOT NULL,
    "historico_cancer" VARCHAR(50) NOT NULL,
    "tipo_cancer" VARCHAR(50) NOT NULL,
    "id_acolhido" INTEGER NOT NULL,

    CONSTRAINT "DadosSaude_pkey" PRIMARY KEY ("id_dados_saude")
);

-- CreateTable
CREATE TABLE "EstadoSocial" (
    "id_estado_social" SERIAL NOT NULL,
    "situacao_rua" BOOLEAN NOT NULL,
    "tempo_rua" VARCHAR(50) NOT NULL,
    "motivo_rua" VARCHAR(255) NOT NULL,
    "chegada_missao_vida" VARCHAR(255) NOT NULL,
    "sentimentos" VARCHAR(50) NOT NULL,
    "objetivos" VARCHAR(50) NOT NULL,
    "outros_centros" BOOLEAN NOT NULL,
    "nome_outros_centros" VARCHAR(50) NOT NULL,
    "tempo_outros_centros" VARCHAR(50) NOT NULL,
    "motivo_saida_outros_centros" VARCHAR(50) NOT NULL,
    "id_acolhido" INTEGER NOT NULL,

    CONSTRAINT "EstadoSocial_pkey" PRIMARY KEY ("id_estado_social")
);

-- CreateTable
CREATE TABLE "Medicamento" (
    "id_medicamento" SERIAL NOT NULL,
    "medicamento_psicotropico" BOOLEAN NOT NULL,
    "nome_medicamento" VARCHAR(50) NOT NULL,
    "motivo_uso" VARCHAR(255) NOT NULL,
    "id_acolhido" INTEGER NOT NULL,

    CONSTRAINT "Medicamento_pkey" PRIMARY KEY ("id_medicamento")
);

-- CreateTable
CREATE TABLE "Substancia" (
    "id_substancia" SERIAL NOT NULL,
    "uso_alcool" BOOLEAN NOT NULL,
    "idade_alcool" INTEGER NOT NULL,
    "motivo_alcool" VARCHAR(50) NOT NULL,
    "uso_tabaco" BOOLEAN NOT NULL,
    "idade_tabaco" INTEGER NOT NULL,
    "motivo_tabaco" VARCHAR(255) NOT NULL,
    "outras_drogas" VARCHAR(50) NOT NULL,
    "motivo_outras_drogas" VARCHAR(50) NOT NULL,
    "principal_substancia" VARCHAR(50) NOT NULL,
    "id_acolhido" INTEGER NOT NULL,

    CONSTRAINT "Substancia_pkey" PRIMARY KEY ("id_substancia")
);

-- CreateTable
CREATE TABLE "TermoAlta" (
    "id_termo_alta" SERIAL NOT NULL,
    "pdf_termo_alta" BYTEA,
    "id_acolhido" INTEGER NOT NULL,

    CONSTRAINT "TermoAlta_pkey" PRIMARY KEY ("id_termo_alta")
);

-- CreateTable
CREATE TABLE "TermoGuarda" (
    "id_termo_guarda" SERIAL NOT NULL,
    "autorizacao_guarda" BOOLEAN NOT NULL,
    "documentos_guardados" VARCHAR(50) NOT NULL,
    "descricao_carteira" VARCHAR(255) NOT NULL,
    "recurso_especie" DECIMAL(10,2) NOT NULL,
    "aparelho_celular" VARCHAR(50) NOT NULL,
    "outros_objetos" VARCHAR(50) NOT NULL,
    "id_acolhido" INTEGER NOT NULL,

    CONSTRAINT "TermoGuarda_pkey" PRIMARY KEY ("id_termo_guarda")
);

-- CreateTable
CREATE TABLE "TermoResponsabilidade" (
    "id_termo_responsabilidade" SERIAL NOT NULL,
    "pdf_termo_responsabilidade" BYTEA,
    "id_acolhido" INTEGER NOT NULL,

    CONSTRAINT "TermoResponsabilidade_pkey" PRIMARY KEY ("id_termo_responsabilidade")
);

-- CreateTable
CREATE TABLE "VidaJuridica" (
    "id_vida_juridica" SERIAL NOT NULL,
    "historico_prisao" BOOLEAN NOT NULL,
    "motivo_prisao" VARCHAR(50) NOT NULL,
    "processos" BOOLEAN NOT NULL,
    "cidade_processo" VARCHAR(255) NOT NULL,
    "estado_processo" VARCHAR(50) NOT NULL,
    "uso_tornozeleira" BOOLEAN NOT NULL,
    "informou_central" BOOLEAN NOT NULL,
    "cumpriu_pena" BOOLEAN NOT NULL,
    "situacao_legal" BOOLEAN NOT NULL,
    "motivo_situacao_legal" VARCHAR(50) NOT NULL,
    "id_acolhido" INTEGER NOT NULL,

    CONSTRAINT "VidaJuridica_pkey" PRIMARY KEY ("id_vida_juridica")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Acolhido_cpf_acolhido_key" ON "Acolhido"("cpf_acolhido");

-- CreateIndex
CREATE UNIQUE INDEX "Acolhido_rg_acolhido_key" ON "Acolhido"("rg_acolhido");

-- CreateIndex
CREATE INDEX "AcolhidoFilho_id_acolhido_idx" ON "AcolhidoFilho"("id_acolhido");

-- CreateIndex
CREATE INDEX "DadosSaude_id_acolhido_idx" ON "DadosSaude"("id_acolhido");

-- CreateIndex
CREATE INDEX "EstadoSocial_id_acolhido_idx" ON "EstadoSocial"("id_acolhido");

-- CreateIndex
CREATE INDEX "Medicamento_id_acolhido_idx" ON "Medicamento"("id_acolhido");

-- CreateIndex
CREATE INDEX "Substancia_id_acolhido_idx" ON "Substancia"("id_acolhido");

-- CreateIndex
CREATE INDEX "TermoAlta_id_acolhido_idx" ON "TermoAlta"("id_acolhido");

-- CreateIndex
CREATE INDEX "TermoGuarda_id_acolhido_idx" ON "TermoGuarda"("id_acolhido");

-- CreateIndex
CREATE INDEX "TermoResponsabilidade_id_acolhido_idx" ON "TermoResponsabilidade"("id_acolhido");

-- CreateIndex
CREATE INDEX "VidaJuridica_id_acolhido_idx" ON "VidaJuridica"("id_acolhido");

-- AddForeignKey
ALTER TABLE "AcolhidoFilho" ADD CONSTRAINT "AcolhidoFilho_id_acolhido_fkey" FOREIGN KEY ("id_acolhido") REFERENCES "Acolhido"("id_acolhido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadosSaude" ADD CONSTRAINT "DadosSaude_id_acolhido_fkey" FOREIGN KEY ("id_acolhido") REFERENCES "Acolhido"("id_acolhido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstadoSocial" ADD CONSTRAINT "EstadoSocial_id_acolhido_fkey" FOREIGN KEY ("id_acolhido") REFERENCES "Acolhido"("id_acolhido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medicamento" ADD CONSTRAINT "Medicamento_id_acolhido_fkey" FOREIGN KEY ("id_acolhido") REFERENCES "Acolhido"("id_acolhido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Substancia" ADD CONSTRAINT "Substancia_id_acolhido_fkey" FOREIGN KEY ("id_acolhido") REFERENCES "Acolhido"("id_acolhido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TermoAlta" ADD CONSTRAINT "TermoAlta_id_acolhido_fkey" FOREIGN KEY ("id_acolhido") REFERENCES "Acolhido"("id_acolhido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TermoGuarda" ADD CONSTRAINT "TermoGuarda_id_acolhido_fkey" FOREIGN KEY ("id_acolhido") REFERENCES "Acolhido"("id_acolhido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TermoResponsabilidade" ADD CONSTRAINT "TermoResponsabilidade_id_acolhido_fkey" FOREIGN KEY ("id_acolhido") REFERENCES "Acolhido"("id_acolhido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VidaJuridica" ADD CONSTRAINT "VidaJuridica_id_acolhido_fkey" FOREIGN KEY ("id_acolhido") REFERENCES "Acolhido"("id_acolhido") ON DELETE RESTRICT ON UPDATE CASCADE;
