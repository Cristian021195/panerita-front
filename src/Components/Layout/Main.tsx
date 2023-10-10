interface IMainContent {
    title:string,
    operationBar?: React.ReactNode
    operationView?: React.ReactNode
    operationResume?: React.ReactNode
    children?: React.ReactNode
}
export const Main = ({title, children, operationBar, operationView, operationResume}:IMainContent) => {
  return (
    <main className="m-2 row">
        <h1 className="text-center main-title">{title}</h1>
        <section className="mx-auto col-lg-10 col-xl-10 col-md-12 col-sm-12 col-12">
            {operationBar}
            {operationView}
            {operationResume}
        </section>
      </main>
  )
}
