import "./MainPage.scss"
export const MainPage = () => {
    return (
        <>
         <div className="main-container">
        <div className="header-conteiner">
        <h2 className="header">Демо-версия</h2>
        <p className="text">Lorem ipsum dolor,
          sit amet consectetur adipisicing elit.
          Impedit sit ut exercitationem accusantium non!
          Ducimus ratione quos ad quasi esse dolore aperiam?
          Illum nobis suscipit quis inventore earum velit explicabo?
          </p>
          <button className='click-button'>Попробовать бесплатно <img src="/images/up-arrow.png" alt="arrow" className="icon-arrow" /></button>
      </div>
      <img src="/images/comp.svg" alt="computer" className='computer-image' />
      </div>
        </>
    )
    
}

export default MainPage
