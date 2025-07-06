const ItemForm = () => {
    return (
        <div className="item-form-container" style={{ height:'100vh', padding: '20px', borderRadius: '8px', overflowY: 'auto', overflowX: 'hidden' }}>
            <h2 className="text-center mb-4">Add New Item</h2>
            <div className="mx-2 mt-2">
                <div className="row">
                    <div className="card col-md-8 form-container">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">
                                        <img src="https://placehold.jp/48x48.png" alt="" width={48} />
                                    </label>
                                    <input type="file" name="image" className="form-control" id="image" hidden />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        name="name"
                                        required
                                        placeholder="Enter Item Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="description" 
                                        name="description"
                                        placeholder="Enter Item Description" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <select className="form-select" id="category" name="category">
                                        <option value="">--Select Category--</option>
                                        <option value="category1">Computer</option>
                                        <option value="category2">Keyboard</option>
                                        <option value="category3">Smart Phone</option>
                                    </select>   
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input 
                                        type="price" 
                                        className="form-control" 
                                        id="price" 
                                        name="price"
                                        placeholder="&#165; 200.00" />
                                </div>
                                <div type="submit" className="btn btn-primary w-100">Save</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}  

export default ItemForm;