import logo from '../../access/images/logo.png';

export default function RightContainer () {
  return (
    <div className='rightContainer'>
        <div className='rightContent'>
          <div className='rightContentLogo'>
            <img src={logo} alt='logo' />
          </div>
          <h1 className='rightContentTitle'>Welcome to <br /> Bussiness</h1>
          <p className='rightContentDescription'>Lorem ipsum dolor sit amet consectetur. Sapien enim mauris eu neque vitae. Enim velit sed et ac maecenas. Etiam diam sem suspendisse viverra porta egestas ultrices quis massa.</p>
        </div>
      </div>
  )
}