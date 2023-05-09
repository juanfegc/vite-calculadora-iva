import { useState } from 'react'
import { Display } from './Display'

export function Calculator() {
  const [precio, setPrecio] = useState({ PVPCONIVA: '', PVPSINIVA: '' })
  const [iva, setIVA] = useState('10')

  //LOGICA
  const calcularPVPCONIVA = num => {
    const pvp = iva === '10' ? (num / 1.1).toFixed(2) : (num / 1.21).toFixed(2)
    return pvp
  }
  const calcularPVPSINIVA = num => {
    const pvp_sin =
      iva === '10' ? (num * 1.1).toFixed(2) : (num * 1.21).toFixed(2)
    return pvp_sin
  }

  //EVENTOS
  const handlePrecioConIvaChange = event => {
    setPrecio({
      PVPCONIVA: event.target.value,
      PVPSINIVA: calcularPVPCONIVA(event.target.value)
    })
  }

  const handlePrecioSinIvaChange = event => {
    setPrecio({
      PVPCONIVA: calcularPVPSINIVA(event.target.value),
      PVPSINIVA: event.target.value
    })
  }

  const handleChangeSelect = event => {
    setIVA(event.target.value)
    setPrecio({
      PVPCONIVA: '',
      PVPSINIVA: ''
    })
  }

  const handleFocusInput = event => {
    //console.log({event})
    console.log('reset', event.target.name)
    event.target.name === 'PVP CON IVA'
      ? setPrecio({ ...precio, PVPCONIVA: '' })
      : setPrecio({ ...precio, PVPSINIVA: '' })
  }

  //RENDER
  return (
    <>
      <Display
        valueDisplay={precio.PVPCONIVA}
        handleDisplayChange={handlePrecioConIvaChange}
        handleDisplayFocus={handleFocusInput}
        labelDisplay='PVP CON IVA'
      />
      <Display
        valueDisplay={precio.PVPSINIVA}
        handleDisplayChange={handlePrecioSinIvaChange}
        handleDisplayFocus={handleFocusInput}
        labelDisplay='PVP SIN IVA'
      />
      <select value={iva} onChange={handleChangeSelect} className='botonIVA'>
        <option value='10'>IVA 10%</option>
        <option value='21'>IVA 21%</option>
      </select>
    </>
  )
}
