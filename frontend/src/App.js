import './App.css';
import Test from './components/test'
import {useState, useEffect} from "react";
import axios from "axios";
import React, {component, CSSProperties, FunctionComponent} from 'react'
import table from "./components/table";
import College from "./components/college";
import Course from "./components/course";
import Courses from "./components/courses";
import Sidebar from "./components/Sidebar";
import 'react-hover'

import Select, {
  components,
  MultiValueGenericProps,
  MultiValueProps,
  OnChangeValue,
  Props,
} from 'react-select';

import {
  SortableContainer,
  SortableContainerProps,
  SortableElement,
  SortEndHandler,
  SortableHandle,
} from 'react-sortable-hoc';

import { CSSObject } from '@emotion/serialize';
import { colourOptions, ColourOption } from './components/data';
import makeAnimated from 'react-select/animated';
import chroma from 'chroma-js';
import Customtable from "./components/table";

function App() {

  const animatedComponents = makeAnimated();

  const initialCollege = [
      {
          value: '',
          label: '',
      }
  ]

  const initialChoised = [
      {
        id: '',
        course: '',
      }
  ]

    const initialCourse = [
      {
        id: '',
        user: '',
        college: '',
        ws: '',
        examDate: '',
        title: '',
        professor: '',
        group: '',
        unit: '',
        code: '',
        capacity: '',
        requirement: '',
        synthesis: '',
        ps: '',
      }
  ]

  const intialEd = [
    {
      id: '',
      date: '',
      start: '',
    }
  ]

  const intialWs = [
    {
      id: '',
      day1: '',
      start1: '',
      time1: '',
      day2: '',
      start2: '',
      time2: '',
    }
  ]

  const [college, setCollege] = useState(initialCollege)
  const [ws, setWs] = useState(intialWs)
  const [ed, setEd] = useState(intialEd)
  const [course, setCourse] = useState(initialCourse)
  const [choised, setChoised] = useState(initialChoised)
  const [courseChoised, setCourseChoised] = useState(initialCourse)
  const [isShown, setIsShown] = useState(false)
  let choosedCollege = []
  let choosedCourse

  const onload = (e) => {
      e.preventDefault()
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
      setCourseChoised(event);
  }

  // console.log('courseChoised :', courseChoised);

  let collegeOptions = college.map( function (collegeItem) {
      return {value: collegeItem.id, label: collegeItem.college}
  })

  let object1;
  let object2;
  let object3;
  let object4;
  let courseOptions = choised.map( function (courseItem) {
    ws.map((wsItem) => wsItem.id == courseItem.ws ? object2 = {
      wsId: wsItem.id,
      day1: wsItem.day1,
      time1: wsItem.time1,
      start1: wsItem.time1,
      day2: wsItem.day2,
      time2: wsItem.time2,
      start2: wsItem.time2,
    } : '');

    ed.map((edItem) => edItem.id == courseItem.ed ? object3 = {
      edId: edItem.id,
      date: edItem.date,
      start: edItem.start,
    } : '');

    object1 = {
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
      ps: courseItem.ps
    }

    object4 = {
      ...object1,
      ...object2,
      ...object3,
    }

    return object4
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

      <Customtable courses={courseChoised}/>

      <div style={{width: '15%', marginLeft: '5%', paddingTop: '1%'}}>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          // defaultValue={[]}
          isMulti={true}
          options={courseOptions}
          placeholder={'دروس'}
          styles={customStyles}
          onChange={courseClick}
        />
      </div>

        {/* <Courses courses={courseChoised}/> */}

    </div>
  );
}

export default App;


