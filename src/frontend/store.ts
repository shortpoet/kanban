import { reactive, readonly } from 'vue';
import { ISelectProject } from './types';

interface State {
  projects: ISelectProject[]
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
      const result = await window.fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `
            {
              projects{
                id
                name
              }
            }
          `
        })
      })

      const json: { data: { projects: ISelectProject[] } } = await result.json();
      console.log(json);
      this.state.projects = json.data.projects;

    } catch (error) {
      console.log(`Error when fetching: ${error}`);

    }
  }
}

export const store = new Store();
