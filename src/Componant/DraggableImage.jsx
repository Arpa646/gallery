import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableImage = ({ imageUrl }) => {
  const [, ref] = useDrag({
    type: 'IMAGE',
    item: { type: 'IMAGE', imageUrl },
  });

  return (
    <div ref={ref}>
      <img className="draggable-image" src={imageUrl} alt="Draggable Image" />
    </div>
  );
};

export default DraggableImage;
