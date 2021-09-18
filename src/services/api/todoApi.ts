import { API } from 'src/lib';

class TodoAPI {
  async getDetail(params: TodoAPI.Param.Getdetail) {
    return API.get(`/todos/${params.id}`);
  }

  async getList() {
    return API.get<Todo.State['TodoDetail'][]>('/todos');
  }

  async createNewOne(body: TodoAPI.Request.Body.Create) {
    return API.post<Todo.State['TodoDetail'][]>('/todos', body);
  }

  async updateDetail(params: TodoAPI.Param.Getdetail, body: TodoAPI.Request.Body.Update) {
    return API.put<Todo.State['TodoDetail'][]>(`/todos/${params.id}`, body);
  }

  deteteSingle() {

  }
}

export const todoApi = new TodoAPI();
