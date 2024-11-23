
function Hero(){
  const scrollToElement = (elementId)=>document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' })
    return (
      <div className='hero'  id='my-home'>
        <div className='hero-text'>
          <h1>Crafting Efficient Systems Through Precise</h1>
          <h1>And Intelligent Engineering</h1>
        </div>
        <div className='call-to-action' onClick={()=>scrollToElement('my-works')}> EXPLORE WORKS </div> 
      </div>
    )
}

export default Hero;