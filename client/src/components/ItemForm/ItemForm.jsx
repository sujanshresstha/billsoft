import { useContext, useState } from "react";
import { assets } from '../../assets/assets'
import { AppContext } from "../../context/AppContext";
import { addItem } from "../../service/ItemService"
import toast from "react-hot-toast";

const ItemForm = () => {

    const {categories, setItemsData, itemsData} = useContext(AppContext);
    const [image, setImage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name:"",
        categoryId:"",
        price:"",
        description:""
    });

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((data) => ({ ...data, [name]: value }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("item", JSON.stringify(data));
        formData.append("file", image);
        try {
            if (!image){
                toast.error("Select image");
                return
            }

            const response = await addItem(formData);
            if(response.status === 201){
                setItemsData([...itemsData, response.data]);
                //TODO update the category state
                toast.success("Item added");
                setData({
                    name:"",
                    description:"",
                    price:"",
                    categoryId:""
                })
                setImage(false);
            } else {
                toast.error("Unable to add item");
            }
        } catch (error) {
            console.error(error)
            toast.error("Unable to add item");
        } finally{
            setLoading(false);
        }
    }

    return (
        <div className="item-form-container" style={{ height:'100vh', padding: '20px', borderRadius: '8px', overflowY: 'auto', overflowX: 'hidden' }}>
            <h2 className="text-center mb-4">Add New Item</h2>
            <div className="mx-2 mt-2">
                <div className="row">
                    <div className="card col-md-12 form-container">
                        <div className="card-body">
                            <form onSubmit={onSubmitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label" >
                                        <img src={image ? URL.createObjectURL(image) : assets.upload} alt="" width={48} />
                                    </label>
                                    <input type="file" name="image" className="form-control" id="image" hidden onChange={(e) => setImage(e.target.files[0])}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        name="name"
                                        required
                                        placeholder="Enter Item Name"
                                        onChange={onChangeHandler}
                                        value={data.name} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="label" className="form-label" >Category</label>
                                    <select  className="form-select"  id="categoryId"  name="categoryId" value={data.categoryId} onChange={onChangeHandler} >
                                        <option value="">--Select Category--</option>
                                        {categories.map((category,index) =>(
                                            <option key={index} value={category.categoryId}>{category.name}</option>
                                        ))}
                                    </select>   
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input 
                                        type="price" 
                                        className="form-control" 
                                        id="price" 
                                        name="price"
                                        placeholder="&#165; 200.00"
                                        onChange={onChangeHandler}
                                        value={data.price} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea 
                                        rows="5" 
                                        className="form-control" 
                                        id="description" 
                                        name="description"
                                        placeholder="Enter Item Description"
                                        onChange={onChangeHandler}
                                        value={data.description} />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                    {loading ? "Loading..." : "Save"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}  

export default ItemForm;