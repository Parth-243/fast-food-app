import React, { useState } from "react";
import "./FastFoodCatalog.css";

function FastFoodCatalog() {
  const [category, setCategory] = useState({ name: "", description: "" });
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState({});

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevCategory) => ({ ...prevCategory, [name]: value }));
  };

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    if (category.name && category.description) {
      const newCategory = { ...category, id: Date.now() };
      setCategories([...categories, newCategory]);
      setCategory({ name: "", description: "" });
    }
  };

  const handleFoodItemChange = (e, categoryId) => {
    const { name, value } = e.target;
    setItems((prevItems) => ({
      ...prevItems,
      [categoryId]: {
        ...prevItems[categoryId],
        [name]: value,
      },
    }));
  };

  const handleImageChange = (e, categoryId) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setItems((prevItems) => ({
          ...prevItems,
          [categoryId]: {
            ...prevItems[categoryId],
            image: reader.result,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFoodItemSubmit = (e, categoryId) => {
    e.preventDefault();
    if (
      items[categoryId] &&
      items[categoryId].name &&
      items[categoryId].description &&
      items[categoryId].price
    ) {
      const newItem = { ...items[categoryId] };
      setItems((prevItems) => ({
        ...prevItems,
        [categoryId]: {
          ...prevItems[categoryId],
          list: [...(prevItems[categoryId].list || []), newItem],
        },
      }));
    }
  };

  const backgroundImage = 'url("/background-image.jpg")'; // Update with the correct path

  return (
    <div className="app-container">
      <header className="header">
        <h1>Fast Food Catalog Builder</h1>
        <nav className="navbars">
          <ul>
            <li>
              <a href="#catalog">Catalog</a>
            </li>
            <li>
              <a href="#settings">Settings</a>
            </li>
            <li>
              <a href="#logout">Logout</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content-container">
        <div className="sidebar">
          <div className="sidebar-title">Menu</div>
          <ul>
            <li>
              <a href="#catalog">Your Catalog</a>
            </li>
            <li>
              <a href="#feedback">Customer Feedback</a>
            </li>
            <li>
              <a href="#payment">Payment History</a>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="form-container">
            <h2>Add Food Category</h2>
            <form onSubmit={handleCategorySubmit}>
              <div className="form-group">
                <label>Category Name</label>
                <input
                  type="text"
                  placeholder="Enter category name"
                  name="name"
                  value={category.name}
                  onChange={handleCategoryChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  rows={3}
                  placeholder="Enter description"
                  name="description"
                  value={category.description}
                  onChange={handleCategoryChange}
                  required
                />
              </div>
              <button type="submit" className="btn-primary">
                Add Category
              </button>
            </form>
          </div>
          <div className="categories-container">
            <h2 id="catalog">Your Food Categories</h2>
            {categories.map((category) => (
              <div key={category.id} className="category">
                <div className="category-header">{category.name}</div>
                <div className="category-body">
                  <p>{category.description}</p>
                  <form onSubmit={(e) => handleFoodItemSubmit(e, category.id)}>
                    <div className="form-group">
                      <label>Food Name</label>
                      <input
                        type="text"
                        placeholder="Enter food name"
                        name="name"
                        value={items[category.id]?.name || ""}
                        onChange={(e) => handleFoodItemChange(e, category.id)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        rows={2}
                        placeholder="Enter description"
                        name="description"
                        value={items[category.id]?.description || ""}
                        onChange={(e) => handleFoodItemChange(e, category.id)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Price</label>
                      <input
                        type="number"
                        placeholder="Enter price"
                        name="price"
                        value={items[category.id]?.price || ""}
                        onChange={(e) => handleFoodItemChange(e, category.id)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Upload Image</label>
                      <input
                        type="file"
                        onChange={(e) => handleImageChange(e, category.id)}
                      />
                    </div>
                    <button type="submit" className="btn-success">
                      Add Item
                    </button>
                  </form>
                  <div className="items-list">
                    {(items[category.id]?.list || []).map((item, index) => (
                      <div key={index} className="item-card">
                        <div className="item-card-body">
                          <div>
                            <strong>{item.name}</strong>
                            <p>{item.description}</p>
                            <p>
                              <strong>Price:</strong> ${item.price}
                            </p>
                          </div>
                          {item.image && (
                            <img src={item.image} alt={item.name} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FastFoodCatalog;
