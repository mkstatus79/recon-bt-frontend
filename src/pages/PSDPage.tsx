import React from 'react'
import { useForm } from 'react-hook-form'
import FormularioLight from '../components/FormularioLight'
import api from '../lib/api'

export default function PSDPage() {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data: any) => {
    try {
      const response = await api.post('/psd', data)
      alert('PSD enviado com sucesso!')
    } catch (error) {
      alert('Erro ao enviar PSD')
    }
  }

  return (
    <FormularioLight 
      title="PEDIDO DE SERVIÇOS DIVERSOS - PSD"
      subtitle="Anexo VI - RECON-BT 2026"
      onSubmit={onSubmit}
    >
      <div className="secao-form">
        <h3>1. IDENTIFICAÇÃO DO CONSUMIDOR</h3>
        
        <div className="campo-light campo-obrigatorio">
          <label>UC (Unidade Consumidora)</label>
          <input type="text" {...register('uc', { required: true })} />
        </div>
        
        <div className="grid-2">
          <div className="campo-light campo-obrigatorio">
            <label>Nome/Razão Social</label>
            <input type="text" {...register('cliente_nome', { required: true })} />
          </div>
          <div className="campo-light campo-obrigatorio">
            <label>CPF/CNPJ</label>
            <input type="text" {...register('cliente_cpf_cnpj', { required: true })} />
          </div>
        </div>
      </div>

      <div className="secao-form">
        <h3>2. TIPO DE SERVIÇO</h3>
        
        <div className="grid-2">
          <div className="campo-light">
            <label>
              <input type="radio" value="AUMENTO_CARGA" {...register('servico')} /> 
              Aumento de Carga
            </label>
          </div>
          <div className="campo-light">
            <label>
              <input type="radio" value="DIMINUICAO_CARGA" {...register('servico')} /> 
              Diminuição de Carga
            </label>
          </div>
          <div className="campo-light">
            <label>
              <input type="radio" value="RELOCACAO" {...register('servico')} /> 
              Relocação de Medidor
            </label>
          </div>
          <div className="campo-light">
            <label>
              <input type="radio" value="SUBSTITUICAO" {...register('servico')} /> 
              Substituição de Equipamento
            </label>
          </div>
        </div>
      </div>

      <div className="secao-form">
        <h3>3. DADOS DA ALTERAÇÃO</h3>
        
        <table className="tabela-light">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Situação Atual</th>
              <th>Situação Pretendida</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carga (kVA)</td>
              <td><input type="number" {...register('carga_atual')} /></td>
              <td><input type="number" {...register('carga_pretendida')} /></td>
            </tr>
            <tr>
              <td>Número de Fases</td>
              <td>
                <select {...register('fases_atual')}>
                  <option value="1">1 fase</option>
                  <option value="2">2 fases</option>
                  <option value="3">3 fases</option>
                </select>
              </td>
              <td>
                <select {...register('fases_pretendida')}>
                  <option value="1">1 fase</option>
                  <option value="2">2 fases</option>
                  <option value="3">3 fases</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="aviso-light aviso-importante">
        <strong>ATENÇÃO:</strong> Para aumento de carga, verificar necessidade de projeto aprovado (carga >76kVA).
      </div>
    </FormularioLight>
  )
}
