import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price}) => {
    return (
        <div className="container mb-3">
        <div className="d-flex align-items-center">
        <img className="img-fluid rounded m-2" src={`${process.env.PUBLIC_URL}/images/${imageName}`} alt= "Food item" width="125" height="125"/>
        <div>
            <h4 className="mt-0">{title}</h4>
            <p>{description}</p>
            <div className="row">
            <div className="col">
                <p>{price}</p>
            </div>
            <div className="col">
                <button className="btn">Add</button>
            </div>
            </div>
        </div>
        </div>
    </div>
);
};

export default MenuItem;