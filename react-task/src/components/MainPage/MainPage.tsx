import "./MainPage.scss"
export const MainPage = () => {
    return (
        <>
        <div className="header-conteiner">
        <h1 className="header">Демо-версия</h1>
        <p className="text">Lorem ipsum dolor,
          sit amet consectetur adipisicing elit.
          Impedit sit ut exercitationem accusantium non!
          Ducimus ratione quos ad quasi esse dolore aperiam?
          Illum nobis suscipit quis inventore earum velit explicabo?
          </p>
          <button className='click-button'>Попробовать бесплатно</button>
      </div>
      <img src="/images/comp.svg" alt="computer" className='computer-image' />
        </>
    )
    
}

export default MainPage
