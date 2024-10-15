import React, { useState } from 'react'

const Help = () => {
  
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">דף עזרה</h1>
            <div className="accordion" id="accordionExample">
                {/* שאלה 1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className={`accordion-button ${openIndex === 0 ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleAccordion(0)}
                        >
                             Can I track my progress in the app?  
                        </button>
                    </h2>
                    <div
                        className={`accordion-collapse collapse ${openIndex === 0 ? 'show' : ''}`}
                        aria-labelledby="headingOne"
                    >
                        <div className="accordion-body">
                        Yes, the app provides progress tracking features that allow you to see your improvements over time.
                        </div>
                    </div>
                </div>

                {/* שאלה 2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className={`accordion-button ${openIndex === 1 ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleAccordion(1)}
                        >
                           What age group is this app suitable for?
                        </button>
                    </h2>
                    <div
                        className={`accordion-collapse collapse ${openIndex === 1 ? 'show' : ''}`}
                        aria-labelledby="headingTwo"
                    >
                        <div className="accordion-body">

                        The app is suitable for learners aged 12 and up, making it a great resource for both teens and adults.
                        </div>
                    </div>
                </div>

                {/* שאלה 3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className={`accordion-button ${openIndex === 2 ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleAccordion(2)}
                        >
                            How long is it recommended to use the app to make progress in learning?
                        </button>
                    </h2>
                    <div
                        className={`accordion-collapse collapse ${openIndex === 2 ? 'show' : ''}`}
                        aria-labelledby="headingThree"
                    >
                        <div className="accordion-body">
                        It is recommended to use the app for at least 20-30 minutes a day to see consistent progress in your English learning.
                        </div>
                    </div>
                </div>

                {/* שאלה 4 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button
                            className={`accordion-button ${openIndex === 3 ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleAccordion(3)}
                        >
                             How can I reset my password?

                        </button>
                    </h2>
                    <div
                        className={`accordion-collapse collapse ${openIndex === 3 ? 'show' : ''}`}
                        aria-labelledby="headingFour"
                    >
                        <div className="accordion-body">
                        When you log in to the website, you can click on "Forgot my password." From there, the process is very simple and guided.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Help