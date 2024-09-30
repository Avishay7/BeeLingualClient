import React from 'react'

const Help = () => {
  return (
    <div>
       return (
        <div className="container mt-5">
            <h1 className="text-center">דף עזרה</h1>
            <div className="accordion" id="accordionExample">
                {/* שאלה 1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            מה זו הפלטפורמה שלנו?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            הפלטפורמה שלנו מציעה מגוון רחב של שירותים לשיפור הידע והכישורים שלך.
                        </div>
                    </div>
                </div>

                {/* שאלה 2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            ?איך אני מתאם פגישה
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            אתה יכול לתאם פגישה באמצעות טופס ההזמנה באתר או על ידי יצירת קשר עם צוות התמיכה.
                        </div>
                    </div>
                </div>

                {/* שאלה 3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            מהן שעות הפעילות של התמיכה?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            שעות הפעילות של התמיכה הן בימים שני עד שישי, 9:00-17:00.
                        </div>
                    </div>
                </div>

                {/* שאלה 4 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                        >
                            איך אני יכול לשחזר את הסיסמה שלי?
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            תוכל לשחזר את הסיסמה שלך באמצעות הקישור לשחזור סיסמה בדף הכניסה.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    </div>
  )
}

export default Help