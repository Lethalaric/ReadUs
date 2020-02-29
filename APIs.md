# Backend API

## Add new plan
Save new reading plan to database  
API : /ReadUs/backend/v1/addPlan  
type : POST   
json input :  
```
{
  "bookName" : "Book A",
  "totalPage" : 100,
  "totalTime" : 10
}
``` 
json output :  
```
{
  "status" : 200,
  "description" : "your new plan has been added"
}
```

## Edit progress  
Save total page already read      
API : /ReadUs/backend/v1/editProgress  
type : PUT  
json input :    
```
{
  "id" : 1,
  "currentRead" : 10,
  "currentTime" : 2
}
```
json output :  
```
{
  "status" : 200,
  "description" : "you have update your progress"
}
```

## Progress bar  
Get all book progress    
API : /ReadUs/backend/v1/progress  
type : GET  
json output :  
```
{
  "status" : 200,
  "books" : [
    {
      "bookName" : "Book A",
      "percentage" : 10
    }
    ]
}
```

## Book Detail
Get a detail of the book
API : /ReadUs/backend/v1/getDetail
type : GET
query parameter :
```
id=1
```
json output :
```
{
    "status": 200,
    "book": {
        "id": 2,
        "bookName": "All Over Me",
        "totalPage": 108,
        "totalTime": 83,
        "currentPage": 1276,
        "currentTime": 7,
        "createdAt": "2019-05-01",
        "updatedAt": "2020-02-28"
    }
}
```