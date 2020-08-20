import React, {useState} from 'react';
import Title from "./componets/Title";
import UploadForm from "./componets/UploadForm";
import ImageGrid from "./componets/ImageGrid";
import Modal from "./componets/Modal";

function App() {
    const [selectedImage, setSelectedImage]=useState(null)

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImage={setSelectedImage}/>
        {selectedImage &&
            <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
        }
    </div>
  );
}

export default App;
