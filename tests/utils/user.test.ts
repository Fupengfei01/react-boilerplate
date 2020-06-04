import { user } from '../../src/utils';

test('use should logged in', () => {
  expect(user.isLogin()).toBe(true);
});
