interface Board {
    columns: Map <TypedColumn, Column>
}

//Definiciones para construcción del tablero

type TypedColumn = "completed"  |  "todo";

interface Column {
    id: TypedColumn,
    todos: Todo[]
}

interface Todo {
    id: number,
    title: string,
    status: string
}
