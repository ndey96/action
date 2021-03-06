import {cashay} from 'cashay';
import {MEETING, MIN_SORT_RESOLUTION, TEAM_DASH, USER_DASH} from 'universal/utils/constants';
import checkDragForUpdate from 'universal/dnd/checkDragForUpdate';

/**
 * Assuming the whole column is a single drop target, we need to figure out where the drag source should go.
 * To do that, the monitor provides an array of components which are all the cards
 * From there, we can calculate the center Y for each card.
 * Based on the center Y and the sourceOffsetY, we can determine where the drag source currently is
 * A card has a do-nothing zone of the drag source height + 1/2 of the card above + 1/2 of the card below
 * if it exceeds that zone, we update
 *
*/

const areaOpLookup = {
  [MEETING]: 'meetingUpdatesContainer',
  [USER_DASH]: 'userColumnsContainer',
  [TEAM_DASH]: 'teamColumnsContainer'
};

export default function handleProjectHover(targetProps, monitor) {
  const {area, dragState, projects, queryKey, status: targetStatus} = targetProps;
  const sourceProps = monitor.getItem();
  const {status: sourceStatus} = sourceProps;
  const sortField = area === USER_DASH ? 'userSort' : 'teamSort';
  if (targetStatus !== sourceStatus) {
    // we don't want the minY and minX to apply if we're hovering over another column
    dragState.handleEndDrag();
  }
  const updatedVariables = checkDragForUpdate(monitor, dragState, projects, sortField, true);
  if (!updatedVariables) return;
  const {prevItem, updatedDoc: updatedProject} = updatedVariables;
  const variables = {updatedProject};

  if (sourceStatus !== targetStatus) {
    updatedProject.status = targetStatus;
    sourceProps.status = targetStatus;
  }
  if (prevItem && Math.abs(prevItem[sortField] - updatedProject[sortField]) < MIN_SORT_RESOLUTION) {
    variables.rebalance = targetStatus;
  }
  const op = areaOpLookup[area];
  const options = {
    ops: {
      [op]: queryKey
    },
    variables
  };
  cashay.mutate('updateProject', options);
}
