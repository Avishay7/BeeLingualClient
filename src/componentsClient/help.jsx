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
                            ?מה זו הפלטפורמה שלנו
                        </button>
                    </h2>
                    <div
                        className={`accordion-collapse collapse ${openIndex === 0 ? 'show' : ''}`}
                        aria-labelledby="headingOne"
                    >
                        <div className="accordion-body">
                            .הפלטפורמה שלנו מציעה מגוון רחב של שירותים לשיפור הידע והכישורים שלך
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
                            ?איך אני מתאם פגישה
                        </button>
                    </h2>
                    <div
                        className={`accordion-collapse collapse ${openIndex === 1 ? 'show' : ''}`}
                        aria-labelledby="headingTwo"
                    >
                        <div className="accordion-body">
                            .אתה יכול לתאם פגישה באמצעות טופס ההזמנה באתר או על ידי יצירת קשר עם צוות התמיכה
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
                            ?מהן שעות הפעילות של התמיכה
                        </button>
                    </h2>
                    <div
                        className={`accordion-collapse collapse ${openIndex === 2 ? 'show' : ''}`}
                        aria-labelledby="headingThree"
                    >
                        <div className="accordion-body">
                            .שעות הפעילות של התמיכה הן בימים שני עד שישי, 9:00-17:00
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
                            ?איך אני יכול לשחזר את הסיסמה שלי
                        </button>
                    </h2>
                    <div
                        className={`accordion-collapse collapse ${openIndex === 3 ? 'show' : ''}`}
                        aria-labelledby="headingFour"
                    >
                        <div className="accordion-body">
                            .תוכל לשחזר את הסיסמה שלך באמצעות הקישור לשחזור סיסמה בדף הכניסה
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Help