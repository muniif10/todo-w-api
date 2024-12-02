import request from "supertest";
import app from '../app'
import { createTask, clearTasks } from '../models/taskModel'

// describe('Task Model',()=>{
//     it('should create task with specific structure',async ()=>{

//     })
// })

describe('Task API', () => {
    beforeEach(() => {
        clearTasks();
    })
    it('should create a new task', async () => {
        const response = await request(app)
            .post('/tasks')
            .send({ title: 'simple string' });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe('simple string');
    });

    it("should create a task with 'empty' title when title is not given", async () => {
        const response = await request(app).post('/tasks')
            .send();
        expect(response.body).toHaveProperty("title", "empty");
    })

    it('should get all tasks', async () => {
        createTask("task1");
        createTask("task2");
        const response = await request(app)
            .get('/tasks');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(2);
    })

    it('should get a task specified by id', async () => {
        const task = createTask("task1");

        const response = await request(app).get(`/tasks/${task.id}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("title", "task1");
    })

    it('should return status 404 when given id does not exist', async () => {
        const response = await request(app).get(`/tasks/${-1}`);
        expect(response.body).toHaveProperty("message", "No task found with that id");
        expect(response.status).toBe(404);
    })

    it('should update a task on field given', async () => {
        const task = createTask("task1");
        expect(task.title).toBe("task1");
        expect(task.id).toBe(task.id);
        const response = await request(app).put(`/tasks`).send({ id: task.id, title: "new_task1", completed: false });
        expect(response.body.title).toBe("new_task1");
        expect(response.status).toBe(200);
    })

    it('should return 404 when id given does not exist', async () => {
        const response = await request(app).put(`/tasks`).send({ id: -1, title: "should fail", completed: false })
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("message", "No task found with that id")
    })

    it("should delete a task given the id", async () => {
        const task = createTask("task1");
        const response = await request(app).delete(`/tasks/${task.id}`)
        expect(response.status).toBe(201);
    })

    it("should return 404 when id given does not exist", async () => {
        const response = await request(app).delete(`/tasks/${-1}`);
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("message")
    })
});
