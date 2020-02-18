# Backend API

## Add new plan
Save new reading plan to database  
API : /ReadUs/backend/v1/addPlan  
type : POST   
json input :  
```
{
  "id" : 1,
  "bookName" : "Book A",
  "totalPage" : 100,
  "totalTime" : 10
}
``` 
json output :  
```
{
  "status" : 200,
  "description" : "success"
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
  "totalRead" : 10
}
```
json output :  
```
{
  "status" : 200,
  "description" : "success"
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

# Frontend API

## Start reading  
Goto/popup page to add new reading plan  
## Get progress  
Get all progress of books  
## Detail progress
Goto/popup page to details of progress  
## Notification
Notification section  
## Save progress
Send data to backend and return to homepage  
## Submit progress
Send data to backend and return to homepage  