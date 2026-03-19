import React from 'react'
import { useForm } from 'react-hook-form'
import FormularioLight from '../components/FormularioLight'
import api from '../lib/api'

export default function TermoGeradorPage() {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data: any) => {
    try {
      const response = await api.post('/termo-gerador', data)
      alert('Termo de gerador gerado com sucesso!')
    } catch (error) {
      alert('Erro ao gerar termo')
    }
  }

  return (
    <FormularioLight 
      title="TERMO DE RESPONSABILIDADE - GERADOR"
      subtitle="Anexo VII - RECON-BT 2026"
      onSubmit={onSubmit}
    >
      <div className="aviso-importante">
        <p><strong>GERAÇÃO PARTICULAR DE EMERGÊNCIA</strong></p>
        <p>Este documento é obrigatório para instalação de gerador sem paralelismo com a rede.</p>
      </div>

      <div className="secao-form">
        <h3>1. EMPRESA / RESPONSÁVEL TÉCNICO</h3>
        
        <div className="grid-2">
          <div className="campo-light campo-obrigatorio">
            <label>Empresa</label>
            <input type="text" {...register('empresa', { required: true })} />
          </div>
          <div className="campo-light campo-obrigatorio">
            <label>CNPJ</label>
            <input type="text" {...register('cnpj', { required: true })} />
          </div>
        </div>

        <div className="grid-2">
          <div className="campo-light campo-obrigatorio">
            <label>Profissional Responsável</label>
            <input type="text" {...register('profissional', { required: true })} />
          </div>
          <div className="campo-light campo-obrigatorio">
            <label>Registro CREA/CAU/CFT</label>
            <input type="text" {...register('registro', { required: true })} />
          </div>
        </div>
      </div>

      <div className="secao-form">
        <h3>2. CONSUMIDOR</h3>
        
        <div className="grid-2">
          <div className="campo-light campo-obrigatorio">
            <label>Nome</label>
            <input type="text" {...register('consumidor', { required: true })} />
          </div>
          <div className="campo-light campo-obrigatorio">
            <label>CPF/CNPJ</label>
            <input type="text" {...register('cpf_consumidor', { required: true })} />
          </div>
        </div>

        <div className="campo-light campo-obrigatorio">
          <label>Endereço da Instalação</label>
          <input type="text" {...register('endereco', { required: true })} />
        </div>
      </div>

      <div className="secao-form">
        <h3>3. ESPECIFICAÇÕES DO GERADOR</h3>
        
        <table className="tabela-light">
          <tbody>
            <tr>
              <td>Fabricante</td>
              <td><input type="text" {...register('fabricante')} /></td>
            </tr>
            <tr>
              <td>Modelo</td>
              <td><input type="text" {...register('modelo')} /></td>
            </tr>
            <tr>
              <td>Potência (kVA)</td>
              <td><input type="number" {...register('potencia')} /></td>
            </tr>
            <tr>
              <td>Tensão (V)</td>
              <td>
                <select {...register('tensao')}>
                  <option value="220/127">220/127V</option>
                  <option value="380/220">380/220V</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Tipo de Chave de Transferência</td>
              <td>
                <select {...register('chave')}>
                  <option value="MANUAL">Manual com intertravamento</option>
                  <option value="AUTOMATICA">Automática (TS)</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="aviso-importante">
        <p><strong>DECLARAÇÃO DE RESPONSABILIDADE:</strong></p>
        <p>Declaramos que o sistema foi projetado para NÃO energizar o alimentador da Light quando este estiver fora de operação, assumindo total responsabilidade civil e criminal por acidentes decorrentes de falhas no projeto ou operação inadequada.</p>
      </div>
    </FormularioLight>
  )
}
