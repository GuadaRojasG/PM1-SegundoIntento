class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id
        this.title = title
        this.description = description
        this.imgUrl = imgUrl
    }
}

class Repository {
    constructor() {
        this.activities = []
        this.id = 0
    }

    getAllActivities = () => this.activities

    createActivity = (title, description, imgUrl) => {
        const activity = new Activity(this.id, title, description, imgUrl)
        this.activities.push(activity)
        this.id ++
        return activity
    }

    deleteActivity = (id) => {
        this.activities = this.activities.filter( (activity) => activity.id !== id )
    }
}

const newRepository = new Repository()
const createButton = document.querySelector('#createButton')

const JStoHTML = (activity) => {
    const { id, title, description, imgUrl } = activity

    const card = document.createElement('div')
    const titleElement = document.createElement('h3')
    const x = document.createElement('span')
    const imgUrlElement = document.createElement('img')
    const descriptionElement = document.createElement('p')

    titleElement.innerHTML = title
    descriptionElement.innerHTML = description
    imgUrlElement.src = imgUrl
    imgUrlElement.alt = title
    x.innerHTML = 'X'

    card.id = `activity-${id}`
    card.classList.add('cards')

    card.appendChild(x)
    card.appendChild(titleElement)
    card.appendChild(imgUrlElement)
    card.appendChild(descriptionElement)

    x.addEventListener('click', () => deleteActivityHandler(id))

    return card
}

const addToContainer = () => {
    const container = document.querySelector('#activitiesContainer')
    container.innerHTML = ''

    const activities = newRepository.getAllActivities().map(JStoHTML)

    activities.forEach( activity => container.appendChild(activity) )
}

const deleteActivityHandler = (id) => {
    newRepository.deleteActivity(id)
    addToContainer()
}

const createButtonHandler = () => {
    let titleInput = document.querySelector('#title').value
    let descriptionInput = document.querySelector('#description').value
    let imgUrlInput = document.querySelector('#imgUrl').value

    if (!titleInput || !descriptionInput || !imgUrlInput) {
        return alert('Faltan completar datos. Todos los campos son obligatorios.')
    }

    newRepository.createActivity(titleInput, descriptionInput, imgUrlInput)

    titleInput = ''
    descriptionInput = ''
    imgUrlInput = ''

    addToContainer()
}

createButton.addEventListener('click', createButtonHandler)