import React from 'react';
import useFirestore from "../hooks/useFirestore";
import {motion} from 'framer-motion'

const ImageGrid = ({setSelectedImage}) => {
    const {docs} = useFirestore('images')

    return (
        <div className='img-grid'>
            {
                docs
                    ? docs.map(image =>
                    <motion.div className='img-wrap'
                                key={image.id}
                                layout
                                whileHover={{opacity: 1}}
                                onClick={setSelectedImage.bind(null, image.url)}
                    >
                        <motion.img
                            src={image.url}
                            alt="img"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1}}
                        />
                    </motion.div>
                )
                    : <div>No photos</div>
            }
        </div>
    )
};

export default ImageGrid;