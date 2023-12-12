class Course {
    constructor(instructor, number, studentList, studentScores) {
        this.instructor = instructor
        this.number = number
        this.studentList = studentList
        this.studentScores = studentScores
    }
    findStudentScore(name) {
        if (this.studentList.includes(name)) {
            const index = this.studentList.indexOf(name)
            const score = this.studentScores[index]
            return score
        }
        else {
            return "Student not found"
        }
    }
}

function createCourse() {
    const instructor = "Khurram"
    const course_number = 1045
    const students = ["John", "Mark", "Manpreet", "Suzan", "Abhijeet", "Luke", "Arjun", "Salim"]
    const final_scores = [ 75, 69, 84, 55, 89, 58, 45, 92]
    const introToWebProg = new Course(instructor, course_number, students, final_scores)
    return introToWebProg
}

function findScore() {
    const introToWebProg = createCourse()
    const manpreet_score = introToWebProg.findStudentScore("Manpreet")
    const dan_score = introToWebProg.findStudentScore("Dan")
    console.log(`Manpreet: ${manpreet_score}`)
    console.log(`Dan: ${dan_score}`)
}

findScore()