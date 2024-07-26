function Spinnersmall(){
    return (
      <>
        <div className="login-container">
        <div className="d-flex flex-row align-items-center justify-content-center">
          <div className="spinner-grow text-success fs-6" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success fs-6" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success fs-6" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success fs-6" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success fs-6" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success fs-6" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        </div>
      </>
    );
}
export default Spinnersmall;

export function Spinnnersingle(props){
   return(
    <>
    <div className={`spinner-border ${props.color}`} role="status">
     <span className="visually-hidden">Loading...</span>
     </div>
    </>
   )
}