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
        this.contador = 0
    }

    getAllActivities() {
        return this.activities
    }

    createActivity(title, description, imgUrl) {
        const activity = new Activity(this.contador, title, description, imgUrl)
        this.activities.push(activity)
        this.contador ++
        return activity
    }

    deleteActivity(id) {
        this.activities = this.activities.filter( (activity) => activity.id !== id )
    }
}

const repository = new Repository()