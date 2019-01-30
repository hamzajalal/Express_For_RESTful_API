# Express_For_RESTful_API
This is the basics of RESTful APIs with Express.js framework. The purpose is to simply build endpoints and all these methods corresponds to HTTP methods. In this project, my focus is to learn how to use express framework and that is why my focus is on building HTTP services or RESTful APIs (No database work).

### JOI-Validation
For the security purposes: I think it is good practice to not trust the user on input(Always use some validation on input). User can make a mistake and can enter some wrong input.

#### GET (ALL)- Successful (200 OK)
Getting all the items in an array with GET method  under the URL: GET/api/movies as shown below in the photo:
<img width="884" alt="get_success" src="https://user-images.githubusercontent.com/15648707/51966659-be0ff080-2475-11e9-8338-2e9c63a67b50.png">

#### GET (one item)- Successful (200 OK)
Getting one specific item in an array by Id with GET method under the URL: GET/api/movies/:id as shown below in the photo:
<img width="885" alt="get_idsuccess" src="https://user-images.githubusercontent.com/15648707/51966937-a2591a00-2476-11e9-86a9-12b9135280e4.png">

#### GET (one item)- Failure (404 Not Found)
Getting one specific item in an array by Id that does not exist with GET method under the URL: GET/api/movies/:id as shown below in the photo:
<img width="885" alt="get_idfail" src="https://user-images.githubusercontent.com/15648707/51967122-2ad7ba80-2477-11e9-829f-9e6d7028dfef.png">

#### POST (one item)- Successful (200 OK)
Creating a new item or Adding a new item to an array with POST method under the URL: POST/api/movies as shown in a photo below:
<img width="840" alt="post_success" src="https://user-images.githubusercontent.com/15648707/51967253-830ebc80-2477-11e9-89cc-5b1cbf74687c.png">

#### POST (one item)- Failure (400 Bad Request)
Creating a new item or adding a new item to an array with POST method but a name is missing (name is required) under the URL: POST/api/movies as shown in a photo below:
<img width="844" alt="post_name_miss" src="https://user-images.githubusercontent.com/15648707/51967396-e6005380-2477-11e9-8c42-5a0b4fd2b6c6.png">

#### POST (one item)- Failure (400 Bad Request)
Creating a new item or adding a new item to an array with POST method but a name has less than 2 characters (Joi-Validation) under the URL: POST/api/movies as shown in a photo below:
<img width="841" alt="post_name_less" src="https://user-images.githubusercontent.com/15648707/51967552-51e2bc00-2478-11e9-96dd-b3139c249207.png">

#### PUT (one item)- Successful (200 OK)
Updating an item to an array with PUT method under the URL: PUT/api/movies/:id as shown in a photo below:
<img width="887" alt="put_success" src="https://user-images.githubusercontent.com/15648707/51967715-bdc52480-2478-11e9-817e-868f2effde6d.png">

After updating an item, getting all the items in an array with the GET method to make sure it has been updated as shown in a photo below:
<img width="881" alt="after_put" src="https://user-images.githubusercontent.com/15648707/51967781-ebaa6900-2478-11e9-95a2-ebf33420c7cf.png">

#### PUT (one item)- Failure (404 Not Found)
Updating an item to an array that does not exist with PUT method under the URL: PUT/api/movies/:id as shown in a photo below:
<img width="882" alt="put_fail" src="https://user-images.githubusercontent.com/15648707/51967791-f1a04a00-2478-11e9-8962-ccec0962b330.png">

#### PUT (one item)- Failure (400 Bad Request)
Updating an item to an array but missing an updated name with PUT method that returns an error under the URL: PUT/api/movies/:id as shown in a photo below:
<img width="882" alt="put_failmissing" src="https://user-images.githubusercontent.com/15648707/51967984-74c1a000-2479-11e9-9bd4-96ba8f59aec9.png">
