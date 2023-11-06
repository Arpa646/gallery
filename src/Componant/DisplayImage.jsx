// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const App = () => {
//   const [images, setImages] = useState([
//     { id: "1", src: "image1.jpg" },
//     { id: "2", src: "image2.jpg" },
//     { id: "3", src: "image3.jpg" },
//   ]);

//   const onDragEnd = (result) => {
//     const destination = result.destination;
//     const source = result.source;
  
//     if (!destination) {
//       return;
//     }
  
//     if (
//       destination.droppableId === source.droppableId &&
//       destination.index === source.index
//     ) {
//       return;
//     }
  
//     const reorderedImages = Array.from(images);
//     const [reorderedImage] = reorderedImages.splice(source.index, 1);
//     reorderedImages.splice(destination.index, 0, reorderedImage);
  
//     setImages(reorderedImages);
//   };
  

//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="images" direction="horizontal">
//           {(provided) => (
//             <div
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//               style={{ display: "flex" }}
//             >
//               {images.map((image, index) => (
//                 <Draggable key={image.id} draggableId={image.id} index={index}>
//                   {(provided) => (
//                     <img
//                       src={image.src}
//                       alt={`Image ${image.id}`}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       ref={provided.innerRef}
//                       style={{
//                         width: "150px",
//                         height: "150px",
//                         margin: "8px",
//                         cursor: "grab",
//                       }}
//                     />
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default App;



// import React from 'react';
// import { useQuery } from 'react-query';
// import './style.css';
// import DraggableImage from './DraggableImage'; // Import the DraggableImage component

// const DisplayImage = ({ imageUrl }) => {
//   const { data: images, isLoading, refetch } = useQuery('images', async () => {
//     const response = await fetch('http://localhost:5000/image');
//     if (!response.ok) {
//       throw new Error('Failed to fetch images');
//     }
//     return response.json();
//   });

//   return (
//     <div className="bg">
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : images ? (
//         <div>
//           {images.map((img, index) => (
//             <div key={img.id}>
//             <DraggableImage imageUrl={img.image} />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No images to display.</p>
//       )}
//     </div>
//   );
// };

// export default DisplayImage;










import React from 'react';
import { useQuery } from 'react-query';
import './style.css';

const DisplayImage = ({ imageUrl }) => {
  const { data: images, isLoading, refetch } = useQuery('images', async () => {
    const response = await fetch('http://localhost:5000/image');
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    return response.json();
  });

  return (
    <div className="bg">
      {isLoading ? (
        <p>Loading...</p>
      ) : images ? (
        <div>
          {images.map((img, index) => (
            <div key={img.id}>
               <img
                className={index === 0 ? 'width1' : 'width'}
                src={img.image}
                alt={img.title}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No images to display.</p>
      )}
    </div>
  );
};

export default DisplayImage;
