import * as React from 'react';
import { Link } from 'react-router';

export function Layout(props: any) {
  return (
    <div>
      <h4>CF-MUI</h4>
      <ul>
        <li>
          <Link to="/button">Button</Link>
        </li>
        <li>  
          <Link to="/cards">Cards</Link>
        </li>
        <li>
          <Link to="/cells">Cells</Link>
        </li>
        <li>
          <Link to="/dialog">Dialog</Link>
        </li>
        <li>
          <Link to="/flex">Flex</Link>
        </li>
        <li>
          <Link to="/icon">Icon</Link>
        </li>
        <li>
          <Link to="/footer">Footer</Link>
        </li>
        <li>
          <Link to="/page">Wrap</Link>
        </li>
        <li>
          <Link to="/wall">Wall</Link>
        </li>
        <li>
          <Link to="/space">Space</Link>
        </li>
        <li>
          <Link to="/toast">Toast</Link>
        </li>
        
        
      </ul>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default Layout;
