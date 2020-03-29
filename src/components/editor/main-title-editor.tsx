import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setMainTitle } from './store/actions';

const MainTitleEditor: React.FC = () => {
  const dispatch = useDispatch()

  const { mainTitle } = useSelector((state: any) => state)
  return (
    <h3 id="pictureMainTitle">
      <input
        className="mainTitleEditor previewInput"
        value={ mainTitle }
        onChange={
          event => {
            dispatch(setMainTitle((event.target as HTMLInputElement).value));
          }
        }
        name="mainTitleEditor"
      />
    </h3>
  );
}

export default MainTitleEditor;
