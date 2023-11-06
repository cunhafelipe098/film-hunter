import Skeleton from '../../../components/Skeleton';

function FavoriteSkeleton() {

    return (
        <div>
            <Skeleton height={25} width={15} busyIndicator={true}/>
            <Skeleton height={1} width={10} />
            <Skeleton height={2} width={15} />   
        </div>
    )
  }
  
  export default FavoriteSkeleton
  