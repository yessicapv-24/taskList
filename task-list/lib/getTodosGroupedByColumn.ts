const dataUrl = "https://jsonplaceholder.typicode.com/todos"


export const getTodosGroupedByColumn = async () => {
    const data = await (await fetch(dataUrl)).json();
    const mappedData = data.map(obj => ({ ...obj, status: obj.completed ? 'completed' : 'todo' }))

    const columns: Map<TypedColumn, Column> = mappedData.reduce((acc, todo) => {
        if(!acc.get(todo.status)){
            acc.set(todo.status, {
                id: todo.status,
                todos: []
            })
        }
        acc.get(todo.status)!.todos.push(todo)
        return acc;
    }, new Map<TypedColumn, Column>);

    const columnTypes: TypedColumn[] = ["todo", "completed"];

    const sortedColumns = new Map(
    Array.from(columns.entries()).sort(
        (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
    )
    );

    const board: Board = {
        columns: sortedColumns
    }

    return board;
};
