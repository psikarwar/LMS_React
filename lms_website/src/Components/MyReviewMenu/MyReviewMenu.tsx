import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import Pagination from '../Pagination/Pagination';
import option from '../../../../assets/icon-horizontal-dots.svg'
const MyReviewMenu: React.FC = () => {
    const reviews = [
        {
            courseName: "Beginner’s Guide to Design",
            rating: 5,
            reviewText:
                "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
            reviewerName: "John Doe",
            optionsIconSrc: option,
        },
        {
            courseName: "Digital Marketing 101",
            rating: 1,
            reviewText:
                "It was a good introduction to digital marketing, though I felt it could have gone deeper in certain areas. Overall, I still learned a lot.",
            reviewerName: "Alex Johnson",
            optionsIconSrc: option,
        },
        {
            courseName: "Advanced Web Development",
            rating: 5,
            reviewText:
                "The course was fantastic! It really helped me grasp advanced JavaScript concepts. The assignments were challenging yet extremely rewarding.",
            reviewerName: "Jane Smith",
            optionsIconSrc: option,
        },
        {
            courseName: "Digital Marketing 101",
            rating: 2,
            reviewText:
                "It was a good introduction to digital marketing, though I felt it could have gone deeper in certain areas. Overall, I still learned a lot.",
            reviewerName: "Alex Johnson",
            optionsIconSrc: option,
        },
    ];
    
    return (
        <div className="font-inter">
            <main className="flex flex-col p-5 md:p-10">       
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

// import React from 'react';
// import ReviewCard from '../ReviewCard/ReviewCard';
// import Pagination from '../Pagination/Pagination';

// const MyReviewMenu: React.FC = () => {
//     const reviews = [
//         {
//             courseName: "Beginner’s Guide to Design",
//             rating: 4,
//             reviewText:
//                 "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
//             reviewerName: "John Doe",
//             optionsIconSrc: "./assets/icon-horizontal-dots.svg",
//         },
//         {
//             courseName: "Digital Marketing 101",
//             rating: 1,
//             reviewText:
//                 "It was a good introduction to digital marketing, though I felt it could have gone deeper in certain areas. Overall, I still learned a lot.",
//             reviewerName: "Alex Johnson",
//             optionsIconSrc: "./assets/icon-horizontal-dots.svg",
//         },
//         {
//             courseName: "Advanced Web Development",
//             rating: 5,
//             reviewText:
//                 "The course was fantastic! It really helped me grasp advanced JavaScript concepts. The assignments were challenging yet extremely rewarding.",
//             reviewerName: "Jane Smith",
//             optionsIconSrc: "./assets/icon-horizontal-dots.svg",
//         },
//         {
//             courseName: "Digital Marketing 101",
//             rating: 3,
//             reviewText:
//                 "It was a good introduction to digital marketing, though I felt it could have gone deeper in certain areas. Overall, I still learned a lot.",
//             reviewerName: "Alex Johnson",
//             optionsIconSrc: "./assets/icon-horizontal-dots.svg",
//         },
//     ];
    
//     return (
//         <div className="font-inter">
         

//             <main className="flex p-5 md:p-10">       
//                 <section className="flex-1">
//                     <header className="mb-5">
//                         <h2 className="text-lg font-semibold">Reviews (12)</h2>
//                     </header>

//                     <div className="flex flex-col gap-4">
//                         {reviews.map((review, index) => (
//                             <ReviewCard
//                                 key={index}
//                                 courseName={review.courseName}
//                                 rating={review.rating}
//                                 reviewText={review.reviewText}
//                                 reviewerName={review.reviewerName}
//                                 optionsIconSrc={review.optionsIconSrc}
//                             />
//                         ))}
//                     </div>

//                     <Pagination/>
//                 </section>
//             </main>
//         </div>
//     );
// };

// export default MyReviewMenu;
