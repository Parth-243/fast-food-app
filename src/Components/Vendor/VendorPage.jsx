// VendorPage.jsx
import React from "react";
import "./VendorPage.css"; // Import the external CSS file

const VendorPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault("Your information is Successfuly Submited");
    // Handle form submission logic here
    // event("Your information is Successfuly Submited");
  };

  return (
    <div className="vendor-container">
      {/* <div className="fast-food-logo">
        <img src="./fastfood_logo.png" alt=""/>
      </div> */}
      <div className="vendor-card">
        <h2 className="vendor-title">Fast Food Vendor Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="restaurantName">Restaurant Name</label>
              <input
                type="text"
                id="restaurantName"
                placeholder="Enter restaurant name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactPerson">Contact Person</label>
              <input
                type="text"
                id="contactPerson"
                placeholder="Enter contact person name"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactEmail">Contact Email</label>
              <input
                type="email"
                id="contactEmail"
                placeholder="Enter contact email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactPhoneNumber">Contact Phone Number</label>
              <input
                type="tel"
                id="contactPhoneNumber"
                placeholder="Enter contact phone number"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="restaurantAddress">Restaurant Address</label>
              <input
                type="text"
                id="restaurantAddress"
                placeholder="Enter restaurant address"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="websiteLinks">Website/Social Media Links</label>
              <input
                type="url"
                id="websiteLinks"
                placeholder="Enter website/social media links"
              />
            </div>
            <div className="form-group">
              <label htmlFor="yearsInBusiness">Years in Business</label>
              <input
                type="number"
                id="yearsInBusiness"
                placeholder="Enter number of years in business"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="feedback">Feedback/Reviews</label>
              <textarea
                id="feedback"
                rows={2}
                placeholder="Enter feedback/reviews"
              ></textarea>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="businessLicense">
                Business License/Permit Status
              </label>
              <input
                type="text"
                id="businessLicense"
                placeholder="Enter business license/permit status"
                required
              />
            </div>
          </div>

          <button type="submit" className="vendor-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default VendorPage;
