import { data } from "./initialData.js";

import { useState, useEffect, useCallback, useMemo, useId } from "react";

import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material";

import TodoList from "./components/TodoList/TodoList";
import Btn from "./components/Btn/Btn";
import Modal from "./components/Modal/Modal";
import BackDrop from "./components/BackDrop/BackDrop";
import ModalContent from "./components/ModalContent/ModalContent";
import Filter from "./components/Filter/Filter.js";
import SelectSort from "./components/SelectSort/SelectSort.js";

const StyledContainer = styled(Container)(() => ({
  height: "100vh",
  width: "100vw",
  paddingTop: "50px",
}));

const StyledTypography = styled(Typography)(() => ({
  fontWeight: 700,
  textAlign: "center",
  marginTop: "20px",
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

function App() {
  const [todos, setTodos] = useState(data);
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(null);
  const [statusOption, setStatusOption] = useState("Opened");
  const [collapsed, setCollapsed] = useState(true);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [editingTask, setEditingTask] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const id = useId();

  const sortedTodos = useMemo(() => {
    if (selectedSort) {
      return [...todos].sort((a, b) => a[selectedSort] - b[selectedSort]);
    }

    return todos;
  }, [selectedSort, todos]);

  const sortedAndFilteredTodos = useMemo(() => {
    return [...sortedTodos].filter((todo) =>
      todo.status.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [sortedTodos, filterValue]);

  useEffect(() => {
    if (collapsed) {
      const onEscClose = (e) => {
        if (e.code === "Escape") {
          setModalIsOpened(false);
          setCollapsed(true);
        }
      };

      window.addEventListener("keyup", onEscClose);

      return () => [window.removeEventListener("keyup", onEscClose)];
    }
  }, [collapsed]);

  const inputChangeHandler = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const editInputChangeHandler = useCallback((e) => {
    setEditingTask(e.target.value);
  }, []);

  const chooseStatusOption = useCallback((e) => {
    setStatusOption(e.target.value);
  }, []);

  const filterChangeHandler = (e) => {
    setFilterValue(e.target.value);
  };

  const createTodo = () => {
    if (inputValue.trim().length === 0) {
      setInputError("Task cannot be empty");
      return;
    }

    if (inputValue.trim().length > 250) {
      setInputError("No longer than 250 chars");
      return;
    }

    const todo = {
      id,
      status: statusOption,
      completed: false,
      task: inputValue.trim(),
      createdAt: Date.now(),
      updatedAt: null,
    };
    setTodos([...todos, todo]);
    setModalIsOpened(false);
    setInputValue("");
  };

  const deleteTodo = useCallback(
    (id) => {
      const remainingTodos = [...todos].filter((todo) => todo.id !== id);
      setTodos(remainingTodos);
    },
    [todos]
  );

  const selectTodoToEdit = useCallback(
    (id) => {
      const todo = [...todos].find((todo) => todo.id === id);
      setSelectedTodo(todo);
      setModalIsOpened(true);
      setEditingTask(todo.task);
    },
    [todos]
  );

  const submitEditTodo = () => {
    if (editingTask.trim().length === 0) {
      setInputError("Task cannot be empty");
      return;
    }

    if (editingTask.trim().length > 50) {
      setInputError("No longer than 50 chars");
      return;
    }

    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === selectedTodo.id) {
        todo.task = editingTask;
        todo.status = statusOption;
        todo.updatedAt = Date.now();
        if (todo.status !== "Done") {
          todo.completed = false;
        }
      }
      return todo;
    });
    setTodos(updatedTodos);
    setModalIsOpened(false);
  };

  const toggleCompleteHandler = useCallback(
    (id) => {
      const toggledTodos = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          if (todo.completed === true) {
            todo.status = "Done";
          } else {
            todo.status = statusOption;
          }
        }
        return todo;
      });
      setTodos(toggledTodos);
    },
    [todos, statusOption]
  );

  const openModal = useCallback(() => {
    setInputValue("");
    setInputError(null);
    setModalIsOpened(true);
    setSelectedTodo(null);
  }, []);

  const closeModal = useCallback(() => {
    setModalIsOpened(false);
  }, []);

  const sortTodos = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <StyledContainer>
      <StyledBox>
        <Filter onChange={filterChangeHandler} value={filterValue} />
        <SelectSort
          value={selectedSort}
          onChange={sortTodos}
          defaultValue="Sort by"
          options={[
            { value: "createdAt", name: "Date of creation" },
            { value: "updatedAt", name: "Date of update" },
          ]}
        />
      </StyledBox>
      <Btn text="Create" onClick={openModal} />
      {todos.length === 0 ? (
        <StyledTypography variant="h4">
          There are no TODOs yet. Create one!
        </StyledTypography>
      ) : (
        <TodoList
          toggleCompleteHandler={toggleCompleteHandler}
          todos={sortedAndFilteredTodos}
          deleteTodo={deleteTodo}
          selectTodoToEdit={selectTodoToEdit}
          selectedTodo={selectedTodo}
        />
      )}

      <BackDrop open={modalIsOpened}>
        <Modal>
          <ModalContent
            closeModal={closeModal}
            inputChangeHandler={inputChangeHandler}
            inputValue={inputValue}
            createTodo={createTodo}
            inputError={inputError}
            submitEditTodo={submitEditTodo}
            selectedTodo={selectedTodo}
            editInputChangeHandler={editInputChangeHandler}
            editingTask={editingTask}
            chooseStatusOption={chooseStatusOption}
          />
        </Modal>
      </BackDrop>
    </StyledContainer>
  );
}

export default App;
