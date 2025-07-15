import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../../assets/assets'
import { addCategory } from '../../service/CategoryService';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-hot-toast';

const CategoryForm = () => {

    const {setCategories, categories} = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(false);

    const [data, setData] = useState({
        name: "",
        description: "",
        bgColor: "#2c2c2c"
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((data) => ({...data, [name]: value }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (!image) {
            toast.error("Please select an image");
            return;
        }
        setLoading(true);
        const formData = new FormData();
        formData.append('category', JSON.stringify(data));
        formData.append('file', image);
        try {
            const response = await addCategory(formData);
            if (response.status === 201) {
                setCategories([...categories, response.data]);
                toast.success("Category added successfully");
                setData({
                    name: "",
                    description: "",
                    bgColor: "#2c2c2c"
                });
                setImage(null);
            }
        }
        catch (error) {
            console.error("Error adding category:", error);
            toast.error("Failed to add category");
        } finally {
            setLoading(false);
        }
    }

  return (
    <div className="mx-2 mt-2">
        <div className="row">
            <div className="card col-md-12 form-container">
                <div className="card-body">
                    <form onSubmit={onSubmitHandler}>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Upload Image <br />
                                <img src={image ? URL.createObjectURL(image) :  assets.upload} alt="" width={48} />
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
                                placeholder="Enter Category Name"
                                onChange={onChangeHandler}
                                value={data.name} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Description</label>
                            <textarea 
                                rows="5" 
                                className="form-control" 
                                id="description" 
                                name="description"
                                placeholder="Enter Category Description" 
                                onChange={onChangeHandler}
                                value={data.description}/>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="bgColor" className="form-label">Background Color</label>
                            <br />
                            <input 
                                type="color" 
                                id="bgColor" 
                                name="bgColor"
                                onChange={onChangeHandler}
                                value={data.bgColor}
                                placeholder="#fffff" />
                        </div>
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="btn btn-primary w-100">{loading ? "Loading..." : "Submit"}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CategoryForm;