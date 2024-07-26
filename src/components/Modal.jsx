function Modal(){
    return(
        <>
            <div className="modal fade" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content theme-color border-danger text-white px-1">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLiveLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <p>Are you sure you want to delete , this action cannot be undone</p>
      </div>
      <div className="my-2  px-2 w-100 d-flex gap-1">
        <button type="button" className="btn btn-secondary w-50" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-danger w-50">Delete</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Modal;