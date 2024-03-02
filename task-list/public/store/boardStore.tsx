import { create } from 'zustand'
import { getTodosGroupedByColumn } from '@/lib/getTodosGroupedByColumn';

// construcción del tablero:

interface BoardState{
    board: Board;
    getBoard: () => void;
    setBoard: (board: Board) => void;
    newTaskInput: string;
    setNewTaskInput: (input: string) => void;
    newTaskType: TypedColumn;
    setNewTaskType: (columnId: TypedColumn) => void;
    addTask: (todo: string, columnId: TypedColumn) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>()
  },
  getBoard: async() => {
     const board = await getTodosGroupedByColumn();
     set({ board });
  },
  setBoard: (board) => set(() => ({board})),
  newTaskInput: "",
  setNewTaskInput: (input: string) => set({newTaskInput: input}),
  newTaskType: "todo",
  setNewTaskType: (columnId: TypedColumn) => set({newTaskType: columnId}),
  addTask: async(todo: string, columnId: TypedColumn) => {
    set({newTaskInput: ""});

    set((state) => {
        const newColumns = new Map(state.board.columns);
        let newId = 1;
        Array.from(newColumns.entries()).map(([id, column], index) => {
            newId = newId + column.todos.length;
        });
        const newTodo: Todo = {
            title: todo,
            id: newId,
            status: columnId
        };

        const column = newColumns.get(columnId);

        if(!column){
            newColumns.set(columnId, {
                id: columnId,
                todos: [newTodo]
            });
        }
        else{
            newColumns.get(columnId)?.todos.unshift(newTodo);
        }

        return {
            board: {
                columns: newColumns
            }
        }
    })
  }
}))