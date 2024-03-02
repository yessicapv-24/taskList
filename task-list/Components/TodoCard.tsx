import React from 'react';
import { DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';
import { BsXCircleFill } from 'react-icons/bs';

type Props = {
    todo: Todo,
    index: number,
    id: TypedColumn,
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}

const TodoCard = ({
    todo,
    index,
    id,
    innerRef,
    draggableProps,
    dragHandleProps
}: Props) => {
    return (
        <div className='bg-white rounded-md space-y-2 drop-shadow-md'
            {...draggableProps}
            {...dragHandleProps}
            ref={innerRef}>
                <div className='flex flex-row justify-between items-center p-2'>
                    <p>Id: {todo.id}</p>
                </div>
                <div className='flex flex-row justify-between items-center p-2'>
                    <p>Title: {todo.title}</p>
                    <button className='text-red-500 hover:text-red-600'>
                        <BsXCircleFill className='ml-2 h-8 w-8'/>
                    </button>
                </div>
        </div>
    );
};

export default TodoCard;
