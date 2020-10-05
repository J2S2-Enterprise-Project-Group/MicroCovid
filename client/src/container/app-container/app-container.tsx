/**
 * @author Shannon Phu <shannon.phu@sjsu.edu>
 */
import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCallback } from "react";
import { HeaderBar } from "../../components/header/header-bar";
import { API_URL } from "../../config/endpoints";

interface IAppContainer {

}

interface Todos {
	id: string,
	text: string
}

export const AppContainer: React.FC<IAppContainer> = () => {
    const [todos, setTodos] = useState<Todos[]>([] as any); // List of tweets to be displayed

	/**
	 * This function handles fetching of the tweets.
	 */
	const getListOfTodos = useCallback(async () => {
        await axios.get(API_URL.LIST_TODOS)
			.then((response) => {
                setTodos(response.data)
			});
    }, [setTodos]);

	/**
	 * This useEffect helps to load the initial tweets
	 */
	useEffect(() => {
        getListOfTodos();
    }, [getListOfTodos]);

	return (
		<>
			<HeaderBar />
			<Container maxWidth="sm">
                {todos.map((elem, i) => <div key={i}>{elem.text}</div>)}
			</Container>
		</>
	);
}
