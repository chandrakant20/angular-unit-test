import { Todocomponent } from "./todo.componet";
import { TodoService } from "./todo.service";

describe("TodoComponent", () => {
  let componet: Todocomponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    componet = new Todocomponent(service);
  });

  it("should set todos property with the items returened from http server", () => {
    spyOn(service, "getTodos").add.callFake
  });
});
