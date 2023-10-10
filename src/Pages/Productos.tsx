import { Main, OperationBar, OperationResume, OperationView } from '../Components/Layout'
const title = "Productos";
export const Productos = () => {
  return (
    <Main title={title} 
        operationBar={<OperationBar/>}
        operationView={<OperationView/>}
        operationResume={<OperationResume/>}>
        <p>asd</p>
    </Main>
  )
}
