import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'


import './ProjectAnimation.css';
const cards = [
    {
      id:'1',
      title:'Stopwatch',
      image:'https://mir-s3-cdn-cf.behance.net/projects/404/a6a604151846295.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.png',
      discription:'Start timer button to start the timer. Stop timer button to stop the timer. Reset button to reset the timer.',
      gitHublink:'https://github.com/pydamnaidudogga/Stopwatch'

    },
    
    
    
    {
      id:'2',
      title:'Drop Down',
      image:'https://cdn.sanity.io/images/qyzm5ged/blog/506d0e047e8e40b4e67fdcddf28b7f2b1fffc8dd-2138x1200.png',
      discription:'On hovering of the button, show the drop down items. The dropdown component should receive the items array to display the items in the list. On click of an option in dropdown list, close the dropdown.',
      gitHublink:'https://github.com/pydamnaidudogga/React-Dropdown'

    },
    
    {
      id:'3',
      title:'To-Do List',
      image:'https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png',
      discription:'Create a task with date,category and Discription. The tasks are stored in Mongodb database. Delete the tasks after completion.',
      gitHublink:'https://github.com/pydamnaidudogga/TODO-List'

    },
    {
      id:'4',
      title:'Meals App',
      image:'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/b1/ff/62/b1ff623a-7bf8-83e8-c15d-17fc0017fd7a/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg',
      discription:'Search option to get the meals list. Suggestions previous search list. Make any meal to your favourite. You can delete the meals from favorites list.',
      gitHublink:'https://github.com/pydamnaidudogga/Meal-Finde'

    },
    {
      id:'5',
      title:'CSV Viewer',
      image:'https://play-lh.googleusercontent.com/nI4Y6Dcxxy6nbbyCBrdmUJA_W4Hg9jVJ82ARi9gS0u96gYbeU3Y7FmbxdxC4BO39ib4',
      discription:'Home page to upload the CSV file. Display a list of all uploaded csv files on home page. There is a search box which searches on the front and also search each column and short options. Validation on the front end and server side on being able to upload only csv type of files.',
      gitHublink:'https://github.com/pydamnaidudogga/CSV-Viewer'

    },
    {
      id:'6',
      title:'Ecommerce API',
      image:'https://www.axiatadigitallabs.com/wp-content/uploads/2021/12/API-Blog-Thumbnail@2x.png',
      discription:'POST request to  create a product. DELETE request to delete a product. UPDATE request to update a product. GET request to get the products list.',
      gitHublink:'https://github.com/pydamnaidudogga/Ecommerce-API'

    },
    {
      id:'7',
      title:'Polling System API',
      image:'https://www.axiatadigitallabs.com/wp-content/uploads/2021/12/API-Blog-Thumbnail@2x.png',
      discription:'Create a Question and Options to it. Adding votes to Options. Delete a Question(If it’s options have no votes). Delete an option(if the option have no votes). View a question with it’s options and all the votes given to it',
      gitHublink:'https://github.com/pydamnaidudogga/PollingSystemAPI'

    },
    {
      id:'8',
      title:'Placement Cell App',
      image:'https://ipubuzz.com/wp-content/uploads/2020/08/placement2.jpg',
      discription:'SignUp and SignIn pages only for employees. List of students,Add new student. List of Interviews,Form to create an interview. Allocate a student to an interview. Select an interview to view the list of all students and mark a result status from the list page itself.',
      gitHublink:'https://github.com/pydamnaidudogga/Placement-Cell-App'

    },
    
    {
      id:'9',
      title:'Vaccine Rigister API',
      image:'https://www.axiatadigitallabs.com/wp-content/uploads/2021/12/API-Blog-Thumbnail@2x.png',
      discription:'User Rigister and SignIn.Admin logIn username:Pydamnaidu and password:pydamnaidu@dogga.Schemas for Admin, slots and User.Slot book for vaccine.Update slot.get list of all users who are rigisterd for the vaccine',
      gitHublink:'https://github.com/pydamnaidudogga/Backend_API_Vaccine_Rigister'

    }
  ]
















// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i=> ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -100 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function ProjectAnimation() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
    const trigger = vx > 0.2 // If you flick hard enough it should trigger the card to fly out
    if (!active && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = active ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!active && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <section style={{overflow:'hidden',flexDirection:'row',alignItems:'normal',justifyContent:'center'}} >
        <h1>Projects</h1>
     
   
    
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className='deck' key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
            
            
            <img src={cards[i].image} alt='heading' />
            <h6>{cards[i].title}</h6>
            <div className='project_content'>
              <p>{cards[i].discription}</p>
              <a href={cards[i].gitHublink} className='viewCode' >view code</a>
            </div>
           

          </animated.div>
        </animated.div>
      ))}
     </section>
  )
}


export default ProjectAnimation;
