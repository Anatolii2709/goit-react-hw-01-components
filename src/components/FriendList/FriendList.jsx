import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { ListsStats } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListsStats className="friend-list">
      <FriendListItem friends={friends} />
    </ListsStats>
  );
};
