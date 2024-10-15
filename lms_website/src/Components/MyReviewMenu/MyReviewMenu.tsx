// import React from 'react';
// import './MyReviewMenu.css'; // Import custom CSS for additional styling
// import Header from '../Header/Header';
// import Profile from '../Profile/Profile';
// import ReviewCard from '../ReviewCard/ReviewCard';

// const App: React.FC = () => {
//     const reviews = [
//         {
//           courseName: "Beginner’s Guide to Design",
//           rating: 4,
//           reviewText:
//             "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
//           reviewerName: "John Doe",
//           optionsIconSrc: "./assets/icon-horizontal-dots.svg",
//         },
//         {
//             courseName: "Digital Marketing 101",
//             rating: 1,
//             reviewText:
//               "It was a good introduction to digital marketing, though I felt it could have gone deeper in certain areas. Overall, I still learned a lot.",
//             reviewerName: "Alex Johnson",
//             optionsIconSrc: "./assets/icon-horizontal-dots.svg",
//           },
//         {
//           courseName: "Advanced Web Development",
//           rating: 5,
//           reviewText:
//             "The course was fantastic! It really helped me grasp advanced JavaScript concepts. The assignments were challenging yet extremely rewarding.",
//           reviewerName: "Jane Smith",
//           optionsIconSrc: "./assets/icon-horizontal-dots.svg",
//         },
//         {
//           courseName: "Digital Marketing 101",
//           rating: 3,
//           reviewText:
//             "It was a good introduction to digital marketing, though I felt it could have gone deeper in certain areas. Overall, I still learned a lot.",
//           reviewerName: "Alex Johnson",
//           optionsIconSrc: "./assets/icon-horizontal-dots.svg",
//         },
//       ];
//   return (
//     <div className="app">
 
//       <Header/>
      
//       <main className="main-content">
 
//         <Profile/>
        
//         <section className="reviews-section">
//           <header className="section-header">
//             <h2>Reviews (12)</h2>
//           </header>

//            <div className="review-list">
//     {reviews.map((review, index) => (
//       <ReviewCard
//         key={index}
//         courseName={review.courseName}
//         rating={review.rating}
//         reviewText={review.reviewText}
//         reviewerName={review.reviewerName}
//         optionsIconSrc={review.optionsIconSrc}
//       />
//     ))}
//   </div>

//           <Pagination />
//         </section>
//       </main>

//     </div>
//   );
// };


// const Pagination: React.FC = () => (
//   <div className="pagination">
//     <button className="pagination-button">
//       <img src="./assets/icon-left-chevron.svg" alt="Previous" />
//     </button>
//     <button className="pagination-button active">1</button>
//     <button className="pagination-button">2</button>
//     <button className="pagination-button">3</button>
//     <button className="pagination-button">
//       <img src="./assets/chevron-right.svg" alt="Next" />
//     </button>
//   </div>
// );

// export default App;
import React from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import ReviewCard from '../ReviewCard/ReviewCard';
import Pagination from '../Pagination/Pagination';

const MyReviewMenu: React.FC = () => {
    const reviews = [
        {
            courseName: "Beginner’s Guide to Design",
            rating: 1,
            reviewText:
                "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
            reviewerName: "John Doe",
            optionsIconSrc: "./assets/icon-horizontal-dots.svg",
        },
        {
            courseName: "Digital Marketing 101",
            rating: 1,
            reviewText:
                "It was a good introduction to digital marketing, though I felt it could have gone deeper in certain areas. Overall, I still learned a lot.",
            reviewerName: "Alex Johnson",
            optionsIconSrc: "./assets/icon-horizontal-dots.svg",
        },
        {
            courseName: "Advanced Web Development",
            rating: 5,
            reviewText:
                "The course was fantastic! It really helped me grasp advanced JavaScript concepts. The assignments were challenging yet extremely rewarding.",
            reviewerName: "Jane Smith",
            optionsIconSrc: "./assets/icon-horizontal-dots.svg",
        },
        {
            courseName: "Digital Marketing 101",
            rating: 2,
            reviewText:
                "It was a good introduction to digital marketing, though I felt it could have gone deeper in certain areas. Overall, I still learned a lot.",
            reviewerName: "Alex Johnson",
            optionsIconSrc: "./assets/icon-horizontal-dots.svg",
        },
    ];
    
    return (
        <div className="font-inter">
            <Header />

            <main className="flex p-5 md:p-10">
                <Profile />
                
                <section className="flex-1">
                    <header className="mb-5">
                        <h2 className="text-lg font-semibold">Reviews (12)</h2>
                    </header>

                    <div className="flex flex-col gap-4">
                        {reviews.map((review, index) => (
                            <ReviewCard
                                key={index}
                                courseName={review.courseName}
                                rating={review.rating}
                                reviewText={review.reviewText}
                                reviewerName={review.reviewerName}
                                optionsIconSrc={review.optionsIconSrc}
                            />
                        ))}
                    </div>

                    <Pagination/>
                </section>
            </main>
        </div>
    );
};

export default MyReviewMenu;
