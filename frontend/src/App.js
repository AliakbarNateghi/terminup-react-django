import './App.css';
import Test from './components/test'
import {useState, useEffect} from "react";
import axios from "axios";
import React, {component, CSSProperties, FunctionComponent} from 'react'
import College from "./components/college";
import Course from "./components/course";
import Courses from "./components/courses";
import Sidebar from "./components/Sidebar";
import 'react-hover'
import Button from './components/buttons';
import Select from 'react-select';
import Customtable from "./components/table";

function App() {

  const [college, setCollege] = useState([])
  const [ws, setWs] = useState([])
  const [ed, setEd] = useState([])
  const [course, setCourse] = useState([])
  const [choised, setChoised] = useState([])
  const [courseChoised, setCourseChoised] = useState([])
  const [temporaryChoised, setTemporaryChoised] = useState([])
  const [deleteChoised, setDeleteChoised] = useState([])

  let choosedCollege = []

  const onload = (e) => {
      e.preventDefault();
  }

  useEffect(() => {
      const fetchData = async () => {
          try {
              const collegeResult = await axios.get('http://127.0.0.1:8000/api/college-list/');
              setCollege(collegeResult.data);
              const courseResult = await axios.get('http://127.0.0.1:8000/api/course-list/');
              setCourse(courseResult.data);
              const wsResult = await axios.get('http://127.0.0.1:8000/api/ws-list/');
              setWs(wsResult.data);
              const edResult = await axios.get('http://127.0.0.1:8000/api/ed-list/');
              setEd(edResult.data);
          } catch (err) {
              console.log(err);
          }
      };
      fetchData();
  }, []);
  // console.log('college :', college);
  // console.log('course :', course);
  // console.log('ws :', ws);
  // console.log('ed :', ed);

  const collegeClick = (event) => {
    choosedCollege = [];
    course.map(courseItem => event.value === courseItem.college ? choosedCollege.push(courseItem) : 'No founded course to show!')
    setChoised(choosedCollege)
  }

  const courseClick = (event) => {
    event.color = 'lightgreen'
    setCourseChoised([...courseChoised, event]); 
  }

  const onMouseOverButton = (event) => {
    event.color = 'gray'
    setTemporaryChoised([...temporaryChoised, event]);
  }

  const onMouseOverDelete = (event) => {
    event.color = 'red'
    setDeleteChoised([...deleteChoised, event]);
  }

  const onMouseOutButton = (event) => {
    event.color = 'lightgreen'
    setTemporaryChoised(temporaryChoised.filter((course) => course.id !== event.id))
  }

  const onMouseOutDelete = (event) => {
    event.color = 'lightgreen'
    setDeleteChoised(deleteChoised.filter((course) => course.id !== event.id))
  }

  const deleteCourse = (event) => {
    event.color = 'lightgreen'
    setCourseChoised(courseChoised.filter((course) => course.id !== event.id))
  }

  const onMouseOverLabel = (event) => {

  }

  // console.log('courseChoised :', courseChoised);

  let collegeOptions = college.map( function (collegeItem) {
      return {value: collegeItem.id, label: collegeItem.college}
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
      if(ed[i].id == courseItem.ed) {
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
      requirements: courseItem.requirements,
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

  const customStyles = {
      option: (provided, state) => ({
        ...provided,
        fontSize: '12px',
      }),
    };

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

      <Customtable courses={courseChoised} temporaryCourses={temporaryChoised} deleteCourse={deleteChoised}/>

      <div style={{width: '15%', marginLeft: '5%', paddingTop: '1%'}}>
        <div className='courses'>
          {courseOptions.map((courseItem) => 
            {if(courseItem.id !== '') {
              return <Button key={courseItem.id}
                        text={courseItem.title}
                        onClick={() => courseClick(courseItem)}
                        color={'steelblue'} 
                        onMouseOver={() => onMouseOverButton(courseItem)}
                        onMouseOut={() => onMouseOutButton(courseItem)}
                      />
          }})}
        </div>

        <br></br>

        <div>
          <p>
            :کلاس های انتخاب شده
          </p>
        </div>

        <div>
          {courseChoised.map((courseItem) => 
            <Button key={courseItem.id}
              text={courseItem.title}
              onClick={() => deleteCourse(courseItem)}
              onMouseOver={() => onMouseOverDelete(courseItem)}
              onMouseOut={() => onMouseOutDelete(courseItem)}
              color={'red'}
            />
          )}
        </div>
      </div>

    </div>
  );
}

export default App;


