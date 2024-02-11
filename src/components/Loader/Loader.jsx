import { ColorRing } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'components/redux/selectors';

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    isLoading && (
      <StyledLoader
        style={{
          display: isLoading ? 'flex' : 'none',
        }}
      >
        <ColorRing
  visible={true}
  height="0"
  width="0"
/>
      </StyledLoader>
    )
  );
};