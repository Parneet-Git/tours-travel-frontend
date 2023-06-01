import React from 'react'
import galleryImages from './galleryImages'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
        <Masonry gutter='1rem'>
            {
                galleryImages.map((item,index)=>(
                    <img
                    className="masonry__img" 
                    src={item} 
                    key={index} 
                    alt="" 
                    style={{ width: "100%", display: "block", borderRadius: "10px" }}/>  
                    //map function is used to perform an action on each element in a collection and gather the results into a new array.
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery