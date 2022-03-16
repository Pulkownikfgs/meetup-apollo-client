import { FC, useMemo, forwardRef } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

const ListItemLink: FC<ListItemLinkProps> = (props: ListItemLinkProps) => {
  const { icon, primary, to } = props;

  const renderLink = useMemo(
    () =>
      forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

export const Sidebar: FC = () => {
  return (
    <List>
      <ListItemLink to='/' primary='Home' />
      <ListItemLink to='/1-non-normalised' primary='1. Non-normalised cache' />
    </List>
  );
};
