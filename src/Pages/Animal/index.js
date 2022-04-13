import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimal } from '../../Redux/action/actions';
import AnimalItem from './../../Components/AnimalItem/index';
import Loading from './../../Components/Loading/Loading';
import Pagination from './../../Components/Pagination/index';
import './animal.scss';
const Animal = () => {
  const stateAnimal = useSelector((state) => state.animalReducer);
  const stateUser = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stateUser.token) dispatch(getAnimal(stateUser.token, 1));
  }, [dispatch, stateUser.token]);

  const handleNextPagination = () => {
    if (stateUser.token)
      dispatch(
        getAnimal(
          stateUser.token,
          Number(stateAnimal.pagination.current_page) + 1
        )
      );
  };

  const handlePrevPagination = () => {
    if (stateUser.token)
      dispatch(
        getAnimal(
          stateUser.token,
          Number(stateAnimal.pagination.current_page) - 1
        )
      );
  };

  return (
    <>
      {stateAnimal.isLoading ? (
        <Loading />
      ) : (
        <div className="animal">
          <div className="container d-flex">
            {stateAnimal.animalList?.length > 0
              ? stateAnimal.animalList.map((item, key) => (
                  <div className="col-2" key={key}>
                    <AnimalItem animal={item} />
                  </div>
                ))
              : ''}
          </div>

          <Pagination
            page={stateAnimal.pagination.current_page}
            onNextPagination={handleNextPagination}
            onPrevPagination={handlePrevPagination}
          />
        </div>
      )}
    </>
  );
};

export default Animal;
