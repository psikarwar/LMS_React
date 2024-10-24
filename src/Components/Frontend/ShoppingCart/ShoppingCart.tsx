// src/Components/ShoppingCart/ShoppingCart.tsx
import React from 'react';
// import Header from '../../Header/Header'; // Adjust the import path if necessary
import ShoppingCartMenu from './ShoppingCartMenu/ShoppingCartMenu'; // Import the ShoppingCartMenu
import ShoppingCartImg from './ShoppingCartImg/ShoppingCartImg'; // Import the ShoppingCartImg component
import ShoppingOrder from './ShoppingOrder/ShoppingOrder'; // Import the ShoppingOrder component
import ShoppingButton from './ShoppingButton/ShoppingButton'; // Import the ShoppingButton component
// import Footer from '../../Footer/Footer'; // Import the Footer component

const ShoppingCart: React.FC = () => {
  // Define the breadcrumb items
  const breadcrumbItems = [
    { label: 'Categories' },
    { label: 'Details' },
    { label: 'Shopping Cart', isActive: true },
  ];

  // Dummy data for course cards
  const courseData = [
    {
      imageSrc: 'image3img', // Replace with actual image paths
      title: 'Course Title 1',
      instructor: 'Instructor 1',
      rating: 4.5,
      ratingCount: 10,
      duration: '2h 30m',
      price: '$50',
      onClickSave: () => alert('Saved Course 1!'),
      onClickRemove: () => alert('Removed Course 1!'),
    },
    {
      imageSrc: 'image3img', // Replace with actual image paths
      title: 'Course Title 2',
      instructor: 'Instructor 2',
      rating: 4.0,
      ratingCount: 20,
      duration: '1h 45m',
      price: '$40',
      onClickSave: () => alert('Saved Course 2!'),
      onClickRemove: () => alert('Removed Course 2!'),
    },
    {
      imageSrc: 'image3img', // Replace with actual image paths
      title: 'Course Title 3',
      instructor: 'Instructor 3',
      rating: 4.2,
      ratingCount: 15,
      duration: '3h 0m',
      price: '$60',
      onClickSave: () => alert('Saved Course 3!'),
      onClickRemove: () => alert('Removed Course 3!'),
    },
    // Add more course data as needed
  ];

  // Dummy data for order details
  const orderDetails = {
    price: '$90',
    discount: '$10',
    tax: '$5',
    total: '$85',
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Render Header component */}
      {/* <Header /> */}

      {/* Render ShoppingCartMenu component */}
      <ShoppingCartMenu title="Shopping Cart" items={breadcrumbItems} />

      <main className="flex flex-col md:flex-row justify-between items-start flex-1 p-4">
        <div className="flex flex-col gap-4 w-full md:w-2/3">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Shopping Cart</h1>
          {/* Render course cards */}
          {courseData.map((course, index) => (
            <ShoppingCartImg
              key={index}
              imageSrc={course.imageSrc}
              title={course.title}
              instructor={course.instructor}
              rating={course.rating}
              ratingCount={course.ratingCount}
              duration={course.duration}
              price={course.price}
              onClickSave={course.onClickSave}
              onClickRemove={course.onClickRemove}
            />
          ))}
        </div>
        <div className="w-full md:w-1/3">
          <ShoppingOrder
            price={orderDetails.price}
            discount={orderDetails.discount}
            tax={orderDetails.tax}
            total={orderDetails.total}
          />
          <ShoppingButton onClick={() => alert('Proceeding to checkout...')} />
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default ShoppingCart;
