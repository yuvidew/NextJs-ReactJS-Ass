import React from 'react'
import './SliderCardStyle.scss'

const SliderCardComp = () => {
    const theArr = Array.from({ length: 3 })
    return (
        <section className='theSlideCard'>
            <h1 className='topHeading'>Related deals you might like for</h1>
            <div className="cardCont">
                {theArr.map((ele , index) => (
                    <article key={index}>
                        <div className="imgBox">
                            <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="" />
                        </div>
                        <div className="offerText">
                            <button>20% Off</button>
                            <button>Limited time </button>
                        </div>
                        <h2 className='theh3'>Webbuilder 1</h2>
                        <p>Computer  Modern clasic with wix support</p>
                        <div className="price">
                            <p>$39.96</p>
                            <h3>$49.96</h3>
                            <span>(20% Off)</span>
                        </div>
                        <button className='btnView'>View Deal</button>
                    </article>
                ))}
            </div>
            <div className="theSigntUp">
                <div className="textContnt">
                    <h1>Sign up and get exclusive special deals</h1>
                </div>
                <div className="sighUpForm">
                    <div className="theForm">
                        <input type="text" />
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SliderCardComp