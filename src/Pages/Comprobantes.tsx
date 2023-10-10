import { Main, OperationBar, OperationResume, OperationView } from '../Components/Layout';

const title = "Comprobantes";

export const Comprobantes = () => {
  return (
    <Main title={title} 
        operationBar={<OperationBar/>}
        operationView={<OperationView/>}
        operationResume={<OperationResume/>}>
        <p>asd</p>
    </Main>
  )
}
