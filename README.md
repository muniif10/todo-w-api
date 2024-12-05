# todo-w-api
This is my small project to create a Todo list API that implements Jester for unit testing. The coverage given by jester is 100% but I haven't produced the frontend to interact with this little API (it is just ExpressJS).

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run server.ts
```

To use:

The '/tasks' is avaiable to use with the following query:

HTTP POST ``` /tasks```

Create a new task with the title data of type string.

Accepts JSON body:

```json
{"title": "data" }
```
Returns JSON of task:

```json
{"id": 1, "title":"Task1", "completed": false} 
```

HTTP GET ``` /tasks/```

Return a JSON array of all task created.

Accepts None.

Returns JSON array of tasks:
```
[{"id": 1, "title":"Task1", "completed": false} ,...]
```

HTTP GET ```/tasks/<query_id_here>```

Accepts ```query_id_here``` in the API parameter of type ```number```.

Returns JSON of the id specified task object.
```json
{"id": 1, "title":"Task1", "completed": false} 
```

HTTP PUT ```/tasks/```
Accepts JSON body:
```json
{"id":id}
```
Returns JSON of the id specified task object that has been updated.
```json
{"id": 1, "title":"Task1", "completed": true} 
```


This project was created using `bun init` in bun v1.1.32. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
