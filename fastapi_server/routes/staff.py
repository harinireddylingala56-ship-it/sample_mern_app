from fastapi import APIRouter
staff_router=APIRouter(prefix="/staff",tags=["staff"])
#localhost:8000/staff/getStaffs
@staff_router.get("/getStaffs")
def getStaffs():
    return " get Staff method called"
@staff_router.post("/addstaff")
def addstaff():
    return "add staff method called"