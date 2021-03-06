import { reactive, readonly, provide, inject } from 'vue';
import { ISelectProject } from "./interfaces/ISelectProject";
import { graphFetch } from './ajax';
import { ICurrentProject } from './interfaces/ICurrentProject';
import { IFetchProject } from './interfaces/IFetchProject';
import { ITask } from './interfaces/ITask';

interface State {
  projects: ISelectProject[];
  currentProject?: ICurrentProject;
}

export function initialState(): State {
  return {
    projects: []
  }
}

class Store {
  protected state: State;

  getState(): State {
    return this.state;
  }

  // initial state makes it easy to see in tests
  constructor(state: State = initialState()) {
    this.state = reactive(state);
  }

  async fetchProjects() {
    try {
      const url = 'http://localhost:4000/graphql';
      const query = `
        {
          projects{
            id
            name
          }
        }
      `
      const json: { data: { projects: ISelectProject[] } } = await graphFetch(url, query);
      console.log(json);
      this.state.projects = json.data.projects;
    } catch (error) {
      console.log(`Error when fetching: ${error}`);
    }
  }
  async fetchProject(id: string) {
    try {
      const url = 'http://localhost:4000/graphql';
      const query = `
        {
          project(id: ${id}){
            id
            name
            categories{
              id
              name
            }
            tasks{
              id
              name
              categories{
                id
              }
            }
          }
        }
      `
      const json: { data: { project: IFetchProject } } = await graphFetch(url, query);
      // console.log(json);
      this.state.currentProject = {
        id: json.data.project.id,
        name: json.data.project.name,
        categories: json.data.project.categories,
        tasks: json.data.project.tasks.reduce((acc, task) => {
          return {
            ...acc,
            [task.id]: {
              ...task,
              categoryId: task.categories.id
            }
          }
        }, {})
      };
      // console.log(this.state.currentProject);

    } catch (error) {
      console.log(`Error when fetching: ${error}`);
    }
  }
  async updateTask(id: string, categoryId: string) {
    try {
      const url = 'http://localhost:4000/graphql';
      // updateTask matches resolver function name and arg task matches arg task in resolver
      const query = `
        mutation {
          updateTask(task: { id: ${id}, categoryId: ${categoryId} }) {
            categories {
              id
            }
          }
        }
      `
      const json: { data: { updateTask: ITask } } = await graphFetch(url, query);
      this.state.currentProject.tasks[id].categoryId = parseInt(json.data.updateTask.categories.id);
    } catch (error) {
      console.log(`Error when fetching: ${error}`);
    }
  }
}

export const store = new Store();

export const provideStore = () => provide('store', store);

export const useStore = (): Store => inject('store');
