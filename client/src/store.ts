import { reactive, readonly } from 'vue';
import { ISelectProject } from "./interfaces/ISelectProject";
import { graphFetch } from './ajax';
import { ICurrentProject } from './interfaces/ICurrentProject';
import { IFetchProject } from './interfaces/IFetchProject';

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
  async fetchProject(id) {
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
            [task.id]: task
          }
        }, {})
      };
      // console.log(this.state.currentProject);

    } catch (error) {
      console.log(`Error when fetching: ${error}`);
    }
  }
}

export const store = new Store();
