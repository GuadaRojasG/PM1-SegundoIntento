import { Activity, Repository } from "../../src/index.mjs"

describe('La clase Repository', () => {

    it('Debe ser una clase', () => {
        expect(Repository).toBeInstanceOf(Function)
    })

    it('Debe tener implementado el metodo getAllActivities()', () => {
        const repository = new Repository()
        expect(repository.getAllActivities).toBeDefined()
    })


    it('Debe tener implementado el metodo createActivity()', () => {
        const repository = new Repository()
        expect(repository.createActivity).toBeDefined()
    })


    it('Debe tener implementado el metodo deleteActivity()', () => {
        const repository = new Repository()
        expect(repository.deleteActivity).toBeDefined()
    })


    it('El metodo getAllActivities() debe retornar un array', () => {
        const repository = new Repository()
        expect(Array.isArray(repository.getAllActivities())).toBeTrue()
    })


    it('El metodo createActivity() debe agregar un nuevo elemento', () => {
        const repository = new Repository()
        const activity = repository.createActivity('Correr', 'Me gusta correr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIaTSr08cC1RYKxUzCEZ2kq7n09AwsOi-pw&s')
        expect(repository.getAllActivities()).toContain(activity)
    })


    it('El metodo deleteActivity() debe eliminar la ultima tarea', () => {
        const repository = new Repository()
        const activity1 = repository.createActivity('Correr', 'Me gusta correr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIaTSr08cC1RYKxUzCEZ2kq7n09AwsOi-pw&s')
        const activity2 = repository.createActivity('Caminar', 'Me gusta caminar', 'https://image.tuasaude.com/media/article/wr/ai/caminar_71374.jpg')
        const activity3 = repository.createActivity('Nadar', 'Me gusta nadar', 'https://unycos.com/cdn/shop/articles/Por_que_se_considera_tan_importante_saber_nadar.jpg?v=1718308685')
        repository.deleteActivity(activity2.id)
        expect(repository.getAllActivities()).toContain(activity1)
        expect(repository.getAllActivities()).toContain(activity3)
        expect(repository.getAllActivities()).not.toContain(activity2)
    })
})

describe('La clase Activity', () => {
    it('Debe ser una clase', () => {
        expect(Activity).toBeInstanceOf(Function)
    })

    it('Debe poder ser instanciada', () => {
        const activity = new Activity(0, 'Caminar', 'Me gusta caminar', 'https://image.tuasaude.com/media/article/wr/ai/caminar_71374.jpg')
        expect(activity).toBeInstanceOf(Activity)
        expect(activity.id).toBe(0)
        
    })
})