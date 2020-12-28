import moment from 'moment';
import {
  setTextFilter,
  setEndDate,
  setStartDate,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";

test("should set up a text filter action object with text", () => {
  expect(setTextFilter("test text")).toEqual({
    type: "SET_TEXT_FILTER",
    text: "test text",
  });
});

test("should set up a text filter action object with no text", () => {
  const action = setTextFilter("");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("should generate set start date action object", () => {
  expect(setStartDate(moment(0))).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate set end date action object", () => {
  expect(setEndDate(moment(0))).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should generate action object for sort by date", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE",
  })
});

test("should generate action object for sort by amount", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT"
  })
});
