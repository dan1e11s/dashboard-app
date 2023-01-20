import { JobPosition } from './JobPosition';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisiblePositions } from 'store/positions/position-selectors';
import { addFilter } from 'store/filters/filter-actions';
import { selectFilter } from 'store/filters/filter-selectors';

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilter);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  const handleFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition key={item.id} handleFilter={handleFilter} {...item} />
      ))}
    </div>
  );
};

export { JobList };
