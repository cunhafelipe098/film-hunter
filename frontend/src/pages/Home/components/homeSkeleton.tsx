import Skeleton from '../../../components/Skeleton';
import './homeSkeleton.scss';

function HomeSkeleton() {

    return (
      
        <div className='home-skeleton-container'>
            <div>
                <Skeleton height={2} width={10} />
                <Skeleton height={8} width={15}/>
                <Skeleton height={1} width={10} />
                <Skeleton height={2} width={13} />
                <Skeleton height={3} width={10} />
            </div>

            <div>
                <Skeleton height={25} width={15} busyIndicator={true}/>
            </div>
        </div>
     
    )
  }
  
  export default HomeSkeleton
  