import PageInfo from '../../models/pageInfo';

describe('PageInfo tests', () => {
  beforeAll(() => {
    // global.window = Object.create(window);
    // const url = 'http://dummy.com';
    // Object.defineProperty(window, 'location', {
    //   value: {
    //     href: url,
    //   }
    // });
  });
  test('test example', () => {
    const pageInfo = new PageInfo();
    expect(pageInfo.href).toBe('http://localhost/');
  });
});
