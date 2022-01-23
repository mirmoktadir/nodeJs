
//class
class Skill{
    constructor(skill , duration, projects){
        this.skill=skill;this.duration=duration;this.projects=projects;
    }
    summery(){
        console.log(`I am good at ${this.skill} and i have ${this.duration} years of experiences. I have completed ${this.projects} projects.`)
    }

}
//exporting

export default Skill;