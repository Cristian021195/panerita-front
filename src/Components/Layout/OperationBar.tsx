export const OperationBar = () => {
  return (
    <form className="operation-bar d-flex justify-content-between p-2">
        <div className="operation-space">
            <div className="d-flex">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <div>
                <div>loader</div>
            </div>
            <label htmlFor="cliente">Nombre Cliente</label>
            <select name="estado" id="estado">
                <option value="pagado">pagado</option>
                <option value="pagado">pendiente</option>
                <option value="pagado">deudor</option>
            </select>
            <div>
                <button>Nuevo Comprobante</button>
                <button>Eliminar Pagados</button>
            </div>
        </div>
    </form>
  )
}
