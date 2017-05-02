import * as React from 'react';
import { Link } from 'react-router';

export function Layout(props: any) {
  return (
    <div>
      <h4>CF-MUI</h4>
      <ul>
        <li>
          <Link to='/button'>Button</Link>
        </li>
        <li>
          <Link to='/list'>List</Link>
        </li>
        <li>
          <Link to='/input'>Input</Link>
        </li>
      </ul>
    </div>
  );
}

export default Layout;
