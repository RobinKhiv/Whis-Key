import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <LoginForm />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

  it('renders without crashing', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot(); 
  });
});