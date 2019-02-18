import store from 'stores';

describe('HomeStore [Store]', () => {
  it('should have an initial state of {status: \'enabled\'}', () => {
    expect(store.getState().status).to.be.equal('enabled');
  });
});
