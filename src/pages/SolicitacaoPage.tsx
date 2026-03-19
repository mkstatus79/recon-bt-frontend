import React from 'react'
import { useForm } from 'react-hook-form'
import FormularioLight from '../components/FormularioLight'
import api from '../lib/api'

export default function SolicitacaoPage() {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data: any) => {
    try {
      const response = await api.post('/solicitacao', data)
      alert('Solicitação enviada com sucesso!')
      console.log(response.data)
    } catch (error) {
      alert('Erro ao enviar solicitação. Tente novamente.')
    }
  }

  return (
    <FormularioLight 
      title="SOLICITAÇÃO DE LIGAÇÃO NOVA"
      subtitle="Preencha os campos abaixo conforme documento oficial Light"
      onSubmit={onSubmit}
    >
      <div className="secao">
        <h3>1. IDENTIFICAÇÃO DO CONSUMIDOR</h3>
        
        <div className="campo-light campo-obrigatorio">
          <label>Nome/Razão Social</label>
          <input type="text" {...register('cliente_nome', { required: true })} />
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="campo-light campo-obrigatorio">
            <label>CPF/CNPJ</label>
            <input type="text" {...register('cliente_cpf_cnpj', { required: true })} />
          </div>
          <div className="campo-light">
            <label>Telefone</label>
            <input type="text" {...register('cliente_telefone')} />
          </div>
        </div>
      </div>

      <div className="secao">
        <h3>2. ENDEREÇO DA UNIDADE CONSUMIDORA</h3>
        
        <div className="campo-light campo-obrigatorio">
          <label>Logradouro</label>
          <input type="text" {...register('endereco_logradouro', { required: true })} />
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="campo-light campo-obrigatorio">
            <label>Número</label>
            <input type="text" {...register('endereco_numero', { required: true })} />
          </div>
          <div className="campo-light">
            <label>Complemento</label>
            <input type="text" {...register('endereco_complemento')} />
          </div>
          <div className="campo-light campo-obrigatorio">
            <label>CEP</label>
            <input type="text" {...register('endereco_cep', { required: true })} />
          </div>
        </div>
      </div>

      <div className="secao">
        <h3>3. CARACTERÍSTICAS DA INSTALAÇÃO</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="campo-light campo-obrigatorio">
            <label>Tipo de Entrada</label>
            <select {...register('tipo_entrada', { required: true })}>
              <option value="INDIVIDUAL">Individual</option>
              <option value="COLETIVA">Coletiva</option>
            </select>
          </div>
          <div className="campo-light campo-obrigatorio">
            <label>Número de Unidades</label>
            <input type="number" {...register('num_ucs', { required: true })} />
          </div>
        </div>
      </div>

      <div className="bg-light-cinza p-4 mt-8 text-sm border-l-4 border-light-alerta">
        <strong>ATENÇÃO:</strong> Todos os campos com * são obrigatórios.
      </div>
    </FormularioLight>
  )
}
