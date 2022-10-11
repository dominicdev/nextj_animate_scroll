import styled from 'styled-components';

// BreakoutBox, CourseStyle, CourseText, CourseHolder, LeftBox, RightBox, WhatYoullLearn, LearnLists, LeftList, RightList, TopicsCovered, 
// TechWeTeach, FrameworkLogosStyle, StandardInfoBox, Certificate, TimeToComplete, TrainingLevel

export const BreakoutBox = styled.div`
    
    padding: 2rem 2rem;
    border: 2px solid black;
    border-radius: 3rem;
    h3 {
        color: red;
        font-weight: bold;
        padding: 1rem 0rem 0rem 0rem;
        font-family: 'Lato', sans-serif;
        /* font-weight: 400; */
    }

    p {
        color: gray;
        padding: 1rem 0rem 0rem 0rem;
        line-height: 1.5rem;
        text-align: justify;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }
    h1 {
        padding: 2rem 0rem;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }

`

export const CourseStyle = styled.div`
/* background: lightseagreen; */
/* width: 90%; */
/* margin: auto; */

.day-challenges{
        padding: 1rem 0rem 0rem 2rem;
        text-decoration: none;
        list-style: none;
        font-weight: 600;
        li {
            color: gray;
            font-size: 1.2rem;
            padding: 0.5rem 0rem 0rem 0.5rem;
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            
        }
    }
`
export const CourseText=styled.div`
    /* background: lightpink; */
    p {
        color: gray;
        padding: 1rem 0rem 0rem 1rem;
        /* line-height: 1.5rem; */
        text-align: justify;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }
    h1 {
        padding: 2rem 0rem;
    }
    h3 {
        font-size: 1.5rem;
        color: #373a3c;
        padding: 1.5rem 0rem 0rem 0rem;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }
    h2 {
        font-size: 2rem;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        padding: 2rem 0rem 0rem 0rem;
    }

    @media (max-width: 768px) {

    }

    @media (max-width: 414px) {
        p {
            color: black;
            padding: 1rem 1rem 0rem 1rem;
            line-height: 1.5rem;
            text-align: justify;
            font-family: 'Lato', sans-serif;
            font-weight: 300;
        }
        h1 {
            padding: 2rem 0rem;
        }
        h3 {
            font-size: 1.5rem;
            color: #373a3c;
            padding: 1.5rem 1rem 0rem 1rem;
            font-family: 'Lato', sans-serif;
            font-weight: 400;
        }
        h2 {
            font-size: 2rem;
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            padding: 2rem 0rem 0rem 0rem;
        }
    }
`



export const CourseHolder=styled.div`
    width: 90%;
    margin: auto;
    /* border: 3px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    /* align-items: normal; */
`

export const LeftBox=styled.div`
    /* background: green; */
    /* min-height: 20vh; */
    flex: 5 1 40rem;
    order: 1;
    padding-bottom: 2rem;
`

export const RightBox=styled.div`
    /* background: lightgreen; */
    margin: 2rem;
    min-height: 10vh;
    max-width: 40vw;
    /* max-height: 70vh; */

    flex: 1 1 20rem;
    order: 2;
    @media (max-width: 768px) {
        max-width: 80vw;
    }

    @media (max-width: 411px) {
        max-width: 80vw;
    }

`

export const WhatYoullLearn=styled.div`
    h2 {
        font-size: 2rem;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        padding: 2rem 0rem 0rem 0rem;
    }
`
export const LearnLists=styled.div`
    display: flex;
    justify-content: space-evenly;

`


export const LeftList=styled.div`
    display: flex;
    ul {
        padding: 1rem 2rem;
        list-style: none;
        list-style-position: inside;
    }

    ul li {
        padding: 1rem 1rem;
        font-size: 1.2rem;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }

    ul li:before {
    content: '✓';
    }
`

export const RightList=styled.div`
    display: flex;
    margin-left: -5rem;
    ul {
        padding: 1rem 2rem;
        list-style: none;
        list-style-position: inside;
    }

    ul li {
        padding: 1rem 2rem;
        font-size: 1.2rem;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }

    ul li:before {
    content: '✓';
    }
`


export const TopicsCovered=styled.div`
    ul {
        padding: 1rem 0rem 0rem 3rem;
        margin: 1rem 1rem 0rem 1rem;
        li {
            color: gray;
            font-size: 1.5rem;
            line-height: 1.6rem;
            padding: 0.5rem 0rem 0rem 0rem;
        }
    }
`

// const PreviousParticipants=styled.div`

//     margin: 1.5rem 0rem 0rem 0.5rem;
//     h5{
//         font-size: 1rem;
//     }
// `

export const TechWeTeach= styled.div`
    margin: 1.5rem 0rem 0rem 0.5rem;
    h5{
        font-size: 1rem;
    }
    @media (max-width: 768px) {

    }

    @media (max-width: 414px) {
        margin: 1rem 0rem 1rem 0rem;
    }
`

export const FrameworkLogosStyle = styled.div`
    /* background: lightgoldenrodyellow; */
    margin: 2rem 1rem 1rem 0rem;
    display: flex;
    justify-content: flex-start;
    height: 10vh;
    width: auto;
    .tensorflow-img{
        margin: 0rem 0rem;
        width: auto;
        height: 100%;
        /* background: lightcoral; */
    }
    .pytorch-img{
        /* background: lightcyan; */
        width: auto;
        height: 100%;
        margin-left: 0.5rem;
    }
    .python-img{
        margin-left: 0.5rem;
        width: auto;
        height: 100%;
    }

    @media (max-width: 768px) {
        /* background: lightsalmon; */
        margin: 0rem 0rem 0rem 0rem;
        display: flex;
        justify-content: flex-start;
        height: 10vh;
        width: 650px;
        .tensorflow-img{
            margin: 0rem 3rem;
            /* background: lightcoral; */
            width: auto;
            height: 50%;
        }
        .pytorch-img{
            /* background: lightcyan; */
            width: auto;
            height: 50%;
            /* margin-left: -1.5rem; */
        }
        .python-img{
            margin-left: 0.5rem;
            width: auto;
            height: 50%;
        }

    }

    @media (max-width: 414px) {
        display: flex;
        justify-content: flex-start;
        height: 10vh;
        width: 100%;
        margin: 0rem 0rem 0rem 0rem;
        .tensorflow-img{
            margin: 0rem 0rem;
            /* background: lightcoral; */
            width: auto;
            height: 50%;
        }
        .pytorch-img{
            /* background: lightcyan; */
            width: auto;
            height: 50%;
            /* margin-left: -1.5rem; */
        }
        .python-img{
            margin-left: 0.5rem;
            width: auto;
            height: 50%;
        }
    }

`

export const StandardInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 50vh;
    margin: 1rem 1rem 0rem 1rem;
    /* background: lightsteelblue; */
    h3 {
        color: red;
        font-weight: bold;
        font-size: 1.5rem;
        padding: 1rem 0rem 0.5rem 0rem;
        font-family: 'Lato', sans-serif;
        /* font-weight: 400; */
    }

    p {
        color: gray;
        padding: 1rem 0rem 0rem 0rem;
        line-height: 1.5rem;
        text-align: justify;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }

    @media (max-width: 768px) {
        /* background: lightseagreen; */
        height: 50vh;
        margin: 1rem 1rem 0rem 1rem;
        width: 600px;
        p {
            color: gray;
            padding: 1rem 0rem 0rem 0rem;
            line-height: 2.0rem;
            text-align: justify;
            font-family: 'Lato', sans-serif;
            font-weight: 400;
        }
    }

    @media (max-width: 414px) {
        height: 50vh;
        margin: 0rem 0rem 0rem 0rem;
        width: auto;

    }
`

export const Certificate = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 10vh;
    margin: 1rem 1rem 0rem 1rem;
    /* background: lightsalmon; */
    align-items: center;

    img {
        height: 40px;
        width: auto;
    }

    .cert-img {
        flex: 1;
        height: 30px;
        width: auto;
        img{
            height: 30px;
            width: auto;
            filter: invert(14%) sepia(96%) saturate(4387%) hue-rotate(9deg) brightness(99%) contrast(89%);
        }
    }

    .cert-text{
        flex: 4;
        /* height: 30px; */
        /* width: auto; */
        /* background:lightcyan; */
        /* margin: -3rem; */
        h3 {
            
        }
        p {
            color: gray;
            padding: 0rem 0rem 0rem 0rem;
            line-height: 1.5rem;
            text-align: left;
            font-family: 'Lato', sans-serif;
            font-weight: 300;
        }
    }

    @media (max-width: 768px) {

    }

    @media (max-width: 414px) {
        p {
            color: gray;
            padding: 0rem 1rem 0rem 0rem;
            line-height: 1rem;
            text-align: left;
            font-family: 'Lato', sans-serif;
            font-weight: 300;
        }
    }
`

export const TimeToComplete = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 10vh;
    margin: 1rem 1rem 0rem 1rem;
    /* background: lightskyblue; */
    align-items: flex-start;

    img {
        
    }
    .time-to-complete-img {
        flex: 1;
        height: 30px;
        width: auto;
        img{
            height: 30px;
            width: auto;
            filter: invert(14%) sepia(96%) saturate(4387%) hue-rotate(9deg) brightness(99%) contrast(89%);
        }
    }

    .time-to-complete-text {
        flex: 4;
        /* height: 30px; */
        /* width: auto; */
        /* margin: -3rem; */
        h3 {
            
        }
        p {
            color: gray;
            padding: 0rem 0rem 0rem 0rem;
            line-height: 1.5rem;
            text-align: left;
            font-family: 'Lato', sans-serif;
            font-weight: 300;
        }

    }
    @media (max-width: 768px) {

    }

    @media (max-width: 414px) {
        margin: 0rem;
    }
`

export const TrainingLevel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 10vh;
    margin: 1rem 1rem 0rem 1rem;
    /* background: lightseagreen; */
    align-items: center;

    /* img {
        height: 40px;
        width: auto;
    } */

    .training-level-img {
        flex: 1;
        height: 30px;
        width: auto;
        img{
            height: 30px;
            width: auto;
            filter: invert(14%) sepia(96%) saturate(4387%) hue-rotate(9deg) brightness(99%) contrast(89%);
        }
    }

    .training-level-text{
        flex: 4;
        /* height: 30px; */
        /* width: auto; */
        /* margin: -3rem; */
        h3 {
            
        }
        p {
            color: gray;
            padding: 0rem 0rem 0rem 0rem;
            line-height: 1.5rem;
            text-align: left;
            font-family: 'Lato', sans-serif;
            font-weight: 300;
        }
    }
    @media (max-width: 768px) {
        .training-level-text{
            flex: 4;
            /* margin: -3rem; */
        }
    }

    @media (max-width: 414px) {
        .training-level-text{
            flex: 4;
            margin: 0rem;
            /* margin: -3rem; */
        }
        p {
            color: gray;
            padding: 0rem 0rem 0rem 0rem;
            line-height: 1rem;
            text-align: left;
            font-family: 'Lato', sans-serif;
            font-weight: 300;
        }
    }
`