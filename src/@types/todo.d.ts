// types enscapsulation for the type of related todo
declare namespace Todo {
  type Status = 'DONE' | 'DOING';

  type State = {
    TodoDetail: {
      id: string;
      title: string;
      description: string;
      status: Status;
    }
  };
}

// type for the api
declare namespace TodoAPI {

  namespace Param {
    type Getdetail = {
      id: string
    };
  }

  namespace Response {

  }

  namespace Request {
    namespace Body {
      type Update = Todo.State['TodoDetail'];
      type Create = Todo.State['TodoDetail'];
    }
  }
}
