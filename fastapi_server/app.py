from fastapi import FastAPI
from pydantic import BaseModel
class Student(BaseModel):
    name:str
    email:str
    age:int
    mark:float
app=FastAPI()
@app.get("/getStudents")
def getStudents():
    return "get students api called";

@app.post("/register")
def register(stu:Student):
    return stu

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



