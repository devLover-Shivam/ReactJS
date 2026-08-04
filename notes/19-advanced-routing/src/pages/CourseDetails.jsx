import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const params = useParams();
    console.log(params.id);
  return (
    <div>
      <h1>{params.id} Course Details Are Here!</h1>
    </div>
  )
}

export default CourseDetails
