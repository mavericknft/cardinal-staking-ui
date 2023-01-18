import { useStakePoolMetadataCtx } from 'providers/StakePoolMetadataProvider'

import Homepage from '../components/Homepage'
import StakePoolHome from './[stakePoolId]'

function Home() {
  const { stakePoolMetadata } = useStakePoolMetadataCtx()
  return (
    <div>
      {stakePoolMetadata ? (
        <StakePoolHome fetchedStakePoolData={stakePoolMetadata} />
      ) : (
        <Homepage />
      )}
    </div>
  )
}

export default Home
