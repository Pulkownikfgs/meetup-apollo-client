import { FC, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Toggle } from './Toggle';

export interface JsonTreeProps {
  label?: string;
  value: unknown;
  startCollapsed?: boolean;
}

const List = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  marginLeft: 16
});

const ListItem = styled('li')({
  listStyleType: 'none'
});

export const JsonTree: FC<JsonTreeProps> = ({ label, value, startCollapsed }) => {
  const [expanded, setExpanded] = useState(!startCollapsed);

  if (label === '__typename') {
    return null;
  }

  let content = null;
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    content = <span>{value}</span>;
  } else if (Array.isArray(value)) {
    content = (
      <>
        {label && <Toggle value={expanded} onChange={setExpanded} />}
        {expanded && (
          <List>
            {value.map((item, index) => (
              <JsonTree key={index} label={String(index)} value={item} />
            ))}
          </List>
        )}
      </>
    );
  } else if (typeof value === 'object' && value) {
    content = (
      <>
        {label && <Toggle value={expanded} onChange={setExpanded} />}
        {expanded && (
          <List>
            {Object.entries(value).map(([key, item]) => (
              <JsonTree key={key} label={key} value={item} />
            ))}
          </List>
        )}
      </>
    );
  }

  return (
    <ListItem>
      {label && <b>{label}: </b>}
      {content}
    </ListItem>
  );
};
