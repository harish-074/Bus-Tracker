package bus_tracker.controller;

import bus_tracker.model.Student;
import bus_tracker.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/register")
    public Student registerStudent(@RequestBody Student student) {
        return studentService.registerStudent(student);
    }
    @GetMapping("/all")
    public java.util.List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
    @PostMapping("/login")
    public Student loginStudent(@RequestParam String email,
                                @RequestParam String password) {

        return studentService.loginStudent(email, password);
    }
}