// const SchoolService = require('./practice');
function Student(id, name){
    this.id = id;
    this.name = name;
    this.age = -1;
    this.teacher = null;
}
function Teacher(id, name){
    this.id = id;
    this.name = name;
    this.age = -1;
}

function SchoolService(){
    this.getTeachers = function(){
        var teachers = [];
        for(var i=0;i<5;i++){
            var teacher = new Teacher();
            teacher.id = "01" + i;
            teacher.name = "teacher" + i;
            teacher.age = 18 + i;
            teachers.push(teacher);
        }
        return teachers;
    }
    this.getStudents = function(){
        var students = [];
        for(var i=0;i<10;i++){
            var student = new Student();
            student.id = "00" + i;
            student.name = "student" + i;
            var teacher = new Teacher();
            var tId = Math.ceil(i/2);
            teacher.id = "01" + tId;
            teacher.name = "teacher" + tId;
            student.teacher = teacher;
            students.push(student);
        }
        return students;
    }
    this.getTeacher = function(tId){
        var r = null;
        var teachers = this.getTeachers();
        for(var i=0;i<teachers.length;i++){
            var teacher = teachers[i];
            if(teacher.id == tId){
                r = teacher;
                break;
            }
        }
        return r;
    }
    this.getStudent = function(sId){
        var r = null;
        var students = this.getStudents();
        for(var i=0;i<students.length;i++){
            var student = students[i];
            if(student.id == sId){
                r = student;
                break;
            }
        }
        return r;
    }

    this.getStudentsByTeacher = function(tId){
        var r = [];
        var students = this.getStudents();
        for(var i=0;i<students.length;i++){
            var student = students[i];
            if(student.teacher && student.teacher.id == tId){
                r.push(student);
            }
        }
        return r;
    }
}


describe("A test suite for SchoolService", function() {
    var schoolService = new SchoolService();
    var teachers = [];
    var students = [];
    beforeEach(function() {
        teachers = schoolService.getTeachers();
        students = schoolService.getStudents();
    });
    it("Spec test 1, test the getTeachers function", function() {
        expect(teachers).not.toBe(null);
        expect(teachers.length).toEqual(5);
    });
    it("Spec test 2: test the getStudents function", function() {
        expect(students).not.toBe(null);
        expect(students.length).toEqual(10);
    });
    it("Spec test 3: test the getTeacher function", function() {
        var teacher = schoolService.getTeacher("011");
        expect(teacher).not.toBe(null);
        expect(teacher.name).toMatch(/teacher/);
        expect(teacher.name).toMatch("teacher");
        expect(teacher.name).not.toMatch(/people/);
        var teacher6 = schoolService.getTeacher("016");
        expect(teacher6).toBe(null);
    });
    afterEach(function() {
        teachers = [];
        students = [];
    });

    describe("A nested test suite", function() {
        it("Spec test 4: test the getStudent function", function() {
            var student10 = schoolService.getStudent("0010");
            expect(student10).toBe(null);
            var student9 = schoolService.getStudent("009");
            var teacher = student9.teacher;
            expect(teacher).toBeDefined();
        });
        it("Spec test 5: test the getStudentsByTeacher function", function() {
            var students = schoolService.getStudentsByTeacher("014");
            expect(students).not.toBe(null);
            expect(students.length).toEqual(2);
            var idArray = [];
            idArray.push(students[0].id);
            idArray.push(students[1].id);
            expect(idArray).toContain("007", "008");
        });
    });
});