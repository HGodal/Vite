import { useParams } from 'react-router-dom'

function UrlTest() {
  const match = useParams()

  return (
    <div className='container'>
      <br />
      <br />
      <h1 className='header center orange-text'>God D A M N!</h1>
      <div className='row center'>
        <h5 className='header col s12 light'>
          {match.lolId ? `You just entered "${match.lolId}"!` : 'Yoo'}
        </h5>
      </div>
    </div>
  )
}

export default UrlTest
