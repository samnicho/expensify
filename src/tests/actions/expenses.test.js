import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should set up a removeExpense action obj", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123",
  });
});

test("should set up an editExpense obj", () => {
  const action = editExpense("123abc", { note: "test note update" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "test note update",
    },
  });
});

test("should set up addExpense action obj with provided values", () => {
  const expenseData = {
    description: "test desc",
    note: "test note",
    amount: 50,
    createdAt: 1000,
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should set up addExpense action obj with no provided values", () => {
  const action = addExpense();

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
