import React from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Carrusel } from '../components/Carrusel/Carrusel';

export const MenuPage = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
      }
      const scrollTo = () =>  {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }
      const scrollToWithContainer = () =>  {
    
        let goToContainer = new Promise((resolve, reject) => {
    
          Events.scrollEvent.register('end', () => {
            resolve( () => {} );
            Events.scrollEvent.remove('end');
          });
    
          scroller.scrollTo('scroll-container', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    
        });

        goToContainer.then(() =>
        scroller.scrollTo('scroll-container-second-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
        }));
    }

    let nav:any = document.getElementById('miNavbar');
    const anchoNav: number = nav.clientWidth



  return (
    <div>
      <h2 className='text-5xl txt' >Main</h2>
      <p  className='text-xl txt' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore corrupti, a necessitatibus porro voluptatem, impedit corporis iste facere dolorem labore tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias autem eius quod inventore, excepturi sit quae, tempora omnis saepe assumenda aspernatur est in vel, aliquam aliquid eos quidem consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ab vero itaque deleniti tenetur repellendus illum, voluptatum earum neque inventore, veniam debitis mollitia reprehenderit? Quas modi quod nobis consequatur aut! Laudantium fugit quas nostrum incidunt rem ab repellat fugiat. Dolores numquam at hic excepturi deserunt sit eligendi corporis, illum exercitationem delectus id, pariatur, laborum dolor reprehenderit nihil impedit? Nobis, reiciendis vero!</p>
  
      <nav id='miNavbar' className="fixed inset-x-0 bottom-0 bg-lime-400 nav1">
        <ul className="flex flex-row  min-h-fit gap-7 items-center w-max">
          <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li>
          <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link></li>
          <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></li>
          <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Test 4</Link></li>
          <li><Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={500} delay={1000}>Test 5 ( delay )</Link></li>
          <li><Link activeClass="active" className="test6" to="anchor" spy={true} smooth={true} duration={500}>Test 6 (anchor)</Link></li>
          <li> <a onClick={() => scroll.scrollTo(100)}>Scroll To 100!</a></li>
          <li> <a onClick={() => scroll.scrollToBottom()}>Scroll To Bottom</a></li>
          <li> <a onClick={() => scroll.scrollMore(2)}>Scroll 2 More!</a></li>
          <li> <a onClick={() => scroll.scrollMore(1000, { delay: 1500 })}>Scroll 1000 More! ( delay ) </a></li>
          <li><Link activeClass="active" className="test8" to="same" spy={true} smooth={true} duration={500}>Same target</Link></li>
          <li><Link activeClass="active" className="test9" to="same" spy={true} smooth={true} duration={500}>Same target</Link></li>
          <li><a className="" href="test1" onClick={() => scrollTo()} >Scroll to element</a></li>
          <li><Link className="test1" to="test1" onClick={() => scrollToWithContainer()} >Scroll to element within container</Link></li>
        </ul>
        <button className='btn' onClick={() => nav.scroll(anchoNav, 0)}> + </button>
        <button className='btn2' onClick={() => nav.scroll(0, 0)}> - </button>

      </nav>
      

        <Element name="test1" className="element" >
          <p className='tit1' >test 1</p>
          <div className="w-full h-full bg-gray-200 relative bottom-16 opacity-70" />
      </Element>

        <Element name="test2" className="element">
          <p className='tit1' >test 2</p>
      </Element>

        <Element name="test3" className="element">
          <p className='tit1' >test 3</p>
      </Element>

        <Element name="test4" className="element">
          <p className='tit1' >test 4</p>
      </Element>

        <Element name="test5" className="element">
          <p className='tit1' >test 5</p>
      </Element>

        <div id="anchor" className="element">
          test 6 (anchor)
      </div>

        <Link activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
          Go to first element inside container
      </Link>

        <Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
          Go to second element inside container
      </Link>

        <Element name="test7" className="element" id="containerElement" style={{
          position: 'relative',
          height: '200px',
          overflow: 'scroll',
          marginBottom: '100px'
        }}>

          <Element name="firstInsideContainer" style={{
            marginBottom: '200px'
          }}>
            first element inside container
        </Element>

          <Element name="secondInsideContainer" style={{
            marginBottom: '200px'
          }}>
            second element inside container
        </Element>
        </Element>


        <Element id="same" className="element">
          Two links point to this
      </Element>


        <Element name="scroll-to-element" className="element">
          Scroll to element
      </Element>

        <Element className="element" id="scroll-container" style={{
          position: 'relative',
          height: '200px',
          overflow: 'scroll',
          marginBottom: '100px'
        }}>

          <Element name="scroll-container-first-element" style={{
            marginBottom: '200px'
          }}>
            first element inside container
        </Element>

          <Element name="scroll-container-second-element" style={{
            marginBottom: '200px'
          }}>
            second element inside container
        </Element>
        </Element>

        <a onClick={scrollToTop}>To the top!</a>


    </div>
  )
}
