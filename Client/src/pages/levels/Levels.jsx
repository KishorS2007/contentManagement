import React, { useState } from 'react'
import Cards from '../../components/card/Card';

const Levels = () => {
    let x = 0;
    const [Data,SetData] = useState([
        {key:x++,subjectName:"Maths",topicName:"Algebra",level:1,image:"https://thumbs.dreamstime.com/b/mathematics-vector-thin-line-horizontal-blue-modern-banner-math-science-outline-illustration-concept-dark-background-281820269.jpg"},
        {key:x++,subjectName:"Maths",topicName:"something",level:2,image:"https://thumbs.dreamstime.com/b/mathematics-vector-thin-line-horizontal-blue-modern-banner-math-science-outline-illustration-concept-dark-background-281820269.jpg"},
        {key:x++,subjectName:"Maths",topicName:"none",level:3,image:"https://thumbs.dreamstime.com/b/mathematics-vector-thin-line-horizontal-blue-modern-banner-math-science-outline-illustration-concept-dark-background-281820269.jpg"},
        {key:x++,subjectName:"Maths",topicName:"hehe",level:4,image:"https://thumbs.dreamstime.com/b/mathematics-vector-thin-line-horizontal-blue-modern-banner-math-science-outline-illustration-concept-dark-background-281820269.jpg"},
        {key:x++,subjectName:"Maths",topicName:"hoho",level:5,image:"https://thumbs.dreamstime.com/b/mathematics-vector-thin-line-horizontal-blue-modern-banner-math-science-outline-illustration-concept-dark-background-281820269.jpg"},
        {key:x++,subjectName:"Maths",topicName:"SDfvdsav",level:6,image:"https://thumbs.dreamstime.com/b/mathematics-vector-thin-line-horizontal-blue-modern-banner-math-science-outline-illustration-concept-dark-background-281820269.jpg"},
    ])
    const NewData = Data.map((d)=>(
        <Cards key={d.key} subjectName={d.subjectName} topicName={d.topicName} level={d.level} image={d.image}/>
    ))
  return (
    <div className='bg-[linear-gradient(#f5f5f5,#ffffff)]'>
        <center>
      {NewData}
        </center>
        {/* <iframe src={pdf} frameborder="0" className='w-full h-screen'></iframe> */}
        {/* <embed src={pdf} type="application/pdf" width="100%" height="600px"></embed> */}
    </div>
  )
}

export default Levels
