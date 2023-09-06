import React from 'react'
import mentorIllustration from '../../../images/mentor-illustration.png'

const Main = () => {
  return (
    <main>
        <div className="first-section">
            <p>Eduvi has the qaulified mentor</p>
            <img src={mentorIllustration} alt="mentor-illustration" />
        </div>
    </main>
  )
}

export default Main