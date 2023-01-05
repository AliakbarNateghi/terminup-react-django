import React, { component, CSSProperties, FunctionComponent, useState, useEffect, useContext } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Button from "../components/buttons";
import Square from "../components/label";
import Hours from "../components/hours";
import Days from "../components/days";
import Border from "../components/border";
import Additional from "../components/additional";
import AuthContext from "../context/AuthContext";
import Select from 'react-select';
import jwt_decode from "jwt-decode";


const HomePage = () => {

  let { authTokens, logoutUser } = useContext(AuthContext)
  const [userinfo, setUserinfo] = useState([])
  const [college, setCollege] = useState([])
  const [ws, setWs] = useState([])
  const [ed, setEd] = useState([])
  const [course, setCourse] = useState([])
  const [choised, setChoised] = useState([])
  const [courseChoised, setCourseChoised] = useState([])
  const [temporaryChoised, setTemporaryChoised] = useState([])
  const [deleteChoised, setDeleteChoised] = useState([])
  const [boolean, setBoolean] = useState(false)
  const [studentChoise, setStudentChoise] = useState([])
  
  let tempUser = jwt_decode(localStorage.getItem('authTokens'))
  let user_id = tempUser.user_id

  let choosedCollege = []

  const onload = (e) => {
      e.preventDefault();
  }

  const fetchData = async () => {
      try {

          const collegeResult = await axios.get('http://127.0.0.1:8000/api/college/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
          });
          if(collegeResult.status === 200) {
            setCollege(collegeResult.data);
          } else if(collegeResult.statusText === 'Unauthorized') { 
            // logoutUser();
          }

          const courseResult = await axios.get('http://127.0.0.1:8000/api/course/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
          });
          if(courseResult.status === 200) {
            setCourse(courseResult.data);
          } else if(courseResult.statusText === 'Unauthorized') { 
            // logoutUser();
          }

          const wsResult = await axios.get('http://127.0.0.1:8000/api/ws-list/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
          });
          if(wsResult.status === 200) {
            setWs(wsResult.data);
          } else if(wsResult.statusText === 'Unauthorized') { 
            // logoutUser();
          }

          const edResult = await axios.get('http://127.0.0.1:8000/api/ed-list/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
          });
          if(edResult.status === 200) {
            setEd(edResult.data);
          } else if(edResult.statusText === 'Unauthorized') { 
            // logoutUser();
          }
          
          const choiseResult = await axios.get('http://127.0.0.1:8000/api/choise/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
          });
          if(choiseResult.status === 200) {

            setStudentChoise(choiseResult.data)
      
          } else if(choiseResult.statusText === 'Unauthorized') { 
            // logoutUser();
          }

      } catch (err) {
          console.log(err);
      }
  };

  useEffect(() => {
      fetchData();
  }, []);
  // console.log('college :', college);
  // console.log('course :', course);
  // console.log('ws :', ws);
  // console.log('ed :', ed);
  // console.log('studentChoise :', studentChoise);
  // console.log('choised :', choised)
  // console.log('userinfo :', userinfo);

  const collegeClick = (event) => {
    choosedCollege = [];
    course.map(courseItem => event.value === courseItem.college ? choosedCollege.push(courseItem) : 'No founded course to show!')
    setChoised(choosedCollege)
  }

  const CourseClick = async (event) => {
    event.color = '#CFE8A9';
    // setCourseChoised([...courseChoised, event]);

    function search(e, userId) {
      let newChoise = { course: e.id,
                        student: userId}

      // setStudentChoise([...studentChoise, newChoise])

      find : {
        for (let i in studentChoise) {
          if (userId === studentChoise[i].student && e.id === studentChoise[i].course) {
            alert('قبلا این درسو انتخاب کردی');
            break find;
          }
        }
          fetch('http://127.0.0.1:8000/api/choise/', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: JSON.stringify({
              'student': userId,
              'course': e.id,
            })
          }).then( 
            setStudentChoise([...studentChoise, newChoise])
            // fetchData()
          )
      }
    }

    search(event, user_id)

    // const data = await response.json();

    // if(response.status === 200) {
    //   console.log('Added')
    // } else {
    //   console.log('Sth went wrong');
    //   console.log(response)
    // }

  }

  const onMouseOverButton = (event) => {
    event.color = 'rgba(104, 104, 104, 0.85)';
    setTemporaryChoised([event]);
    setBoolean(true)
  }
  // console.log('temporaryChoised :', temporaryChoised);

  const onMouseOverDelete = (event) => {
    event.color = '#E64848';
    setDeleteChoised([event]);
  }

  const onMouseOutButton = (event) => {
    event.color = '#CFE8A9';
    setTemporaryChoised(temporaryChoised.filter((course) => course.id !== event.id))
    setBoolean(false)
  }

  const onMouseOutDelete = (event) => {
    event.color = '#CFE8A9';
    setDeleteChoised(deleteChoised.filter((course) => course.id !== event.id))
  }

  const deleteCourse = (event) => {

    // event.color = 'white';

    // setStudentChoise(studentChoise.filter((course) => course.id !== event.id))

    fetch(`http://127.0.0.1:8000/api/choise/${event.id}/` , {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access),
      },
    })
    .then(
      setDeleteChoised(deleteChoised.filter((course) => course.id !== event.id))
    )
    .then(fetchData)
    // .then(
    //   setStudentChoise(studentChoise.filter((course) => course.id !== event.id))
    // )

  }

  

  let collegeOptions = college.map( function (collegeItem) {
      return {value: collegeItem.id, label: collegeItem.college}
  })

  let chosenCourse = studentChoise.map( function (courseItem) {

    let value;
    let id;
    let label;
    let title;
    let college;
    let user;
    let wsId;
    let examDate;
    let professor;
    let group;
    let unit;
    let code;
    let capacity;
    let requirement;
    let synthesis;
    let ps;
    let day1;
    let time1;
    let start1;
    let day2;
    let time2;
    let start2;
    let edId;
    let date;
    let start;


    for(let i in course) {
      if(course[i].id == courseItem.course) {
        value = course[i].id
        id = courseItem.id
        label = course[i].title
        title = course[i].title
        college = course[i].college
        user = courseItem.student
        wsId = course[i].ws
        examDate = course[i].examDate
        professor = course[i].professor
        group = course[i].group
        unit = course[i].unit
        code = course[i].code
        capacity = course[i].capacity
        requirement = course[i].requirement
        synthesis = course[i].synthesis
        ps = course[i].ps
      }
    }

    for(let i in ws) {
      if(ws[i].id == wsId) {
        wsId = ws[i].id;
        day1 = ws[i].day1;
        time1 = ws[i].time1;
        start1 = ws[i].start1
        day2 = ws[i].day2;
        time2 = ws[i].time2;
        start2 = ws[i].start2;
      }
    }

    for(let i in ed) {
      if(ed[i].id == examDate) {
        edId = ed[i].id;
        date = ed[i].date;
        start = ed[i].start;
      }
    }

    let object = {
      value: value,
      id: id,
      label: label,
      title: title,
      college: college,
      user: user,
      ws: wsId,
      examDate: examDate,
      professor: professor,
      unit: unit,
      group: group,
      code: code,
      capacity: capacity,
      requirement: requirement,
      synthesis: synthesis,
      ps: ps,
      edId: edId,
      date: date,
      start: start,
      wsId: wsId,
      day1: day1,
      time1: time1,
      start1: start1,
      day2: day2,
      time2: time2,
      start2: start2,
      color: '#CFE8A9',
      choosed: true,
    }

    return object;

  })

  let courseOptions = choised.map( function (courseItem) {

    let wsId;
    let day1;
    let time1;
    let start1;
    let day2;
    let time2;
    let start2;
    let edId;
    let date;
    let start;

    for(let i in ws) {
      if(ws[i].id == courseItem.ws) {
        wsId = ws[i].id;
        day1 = ws[i].day1;
        time1 = ws[i].time1;
        start1 = ws[i].start1
        day2 = ws[i].day2;
        time2 = ws[i].time2;
        start2 = ws[i].start2;
      }
    }

    for(let i in ed) {
      if(ed[i].id == courseItem.examDate) {
        edId = ed[i].id;
        date = ed[i].date;
        start = ed[i].start;
      }
    }

    let object = {
      value: courseItem.id,
      id: courseItem.id,
      label: courseItem.title,
      title: courseItem.title,
      college: courseItem.college,
      user: courseItem.user,
      ws: courseItem.ws,
      examDate: courseItem.examDate,
      professor: courseItem.professor,
      group: courseItem.group,
      unit: courseItem.unit,
      code: courseItem.code,
      capacity: courseItem.capacity,
      requirements: courseItem.requirement,
      synthesis: courseItem.synthesis,
      ps: courseItem.ps,
      edId: edId,
      date: date,
      start: start,
      wsId: wsId,
      day1: day1,
      time1: time1,
      start1: start1,
      day2: day2,
      time2: time2,
      start2: start2,
      color: '',
      choosed: false,
    }

    return object
  })

  // console.log('withoutDuplicates :', withoutDuplicates);
  // console.log('courseChoised :', courseChoised);
  // console.log('courseOptions :', courseOptions)
  // console.log('chosenCourse :', chosenCourse);


  const customStyles = {
      option: (provided, state) => ({
        ...provided,
        fontSize: '12px',
      }),
    };

  const divStyle = {
    float:'right',
    lineHeight:'350%',
    marginRight: '0.5%',
    // marginLeft: '0.5%',
    border: '1px solid #373a47',
    borderRadius: '2px',
    width:'75%',
    height: '800px',
    textAlign: 'right'}

  return (
    <div className="App" onLoad={onload}>

      <div>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>

      <div style={{width: '15%', marginLeft: '5%', paddingTop: '1%'}}>
        <Select
            options={collegeOptions}
            onChange={collegeClick}
            placeholder={'دانشکده'}
            styles={customStyles}
        />
      </div>

      <div className='table'>
        <Hours />
        <div style={divStyle}>  
            <Days />
            {/* {courseChoised.map(courseItem => <Square key={courseItem.id}
                                                     course={courseItem}
                                                     backgroundColor={courseItem.color}
                                                     onMouseOverFa={() => onMouseOverDelete(courseItem)}
                                                     onClickFa={() => deleteCourse(courseItem)}
                                                     onMouseOutFa={() => onMouseOutDelete(courseItem)}/>)} */}
            
            {chosenCourse.map(courseItem => courseItem.user === user_id ? <Square key={courseItem.id}
                                                    course={courseItem}
                                                    backgroundColor={courseItem.color}
                                                    onMouseOverFa={() => onMouseOverDelete(courseItem)}
                                                    onClickFa={() => deleteCourse(courseItem)}
                                                    onMouseOutFa={() => onMouseOutDelete(courseItem)}/> : '')}
            
            {temporaryChoised.map(courseItem => <Square key={courseItem.id}
                                                        course={courseItem}
                                                        backgroundColor={courseItem.color}
                                                />)}

            {deleteChoised.map(courseItem => <Square key={courseItem.id}
                                                     course={courseItem}
                                                     backgroundColor={courseItem.color}
                                                     onMouseOverFa={() => onMouseOverDelete(courseItem)}
                                                     onClickFa={() => deleteCourse(courseItem)}
                                                     onMouseOutFa={() => onMouseOutDelete(courseItem)}/>)}
            <Border />
        </div>           
      </div>

      <div style={{width: '15%', marginLeft: '5%', paddingTop: '1%',}}>
        <div style={{overflow: 'scroll', height: '400px'}}>
          {courseOptions.map((courseItem) => 
            {if(courseItem.id !== null) {
              return <Button 
                          key={courseItem.id}
                          text={courseItem.title}
                          color={'#FFFDE3'}
                          value={courseItem} 
                          onClick={() => CourseClick(courseItem)}
                          onMouseOver={() => onMouseOverButton(courseItem)}
                          onMouseOut={() => onMouseOutButton(courseItem)}
                        />
          }})}
        </div>

        <br></br>

        <div style={{backgroundColor: 'rgba(104, 104, 104, 1)', borderRadius: '7px'}}>
          {temporaryChoised.map((courseItem) => <Additional key={courseItem.id}
                                                            course={courseItem}
                                                            boolean={boolean}/>)}
        </div>

        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        {/* <br></br><br></br> */}
        
        <p>
          {courseChoised.length > 0  ? ':کلاس های انتخاب شده' : ''}
        </p>
        
        <div style={{overflow: 'scroll', height: '200px'}}>
          {chosenCourse.map((courseItem) => courseItem.user === user_id ?
            <Button key={courseItem.id}
              text={courseItem.title}
              onClick={() => deleteCourse(courseItem)}
              onMouseOver={() => onMouseOverDelete(courseItem)}
              onMouseOut={() => onMouseOutDelete(courseItem)}
              color={'#E64848'}
            />
          : '')}

          {/* {courseChoised.map((courseItem) => 
            <Button key={courseItem.id}
              text={courseItem.title}
              onClick={() => deleteCourse(courseItem)}
              onMouseOver={() => onMouseOverDelete(courseItem)}
              onMouseOut={() => onMouseOutDelete(courseItem)}
              color={'#E64848'}
            />
          )} */}
        </div>
      </div>

    </div>
  );
}

export default HomePage