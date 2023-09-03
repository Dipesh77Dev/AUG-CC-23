import React from 'react'
import RightSection from './RightSection'
import RightSection1 from './RightSection1'


const LeftSection = () => {
  return (
    <React.Fragment>
    <section>
      <div class="left-section">
        <h1>Heading 1</h1>
        <hr />
        <h2>Heading 2</h2>
        <hr />
        <h3>Heading 3</h3>
        <hr />
        <h5>Heading 4</h5>
        <hr />
        <h6>Heading 5</h6>
        <hr />
        <h4>Heading 6</h4>
      </div>
      {/* <RightSection /> */}
      <RightSection1 />

      </section>
    </React.Fragment>
  )
}

export default LeftSection





// const Card = () => {
//   return (
//     <div>Card</div>
//   )
// }

// export default Card