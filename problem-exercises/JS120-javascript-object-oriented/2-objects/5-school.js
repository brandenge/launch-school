// eslint-disable-next-line
function createSchool() {
  return {
    students: [],

    addStudent(name, year) {
      if (!['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
        return console.log('Invalid Year');
      }
      const student = createStudent(name, year);
      this.students.push(student);
      return student;
    },

    enrollStudent(student, course) {
      student.addCourse(course);
    },

    addGrade(student, courseCode, grade) {
      const course = student.listCourses().find(course => {
        return course.code === courseCode;
      });
      if (course) course.grade = grade;
    },

    getReportCard(student) {
      student.listCourses().forEach(course => {
        console.log(`${course.name}: ${course.grade || 'In progress'}`);
      });
    },

    // eslint-disable-next-line
    courseReport(courseName) {
      const students = this.students.filter(student => {
        return student.listCourses()
          .find(course => course.name === courseName && course.grade);
      });
      if (students.length === 0) {
        console.log('undefined');
        return;
      }
      const grades = [];
      console.log(`=${courseName} Grades=`);
      students.forEach(student => {
        const course =
          student.listCourses().find(course => course.name === courseName);
        grades.push(course.grade);
        console.log(`${student.name}: ${course.grade}`);
      });
      console.log('---');
      const courseAverage = parseInt(grades.reduce((sum, grade) => {
        return sum + grade;
      }) / grades.length, 10);
      console.log(`Course Average: ${courseAverage}`);
    }
  };
}

// eslint-disable-next-line
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(code, note) {
      const course = this.courses.find(course => course.code === code);
      if (!course) return;
      if (!course.note) course.note = [];
      course.note.push(note);
    },

    updateNote(code, note) {
      const course = this.courses.find(course => course.code === code);
      if (course) course.note = [note];
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note.join('; ')}`);
        }
      });
    }
  };
}

// Examples of created student objects with grades; methods on the objects are
// not shown here for brevity.
// The following are only showing the properties that aren't methods for the
// three objects


const school = createSchool();

const foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, { name: 'Math', code: 101 });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102 });
school.enrollStudent(foo, { name: 'Physics', code: 202 });

school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);

const bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, { name: 'Math', code: 101 });
school.addGrade(bar, 101, 91);

const qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, { name: 'Math', code: 101 });
school.enrollStudent(qux, { name: 'Advanced Math', code: 102 });

school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

school.getReportCard(foo);
// Math: 95
// Advanced Math: 90
// Physics: In progress

school.courseReport('Math');
// =Math Grades=
// foo: 95
// bar: 91
// qux: 93
// ---
// Course Average: 93

school.courseReport('Advanced Math');
// =Advanced Math Grades=
// foo: 90
// qux: 90
// ---
// Course Average: 90

school.courseReport('Physics');
// undefined
