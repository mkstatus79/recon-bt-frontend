import React from 'react'
import { useForm } from 'react-hook-form'
import FormularioLight from '../components/FormularioLight'
import api from '../lib/api'

export default function SMLCPage() {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data: any) => {
    try {
      const response = await api.post('/smlc', data)
      alert('Carta SMLC gerada com sucesso!')
    } catch (error) {
      alert('Erro ao gerar carta SMLC')
    }
  }

  return (
    <FormularioLight 
      title="CARTA DE OPÇÃO SMLC"
      subtitle="Anexo VI - RECON-BT 2026"
      onSubmit={onSubmit}
    >
      <div className="aviso-light">
        <p>Sistema de Medição e Leitura Centralizada</p>
      </div>

      <div className="secao-form">
        <h3>1. IDENTIFICAÇÃO</h3>
        
        <div className="campo-light campo-obrigatorio">
          <label>Nome do Interessado</label>
          <input type="text" {...register('interessado', { required: true })} />
        </div>
        
        <div className="campo-light campo-obrigatorio">
          <label>Empreendimento</label>
          <input type="text" {...register('empreendimento', { required: true })} />
        </div>
        
        <div className="campo-light campo-obrigatorio">
          <label>Endereço</label>
          <input type="text" {...register('endereco', { required: true })} />
        </div>
      </div>

      <div className="secao-form">
        <h3>2. RESPONSÁVEL TÉCNICO</h3>
        
        <div className="grid-2">
          <div className="campo-light campo-obrigatorio">
            <label>Nome</label>
            <input type="text" {...register('responsavel_tecnico', { required: true })} />
          </div>
          <div className="campo-light campo-obrigatorio">
            <label>CREA/CAU</label>
            <input type="text" {...register('crea', { required: true })} />
          </div>
        </div>
      </div>

      <div className="secao-form">
        <h3>3. RESPONSÁVEL PELO PAGAMENTO</h3>
        
        <div className="campo-light campo-obrigatorio">
          <label>Nome/Empresa</label>
          <input type="text" {...register('responsavel_pagamento', { required: true })} />
        </div>
        
        <div className="grid-2">
          <div className="campo-light">
            <label>CPF/CNPJ</label>
            <input type="text" {...register('cpf_cnpj')} />
          </div>
        </div>
      </div>

      <div className="aviso-importante">
        <p><strong>DECLARAÇÃO:</strong></p>
        <p>Declaro estar ciente de que se trata de um sistema não convencional, sendo que a diferença entre os custos totais do SMLC em relação à medição padrão convencional correrá por minha conta.</p>
      </div>

      <div className="grid-2">
        <div className="campo-light">
          <label>Local</label>
          <input type="text" value="Rio de Janeiro" readOnly />
        </div>
        <div className="campo-light">
          <label>Data</label>
          <input type="date" {...register('data')} />
        </div>
      </div>
    </FormularioLight>
  )
}
