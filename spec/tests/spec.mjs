// ToDoList

// - Debe ser una clase
// - Debe tener los metodos:
//      -getToDos(): Debe retornar la lista de tareas
//      - addToDo(): Deberia pushear al array una tarea nueva
//      - deleteToDo(): Deberia eliminar la ultima tarea

import ToDoList from "../../src/index.mjs"

describe('La clase ToDoList', () => {
    it('Debe ser una clase', () => {
        expect(typeof ToDoList.prototype.constructor).toBe('function')
    })

    it('Debe tener implementado el metodo getToDos()', () => {
        const lista = new ToDoList()
        expect(lista.getToDos).toBeDefined()
    })


    it('Debe tener implementado el metodo addToDo()', () => {
        const lista = new ToDoList()
        expect(lista.addToDo).toBeDefined()
    })


    it('Debe tener implementado el metodo deleteToDo()', () => {
        const lista = new ToDoList()
        expect(lista.deleteToDo).toBeDefined()
    })


    it('El metodo getToDos() debe retornar un array', () => {
        const lista = new ToDoList()
        expect(Array.isArray(lista.getToDos())).toBeTrue()
    })


    it('El metodo addToDo() debe agregar un nuevo elemento', () => {
        const lista = new ToDoList()
        lista.addToDo('Hacer la cama')
        expect(lista.getToDos()).toContain('Hacer la cama')
    })


    it('El metodo deleteToDo() debe eliminar la ultima tarea', () => {
        const lista = new ToDoList()
        lista.addToDo('A')
        lista.addToDo('B')
        lista.addToDo('C')
        lista.deleteToDo()
        expect(lista.getToDos()).toContain('A')
        expect(lista.getToDos()).toContain('B')
        expect(lista.getToDos()).not.toContain('C')
    })
})