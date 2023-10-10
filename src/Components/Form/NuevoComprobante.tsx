export const NuevoComprobante = () => {
  return (
    <form>
        <label htmlFor="cliente_t">Cliente: </label>
        <input type="text" name="cliente_t" id="cliente_t"/>
        <label htmlFor="cliente_s">Cliente: (tipo / zona)</label>
        <select name="cliente" id="cliente">
            <option value="jorgito">jorgito inc (mayorista - tucuman)</option>
        </select>

        <label htmlFor="vendedor">
            <option value="cristiangramajo015@gmail.com">
                Nombre (tipo - zona)
            </option>
        </label>

        <div>
            <button>Generar</button>
            <button>Agregar Productos</button>
            <button>Nuevo Cliente</button>
        </div>

    </form>
  )
}
