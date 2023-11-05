import Skeleton from '../../../components/Skeleton';
import './favoriteSkeleton.scss';

function FavoriteSkeleton() {

    return (
        <div className='favorite-skeleton-container'>
            <div>
                <Skeleton height={25} width={15} busyIndicator={true}/>
                <Skeleton height={1} width={10} />
                <Skeleton height={2} width={15} />
                
            </div>
            <div>
                <Skeleton height={25} width={15} busyIndicator={true}/>
                <Skeleton height={1} width={10} />
                <Skeleton height={2} width={15} />
                
            </div>
            <div>
                <Skeleton height={25} width={15} busyIndicator={true}/>
                <Skeleton height={1} width={10} />
                <Skeleton height={2} width={15} />
            </div>


            <div>
                <Skeleton height={25} width={15} busyIndicator={true}/>
                <Skeleton height={1} width={10} />
                <Skeleton height={2} width={15} />
                
            </div>


            <div>
                <Skeleton height={25} width={15} busyIndicator={true}/>
                <Skeleton height={1} width={10} />
                <Skeleton height={2} width={15} />
                
            </div>


            <div>
                <Skeleton height={25} width={15} busyIndicator={true}/>
                <Skeleton height={1} width={10} />
                <Skeleton height={2} width={15} />
                
            </div>
        </div>
    )
  }
  
  export default FavoriteSkeleton
  