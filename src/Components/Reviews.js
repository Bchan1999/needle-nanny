import React from "react";
import '../Style/Reviews.css'

const Reviews = (props) => {
    return (
        <>
            <div className="reviews-hero">
                <h2>Customer Reviews</h2>
                <ul>
                    <li>
                        {/* <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg></div> */}
                        <div className="star">5 stars</div>
                        <div className="customer">Amy</div>
                        <div className="comment">Love it! Shipped fast too :D</div>
                        <div className="purchase"><img src="#"></img></div>
                    </li>
                    <li>
                        {/* <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg></div> */}
                        <div className="star">5 stars</div>
                        <div className="customer">Amy</div>
                        <div className="comment">Love it! Shipped fast too :D</div>
                        <div className="purchase"><img src="#"></img></div>
                    </li>
                    <li>
                        {/* <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg></div> */}
                        <div className="star">5 stars</div>
                        <div className="customer">Amy</div>
                        <div className="comment">Love it! Shipped fast too :D</div>
                        <div className="purchase"><img src="#"></img></div>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Reviews