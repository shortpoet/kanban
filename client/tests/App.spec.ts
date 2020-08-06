import { mount, flushPromises } from '@vue/test-utils';
import App from '../src/App.vue';

// isometric-fetch library is an option that would give provide fetch for both browser and node

const mockProjectsArrayResponse = {
  projects: [
    {
      id: '1',
      name: 'Project'
    }
  ]
}
const mockProjectResponse = {
  project: {
    id: '1',
    name: 'Project',
    categories: [{
      id: '1',
      name: 'My Category'
    }],
    tasks: []
  }
}

let mockResponse;

beforeAll(() => {
  // if DOM = window
  // if NODE = process
  // global['fetch'] = jest.fn((url: string) => ({
  //   json: () => ({
  //     data: mockResponse
  //   })
  // }))
  // https://stackoverflow.com/questions/49027145/mock-a-global-object-with-jest-and-typescript
  (global['fetch'] as any) = (url: string) => ({
    json: () => ({
      data: mockResponse
    })
  })
})


describe('App.vue', () => {
  test('display', async () => {

    mockResponse = mockProjectsArrayResponse;
    const wrapper = mount(App);
    await flushPromises();

    mockResponse = mockProjectResponse;
    wrapper.find('select').setValue('1');
    await flushPromises();

    expect(wrapper.html()).toContain('My Category');
  })
})