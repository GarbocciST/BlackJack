
export const AlertPage = ({valuePlayer, valueBank}) => {
  return (
    <>
    {
      (valuePlayer > 21) ?
      <div className="alert alert-danger d-flex justify-content-center" role="alert">Derrota</div>
      : (valueBank > 21) ? 
      <div className="alert alert-success d-flex justify-content-center" role="alert">Victoria</div>
      : (valueBank > valuePlayer || valueBank === valuePlayer) ?
      <div className="alert alert-danger d-flex justify-content-center" role="alert">Derrota</div> 
      :
      <div className="alert alert-success d-flex justify-content-center" role="alert">Victoria</div>     
        
    }
    </>
  )
}
