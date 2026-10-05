from fastapi import FastAPI
from models import Student,Staff
from databse import student_collection,staff_collection
from routes.student import student_router
from routes.staff import staff_router
app=FastAPI()
app.include_router(student_router)
app.include_router(staff_router)
#convert mongodb document into json format
def student_details(Student):
    return{
        "id":str(Student["_id"]),
        "name":Student["name"],
        "email":Student["email"],
        "age":Student["age"],
        "mark":Student["mark"]
        }
def staff_details(Staff):
    return{
        "id":str(Staff["_id"]),
        "name":Staff["name"],
        "email":Staff["email"],
        "designation":Staff["designation"]
        }
        

@app.get("/getStudents")
def getStudents():
    students=student_collection.find()
    #here we are using the comprehensive list to fetch the student details
    return [student_details(student) for student in students]
def getStaff():
    staffs=staff_collection.find()
    return [staff_details(staff) for staff in staffs]
    

@app.post("/register")
def register(stu: Student):
    result = student_collection.insert_one(stu.model_dump())
    return {"message": "data inserted successfully"}
def register(stu:Staff):
    results=staff_collection.insert_one(stu.model_dump())
    return{"message":"staff inserted successfully"}

@app.put("/updateprofile")
def updateprofile():
    return "update profile called"

@app.delete("/deletedata")
def deletedata():
    return "data was deleted"

@app.get("/getStudentDet/{userid}")
def getStudentDet(userid:int):
    return {"user_id":userid}

@app.get("/getstudentsdetails")
def getstudentdetails(page:int=1,limit:int=10):
    return {"page":page,"limit":limit}



