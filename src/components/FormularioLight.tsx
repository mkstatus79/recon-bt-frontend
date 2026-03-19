import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormularioLightProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  onSubmit: SubmitHandler<any>
}

export default function FormularioLight({ 
  title, 
  subtitle, 
  children, 
  onSubmit 
}: FormularioLightProps) {
  const { handleSubmit } = useForm()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="formulario-light">
        <div className="header-light">
          <h1 className="text-2xl font-lightTitle">{title}</h1>
          {subtitle && <p className="text-sm mt-2">{subtitle}</p>}
          <p className="text-xs text-yellow-300 mt-2">
            RECON-BT 2026 - Light Serviços de Eletricidade S/A
          </p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="p-8">
          {children}
          
          <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-light-borda">
            <button 
              type="button" 
              className="btn-light-secondary"
              onClick={() => window.print()}
            >
              IMPRIMIR
            </button>
            <button type="submit" className="btn-light-primary">
              ENVIAR PARA LIGHT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
