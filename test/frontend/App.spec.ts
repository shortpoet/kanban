import { mount, flushPromises } from '@vue/test-utils';
import App from '../../src/frontend/App.vue';

// isometric-fetch library is an option that would give provide fetch for both browser and node

const mockProjectResponse = {
  projects: [
    {
      id: '1',
      name: 'Project'
    }
  ]
}
const mockProjectsResponse = {
  project: {
    id: '1',
    name: 'Project',
    categories: [
      {
        id: '1',
        name: 'My Category'
      }
    ],
    tasks: []
  }
}

let mockResponse;
// global['fetch'] = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
//   })
// );

// beforeEach(() => {
//   fetch.mockClear();
// });

beforeAll(() => {
  // if DOM = window
  // if NODE = process
  global['fetch'] = jest.fn((url: string) => ({
    json: () => ({
      data: mockResponse
    })
  }))
})


describe('App.vue', () => {
  test('display', async () => {
    mockResponse = mockProjectsResponse;
    const wrapper = mount(App);
    await flushPromises();

    console.log(wrapper.html());
    mockResponse = mockProjectResponse;
    const sel = wrapper.find('select');
    console.log(sel.html());

    sel.setValue('1');
    await flushPromises();
    console.log(wrapper.html());


    expect(wrapper.html()).toContain('My Category');
  })
})