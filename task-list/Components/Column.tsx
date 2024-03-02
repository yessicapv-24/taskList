import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import TodoCard from './TodoCard';

type Propd = {
    id: TypedColumn,
    todos: Todo[],
    index: number
}

const idToColumnText: {
    [key in TypedColumn]: string
} = {
    todo: "To Do",
    completed: "Completed",
}

const Column = ({id, todos, index}: Propd) => {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={ index == 0 ? `col-start-2` : `col-start-3`}
                >
                        <Droppable droppableId={index.toString()} type="card">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className={`pb-2 p-2 roundex-2xl shadow-sm 
                                    ${snapshot.isDraggingOver ? index == 0 ? "bg-red-200" : "bg-green-200" : "bg-white/50"}`}
                                >
                                    <h2 className='flex justify-between font-bold text-xl p-2'>{idToColumnText[id]}
                                        <span className='text-gray-500 bg-gray-200 rounded-full 
                                            px-2 py-2 text-sm font-normal'>
                                                {todos.length}
                                        </span>
                                    </h2>

                                    <div className='space-y-2'>
                                        {todos.map((todo, index) => (
                                            <Draggable
                                            key={todo.id}
                                            draggableId={todo.id.toString()}
                                            index={index}>
                                                {(provided) => (
                                                    <TodoCard
                                                        todo={todo}
                                                        index={index}
                                                        id={id}
                                                        innerRef={provided.innerRef}
                                                        draggableProps={provided.draggableProps}
                                                        dragHandleProps={provided.dragHandleProps}>

                                                    </TodoCard>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>

                                </div>
                            )}
                        </Droppable>
                </div>
            )}
        </Draggable>
    );
};

export default Column;
