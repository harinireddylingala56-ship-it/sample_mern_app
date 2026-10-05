from fastapi import APIRouter
student_router=APIRouter(prefix="/student",tags=["student"])
#localhost:8000/staff/getStudents
@student_router.get("/getStudents")
def getStudents():
    return " get students method called"
@student_router.post("/addstudent")
def addstudent():
    return "add  student method called"