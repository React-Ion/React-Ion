import React from 'react';
import _ from 'lodash';
import { setSelected } from '../actions/selected';
import Block from '../containers/Block';
import Text from '../containers/Text';
import Menu from '../containers/Menu';
import { download } from './api-methods';

const BLOCK_COMPONENT = 'Block';
const TEXT_COMPONENT = 'Text';
const MENU_COMPONENT = 'Menu';

export function getValue(key, id, routes) {
  let value;

  (function search(tree) {
    if (tree.id === id) {
      value = tree.props[key];
    } else { tree.children.forEach(child => search(child)); }
  }(routes[0]));

  return value;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function makeComponentName(string) {
  console.log(string.split(' '));
  return string.split(' ').map(word => capitalizeFirstLetter(word)).join('');
}

export function mapComponents(components, selected) {
  const mapped = [];

  _.each(components, (c) => {
    switch (c.componentType) {
      case BLOCK_COMPONENT:
        mapped.push(
          <Block
            setSelected={() => setSelected()}
            key={c.id}
            id={c.id}
            selected={selected}
            {...c.props}
          >
            {c.children ? mapComponents(c.children, selected) : null}
          </Block>,
        );
        break;
      case TEXT_COMPONENT:
        mapped.push(
          <Text
            setSelected={() => setSelected()}
            key={c.id}
            id={c.id}
            selected={selected}
            {...c.props}
          >
            {c.children ? mapComponents(c.children, selected) : null}
          </Text>,
        );
        break;
      case MENU_COMPONENT:
        mapped.push(
          <Menu
            setSelected={() => setSelected()}
            key={c.id}
            id={c.id}
            selected={selected}
            {...c.props}
          />,
          );
        break;
      default:
        break;
    }
  });

  return mapped;
}

export function formTreeData(routes) {
  const newRoutes = _.cloneDeep(routes);
  let totalComponents = 0;
  const countComponents = (route) => {
    route.parent = null;
    if (route.componentType !== 'Text') { totalComponents += 1; }
    route.children.forEach(child => countComponents(child));
  };

  newRoutes.forEach(route => countComponents(route));

  const treeData = {
    total: totalComponents,
    router: 1,
    routes: newRoutes,
  };

  download(treeData);
}
